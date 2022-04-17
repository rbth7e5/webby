import {useParams} from "react-router-dom";
import useProduct from "./hooks/useProduct";
import Alert from "@mui/material/Alert";
import Container from "@mui/material/Container";
import Snackbar from "@mui/material/Snackbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {getAmount, getStoreId, postData, renderPrice} from "./utils";
import {CurrencyContext} from "./App";
import {useCallback, useContext, useState} from "react";

export default function ProductDetailPage() {
  const [message, setMessage] = useState<string | null>(null);
  const urlParams = useParams();
  const product = useProduct(urlParams.id ? +urlParams.id : undefined)
  const currency = useContext(CurrencyContext);
  const onCheckout = useCallback(async () => {
    if (product === undefined) {
      return;
    }
    try {
      const { success, data, message } = await postData('https://api.uat.ablr.com/api/v2/public/merchant/checkout/', {
        store_id: getStoreId(currency),
        amount: getAmount(currency, product.price),
      })
      if (success) {
        const { checkout_url } = data;
        window.location.href = checkout_url;
      } else {
        if (message) {
          setMessage(message);
        } else {
          setMessage('Failed to checkout. Please try again later.')
        }
      }
    } catch (error: any) {
      setMessage(error.message);
    }
  }, [product, currency])
  if (product) {
    return (
      <Container style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <div>
          <Typography gutterBottom component="div" variant="h4">{product.name}</Typography>
          <Typography gutterBottom>{renderPrice(product.price, currency)}</Typography>
          <Typography gutterBottom>{product.description}</Typography>
          <Button onClick={onCheckout}>Checkout with Ablr</Button>
        </div>
        <img height={640} alt={product.name} src={product.image}/>
        <Snackbar open={Boolean(message)} autoHideDuration={2000} onClose={() => setMessage(null)}>
          <Alert onClose={() => setMessage(null)} severity="error">
            {message}
          </Alert>
        </Snackbar>
      </Container>
    )
  }
  return null
}