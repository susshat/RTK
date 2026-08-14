import React from "react";
import "../forms.css";

const ReadAllProduct = () => {
  const products = [
    {
      id: "1",
      name: "laptop",
      price: "10000",
      quantity: "10",
      isDamage: false,
    },
    { id: "2", name: "mobile", price: "50000", quantity: "20", isDamage: true },
    {
      id: "3",
      name: "tablet",
      price: "100000",
      quantity: "10",
      isDamage: false,
    },
    { id: "4", name: "watch", price: "25000", quantity: "10", isDamage: false },
  ];

  return (
    <div className="data-page">
      <div className="data-header">
        <span className="section-kicker">Inventory</span>
        <h1>All Products</h1>
      </div>

      <div className="data-grid">
        {products.map((item, i) => (
          <div className="data-card" key={i}>
            <div className="data-card-header">
              <h2 className="data-title">{item.name}</h2>
              <span
                className={`status-badge ${item.isDamage ? "warning" : "good"}`}
              >
                {item.isDamage ? "Damaged" : "Healthy"}
              </span>
            </div>

            <div className="data-list">
              <div className="data-row">
                <strong>Price</strong>
                <span>Rs. {item.price}</span>
              </div>
              <div className="data-row">
                <strong>Quantity</strong>
                <span>{item.quantity}</span>
              </div>
              <div className="data-row">
                <strong>Status</strong>
                <span>{item.isDamage ? "Yes" : "No"}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReadAllProduct;
