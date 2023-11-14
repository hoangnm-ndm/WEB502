import React from "react";

const ProductList = ({ products, onSelect, onDelete }) => {
  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name}
            <button onClick={() => onSelect(product)}>Edit</button>
            <button onClick={() => onDelete(product)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
