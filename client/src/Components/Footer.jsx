import React from "react";
import { Link } from "react-router-dom";
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaTwitter,
//   FaYoutube,
// } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" text-light pt-5 pb-3 mt-5" style={{ background: "#1a1a2e" }}>
      <div className="container">
        <div className="row g-4">

          {/* Brand Section */}
          <div className="col-md-4">
            <h2 className="fw-bold text-uppercase mb-3">Parfumé collection</h2>
            <p className="text-secondary">
              Discover luxury fragrances crafted with elegance and passion.
              Elevate your personality with premium perfumes.
            </p>

            <div className="d-flex gap-3 mt-4">
              <Link to="#" className="text-light fs-5">
                {/* <FaFacebookF /> */}
              </Link>

              <Link to="#" className="text-light fs-5">
                {/* <FaInstagram /> */}
              </Link>

              <Link to="#" className="text-light fs-5">
                {/* <FaTwitter /> */}
              </Link>

              <Link to="#" className="text-light fs-5">
                {/* <FaYoutube /> */}
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-2">
            <h5 className="mb-3">Quick Links</h5>

            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-secondary text-decoration-none">
                  Home
                </Link>
              </li>

              <li className="mb-2">
                <Link to="/shop" className="text-secondary text-decoration-none">
                  Shop
                </Link>
              </li>

              <li className="mb-2">
                <Link to="/about" className="text-secondary text-decoration-none">
                  About
                </Link>
              </li>

              <li className="mb-2">
                <Link to="/contact" className="text-secondary text-decoration-none">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="col-md-3">
            <h5 className="mb-3">Categories</h5>

            <ul className="list-unstyled">
              <li className="mb-2 text-secondary">Men Perfume</li>
              <li className="mb-2 text-secondary">Women Perfume</li>
              <li className="mb-2 text-secondary">Luxury Collection</li>
              <li className="mb-2 text-secondary">New Arrival</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-md-3">
            <h5 className="mb-3">Newsletter</h5>

            <p className="text-secondary">
              Subscribe to get special offers & latest updates.
            </p>

            <form className="d-flex" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter Email"
                className="form-control rounded-1"
              />

              <button className="btn btn-dark rounded-1 px-4" >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <hr className="border-secondary mt-5" />

        <div className="text-center text-secondary">
         <p className="mb-0 text-white">
    © 2026 Created By <span className="text-white fw-semibold">Mohd Amir</span>. All Rights Reserved.
  </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;