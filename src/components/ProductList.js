import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";

const ProductList = () => {
  const [products, setProducts] = React.useState([]);
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const handleClick = () => {
    setCount(count + 1);
  };

  // useEffect(callback, [dependencies])

  useEffect(() => {
    document.title = text;
  });
  const actor = "products";
  // side effect
  useEffect(() => {
    fetch(`http://localhost:3001/${actor}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [actor]);

  /**
   * 1. useEffect(callback) -> ít dùng nhất vì callback luôn được gọi lại khi component re-render
   * 2. useEffect(callback, []) -> được gọi lại 1 lần duy nhất sau khi component mounted
   * 3. useEffect(callback, [dependencies]) -> được gọi lại khi dependencies thay đổi
   */

  return (
    <>
      <button onClick={handleClick}>Click Me</button>
      <h1>{count}</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <h1>{text}</h1>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.desc}</td>
                <td>
                  <Button>Edit</Button>
                  <Button variant="danger">Delete</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default ProductList;
