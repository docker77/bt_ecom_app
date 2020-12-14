import React from "react";
import { Card, Button } from "react-bootstrap";

function Product({ product }) {
  var { _id, name, price, image, description } = product;

  return (
    <Card className="p-3 m-3 rounded">
      <a href={`/product/${_id}`}>
        <Card.Img variant="top" src={image} />
      </a>{" "}
      <Card.Body>
        <a href={`/product/${_id}`}>
          <Card.Title>
            <strong>{name}</strong>
          </Card.Title>
        </a>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">Buy it for ${price}</Button>
      </Card.Body>
    </Card>
  );
}

export default Product;
