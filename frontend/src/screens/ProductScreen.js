import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, Card, Row, Col, Image, Button } from "react-bootstrap";
import products from "../products";
const ProductScreen = ({ match }) => {
  const product = products.find((prod) => prod._id === match.params.id);
  return (
    <>
      <Link to="/" className="btn btn-light my-3">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>{product.name}</h2>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <h1>this is the product screen</h1>
    </>
  );
};

export default ProductScreen;
