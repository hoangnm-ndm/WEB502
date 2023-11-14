import { useEffect, useState } from "react";
import axios from "axios";
import ProductList from "./components/ProductList";
import ProductForm from "./components/ProductForm";

const App = () => {
  const [products, setProducts] = useState([]);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const fetchData = async () => {
    const { data } = await axios.get("http://localhost:3004/products");
    setProducts(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const deleteProduct = async ({ id }) => {
    try {
      await axios.delete(`http://localhost:3004/products/${id}`);
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  const addProduct = async (product) => {
    try {
      const { data } = await axios.post(
        "http://localhost:3004/products",
        product
      );
      setProducts([...products, data]);
    } catch (error) {
      console.log(error);
    }
  };

  const updateProduct = async (product) => {
    try {
      const { data } = await axios.put(
        `http://localhost:3004/products/${product.id}`,
        product
      );
      if (data) {
        setSelectedProduct(null);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h1>Admin page</h1>
      <ProductList
        products={products}
        onSelect={(product) => setSelectedProduct(product)}
        onDelete={deleteProduct}
      />
      <ProductForm
        product={selectedProduct}
        onSave={selectedProduct ? updateProduct : addProduct}
      />
    </>
  );
};
export default App;
