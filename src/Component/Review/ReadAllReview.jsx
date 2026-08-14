import React from "react";
import "../forms.css";

const ReadAllReview = () => {
  const reviews = [
    {
      product: "laptop",
      user: "nitan",
      description:
        "Excellent performance and sleek design. Very easy to use for daily work.",
      rating: "5/5",
    },
    {
      product: "mobile",
      user: "shubham",
      description:
        "Battery life is good and the camera quality is impressive for the price.",
      rating: "4/5",
    },
    {
      product: "tablet",
      user: "ram",
      description:
        "Great for reading and browsing. Lightweight and comfortable to carry.",
      rating: "4.5/5",
    },
  ];

  return (
    <div className="data-page">
      <div className="data-header">
        <span className="section-kicker">Feedback</span>
        <h1>All Reviews</h1>
      </div>

      <div className="data-grid">
        {reviews.map((item, i) => (
          <div className="data-card review-card" key={i}>
            <div className="data-card-header">
              <h2 className="data-title">{item.product}</h2>
              <span className="status-badge good">{item.rating}</span>
            </div>

            <div className="data-list">
              <div className="data-row">
                <strong>User</strong>
                <span>{item.user}</span>
              </div>
              <div className="data-row">
                <strong>Product</strong>
                <span>{item.product}</span>
              </div>
            </div>

            <div className="review-description">{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReadAllReview;
