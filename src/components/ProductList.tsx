import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import axios from "axios";
import ProductForm from "./ProductForm";
import { Product } from "../interfaces/Product";
const api = "http://localhost:8000/api/products";

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isOpenForm, setIsOpenForm] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    axios
      .get(api)
      .then(({ data }) => {
        setProducts(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const openForm = (product: Product | null = null) => {
    setIsOpenForm(true);
    setSelectedProduct(product);
  };

  const closeFom = () => {
    setIsOpenForm(false);
    setSelectedProduct(null);
  };

  const updateProduct = (product: Product) => {
    setSelectedProduct(product);
    openForm(product);
  };

  const deleteProduct = (id: string) => {
    axios
      .delete(`${api}/${id}`) //locahost:8000/api/products/undefined
      .then(({ data }) => {
        // Cach 1: set lai state products
        const newProducts = products.filter((product) => product._id !== id);
        setProducts(newProducts);
        // Cach 2: fetch lai data tu server
        // axios
        //   .get(api)
        //   .then(({ data }) => {
        //     setProducts(data.data);
        //   })
        //   .catch((err) => {
        //     console.log(err);
        //   });
        alert(data.message);
      })
      .catch(({ data }) => {
        console.log(data);
      });
  };

  const addProduct = (product: Product) => {
    axios
      .post(api, product)
      .then(({ data }) => {
        console.log(data);
        setProducts((prevs) => [...prevs, data.data]);
        alert(data.message);
      })
      .catch(({ response }) => {
        console.log(response.data);
        alert(response.data.message);
      });
  };

  const handleSubmit = (product: Product) => {
    if (selectedProduct) {
      updateProduct(product);
    } else {
      addProduct(product);
    }
    closeFom();
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2> Product Form</h2>
            <Button onClick={() => openForm()}>
              {isOpenForm ? "Đóng" : "Mở form"}
            </Button>
            {isOpenForm && (
              <ProductForm
                onSubmit={handleSubmit}
                closeForm={closeFom}
                initProduct={selectedProduct}
              />
            )}
          </div>
          <div className="col-12">
            <h2>Product List</h2>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <td>ID</td>
                  <td>Name</td>
                  <td>Price</td>
                  <td>Description</td>
                  <td>Action</td>
                </tr>
              </thead>
              <tbody>
                {products &&
                  products.map((product) => (
                    <tr key={product._id}>
                      <td>{product._id}</td>
                      <td>{product.name}</td>
                      <td>{product.price}</td>
                      <td>{product.desc || "Đang cập nhật"}</td>
                      <td>
                        <Button
                          onClick={() => updateProduct(product)}
                          className="btn btn-warning"
                        >
                          Edit
                        </Button>{" "}
                        <Button
                          className="btn btn-danger"
                          onClick={() =>
                            product._id && deleteProduct(product._id)
                          }
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
