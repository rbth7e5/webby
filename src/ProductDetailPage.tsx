import {useParams} from "react-router-dom";
import useProduct from "./hooks/useProduct";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {renderPrice} from "./utils";
import {CurrencyContext} from "./App";
import {useContext} from "react";

export default function ProductDetailPage() {
  const urlParams = useParams();
  const product = useProduct(urlParams.id ? +urlParams.id : undefined)
  const currency = useContext(CurrencyContext);
  if (product) {
    return (
      <Container style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <div>
          <Typography gutterBottom component="div" variant="h4">{product.name}</Typography>
          <Typography gutterBottom>{renderPrice(product.price, currency)}</Typography>
          <Typography gutterBottom>{product.description}</Typography>
          <Button>Checkout with Ablr</Button>
        </div>
        <img height={640} alt={product.name} src={product.image}/>
      </Container>
    )
  }
  return null
}