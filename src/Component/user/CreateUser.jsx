import React, { useState } from "react";
import "../forms.css";

const CreateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profileImage, setProfileImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password, profileImage);
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
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="profileImage" className="form-label">
              Profile Image
            </label>
            <input
              type="text"
              id="profileImage"
              className="form-input"
              value={profileImage}
              onChange={(e) => setProfileImage(e.target.value)}
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

export default CreateUser;
