import { Product } from "../../app/models/product";
import Button from '@mui/material/Button';
import ProductList from "./productList";
import { useState, useEffect } from "react";
import agent from "../../app/api/agent";
import LoadingComponent from "../../app/layout/LoadingComponent";

export default function Catalog() {

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    agent.Catalog.list()
    .then(products => setProducts(products))
    .catch(err => console.log(err))
    .finally(() => setLoading(false));
  }, []);

  if(loading) return <LoadingComponent message="Loading..."/>

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
      <Button variant="contained" sx={{ ml: 2 }} onClick={addProduct}>Add Product</Button>
    </>
  );
}