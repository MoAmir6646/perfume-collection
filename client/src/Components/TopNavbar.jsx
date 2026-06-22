import React from "react";

const TopNavbar = () => {
  const tickerMessages = [
    "✦ Free Shipping on Orders Above ₹999 ✦",
    "✦ Luxury Fragrances Crafted for Every Occasion ✦",
    "✦ Exclusive Perfume Collection Available Now ✦",
  ];

  return (
    <div
      style={{
        background: "#0f0f1a",
        padding: "10px 20px",
        overflow: "hidden",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <style>{`
        @keyframes ticker {
          0% { transform: translateY(0); }
          25% { transform: translateY(0); }
          30% { transform: translateY(-33.33%); }
          55% { transform: translateY(-33.33%); }
          60% { transform: translateY(-66.66%); }
          85% { transform: translateY(-66.66%); }
          100% { transform: translateY(0); }
        }

        .ticker-container{
          height:20px;
          overflow:hidden;
        }

        .ticker-wrapper{
          animation:ticker 12s infinite ease-in-out;
        }

        .ticker-item{
          height:20px;
          line-height:20px;
          text-align:center;
          color:#e5d3b3;
          font-size:13px;
          letter-spacing:1px;
          margin:0;
        }
      `}</style>

      <div className="ticker-container">
        <div className="ticker-wrapper">
          {tickerMessages.map((msg, index) => (
            <p key={index} className="ticker-item">
              {msg}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;