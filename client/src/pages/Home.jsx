
import { useState, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import AddToCartButton from "../components/common/AddToCartButton";

const COLLECTION_PRODUCTS = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500",
    name: "Midnight Oud",
    brand: "Luxury Essence",
    price: 7999,
    oldPrice: 9999,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=500",
    name: "Ocean Breeze",
    brand: "Aqua Mist",
    price: 5499,
    oldPrice: 6999,
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?w=500",
    name: "Royal Rose",
    brand: "Velvet Bloom",
    price: 6499,
    oldPrice: 7999,
  },
];

const BESTSELLER_PRODUCTS = [
  {
    id: 101,
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=500",
    name: "Midnight Oud",
    brand: "Luxury Essence",
    price: 7999,
    oldPrice: 9999,
  },
  {
    id: 102,
    image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=500",
    name: "Ocean Breeze",
    brand: "Aqua Mist",
    price: 5499,
    oldPrice: 6999,
  },
  {
    id: 103,
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=500",
    name: "Royal Rose",
    brand: "Velvet Bloom",
    price: 6499,
    oldPrice: 7999,
  },
];

// ── HERO (Video) ──────────────────────────────────────────────────────────────
const Hero = () => {
  const [muted, setMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(!muted);
    }
  };

  return (
    <section className="hero">
      <video
        ref={videoRef}
        className="hero__video"
        autoPlay
        muted
        loop
        playsInline
        src="https://www.pexels.com/download/video/6207752/?fps=25.0&h=1080&w=1920"
        poster="https://images.unsplash.com/photo-1541643600914-78b084683601?w=1200&q=80"
      />

      <div className="hero__overlay hero__overlay--bottom" />
      <div className="hero__overlay hero__overlay--left" />
      <div className="hero__overlay hero__overlay--vignette" />

      <div className="hero__meta">
        <span className="hero__meta-line" />
        <span className="hero__meta-text">Maison de Parfum</span>
        <span className="hero__meta-line" />
      </div>

      <div className="hero__badges">
        <span className="hero__badge-pill">Luxury</span>
        <span className="hero__badge-pill">New Season</span>
      </div>

      <div className="hero__content">
        <span className="hero__eyebrow">
          <span className="hero__eyebrow-dot" />
          Exclusive Edition 2025
        </span>
        <h1 className="hero__title">
          The Art of<br />
          <em>Silence</em>
        </h1>
        <p className="hero__sub">
          A fragrance that speaks without words — crafted for those who leave a lasting impression.
        </p>
        <div className="hero__actions">
          <Link to="/new-arrivals" className="hero__btn hero__btn--primary">
            Explore Collection
          </Link>
          <Link to="/about" className="hero__btn hero__btn--ghost">
            Our Story
          </Link>
        </div>
      </div>

      <div className="hero__stats">
        <div className="hero__stat">
          <span className="hero__stat-num">120+</span>
          <span className="hero__stat-label">Fragrances</span>
        </div>
        <div className="hero__stat-divider" />
        <div className="hero__stat">
          <span className="hero__stat-num">18</span>
          <span className="hero__stat-label">Countries</span>
        </div>
        <div className="hero__stat-divider" />
        <div className="hero__stat">
          <span className="hero__stat-num">4.9★</span>
          <span className="hero__stat-label">Customer Rating</span>
        </div>
      </div>

      <button className="hero__mute" onClick={toggleMute} aria-label="Toggle mute">
        {muted ? "🔇" : "🔊"}
      </button>

      <div className="hero__progress">
        <div className="hero__bar" />
      </div>
    </section>
  );
};

// ── PRODUCT CARD ──────────────────────────────────────────────────────────────
const ProductCard = ({ item }) => {
  const { addToCart} = useCart();
  const [nameAdded, setNameAdded] = useState(false);

  const handleNameClick = () => {
    addToCart(item);
    setNameAdded(true);
    setTimeout(() => setNameAdded(false), 1500);
  };

  return (
    <div className="product-card">
      <div className="product-card__img-wrap">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="product-card__body">
        <p className="product-card__brand">{item.brand}</p>

        {/* Clickable name — triggers addToCart */}
        <h5
          className={`product-card__name product-card__name--clickable ${
            nameAdded ? "product-card__name--added" : ""
          }`}
          onClick={handleNameClick}
          title="Click to add to cart"
        >
          {nameAdded ? "✓ Added to Cart!" : item.name}
        </h5>

        <div className="product-card__price">
          <span className="price-new">₹{item.price.toLocaleString("en-IN")}</span>
          <span className="price-old">₹{item.oldPrice.toLocaleString("en-IN")}</span>
          <span className="price-badge">
            {Math.round((1 - item.price / item.oldPrice) * 100)}% off
          </span>
        </div>

        <AddToCartButton product={item} />
      </div>
    </div>
  );
};

