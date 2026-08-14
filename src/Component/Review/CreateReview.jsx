import React, { useState } from "react";
import "../forms.css";

const CreateReview = () => {
  const [product, setProduct] = useState("1");
  const [user, setUser] = useState("1");
  const [description, setDescription] = useState("");

  const productOptions = [
    { label: "laptop", value: "1" },
    { label: "mobile", value: "2" },
  ];

  const userOptions = [
    { label: "nitan", value: "1" },
    { label: "shubham", value: "2" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(product, user, description);
  };

  return (
    <div className="form-page">
      <div className="form-card">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="product" className="form-label">
              Product
            </label>
            <select
              id="product"
              className="form-select"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
            >
              {productOptions.map((item, i) => (
                <option value={item.value} key={i}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="user" className="form-label">
              User
            </label>
            <select
              id="user"
              className="form-select"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            >
              {userOptions.map((item, i) => (
                <option value={item.value} key={i}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              id="description"
              className="form-textarea"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <button className="form-submit" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateReview;
