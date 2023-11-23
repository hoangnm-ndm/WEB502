import React from "react";
import { Button, Form } from "react-bootstrap";

type Props = {};

const ProductForm = (props: Props) => {
  return (
    <div>
      <h2>Product Form</h2>
      <Form>
        <Form.Group controlId="">
          <Form.Label>Product Name</Form.Label>
          <Form.Control type="text" placeholder="Enter product name" />
        </Form.Group>

        <Form.Group controlId="">
          <Form.Label>Product Price</Form.Label>
          <Form.Control type="number" placeholder="Enter product price" />
        </Form.Group>

        <Form.Group controlId="">
          <Form.Label>Product Description</Form.Label>
          <Form.Control type="text" placeholder="Enter product description" />
        </Form.Group>

        <Form.Group>
          <Button variant="primary">Submit</Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default ProductForm;
