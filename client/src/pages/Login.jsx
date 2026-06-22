import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 return (
  <div className="login-page"> <div className="login-card">


    <div className="brand">
      <h1>PARFUMÉ</h1>
      <span>Luxury Fragrances</span>
    </div>

    <h2>Welcome Back</h2>
    <p className="subtitle">
      Sign in to continue your fragrance journey
    </p>

    <form className="login-form" onsubmit={(e) => {e.preventDefault()}}>
      <input
        type="email"
        value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address"
      />

      <input
        type="password"
        value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"
      />

      <div className="login-options">
        <label className="remember">
          <input type="checkbox" />
          Remember Me
        </label>

        <Link to="/forgot-password" className="forgot-link">
          Forgot Password?
        </Link>
      </div>

      <button type="submit">
        Sign In
      </button>
    </form>

    <p className="register-link">
      Don't have an account?
      <Link to="/register"> Create Account</Link>
    </p>
  </div>

  <style>{`
    *{
      margin:0;
      padding:0;
      box-sizing:border-box;
    }

    .login-page{
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

    .login-card{
      width:100%;
      max-width:450px;
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
      color:#1a1814;
      margin-bottom:10px;
    }

    .subtitle{
      text-align:center;
      color:#777;
      font-size:14px;
      margin-bottom:25px;
    }

    .login-form{
      display:flex;
      flex-direction:column;
      gap:15px;
    }

    .login-form input[type="email"],
    .login-form input[type="password"]{
      padding:14px 16px;
      border:1px solid #ddd;
      border-radius:10px;
      font-size:14px;
      outline:none;
      transition:.3s;
    }

    .login-form input:focus{
      border-color:#b5783c;
      box-shadow:0 0 0 3px rgba(181,120,60,.15);
    }

    .login-options{
      display:flex;
      justify-content:space-between;
      align-items:center;
      font-size:13px;
    }

    .remember{
      display:flex;
      align-items:center;
      gap:6px;
      color:#666;
    }

    .forgot-link{
      text-decoration:none;
      color:#b5783c;
      font-weight:500;
    }

    .forgot-link:hover{
      text-decoration:underline;
    }

    .login-form button{
      margin-top:8px;
      padding:14px;
      border:none;
      border-radius:10px;
      background:#1a1814;
      color:#fff;
      font-size:15px;
      font-weight:600;
      cursor:pointer;
      transition:.3s;
    }

    .login-form button:hover{
      background:#b5783c;
      transform:translateY(-2px);
    }

    .register-link{
      margin-top:22px;
      text-align:center;
      color:#666;
      font-size:14px;
    }

    .register-link a{
      color:#b5783c;
      text-decoration:none;
      font-weight:600;
    }

    .register-link a:hover{
      text-decoration:underline;
    }

    @media(max-width:500px){
      .login-card{
        padding:28px 22px;
      }

      .brand h1{
        font-size:26px;
      }

      .login-options{
        flex-direction:column;
        gap:10px;
        align-items:flex-start;
      }
    }
  `}</style>
</div>
);
};

export default Login;
 