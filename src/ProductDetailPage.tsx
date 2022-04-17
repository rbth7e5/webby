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
      <Container>
        <Button>Checkout with Ablr</Button>
        <Typography>{product.name}</Typography>
        <Typography>{renderPrice(product.price, currency)}</Typography>
        <Typography>{product.description}</Typography>
        <img alt={product.name} src={product.image}/>
      </Container>
    )
  }
  return null
}