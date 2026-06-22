import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const steps = ["Delivery", "Payment", "Review"];

const Checkout = () => {
  const navigate = useNavigate();
  const { cart, totalPrice, totalItems, clearCart } = useCart();
  const [step, setStep] = useState(0);
  const [placed, setPlaced] = useState(false);

  const [delivery, setDelivery] = useState({
    name: "", email: "", phone: "",
    address: "", city: "", state: "", pincode: "",
  });
  const [payment, setPayment] = useState({ method: "card", cardNum: "", expiry: "", cvv: "", upiId: "" });
  const [errors, setErrors] = useState({});

  // ── Validation ──────────────────────────────────────────────────────────────
  const validateDelivery = () => {
    const e = {};
    if (!delivery.name.trim())    e.name    = "Name is required";
    if (!delivery.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = "Valid email required";
    if (!delivery.phone.match(/^\d{10}$/))  e.phone   = "10-digit phone required";
    if (!delivery.address.trim()) e.address = "Address is required";
    if (!delivery.city.trim())    e.city    = "City is required";
    if (!delivery.state.trim())   e.state   = "State is required";
    if (!delivery.pincode.match(/^\d{6}$/)) e.pincode = "6-digit pincode required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const validatePayment = () => {
    const e = {};
    if (payment.method === "card") {
      if (!payment.cardNum.replace(/\s/g, "").match(/^\d{16}$/)) e.cardNum = "16-digit card number required";
      if (!payment.expiry.match(/^\d{2}\/\d{2}$/)) e.expiry = "Format MM/YY";
      if (!payment.cvv.match(/^\d{3}$/)) e.cvv = "3-digit CVV required";
    }
    if (payment.method === "upi") {
      if (!payment.upiId.includes("@")) e.upiId = "Valid UPI ID required";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => {
    if (step === 0 && !validateDelivery()) return;
    if (step === 1 && !validatePayment()) return;
    setErrors({});
    setStep((s) => s + 1);
  };

  const placeOrder = () => {
    clearCart();
    setPlaced(true);
  };

  // ── Order placed screen ─────────────────────────────────────────────────────
  if (placed) {
    return (
      <div className="co-success">
        <div className="co-success__box">
          <div className="co-success__icon">✓</div>
          <h2 className="co-success__title">Order Placed!</h2>
          <p className="co-success__sub">
            Thank you, {delivery.name.split(" ")[0]}. A confirmation has been sent to{" "}
            <strong>{delivery.email}</strong>.
          </p>
          <div className="co-success__detail">
            <span>Delivering to</span>
            <span>{delivery.address}, {delivery.city} – {delivery.pincode}</span>
          </div>
          <div className="co-success__detail">
            <span>Total paid</span>
            <span>₹{totalPrice > 0 ? totalPrice.toLocaleString("en-IN") : "—"}</span>
          </div>
          <Link to="/" className="co-success__btn">Back to Home</Link>
        </div>
        <style>{coStyles}</style>
      </div>
    );
  }

  // ── Main layout ─────────────────────────────────────────────────────────────
  return (
    <div className="co-page">
      <div className="co-page__inner">

        {/* Stepper */}
        <div className="co-stepper">
          {steps.map((s, i) => (
            <div key={s} className={`co-step ${i === step ? "co-step--active" : ""} ${i < step ? "co-step--done" : ""}`}>
              <div className="co-step__circle">{i < step ? "✓" : i + 1}</div>
              <span className="co-step__label">{s}</span>
              {i < steps.length - 1 && <div className="co-step__line" />}
            </div>
          ))}
        </div>

        <div className="co-layout">
          {/* ── Left panel ── */}
          <div className="co-panel">

            {/* Step 0: Delivery */}
            {step === 0 && (
              <div className="co-form">
                <h3 className="co-form__title">Delivery Details</h3>
                <div className="co-form__row">
                  <Field label="Full Name" error={errors.name}>
                    <input placeholder="" value={delivery.name}
                      onChange={e => setDelivery({ ...delivery, name: e.target.value })} />
                  </Field>
                  <Field label="Email" error={errors.email}>
                    <input placeholder="" value={delivery.email}
                      onChange={e => setDelivery({ ...delivery, email: e.target.value })} />
                  </Field>
                </div>
                <Field label="Phone" error={errors.phone}>
                  <input placeholder="" value={delivery.phone}
                    onChange={e => setDelivery({ ...delivery, phone: e.target.value })} />
                </Field>
                <Field label="Address" error={errors.address}>
                  <input placeholder="" value={delivery.address}
                    onChange={e => setDelivery({ ...delivery, address: e.target.value })} />
                </Field>
                <div className="co-form__row">
                  <Field label="City" error={errors.city}>
                    <input placeholder="" value={delivery.city}
                      onChange={e => setDelivery({ ...delivery, city: e.target.value })} />
                  </Field>
                  <Field label="State" error={errors.state}>
                    <input placeholder="" value={delivery.state}
                      onChange={e => setDelivery({ ...delivery, state: e.target.value })} />
                  </Field>
                  <Field label="Pincode" error={errors.pincode}>
                    <input placeholder="" value={delivery.pincode}
                      onChange={e => setDelivery({ ...delivery, pincode: e.target.value })} />
                  </Field>
                </div>
              </div>
            )}

            {/* Step 1: Payment */}
            {step === 1 && (
              <div className="co-form">
                <h3 className="co-form__title">Payment Method</h3>
                <div className="co-methods">
                  {[["card", "💳 Credit / Debit Card"], ["upi", "📱 UPI"], ["cod", "🏠 Cash on Delivery"]].map(([val, label]) => (
                    <label key={val} className={`co-method ${payment.method === val ? "co-method--active" : ""}`}>
                      <input type="radio" name="method" value={val}
                        checked={payment.method === val}
                        onChange={() => setPayment({ ...payment, method: val })} />
                      {label}
                    </label>
                  ))}
                </div>

                {payment.method === "card" && (
                  <>
                    <Field label="Card Number" error={errors.cardNum}>
                      <input placeholder="1234 5678 9012 3456" maxLength={19} value={payment.cardNum}
                        onChange={e => {
                          const v = e.target.value.replace(/\D/g, "").slice(0, 16);
                          setPayment({ ...payment, cardNum: v.replace(/(.{4})/g, "$1 ").trim() });
                        }} />
                    </Field>
                    <div className="co-form__row">
                      <Field label="Expiry (MM/YY)" error={errors.expiry}>
                        <input placeholder="08/27" maxLength={5} value={payment.expiry}
                          onChange={e => {
                            let v = e.target.value.replace(/\D/g, "").slice(0, 4);
                            if (v.length > 2) v = v.slice(0, 2) + "/" + v.slice(2);
                            setPayment({ ...payment, expiry: v });
                          }} />
                      </Field>
                      <Field label="CVV" error={errors.cvv}>
                        <input placeholder="•••" maxLength={3} type="password" value={payment.cvv}
                          onChange={e => setPayment({ ...payment, cvv: e.target.value.replace(/\D/g, "").slice(0, 3) })} />
                      </Field>
                    </div>
                  </>
                )}

                {payment.method === "upi" && (
                  <Field label="UPI ID" error={errors.upiId}>
                    <input placeholder="rahul@upi" value={payment.upiId}
                      onChange={e => setPayment({ ...payment, upiId: e.target.value })} />
                  </Field>
                )}

                {payment.method === "cod" && (
                  <p className="co-cod-note">
                    Pay ₹{totalPrice.toLocaleString("en-IN")} in cash when your order arrives. A small convenience fee may apply.
                  </p>
                )}
              </div>
            )}

            {/* Step 2: Review */}
            {step === 2 && (
              <div className="co-review">
                <h3 className="co-form__title">Review Your Order</h3>
                <div className="co-review__block">
                  <p className="co-review__label">Delivering to</p>
                  <p className="co-review__val">{delivery.name}</p>
                  <p className="co-review__val co-review__val--muted">{delivery.address}, {delivery.city}, {delivery.state} – {delivery.pincode}</p>
                  <p className="co-review__val co-review__val--muted">{delivery.phone} · {delivery.email}</p>
                </div>
                <div className="co-review__block">
                  <p className="co-review__label">Payment</p>
                  <p className="co-review__val">
                    {payment.method === "card" && `Card ending ···· ${payment.cardNum.slice(-4)}`}
                    {payment.method === "upi"  && `UPI – ${payment.upiId}`}
                    {payment.method === "cod"  && "Cash on Delivery"}
                  </p>
                </div>
                <div className="co-review__items">
                  {cart.map(item => (
                    <div key={item.id} className="co-review__item">
                      <img src={item.image || item.img} alt={item.name} />
                      <div>
                        <p className="co-review__item-name">{item.name}</p>
                        <p className="co-review__item-meta">{item.brand} · Qty {item.quantity}</p>
                      </div>
                      <p className="co-review__item-price">₹{(item.price * item.quantity).toLocaleString("en-IN")}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Navigation buttons */}
            <div className="co-nav">
              {step > 0
                ? <button className="co-nav__back" onClick={() => setStep(s => s - 1)}>← Back</button>
                : <Link to="/cart" className="co-nav__back">← Back to Cart</Link>
              }
              {step < 2
                ? <button className="co-nav__next" onClick={next}>Continue →</button>
                : <button className="co-nav__place" onClick={placeOrder}>Place Order ✓</button>
              }
            </div>
          </div>

          {/* ── Order summary sidebar ── */}
          <div className="co-sidebar">
            <h3 className="co-sidebar__title">Order Summary</h3>
            <div className="co-sidebar__items">
              {cart.map(item => (
                <div key={item.id} className="co-sidebar__item">
                  <div className="co-sidebar__img">
                    <img src={item.image || item.img} alt={item.name} />
                    <span className="co-sidebar__qty">{item.quantity}</span>
                  </div>
                  <div className="co-sidebar__info">
                    <p className="co-sidebar__name">{item.name}</p>
                    <p className="co-sidebar__brand">{item.brand}</p>
                  </div>
                  <p className="co-sidebar__price">₹{(item.price * item.quantity).toLocaleString("en-IN")}</p>
                </div>
              ))}
            </div>
            <div className="co-sidebar__divider" />
            <div className="co-sidebar__row">
              <span>Subtotal</span><span>₹{totalPrice.toLocaleString("en-IN")}</span>
            </div>
            <div className="co-sidebar__row">
              <span>Shipping</span><span className="co-free">FREE</span>
            </div>
            <div className="co-sidebar__divider" />
            <div className="co-sidebar__row co-sidebar__row--total">
              <span>Total</span><span>₹{totalPrice.toLocaleString("en-IN")}</span>
            </div>
          </div>
        </div>
      </div>
      <style>{coStyles}</style>
    </div>
  );
};

// ── Reusable field wrapper ───────────────────────────────────────────────────
const Field = ({ label, error, children }) => (
  <div className={`co-field ${error ? "co-field--error" : ""}`}>
    <label className="co-field__label">{label}</label>
    {children}
    {error && <span className="co-field__err">{error}</span>}
  </div>
);

// ── Styles ───────────────────────────────────────────────────────────────────
const coStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&family=Jost:wght@300;400;500&display=swap');
  :root {
    --accent: #c9956b; --accent-light: #e8c5a8;
    --black: #0a0a0a; --white: #ffffff; --off: #f7f4f0; --muted: #888;
    --font-serif: 'Cormorant Garamond', serif; --font-sans: 'Jost', sans-serif;
  }

  .co-page { background: var(--off); min-height: 100vh; padding: 60px 20px; font-family: var(--font-sans); }
  .co-page__inner { max-width: 1100px; margin: 0 auto; }

  /* Stepper */
  .co-stepper { display: flex; align-items: center; margin-bottom: 48px; }
  .co-step { display: flex; align-items: center; gap: 10px; }
  .co-step__circle {
    width: 32px; height: 32px; border-radius: 50%;
    border: 2px solid #ddd; display: flex; align-items: center; justify-content: center;
    font-size: 13px; font-weight: 500; color: var(--muted); background: white;
    transition: all 0.3s;
  }
  .co-step--active .co-step__circle { border-color: var(--accent); color: var(--accent); }
  .co-step--done .co-step__circle { background: var(--accent); border-color: var(--accent); color: white; }
  .co-step__label { font-size: 13px; color: var(--muted); white-space: nowrap; }
  .co-step--active .co-step__label { color: var(--black); font-weight: 500; }
  .co-step--done .co-step__label { color: var(--accent); }
  .co-step__line { width: 60px; height: 1px; background: #ddd; margin: 0 8px; }

  /* Layout */
  .co-layout { display: grid; grid-template-columns: 1fr 320px; gap: 32px; align-items: start; }
  .co-panel { background: white; border-radius: 12px; padding: 32px; box-shadow: 0 2px 16px rgba(0,0,0,0.06); }

  /* Form */
  .co-form__title { font-family: var(--font-serif); font-size: 26px; font-weight: 400; margin: 0 0 28px; }
  .co-form__row { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 16px; }
  .co-field { display: flex; flex-direction: column; gap: 6px; margin-bottom: 18px; }
  .co-field__label { font-size: 11px; letter-spacing: 1.5px; text-transform: uppercase; color: var(--muted); }
  .co-field input {
    padding: 11px 14px; border: 1.5px solid #e5e5e5; border-radius: 6px;
    font-family: var(--font-sans); font-size: 14px; color: var(--black);
    outline: none; transition: border-color 0.2s; background: white;
  }
  .co-field input:focus { border-color: var(--accent); }
  .co-field--error input { border-color: #e85454; }
  .co-field__err { font-size: 12px; color: #e85454; }

  /* Payment methods */
  .co-methods { display: flex; flex-direction: column; gap: 12px; margin-bottom: 24px; }
  .co-method {
    display: flex; align-items: center; gap: 12px;
    padding: 14px 18px; border: 1.5px solid #e5e5e5; border-radius: 8px;
    cursor: pointer; font-size: 14px; transition: all 0.2s;
  }
  .co-method input[type="radio"] { accent-color: var(--accent); width: 16px; height: 16px; }
  .co-method--active { border-color: var(--accent); background: #fdf6f0; }
  .co-cod-note {
    background: var(--off); border-radius: 8px; padding: 16px;
    font-size: 14px; color: var(--muted); line-height: 1.7; margin-top: 8px;
  }

  /* Review */
  .co-review__block { margin-bottom: 24px; padding-bottom: 20px; border-bottom: 1px solid #eee; }
  .co-review__label { font-size: 11px; letter-spacing: 1.5px; text-transform: uppercase; color: var(--muted); margin-bottom: 8px; }
  .co-review__val { font-size: 15px; color: var(--black); margin: 2px 0; }
  .co-review__val--muted { color: var(--muted); font-size: 13px; }
  .co-review__items { display: flex; flex-direction: column; gap: 14px; margin-top: 20px; }
  .co-review__item { display: flex; align-items: center; gap: 14px; }
  .co-review__item img { width: 52px; height: 52px; object-fit: cover; border-radius: 6px; flex-shrink: 0; }
  .co-review__item-name { font-size: 14px; font-weight: 500; color: var(--black); margin: 0; }
  .co-review__item-meta { font-size: 12px; color: var(--muted); margin: 2px 0 0; }
  .co-review__item-price { font-size: 15px; font-weight: 500; color: var(--black); margin-left: auto; white-space: nowrap; }

  /* Nav buttons */
  .co-nav { display: flex; justify-content: space-between; align-items: center; margin-top: 32px; padding-top: 24px; border-top: 1px solid #eee; }
  .co-nav__back {
    background: none; border: 1.5px solid #ddd; padding: 11px 24px;
    border-radius: 6px; font-family: var(--font-sans); font-size: 13px;
    color: var(--muted); cursor: pointer; text-decoration: none; transition: all 0.2s;
  }
  .co-nav__back:hover { border-color: var(--black); color: var(--black); }
  .co-nav__next, .co-nav__place {
    padding: 12px 32px; background: var(--black); color: white;
    border: none; border-radius: 6px; font-family: var(--font-sans);
    font-size: 13px; letter-spacing: 1px; text-transform: uppercase;
    cursor: pointer; transition: background 0.3s;
  }
  .co-nav__next:hover, .co-nav__place:hover { background: var(--accent); }
  .co-nav__place { background: var(--accent); }
  .co-nav__place:hover { background: #b8845a; }

  /* Sidebar */
  .co-sidebar {
    background: white; border-radius: 12px; padding: 28px;
    box-shadow: 0 2px 16px rgba(0,0,0,0.06); position: sticky; top: 100px;
  }
  .co-sidebar__title { font-family: var(--font-serif); font-size: 22px; font-weight: 400; margin: 0 0 20px; }
  .co-sidebar__items { display: flex; flex-direction: column; gap: 14px; margin-bottom: 20px; }
  .co-sidebar__item { display: flex; align-items: center; gap: 12px; }
  .co-sidebar__img { position: relative; flex-shrink: 0; }
  .co-sidebar__img img { width: 52px; height: 52px; border-radius: 6px; object-fit: cover; }
  .co-sidebar__qty {
    position: absolute; top: -6px; right: -6px;
    width: 18px; height: 18px; border-radius: 50%;
    background: var(--black); color: white;
    font-size: 10px; display: flex; align-items: center; justify-content: center;
  }
  .co-sidebar__info { flex: 1; }
  .co-sidebar__name { font-size: 13px; font-weight: 500; color: var(--black); margin: 0; }
  .co-sidebar__brand { font-size: 11px; color: var(--muted); margin: 2px 0 0; }
  .co-sidebar__price { font-size: 14px; font-weight: 500; color: var(--black); white-space: nowrap; }
  .co-sidebar__divider { height: 1px; background: #eee; margin: 16px 0; }
  .co-sidebar__row { display: flex; justify-content: space-between; font-size: 14px; color: var(--muted); margin-bottom: 10px; }
  .co-sidebar__row--total { font-size: 18px; font-weight: 600; color: var(--black); margin-top: 4px; }
  .co-free { color: #2e7d32; font-weight: 500; }

  /* Success */
  .co-success { min-height: 100vh; display: flex; align-items: center; justify-content: center; background: var(--off); padding: 40px 20px; font-family: var(--font-sans); }
  .co-success__box { background: white; border-radius: 16px; padding: 56px 48px; text-align: center; max-width: 480px; box-shadow: 0 4px 32px rgba(0,0,0,0.08); }
  .co-success__icon { width: 72px; height: 72px; border-radius: 50%; background: #f0faf4; border: 2px solid #2e7d32; color: #2e7d32; font-size: 28px; display: flex; align-items: center; justify-content: center; margin: 0 auto 24px; }
  .co-success__title { font-family: var(--font-serif); font-size: 36px; font-weight: 400; margin: 0 0 12px; }
  .co-success__sub { font-size: 15px; color: var(--muted); line-height: 1.7; margin-bottom: 28px; }
  .co-success__detail { display: flex; justify-content: space-between; font-size: 14px; padding: 12px 0; border-top: 1px solid #eee; color: var(--muted); }
  .co-success__detail span:last-child { color: var(--black); font-weight: 500; }
  .co-success__btn { display: inline-block; margin-top: 32px; padding: 13px 36px; background: var(--black); color: white; text-decoration: none; border-radius: 6px; font-size: 13px; letter-spacing: 1px; text-transform: uppercase; transition: background 0.3s; }
  .co-success__btn:hover { background: var(--accent); }

  @media (max-width: 768px) {
    .co-layout { grid-template-columns: 1fr; }
    .co-sidebar { position: static; }
    .co-stepper { gap: 0; }
    .co-step__line { width: 30px; }
  }
`;

export default Checkout;