import { Button, Table } from "semantic-ui-react";
import React, { useState, useEffect } from "react";
import ProductService from "../services/productService";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/actions/cartActions";
import { toast } from "react-toastify";

export default function ProductList() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // productService'ten tüm ürünleri almak için ProductService class
    ProductService.getAllProducts()
      .then((data) => {
        setProducts(data); // Ürünleri state'e kaydediyoruz
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success(`${product.title} added to cart as successfully!`);
  };

  return (
    // for semantic ui

    <div>
      <h1>Product List</h1>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Title</Table.HeaderCell>
            <Table.HeaderCell>Price</Table.HeaderCell>
            <Table.HeaderCell>Stock</Table.HeaderCell>
            <Table.HeaderCell>Description</Table.HeaderCell>
            <Table.HeaderCell>Category</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {products.map((product) => (
            <Table.Row key={product.id}>
              <Table.Cell>
                <Link to={`/products/${product.id}`}>{product.title}</Link>
              </Table.Cell>
              <Table.Cell>{product.price}</Table.Cell>
              <Table.Cell>{product.stock}</Table.Cell>
              <Table.Cell>{product.description}</Table.Cell>
              <Table.Cell>{product.category}</Table.Cell>
              <Table.Cell>
                <Button onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
