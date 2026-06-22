import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const navigate = useNavigate();

  const {
    cart,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalItems,
    totalPrice,
  } = useCart();


  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <div className="cart-empty__inner">
          <span className="cart-empty__icon">🛍️</span>
          <h2>Your cart is empty</h2>
          <p>Add some fragrances to get started</p>
          <Link to="/" className="cart-empty__btn">
            Continue Shopping
          </Link>
        </div>
        <style>{cartStyles}</style>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-page__inner">
        {/* Header */}
        <div className="cart-header">
          <h1 className="cart-header__title">Your Cart</h1>
          <span className="cart-header__count">
            {totalItems} item{totalItems !== 1 ? "s" : ""}
          </span>
          <button className="cart-header__clear" onClick={clearCart}>
            Clear All
          </button>
        </div>

        <div className="cart-layout">
          {/* Items */}
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-item__img">
                  <img src={item.image || item.img} alt={item.name} />
                </div>
                <div className="cart-item__info">
                  <p className="cart-item__brand">
                    {item.brand || "Fragrance"}
                  </p>
                  <h4 className="cart-item__name">{item.name}</h4>
                  <p className="cart-item__price">
                    ₹{(item.price || 0).toLocaleString("en-IN")}
                  </p>
                </div>
                <div className="cart-item__actions">
                  <div className="qty-control">
                    <button
                      className="qty-btn"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      −
                    </button>
                    <span className="qty-num">{item.quantity}</span>
                    <button
                      className="qty-btn"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <p className="cart-item__subtotal">
                    ₹
                    {((item.price || 0) * item.quantity).toLocaleString(
                      "en-IN",
                    )}
                  </p>
                  <button
                    className="cart-item__remove"
                    onClick={() => removeFromCart(item.id)}
                    aria-label="Remove"
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="cart-summary">
            <h3 className="cart-summary__title">Order Summary</h3>
            <div className="cart-summary__row">
              <span>Subtotal ({totalItems} items)</span>
              <span>₹{totalPrice.toLocaleString("en-IN")}</span>
            </div>
            <div className="cart-summary__row">
              <span>Shipping</span>
              <span className="free-tag">FREE</span>
            </div>
            <div className="cart-summary__divider" />
            <div className="cart-summary__row cart-summary__row--total">
              <span>Total</span>
              <span>₹{totalPrice.toLocaleString("en-IN")}</span>
            </div>
            <button
              className="cart-summary__checkout"
              onClick={() => navigate("/checkout")}
            >
              Proceed to Checkout →
            </button>
            <Link to="/" className="cart-summary__continue">
              ← Continue Shopping
            </Link>
          </div>
        </div>
      </div>

      <style>{cartStyles}</style>
    </div>
  );
};

