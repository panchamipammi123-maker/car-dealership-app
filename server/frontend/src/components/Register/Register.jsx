import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="register-container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        {/* FIELD 1: Username - EXACT TEXT */}
        <label>Username</label>
        <input
          type="text"
          name="username"
          placeholder="Username"
          required
        />
        
        {/* FIELD 2: First Name - EXACT TEXT */}
        <label>First Name</label>  
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          required
        />
        
        {/* FIELD 3: Last Name - EXACT TEXT */}
        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          required
        />
        
        {/* FIELD 4: Email - EXACT TEXT */}
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        
        {/* FIELD 5: Password - EXACT TEXT */}
        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        
        {/* REGISTER BUTTON - EXACT TEXT */}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
