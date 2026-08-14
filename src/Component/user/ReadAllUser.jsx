import React from "react";
import "../forms.css";

const ReadAllUser = () => {
  const users = [
    {
      id: "1",
      name: "nitan",
      email: "yYtTt@example.com",
      password: "12345",
      profileImage:
        "https://png.pngtree.com/png-clipart/20250609/original/pngtree-fresh-fruit-juices-splashing-in-glasses-png-image_21147687.png",
    },
    {
      id: "2",
      name: "ram",
      email: "ram@example.com",
      password: "12345",
      profileImage:
        "https://png.pngtree.com/png-clipart/20250609/original/pngtree-fresh-fruit-juices-splashing-in-glasses-png-image_21147687.png",
    },
    {
      id: "3",
      name: "roshan",
      email: "roshan@example.com",
      password: "12345",
      profileImage:
        "https://png.pngtree.com/png-clipart/20250609/original/pngtree-fresh-fruit-juices-splashing-in-glasses-png-image_21147687.png",
    },
    {
      id: "4",
      name: "hari",
      email: "hari@example.com",
      password: "12345",
      profileImage:
        "https://png.pngtree.com/png-clipart/20250609/original/pngtree-fresh-fruit-juices-splashing-in-glasses-png-image_21147687.png",
    },
  ];

  return (
    <div className="data-page">
      <div className="data-header">
        <span className="section-kicker">Members</span>
        <h1>All Users</h1>
      </div>

      <div className="data-grid">
        {users.map((item, i) => (
          <div className="data-card" key={i}>
            <div className="user-avatar-wrap">
              <img
                className="user-avatar"
                src={item.profileImage}
                alt={item.name}
              />
              <div
                className="data-card-header"
                style={{ marginBottom: 0, display: "block" }}
              >
                <h2 className="data-title">{item.name}</h2>
              </div>
            </div>

            <div className="data-list">
              <div className="data-row">
                <strong>Email</strong>
                <span>{item.email}</span>
              </div>
              <div className="data-row">
                <strong>Password</strong>
                <span>{item.password}</span>
              </div>
              <div className="data-row">
                <strong>Account</strong>
                <span className="status-badge neutral">Active</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReadAllUser;
