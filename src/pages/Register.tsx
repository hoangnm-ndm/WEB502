import { Button, Form } from "react-bootstrap";

type Props = {};

const Register = (props: Props) => {
  return (
    <>
      <div className="container">
        <Form className="formSubmit">
          <h2 className="formTitle">Register</h2>
          <Form.Group className="mb-3" controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter your username..." />
          </Form.Group>

          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Your Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your email..." />
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Your password</Form.Label>
            <Form.Control type="password" placeholder="Enter your password" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm password" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Button type="submit" variant="btn btn-primary btnSubmit">
              Register
            </Button>
          </Form.Group>
        </Form>
      </div>
    </>
  );
};

export default Register;
