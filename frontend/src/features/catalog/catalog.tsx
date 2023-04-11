import { Product } from "../../app/models/product";
import Button from '@mui/material/Button';
import ProductList from "./productList";
import { useState, useEffect } from "react";

export default function Catalog() {

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
      fetch("http://localhost:5000/api/products").then(response => response.json())
      .then(data => setProducts(data));
    }, []);
  
    function addProduct() {
      setProducts(prevState => [...prevState, 
        { 
          id: prevState.length + 1,
          name: 'product' + (prevState.length + 1), 
          price: (prevState.length * 100) + Math.floor(Math.random() * 100),
          description: 'some description',
          pictureUrl: 'https://picsum.photos/200',
          type: 'the type of product' 
        }])
    }

    return (
        <>
            <ProductList products={products} />
            <Button variant="contained" sx={{ml: 2}} onClick={addProduct}>Add Product</Button>
        </>
    );
}