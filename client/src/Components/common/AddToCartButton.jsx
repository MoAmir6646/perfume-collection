// // src/components/common/AddToCartButton.jsx
// import { useState } from "react";
// import { useCart } from "../../context/CartContext";

// const AddToCartButton = ({ product, className = "" }) => {
//   const { addToCart } = useCart();
//   const [added, setAdded] = useState(false);

//   const handleClick = () => {
//     addToCart(product);
//     setAdded(true);
//     setTimeout(() => setAdded(false), 1500);
//   };

//   return (
//     <>
//       <button
//         className={`atc-btn ${added ? "atc-btn--added" : ""} ${className}`}
//         onClick={handleClick}
//       >
//         <span className="atc-btn__text">
//           {added ? "✓ Added!" : "Add to Cart"}
//         </span>
//         <span className="atc-btn__bg" />
//       </button>

//       <style>{`
//         .atc-btn {
//           position: relative;
//           width: 100%;
//           padding: 12px 16px;
//           background: #0e0e0e;
//           color: #fff;
//           border: 1.5px solid #0e0e0e;
//           border-radius: 6px;
//           font-family: 'DM Sans', sans-serif; 
//           font-size: 12px;
//           font-weight: 500;
//           letter-spacing: 1.2px;
//           text-transform: uppercase;
//           cursor: pointer;
//           overflow: hidden;
//           transition: color 0.3s ease, border-color 0.3s ease;
//           z-index: 0;
//         }

//         .atc-btn__bg {
//           position: absolute;
//           inset: 0;
//           background: #c9956b;
//           transform: scaleX(0);
//           transform-origin: left;
//           transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
//           z-index: -1;
//           border-radius: 5px;
//         }

//         .atc-btn:hover .atc-btn__bg,
//         .atc-btn--added .atc-btn__bg {
//           transform: scaleX(1);
//         }

//         .atc-btn:hover,
//         .atc-btn--added {
//           color: #fff;
//           border-color: #c9956b;
//         }

//         .atc-btn__text {
//           position: relative;
//           z-index: 1;
//           transition: letter-spacing 0.3s ease;
//         }

//         .atc-btn:hover .atc-btn__text {
//           letter-spacing: 1.8px;
//         }

//         .atc-btn--added .atc-btn__text {
//           letter-spacing: 1.2px;
//         }
//       `}</style>
//     </>
//   );
// };

// export default AddToCartButton;


// src/components/common/AddToCartButton.jsx
import { useState } from "react";
import { useCart } from "../../context/CartContext";

const AddToCartButton = ({ product, className = "" }) => {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <>
      <button
        className={`atc-btn ${added ? "atc-btn--added" : ""} ${className}`}
        onClick={handleClick}
      >
        <span className="atc-btn__text">
          {added ? "✓ Added!" : "Add to Cart"}
        </span>
        <span className="atc-btn__bg" />
      </button>

      <style>{`
        .atc-btn {
          position: relative;
          width: 100%;
          padding: 12px 16px;
          background: #0e0e0e;
          color: #fff;
          border: 1.5px solid #0e0e0e;
          border-radius: 6px;
          font-family: 'Jost', sans-serif;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          cursor: pointer;
          overflow: hidden;
          transition: color 0.3s ease, border-color 0.3s ease;
          z-index: 0;
        }

        .atc-btn__bg {
          position: absolute;
          inset: 0;
          background: #c9956b;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: -1;
          border-radius: 5px;
        }

        .atc-btn:hover .atc-btn__bg,
        .atc-btn--added .atc-btn__bg {
          transform: scaleX(1);
        }

        .atc-btn:hover,
        .atc-btn--added {
          color: #fff;
          border-color: #c9956b;
        }

        .atc-btn__text {
          position: relative;
          z-index: 1;
          transition: letter-spacing 0.3s ease;
        }

        .atc-btn:hover .atc-btn__text {
          letter-spacing: 1.8px;
        }

        .atc-btn--added .atc-btn__text {
          letter-spacing: 1.2px;
        }
      `}</style>
    </>
  );
};

export default AddToCartButton;