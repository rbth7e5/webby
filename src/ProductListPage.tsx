import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import useProducts from "./hooks/useProducts";
import {renderPrice} from "./utils";
import {Currency} from "./types";
import {useContext} from "react";
import {CurrencyContext} from "./App";
import CardActionArea from "@mui/material/CardActionArea";

export default function ProductListPage() {
 const products = useProducts();
 const currency = useContext<Currency>(CurrencyContext);
 return (
   <div style={{
     display: 'grid',
     gridTemplateColumns: 'auto auto auto auto',
     columnGap: 16,
     rowGap: 16
   }}>
    {products.map(product => (
      <Card>
        <CardActionArea style={{ height: '100%'}}>
          <CardMedia
            component="img"
            image={product.image}
            alt={product.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">{product.name}</Typography>
            <Typography>{renderPrice(product.price, currency)}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    ))}
   </div>
 )
}