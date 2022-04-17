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
import Container from "@mui/material/Container";
import {Link} from "react-router-dom";

export default function ProductListPage() {
 const products = useProducts();
 const currency = useContext<Currency>(CurrencyContext);
 return (
   <Container>
     <div style={{
       display: 'grid',
       gridTemplateColumns: 'auto auto auto auto',
       columnGap: 16,
       rowGap: 16
     }}>
       {products.map(product => (
         <Card component={Link} to={`/product/${product.id}`} >
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
   </Container>
 )
}