import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
  e.preventDefault();

  if (password !== confirm) {
    setError("Passwords do not match");
    return;
  }

  console.log("Form Submitted");
};

  return (
    <div className="register-page">
      <div className="register-card">

        <div className="brand">
          <h1>PARFUMÉ</h1>
          <span>Luxury Fragrances</span>
        </div>

        <h2>Create Account</h2>
        <p className="subtitle">
          Join our fragrance world and discover timeless scents.
        </p>

        <form className="register-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email Address" />
          <input type="tel" placeholder="Phone Number" />
          <input type="password" placeholder="Password"  value={password}
  onChange={(e) => setPassword(e.target.value)} />
          <input type="password" placeholder="Confirm Password"  value={confirm}
  onChange={(e) => setConfirm(e.target.value)} />

          <button type="submit">
            
            Create Account
          </button>
        </form>

        <p className="signin-link">
          Already have an account?
          <Link to="/login"> Sign In</Link>
        </p>
      </div>

      <style>{`
        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
        }

        .register-page{
          min-height:100vh;
          display:flex;
          justify-content:center;
          align-items:center;
          background:linear-gradient(
            135deg,
            #faf8f5,
            #f5ede2
          );
          padding:20px;
        }

        .register-card{
          width:100%;
          max-width:460px;
          background:#fff;
          padding:40px;
          border-radius:20px;
          box-shadow:0 20px 50px rgba(0,0,0,0.08);
          border:1px solid #ece7df;
        }

        .brand{
          text-align:center;
          margin-bottom:25px;
        }

        .brand h1{
          font-size:32px;
          letter-spacing:5px;
          color:#1a1814;
          margin-bottom:6px;
        }

        .brand span{
          color:#b5783c;
          font-size:13px;
          letter-spacing:2px;
          text-transform:uppercase;
        }

        h2{
          text-align:center;
          margin-bottom:10px;
          color:#1a1814;
        }

        .subtitle{
          text-align:center;
          color:#777;
          margin-bottom:25px;
          font-size:14px;
        }

        .register-form{
          display:flex;
          flex-direction:column;
          gap:15px;
        }

        .register-form input{
          padding:14px 16px;
          border:1px solid #ddd;
          border-radius:10px;
          font-size:14px;
          outline:none;
          transition:0.3s;
        }

        .register-form input:focus{
          border-color:#b5783c;
          box-shadow:0 0 0 3px rgba(181,120,60,0.15);
        }

        .register-form button{
          margin-top:10px;
          padding:14px;
          border:none;
          border-radius:10px;
          background:#1a1814;
          color:white;
          font-size:15px;
          font-weight:600;
          cursor:pointer;
          transition:0.3s;
        }

        .register-form button:hover{
          background:#b5783c;
          transform:translateY(-2px);
        }

        .signin-link{
          text-align:center;
          margin-top:22px;
          color:#666;
          font-size:14px;
        }

        .signin-link a{
          color:#b5783c;
          text-decoration:none;
          font-weight:600;
        }

        .signin-link a:hover{
          text-decoration:underline;
        }

        @media(max-width:500px){
          .register-card{
            padding:28px 22px;
          }

          .brand h1{
            font-size:26px;
          }
        }
      `}</style>
    </div>
  );
};

export default Register;