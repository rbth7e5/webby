import {useParams} from "react-router-dom";
import useProduct from "./hooks/useProduct";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function ProductDetailPage() {
  const urlParams = useParams();
  const product = useProduct(urlParams.id ? +urlParams.id : undefined)
  if (product) {
    return (
      <Container>
        <Typography>{product.name}</Typography>

      </Container>
    )
  }
  return null
}