
import React from "react";
import AddToCartButton from "../components/common/AddToCartButton";
import img from "../assets/images/ChatGPT Image May 23, 2026, 05_00_58 PM.png";

const perfumes = [
  { id: 301, image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=500",                           name: "Midnight Oud",  brand: "Luxury Essence",  price: 7999, oldPrice: 9999,  description: "Deep oud aur warm amber ka luxury blend."  },
  { id: 302, image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=500",                           name: "Ocean Breeze", brand: "Aqua Mist",       price: 5499, oldPrice: 6999,  description: "Fresh marine notes aur citrus energy."    },
  { id: 303, image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=500",                           name: "Royal Rose",   brand: "Velvet Bloom",    price: 6499, oldPrice: 7999,  description: "Soft rose petals aur vanilla musk."       },
  { id: 304, image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500",                           name: "Golden Musk",  brand: "Elite Aroma",     price: 6999, oldPrice: 8499,  description: "Rich musk fragrance with woody notes."    },
  { id: 305, image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=500&q=80", name: "Black Orchid", brand: "Noir Collection", price: 8999, oldPrice: 10999, description: "Dark floral scent with luxury appeal."    },
  { id: 306, image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=500",                              name: "Velvet Night", brand: "Moon Essence",    price: 5999, oldPrice: 7499,  description: "Warm vanilla and amber combination."      },
  { id: 307, image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=500&q=80", name: "Fresh Citrus", brand: "Sunny Perfumes",  price: 4999, oldPrice: 6499,  description: "Lemon and orange freshness all day."      },
  { id: 308, image: "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?w=500",                           name: "Amber Gold",   brand: "Royal Scents",    price: 7499, oldPrice: 8999,  description: "Premium amber with spicy undertones."     },
];

const BestSeller = () => (
  <>
    <div className="container-fluid py-5 px-4">

      {/* Hero Banner */}
      <div className="bs-hero-wrap mb-5">
        <img src={img} alt="Best Seller" className="bs-hero-img" />
        <div className="bs-hero-overlay">
          <span className="bs-hero-tag">Bestsellers</span>
          <h1 className="bs-hero-title">Loved by<br />Thousands</h1>
          <p className="bs-hero-sub">Our most-adored fragrances, chosen by you</p>
        </div>
      </div>

      {/* Section heading */}
      <div className="mb-4">
        <h2 className="bs-heading">Best Seller Perfumes</h2>
        <p className="bs-sub">Shop the Latest Styles: Stay ahead of the curve with our newest arrivals</p>
      </div>

      {/* Product Grid */}
      <div className="row g-4">
        {perfumes.map((item) => {
          const disc = Math.round((1 - item.price / item.oldPrice) * 100);
          return (
            <div key={item.id} className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="bs-card">
                <div className="bs-card__img">
                  <img src={item.image} alt={item.name} />
                  <span className="bs-card__badge">{item.brand}</span>
                </div>
                <div className="bs-card__body">
                  <span className="bs-card__brand">{item.brand}</span>
                  <h5 className="bs-card__name">{item.name}</h5>
                  <p className="bs-card__desc">{item.description}</p>
                  <div className="bs-card__price">
                    <span className="price-new">₹{item.price.toLocaleString("en-IN")}</span>
                    <span className="price-old">₹{item.oldPrice.toLocaleString("en-IN")}</span>
                    <span className="price-badge">{disc}% off</span>
                  </div>
                  <AddToCartButton product={item} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>

    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@300;400;500&display=swap');

      /* ── HERO ── */
      .bs-hero-wrap {
        position: relative;
        overflow: hidden;
        border-radius: 14px;
      }
      .bs-hero-img {
        width: 100%;
        height: clamp(260px, 40vw, 460px);
        object-fit: cover;
        display: block;
        transition: transform 0.6s ease;
      }
      .bs-hero-wrap:hover .bs-hero-img {
        transform: scale(1.04);
      }
      .bs-hero-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(110deg, rgba(0,0,0,0.68) 0%, rgba(0,0,0,0.25) 60%, transparent 100%);
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding: clamp(20px, 4vw, 48px);
      }
      .bs-hero-tag {
        display: inline-block;
        padding: 5px 14px;
        border-radius: 30px;
        border: 1px solid rgba(201,149,107,0.6);
        color: #c9956b;
        font-family: 'DM Sans', sans-serif;
        font-size: 11px;
        letter-spacing: 2px;
        text-transform: uppercase;
        margin-bottom: 14px;
        width: fit-content;
      }
      .bs-hero-title {
        font-family: 'DM Serif Display', serif;
        font-size: clamp(36px, 5vw, 72px);
        line-height: 1.05;
        color: #ffffff;
        margin-bottom: 12px;
      }
      .bs-hero-sub {
        font-family: 'DM Sans', sans-serif;
        font-size: 15px;
        color: rgba(255,255,255,0.72);
        margin: 0;
      }

      /* ── HEADINGS ── */
      .bs-heading {
        font-family: 'DM Serif Display', serif;
        font-size: clamp(26px, 3vw, 40px);
        letter-spacing: 1.5px;
        color: #0e0e0e;
        margin-bottom: 6px;
      }
      .bs-sub {
        font-family: 'DM Sans', sans-serif;
        font-size: 14px;
        color: #888;
      }

      /* ── CARD ── */
      .bs-card {
        background: #ffffff;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 2px 16px rgba(0,0,0,0.07);
        display: flex;
        flex-direction: column;
        height: 100%;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }
      .bs-card:hover {
        transform: translateY(-7px);
        box-shadow: 0 14px 36px rgba(0,0,0,0.13);
      }

      /* Card image */
      .bs-card__img {
        position: relative;
        overflow: hidden;
      }
      .bs-card__img img {
        width: 100%;
        height: 240px;
        object-fit: cover;
        display: block;
        transition: transform 0.45s ease;
      }
      .bs-card:hover .bs-card__img img {
        transform: scale(1.07);
      }
      .bs-card__badge {
        position: absolute;
        top: 10px;
        left: 10px;
        background: rgba(0,0,0,0.6);
        color: #fff;
        font-size: 10px;
        letter-spacing: 1.2px;
        text-transform: uppercase;
        padding: 4px 10px;
        border-radius: 20px;
        font-family: 'DM Sans', sans-serif;
      }

      /* Card body */
      .bs-card__body {
        padding: 16px;
        display: flex;
        flex-direction: column;
        flex: 1;
      }
      .bs-card__brand {
        font-size: 10px;
        letter-spacing: 1.5px;
        text-transform: uppercase;
        color: #888;
        margin-bottom: 4px;
        font-family: 'DM Sans', sans-serif;
      }
      .bs-card__name {
        font-family: 'DM Serif Display', serif;
        font-size: 18px;
        color: #0e0e0e;
        margin-bottom: 6px;
      }
      .bs-card__desc {
        font-family: 'DM Sans', sans-serif;
        font-size: 13px;
        color: #888;
        line-height: 1.6;
        flex: 1;
        margin-bottom: 12px;
      }
      .bs-card__price {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 14px;
        flex-wrap: wrap;
      }
      .price-new  { font-size: 16px; font-weight: 600; color: #0e0e0e; }
      .price-old  { font-size: 13px; color: #888; text-decoration: line-through; }
      .price-badge {
        font-size: 10px;
        padding: 2px 8px;
        border-radius: 20px;
        background: #fef2e9;
        color: #c9956b;
        font-weight: 500;
        font-family: 'DM Sans', sans-serif;
      }
    `}</style>
  </>
);

export default BestSeller;