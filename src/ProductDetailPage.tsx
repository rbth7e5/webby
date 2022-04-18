import { useParams } from "react-router-dom";
import useProduct from "./hooks/useProduct";
import Alert, { AlertColor } from "@mui/material/Alert";
import Container from "@mui/material/Container";
import Snackbar from "@mui/material/Snackbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { checkout, renderPrice } from "./utils";
import { CurrencyContext } from "./App";
import { useCallback, useContext, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

export default function ProductDetailPage() {
  const [message, setMessage] = useState<{
    message: string;
    severity: AlertColor;
  } | null>(null);
  const urlParams = useParams();
  const product = useProduct(urlParams.id ? +urlParams.id : undefined);
  const [loading, setLoading] = useState(false);
  const currency = useContext(CurrencyContext);
  const onCheckout = useCallback(async () => {
    setLoading(true);
    const { message, url } = await checkout(product, currency);
    if (url) {
      setMessage({ message, severity: "success" });
      window.location.href = url;
    } else {
      setMessage({ message, severity: "error" });
    }
    setLoading(false);
  }, [product, currency]);
  if (product) {
    return (
      <Container
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 560px))",
          alignItems: "center",
        }}
      >
        <div>
          <Typography gutterBottom component="div" variant="h4">
            {product.name}
          </Typography>
          <Typography gutterBottom>
            {renderPrice(product.price, currency)}
          </Typography>
          <Typography gutterBottom>{product.description}</Typography>
          <Button onClick={onCheckout}>Checkout with Ablr</Button>
        </div>
        <img height={640} alt={product.name} src={product.image} />
        {message && (
          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            open={Boolean(message)}
            autoHideDuration={2000}
            onClose={() => setMessage(null)}
          >
            <Alert onClose={() => setMessage(null)} severity={message.severity}>
              {message.message}
            </Alert>
          </Snackbar>
        )}
        <Backdrop open={loading}>
          <CircularProgress color="inherit" />
        </Backdrop>
      </Container>
    );
  }
  return null;
}
