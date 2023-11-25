import React, { useState, useEffect } from "react";

type ProductFormProps = {
  onClose: () => void;
  onSubmit: (product: Product) => void;
  initialProduct?: Product | null;
};

type Product = {
  name: string;
  price: number;
  desc: string;
  _id?: string;
};

const ProductForm: React.FC<ProductFormProps> = ({
  onClose,
  onSubmit,
  initialProduct,
}) => {
  const [product, setProduct] = useState<Product>(
    initialProduct || {
      name: "",
      price: 0,
      desc: "",
    }
  );

  useEffect(() => {
    if (initialProduct) {
      setProduct(initialProduct);
    }
  }, [initialProduct]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(product);
  };

  return (
    <div>
      <h2>{initialProduct ? "Edit Product" : "Add Product"}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Price:
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            name="desc"
            value={product.desc}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">{initialProduct ? "Update" : "Add"}</button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
