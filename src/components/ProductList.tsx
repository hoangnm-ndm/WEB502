import React from "react";

type Product = {
  name: string;
  price: number;
  desc: string;
  _id?: string;
};

const ProductList = () => {
  const [products, setProducts] = React.useState<Product[]>([]);
  React.useEffect(() => {
    fetch("http://localhost:8000/api/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        setProducts(data.data);
      });
  }, []);

  const deleteProduct = (_id: string) => {
    console.log(_id);
  };

  const updateProduct = (product: Product) => {
    console.log(product._id);
  };
  return (
    <>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <h3>{product.name}</h3>
            <p>{product.desc}</p>
            <p>{product.price}</p>
            <p>
              <button onClick={() => product._id && deleteProduct(product._id)}>
                Delete
              </button>
              <button onClick={() => updateProduct(product)}>Update</button>
            </p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductList;
