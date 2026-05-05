import React, { useState } from "react";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    firstName: "",    // Exact field name
    lastName: "",     // Exact field name  
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Register data:", formData);
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        {/* EXACT 5 FIELDS WITH PLACEHOLDERS */}
        <input
          type="text"
          name="username"
          placeholder="Username"      // ← CRITICAL
          value={formData.username}
          onChange={handleChange}
          required                    // ← CRITICAL
        />
        
        <input
          type="text"
          name="firstName"
          placeholder="First Name"    // ← CRITICAL
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"     // ← CRITICAL
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        
        <input
          type="email"
          name="email"
          placeholder="Email"         // ← CRITICAL
          value={formData.email}
          onChange={handleChange}
          required
        />
        
        <input
          type="password"
          name="password"
          placeholder="Password"      // ← CRITICAL
          value={formData.password}
          onChange={handleChange}
          required
        />
        
        <button type="submit">Register</button>  // ← CRITICAL
      </form>
    </div>
  );
}

export default Register;
