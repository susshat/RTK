import React, { useState } from "react";
import "../forms.css";

const CreateProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [isDamage, setIsDamage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, price, quantity, isDamage);
  };

  return (
    <div className="form-page">
      <div className="form-card">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="form-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="price" className="form-label">
              Price
            </label>
            <input
              type="number"
              id="price"
              className="form-input"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="quantity" className="form-label">
              Quantity
            </label>
            <input
              type="number"
              id="quantity"
              className="form-input"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>

          <div className="checkbox-group">
            <label htmlFor="isDamage" className="form-label">
              Is Damage
            </label>
            <input
              type="checkbox"
              id="isDamage"
              className="form-checkbox"
              checked={isDamage}
              onChange={(e) => setIsDamage(e.target.checked)}
            />
          </div>

          <button className="form-submit" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