const cartStyles = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@300;400;500&display=swap');

  :root {
    --accent: #c9956b;
    --black: #0e0e0e;
    --white: #ffffff;
    --off: #f7f4f0;
    --muted: #888;
    --font-serif: 'DM Serif Display', serif;
    --font-sans: 'DM Sans', sans-serif;
  }

  .cart-empty {
    min-height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font-sans);
  }
  .cart-empty__inner {
    text-align: center;
  }
  .cart-empty__icon { font-size: 64px; display: block; margin-bottom: 20px; }
  .cart-empty__inner h2 { font-family: var(--font-serif); font-size: 32px; margin-bottom: 8px; }
  .cart-empty__inner p { color: var(--muted); margin-bottom: 28px; }
  .cart-empty__btn {
    display: inline-block;
    padding: 12px 32px;
    background: var(--black);
    color: white;
    text-decoration: none;
    border-radius: 6px;
    font-size: 13px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: background 0.3s;
  }
  .cart-empty__btn:hover { background: var(--accent); }

  .cart-page {
    background: var(--off);
    min-height: 100vh;
    padding: 60px 20px;
    font-family: var(--font-sans);
  }
  .cart-page__inner {
    max-width: 1100px;
    margin: 0 auto;
  }

  .cart-header {
    display: flex;
    align-items: baseline;
    gap: 16px;
    margin-bottom: 40px;
  }
  .cart-header__title {
    font-family: var(--font-serif);
    font-size: clamp(28px, 4vw, 42px);
    color: var(--black);
    margin: 0;
  }
  .cart-header__count {
    font-size: 14px;
    color: var(--muted);
    flex: 1;
  }
  .cart-header__clear {
    background: none;
    border: 1px solid #ddd;
    padding: 6px 14px;
    border-radius: 4px;
    font-size: 12px;
    color: var(--muted);
    cursor: pointer;
    transition: all 0.2s;
  }
  .cart-header__clear:hover { border-color: #e85454; color: #e85454; }

  .cart-layout {
    display: grid;
    grid-template-columns: 1fr 340px;
    gap: 32px;
    align-items: start;
  }

  .cart-items {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .cart-item {
    background: white;
    border-radius: 12px;
    padding: 20px;
    display: flex;
    gap: 20px;
    align-items: center;
    box-shadow: 0 2px 12px rgba(0,0,0,0.06);
    transition: transform 0.2s;
  }
  .cart-item:hover { transform: translateY(-2px); }

  .cart-item__img {
    width: 90px;
    height: 90px;
    border-radius: 8px;
    overflow: hidden;
    flex-shrink: 0;
  }
  .cart-item__img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .cart-item__info { flex: 1; }
  .cart-item__brand { font-size: 11px; letter-spacing: 1.2px; text-transform: uppercase; color: var(--muted); margin: 0 0 4px; }
  .cart-item__name { font-family: var(--font-serif); font-size: 18px; color: var(--black); margin: 0 0 6px; }
  .cart-item__price { font-size: 14px; color: var(--muted); margin: 0; }

  .cart-item__actions {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 12px;
  }
  .qty-control {
    display: flex;
    align-items: center;
    gap: 0;
    border: 1.5px solid #e5e5e5;
    border-radius: 6px;
    overflow: hidden;
  }
  .qty-btn {
    width: 32px;
    height: 32px;
    background: none;
    border: none;
    font-size: 16px;
    cursor: pointer;
    color: var(--black);
    transition: background 0.2s;
  }
  .qty-btn:hover { background: var(--off); }
  .qty-num {
    width: 36px;
    text-align: center;
    font-size: 14px;
    font-weight: 500;
    border-left: 1.5px solid #e5e5e5;
    border-right: 1.5px solid #e5e5e5;
    line-height: 32px;
  }
  .cart-item__subtotal { font-size: 16px; font-weight: 600; color: var(--black); }
  .cart-item__remove {
    background: none;
    border: none;
    color: #ccc;
    cursor: pointer;
    font-size: 14px;
    transition: color 0.2s;
    padding: 2px 4px;
  }
  .cart-item__remove:hover { color: #e85454; }

  .cart-summary {
    background: white;
    border-radius: 12px;
    padding: 28px;
    box-shadow: 0 2px 12px rgba(0,0,0,0.06);
    position: sticky;
    top: 100px;
  }
  .cart-summary__title {
    font-family: var(--font-serif);
    font-size: 22px;
    margin: 0 0 24px;
  }
  .cart-summary__row {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: var(--muted);
    margin-bottom: 14px;
  }
  .cart-summary__row--total {
    font-size: 18px;
    font-weight: 600;
    color: var(--black);
    margin-top: 4px;
  }
  .free-tag { color: #2e7d32; font-weight: 500; }
  .cart-summary__divider { height: 1px; background: #eee; margin: 16px 0; }
  .cart-summary__checkout {
    width: 100%;
    padding: 14px;
    background: var(--black);
    color: white;
    border: none;
    border-radius: 6px;
    font-family: var(--font-sans);
    font-size: 13px;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    cursor: pointer;
    margin-top: 20px;
    transition: background 0.3s;
  }
  .cart-summary__checkout:hover { background: var(--accent); }
  .cart-summary__continue {
    display: block;
    text-align: center;
    margin-top: 14px;
    font-size: 13px;
    color: var(--muted);
    text-decoration: none;
    transition: color 0.2s;
  }
  .cart-summary__continue:hover { color: var(--black); }

  @media (max-width: 768px) {
    .cart-layout { grid-template-columns: 1fr; }
    .cart-item { flex-wrap: wrap; }
    .cart-summary { position: static; }
  }
`;

export default Cart;
