import { Button, Form } from "react-bootstrap";

type Props = {};

const Login = (props: Props) => {
  return (
    <>
      <div className="container">
        <Form className="formSubmit">
          <h2 className="formTitle">Login</h2>

          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Your Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your email..." />
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Your password</Form.Label>
            <Form.Control type="password" placeholder="Enter your password" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Button type="submit" variant="btn btn-primary btnSubmit">
              Login
            </Button>
          </Form.Group>
        </Form>
      </div>
    </>
  );
};

export default Login;
