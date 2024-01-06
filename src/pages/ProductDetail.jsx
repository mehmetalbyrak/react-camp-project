import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card } from "semantic-ui-react";

export default function ProductDetail() {
  let { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        if (!response.ok) {
          throw new Error("Product is not found!");
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error Occured: ", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Product is loading...</div>;
  }

  return (
    <Card>
      <Card.Content>
        <Card.Header>{product.title}</Card.Header>
        <Card.Meta>ID: {product.id}</Card.Meta>
        <Card.Description>
          {" "}
          <strong> Description: </strong> {product.description}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <p>Price: {product.price} $ </p>
        {}
      </Card.Content>
    </Card>
  );
}