// ── COLLECTION SECTION ────────────────────────────────────────────────────────
const CollectionSection = () => (
  <section className="section">
    <div className="section__head">
      <h2 className="section__title">Perfume Collection</h2>
      <Link to="/new-arrivals" className="section__link">
        View All <ArrowUpRight size={15} />
      </Link>
    </div>
    <p className="section__sub">
      Shop the Latest Styles: Stay ahead of the curve with our newest arrivals
    </p>
    <div className="products-grid">
      {COLLECTION_PRODUCTS.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
      <div className="discover-card" style={{ height: "67%", marginTop: "35%" }}>
        <p>Discover<br />New Items</p>
        <Link to="/new-arrivals" className="discover-btn">
          <ArrowUpRight size={28} />
        </Link>
      </div>
    </div>
  </section>
);

// ── BEST SELLER SECTION ───────────────────────────────────────────────────────
const BestSellerSection = () => (
  <section className="section section--alt">
    <div className="section__head">
      <h2 className="section__title">Best Sellers</h2>
      <Link to="/best-sellers" className="section__link">
        View All <ArrowUpRight size={25} />
      </Link>
    </div>
    <p className="section__sub">
      Shop the Latest Styles: Stay ahead of the curve with our newest arrivals
    </p>
    <div className="products-grid">
      {BESTSELLER_PRODUCTS.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
      <div className="discover-card" style={{ height: "67%", marginTop: "35%" }}>
        <p>Discover<br />New Items</p>
        <Link to="/best-sellers" className="discover-btn">
          <ArrowUpRight size={28} />
        </Link>
      </div>
    </div>
  </section>
);

// ── HOME ──────────────────────────────────────────────────────────────────────
const Home = () => (
  <>
    <Hero />
    <CollectionSection />
    <BestSellerSection />

    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@300;400;500&display=swap');

      *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

      :root {
        --accent: #c9956b;
        --accent-light: #e8c5a8;
        --black: #0a0a0a;
        --white: #ffffff;
        --off: #f7f4f0;
        --muted: #888;
        --font-serif: 'Cormorant Garamond', Georgia, serif;
        --font-sans: 'Jost', sans-serif;
        --radius: 10px;
      }

      body { font-family: var(--font-sans); background: var(--white); overflow-x: hidden; }

      /* ─── HERO ─────────────────────────────────────────────────────────────── */
      .hero {
        position: relative;
        width: 100%;
        height: 92vh;
        min-height: 600px;
        max-height: 900px;
        overflow: hidden;
        background: #090806;
      }
      .hero__video {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: 0;
        animation: heroZoom 18s ease-in-out infinite alternate;
      }
      @keyframes heroZoom {
        from { transform: scale(1); }
        to   { transform: scale(1.06); }
      }
      .hero__overlay {
        position: absolute;
        inset: 0;
        z-index: 1;
        pointer-events: none;
      }
      .hero__overlay--bottom {
        background: linear-gradient(to top, rgba(5,4,3,0.92) 0%, rgba(5,4,3,0.55) 35%, transparent 65%);
      }
      .hero__overlay--left {
        background: linear-gradient(to right, rgba(5,4,3,0.80) 0%, rgba(5,4,3,0.35) 45%, transparent 75%);
      }
      .hero__overlay--vignette {
        background: radial-gradient(ellipse at center, transparent 40%, rgba(5,4,3,0.50) 100%);
      }
      .hero__meta {
        position: absolute;
        top: 32px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 3;
        display: flex;
        align-items: center;
        gap: 14px;
        opacity: 0;
        animation: fadeDown 1s ease 0.4s forwards;
      }
      @keyframes fadeDown {
        from { opacity: 0; transform: translateX(-50%) translateY(-10px); }
        to   { opacity: 1; transform: translateX(-50%) translateY(0); }
      }
      .hero__meta-line {
        display: block;
        width: 48px;
        height: 1px;
        background: rgba(255,255,255,0.35);
      }
      .hero__meta-text {
        font-family: var(--font-sans);
        font-size: 10px;
        letter-spacing: 3.5px;
        text-transform: uppercase;
        color: rgba(255,255,255,0.55);
      }
      .hero__badges {
        position: absolute;
        top: 28px;
        right: 28px;
        z-index: 3;
        display: flex;
        gap: 10px;
        opacity: 0;
        animation: fadeIn 0.9s ease 0.6s forwards;
      }
      .hero__badge-pill {
        padding: 6px 16px;
        border-radius: 20px;
        background: rgba(255,255,255,0.07);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255,255,255,0.15);
        color: rgba(255,255,255,0.75);
        font-family: var(--font-sans);
        font-size: 10px;
        letter-spacing: 2px;
        text-transform: uppercase;
      }
      .hero__content {
        position: absolute;
        z-index: 3;
        bottom: 18%;
        left: 7%;
        max-width: 600px;
        opacity: 0;
        animation: fadeUp 1s ease 0.3s forwards;
      }
      @keyframes fadeUp {
        from { opacity: 0; transform: translateY(28px); }
        to   { opacity: 1; transform: translateY(0); }
      }
      @keyframes fadeIn {
        from { opacity: 0; }
        to   { opacity: 1; }
      }
      .hero__eyebrow {
        display: flex;
        align-items: center;
        gap: 10px;
        font-family: var(--font-sans);
        font-size: 11px;
        letter-spacing: 3px;
        text-transform: uppercase;
        color: var(--accent-light);
        margin-bottom: 20px;
      }
      .hero__eyebrow-dot {
        display: inline-block;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: var(--accent);
        animation: pulse 2.4s ease-in-out infinite;
      }
      @keyframes pulse {
        0%, 100% { opacity: 1; transform: scale(1); }
        50% { opacity: 0.5; transform: scale(0.7); }
      }
      .hero__title {
        font-family: var(--font-serif);
        font-size: clamp(52px, 7vw, 96px);
        font-weight: 300;
        line-height: 1.02;
        color: var(--white);
        margin-bottom: 22px;
        letter-spacing: -0.5px;
      }
      .hero__title em {
        font-style: italic;
        color: var(--accent-light);
      }
      .hero__sub {
        font-family: var(--font-sans);
        font-size: 16px;
        font-weight: 300;
        line-height: 1.85;
        color: rgba(255,255,255,0.62);
        margin-bottom: 36px;
        max-width: 440px;
      }
      .hero__actions {
        display: flex;
        align-items: center;
        gap: 16px;
        flex-wrap: wrap;
      }
      .hero__btn {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        padding: 15px 32px;
        text-decoration: none;
        font-family: var(--font-sans);
        font-size: 13px;
        font-weight: 500;
        letter-spacing: 1.2px;
        text-transform: uppercase;
        border-radius: 3px;
        transition: all 0.3s ease;
      }
      .hero__btn--primary {
        background: var(--accent);
        color: var(--white);
        border: 1px solid var(--accent);
      }
      .hero__btn--primary:hover {
        background: transparent;
        color: var(--accent-light);
        border-color: var(--accent-light);
      }
      .hero__btn--ghost {
        background: transparent;
        color: rgba(255,255,255,0.65);
        border: 1px solid rgba(255,255,255,0.25);
      }
      .hero__btn--ghost:hover {
        color: var(--white);
        border-color: rgba(255,255,255,0.55);
        background: rgba(255,255,255,0.06);
      }
      .hero__stats {
        position: absolute;
        bottom: 80px;
        right: 6%;
        z-index: 3;
        display: flex;
        align-items: center;
        gap: 28px;
        background: rgba(255,255,255,0.06);
        backdrop-filter: blur(12px);
        border: 1px solid rgba(255,255,255,0.10);
        padding: 18px 28px;
        border-radius: 6px;
        opacity: 0;
        animation: fadeIn 1s ease 0.8s forwards;
      }
      .hero__stat {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4px;
      }
      .hero__stat-num {
        font-family: var(--font-serif);
        font-size: 22px;
        font-weight: 400;
        color: var(--white);
        line-height: 1;
      }
      .hero__stat-label {
        font-family: var(--font-sans);
        font-size: 10px;
        letter-spacing: 1.5px;
        text-transform: uppercase;
        color: rgba(255,255,255,0.45);
      }
      .hero__stat-divider {
        width: 1px;
        height: 36px;
        background: rgba(255,255,255,0.15);
      }
      .hero__mute {
        position: absolute;
        bottom: 28px;
        right: 28px;
        z-index: 4;
        width: 44px;
        height: 44px;
        border-radius: 50%;
        background: rgba(255,255,255,0.08);
        backdrop-filter: blur(8px);
        border: 1px solid rgba(255,255,255,0.18);
        color: white;
        font-size: 16px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 0.3s;
      }
      .hero__mute:hover { background: rgba(255,255,255,0.18); }
      .hero__progress {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 2px;
        background: rgba(255,255,255,0.08);
        z-index: 4;
      }
      .hero__bar {
        height: 100%;
        background: linear-gradient(to right, var(--accent), var(--accent-light));
        animation: progress 20s linear infinite;
      }
      @keyframes progress { from { width: 0%; } to { width: 100%; } }

      /* ─── SECTIONS ─────────────────────────────────────────────────────────── */
      .section { padding: 80px 40px; max-width: 1400px; margin: 0 auto; }
      .section--alt { background: var(--off); max-width: 100%; padding: 80px 40px; }
      .section--alt .section__head,
      .section--alt .section__sub,
      .section--alt .products-grid { max-width: 1400px; margin-left: auto; margin-right: auto; }
      .section__head { display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 10px; }
      .section__title { font-family: var(--font-serif); font-size: clamp(28px, 3vw, 44px); color: var(--black); font-weight: 400; }
      .section__link { font-family: var(--font-sans); font-size: 12px; letter-spacing: 1.5px; text-transform: uppercase; color: var(--accent); text-decoration: none; display: flex; align-items: center; gap: 4px; transition: gap 0.2s; }
      .section__link:hover { gap: 8px; }
      .section__sub { font-family: var(--font-sans); font-size: 14px; color: var(--muted); margin-bottom: 40px; }

      /* ─── PRODUCTS GRID ────────────────────────────────────────────────────── */
      .products-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 28px; margin-top: 36px; }

      /* ─── PRODUCT CARD ─────────────────────────────────────────────────────── */
      .product-card { background: var(--white); border-radius: var(--radius); overflow: hidden; box-shadow: 0 2px 16px rgba(0,0,0,0.07); transition: transform 0.3s, box-shadow 0.3s; display: flex; flex-direction: column; }
      .product-card:hover { transform: translateY(-6px); box-shadow: 0 12px 32px rgba(0,0,0,0.12); }
      .product-card__img-wrap { position: relative; overflow: hidden; }
      .product-card__img-wrap img { width: 100%; height: 280px; object-fit: cover; display: block; transition: transform 0.4s; }
      .product-card:hover .product-card__img-wrap img { transform: scale(1.06); }
      .product-card__body { padding: 18px; display: flex; flex-direction: column; flex: 1; }
      .product-card__brand { font-size: 10px; letter-spacing: 2px; text-transform: uppercase; color: var(--muted); margin-bottom: 6px; }

      /* ─── PRODUCT NAME — CLICKABLE ─────────────────────────────────────────── */
      .product-card__name {
        font-family: var(--font-serif);
        font-size: 22px;
        font-weight: 400;
        color: var(--black);
        margin-bottom: 8px;
      }
      .product-card__name--clickable {
        cursor: pointer;
        transition: color 0.25s ease;
        user-select: none;
      }
      .product-card__name--clickable:hover {
        color: var(--accent);
      }
      .product-card__name--added {
        color: var(--accent) !important;
        font-size: 17px;
        letter-spacing: 0.3px;
        transition: all 0.3s ease;
      }

      .product-card__price { display: flex; align-items: center; gap: 8px; margin-bottom: 14px; flex-wrap: wrap; }
      .price-new { font-size: 18px; font-weight: 500; color: var(--black); }
      .price-old { font-size: 14px; color: var(--muted); text-decoration: line-through; }
      .price-badge { font-size: 11px; padding: 2px 8px; border-radius: 20px; background: #fef2e9; color: var(--accent); font-weight: 500; }

      /* ─── DISCOVER CARD ────────────────────────────────────────────────────── */
      .discover-card { background: var(--white); border: 1.5px solid var(--black); border-radius: var(--radius); display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 20px; padding: 40px 20px; text-align: center; }
      .discover-card p { font-family: var(--font-serif); font-size: 24px; font-weight: 300; color: var(--black); line-height: 1.3; }
      .discover-btn { width: 60px; height: 60px; border: 1.5px solid var(--black); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: var(--black); text-decoration: none; transition: 0.3s; }
      .discover-btn:hover { background: var(--black); color: white; }

      /* ─── RESPONSIVE ───────────────────────────────────────────────────────── */
      @media (max-width: 1024px) {
        .products-grid { grid-template-columns: repeat(2, 1fr); }
        .hero__stats { display: none; }
      }
      @media (max-width: 768px) {
        .hero { height: 70vh; min-height: 480px; }
        .hero__content { left: 5%; right: 5%; bottom: 12%; max-width: 100%; }
        .hero__title { font-size: 46px; }
        .hero__sub { font-size: 14px; }
        .hero__badges { display: none; }
        .hero__meta { display: none; }
        .section { padding: 60px 20px; }
        .section--alt { padding: 60px 20px; }
        .products-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
      }
      @media (max-width: 480px) {
        .hero { height: 55vh; }
        .hero__title { font-size: 38px; }
        .hero__btn { padding: 13px 22px; font-size: 12px; }
        .hero__actions { flex-direction: column; align-items: flex-start; }
        .product-card__img-wrap img { height: 200px; }
      }
    `}</style>
  </>
);

export default Home;