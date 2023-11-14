import React, { useEffect } from "react";

const ProductForm = ({ product, onSave }) => {
  const initProduct = {
    name: "",
    price: "",
    desc: "",
  };
  const [formData, setFormData] = React.useState(initProduct);

  useEffect(() => {
    if (product) {
      setFormData(product);
    } else {
      setFormData(initProduct);
    }
  }, [product]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = (e) => {
    onSave({ ...product, ...formData });
    setFormData(initProduct);
  };

  return (
    <>
      <h2>Product Form</h2>
      <form>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        ></input>
        <label>Name: </label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleInputChange}
        ></input>
        <button type="submit" onClick={handleSave}>
          {product ? "Update" : "Save"}
        </button>
      </form>
    </>
  );
};

export default ProductForm;
