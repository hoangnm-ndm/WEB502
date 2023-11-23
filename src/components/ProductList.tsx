import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductForm from "./ProductForm";

type Product = {
  name: string;
  price: number;
  desc: string;
  _id?: string;
};

const ProductList = () => {
  const [products, setProducts] = React.useState<Product[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((response: any) => {
        console.log(response.data.data);
        setProducts(response.data.data);
      })
      .catch((error: any) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const deleteProduct = (_id: string) => {
    axios
      .delete(`http://localhost:8000/api/products/${_id}`)
      .then(() => {
        const updatedProducts = products.filter(
          (product) => product._id !== _id
        );
        setProducts(updatedProducts);
      })
      .catch((error: any) => {
        console.error("Error deleting product:", error);
      });
  };

  const updateProduct = (updatedProduct: Product) => {
    axios
      .put(
        `http://localhost:8000/api/products/${updatedProduct._id}`,
        updatedProduct
      )
      .then((response: any) => {
        const updatedProducts = products.map((product) =>
          product._id === updatedProduct._id ? response.data.data : product
        );
        setProducts(updatedProducts);
      })
      .catch((error: any) => {
        console.error("Error updating product:", error);
      });
  };

  const addProduct = (newProduct: Product) => {
    axios
      .post("http://localhost:8000/api/products", newProduct)
      .then((response: any) => {
        setProducts([...products, response.data.data]);
      })
      .catch((error: any) => {
        console.error("Error adding product:", error);
      });
  };

  const closeForm = () => {
    setIsFormOpen(false);
    setSelectedProduct(null);
  };

  const openForm = (product: Product | null = null) => {
    setSelectedProduct(product);
    setIsFormOpen(true);
  };

  const submitForm = (product: Product) => {
    if (selectedProduct) {
      updateProduct(product);
    } else {
      addProduct(product);
    }
    closeForm();
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          {isFormOpen && (
            <ProductForm
              onClose={closeForm}
              onSubmit={submitForm}
              initialProduct={selectedProduct}
            />
          )}
        </div>
        <div className="col">
          <h1>Product List</h1>
          <button onClick={() => openForm()}>Add Product</button>
          <ul>
            {products.map((product) => (
              <li key={product._id}>
                <h3>{product.name}</h3>
                <p>{product.desc}</p>
                <p>{product.price}</p>
                <p>
                  <button
                    onClick={() => product._id && deleteProduct(product._id)}
                  >
                    Delete
                  </button>
                  <button onClick={() => openForm(product)}>Update</button>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
