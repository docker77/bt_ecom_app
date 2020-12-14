import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import products from "../products";
import Product from "../components/Product";

function HomeScreen() {
  return (
    <Container>
      <h1 className="py-3">Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default HomeScreen;
