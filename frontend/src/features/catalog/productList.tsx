import { Container, Grid } from "@mui/material";
import { Product } from "../../app/models/product";
import ProductCard from "./productCard";

interface Props {
    products: Product[];
}

export default function ProductList({ products }: Props) {
    return (
        <Container>
            <Grid container spacing={4}>
                {products.map((product) => (
                    <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                        <ProductCard product={product} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}