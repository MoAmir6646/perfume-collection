
import { useParams } from "react-router-dom";
import AddToCartButton from "../components/common/AddToCartButton";

const imgs = {
  o1:  "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500&q=80",
  o2:  "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&q=80",
  o3:  "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&q=80",
  o4:  "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&q=80",
  o5:  "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=400&q=80",
  o6:  "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&q=80",
  o7:  "https://images.unsplash.com/photo-1506377872008-6645d9d29ef7?w=400&q=80",
  o8:  "https://images.unsplash.com/photo-1547887538-047f4f5e0e31?w=400&q=80",
  o9:  "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400&q=80",
  o10: "https://images.unsplash.com/photo-1583467875263-d50b37a6e39a?w=400&q=80",
  o11: "https://images.unsplash.com/photo-1601295452898-2e9c3f9e0a2c?w=400&q=80",
  o12: "https://images.unsplash.com/photo-1557170334-a9632e77c6e4?w=400&q=80",
};

const allProducts = [
  // Eid ul-Fitr
  { id: 501, name: "Rose Oud Celebration", category: "eid-ul-fitr", price: 2999, oldPrice: 3999, badge: "Eid Special", img: imgs.o1 },
  { id: 502, name: "Saffron Royale",       category: "eid-ul-fitr", price: 1899, oldPrice: 2499, badge: "Best Seller", img: imgs.o2 },
  { id: 503, name: "Jasmine Fitr",         category: "eid-ul-fitr", price: 1299, oldPrice: 1799, badge: "New",         img: imgs.o3 },
  { id: 504, name: "Amber Eid",            category: "eid-ul-fitr", price: 3299, oldPrice: 4299, badge: "25% Off",     img: imgs.o4 },
  { id: 505, name: "White Musk Fitr",      category: "eid-ul-fitr", price: 999,  oldPrice: 1399, badge: "Popular",     img: imgs.o5 },
  { id: 506, name: "Eid Gift Set",         category: "eid-ul-fitr", price: 4499, oldPrice: 5999, badge: "Gift Set",    img: imgs.o6 },
  { id: 507, name: "Floral Mubarak",       category: "eid-ul-fitr", price: 2199, oldPrice: 2799, badge: "New",         img: imgs.o7 },
  { id: 508, name: "Golden Oud Fitr",      category: "eid-ul-fitr", price: 3799, oldPrice: 4999, badge: "Limited",     img: imgs.o8 },
  // Eid ul-Adha
  { id: 509, name: "Oud Al Qurban",        category: "eid-ul-adha", price: 2799, oldPrice: 3699, badge: "Limited",     img: imgs.o9  },
  { id: 510, name: "Musk Al Adha",         category: "eid-ul-adha", price: 1599, oldPrice: 2199, badge: "Best Seller", img: imgs.o10 },
  { id: 511, name: "Saffron Sacrifice",    category: "eid-ul-adha", price: 2199, oldPrice: 2999, badge: "26% Off",     img: imgs.o11 },
  { id: 512, name: "Zamzam Musk",          category: "eid-ul-adha", price: 1099, oldPrice: 1499, badge: "Popular",     img: imgs.o12 },
  { id: 513, name: "Dark Leather Adha",    category: "eid-ul-adha", price: 3499, oldPrice: 4599, badge: "New",         img: imgs.o1  },
  { id: 514, name: "Adha Gift Collection", category: "eid-ul-adha", price: 5499, oldPrice: 7999, badge: "Gift Set",    img: imgs.o3  },
  { id: 515, name: "Royal Oud Adha",       category: "eid-ul-adha", price: 4299, oldPrice: 5799, badge: "Eid Special", img: imgs.o5  },
  { id: 516, name: "Amber Qurbani",        category: "eid-ul-adha", price: 2599, oldPrice: 3299, badge: "21% Off",     img: imgs.o7  },
  // Special Offers
  { id: 517, name: "Midnight Oud",         category: "special",     price: 3999, oldPrice: 5499, badge: "27% Off",     img: imgs.o2  },
  { id: 518, name: "Velvet Rose Special",  category: "special",     price: 1799, oldPrice: 2499, badge: "Flash Sale",  img: imgs.o4  },
  { id: 519, name: "Cedar & Saffron",      category: "special",     price: 2499, oldPrice: 3199, badge: "Deal",        img: imgs.o6  },
  { id: 520, name: "White Amber Special",  category: "special",     price: 2999, oldPrice: 3999, badge: "25% Off",     img: imgs.o8  },
  { id: 521, name: "Floral Noir Deal",     category: "special",     price: 1499, oldPrice: 2199, badge: "Flash Sale",  img: imgs.o10 },
  { id: 522, name: "Luxury 3-Pack Offer",  category: "special",     price: 5999, oldPrice: 8499, badge: "Bundle",      img: imgs.o12 },
  { id: 523, name: "Bergamot Bliss",       category: "special",     price: 1299, oldPrice: 1799, badge: "Deal",        img: imgs.o9  },
  { id: 524, name: "Oud & Sandalwood",     category: "special",     price: 3499, oldPrice: 4999, badge: "30% Off",     img: imgs.o11 },
];

const categoryLabels = {
  "eid-ul-fitr": "Eid ul-Fitr Special",
  "eid-ul-adha": "Eid ul-Adha Special",
  special:       "Special Offers",
};

const heroImgs = {
  "eid-ul-fitr": "https://picsum.photos/seed/eidfitr1/900/500",
  "eid-ul-adha": "https://picsum.photos/seed/eidadha1/900/500",
  special:       "https://picsum.photos/seed/special1/900/500",
  default:       "https://picsum.photos/seed/offers0/900/500",
};

const badgeColors = {
  "Eid Special": { background: "#f5ede2", color: "#b5783c" },
  "Best Seller": { background: "#e8f5e9", color: "#2e7d32" },
  "Gift Set":    { background: "#ede7f6", color: "#5e35b1" },
  "New":         { background: "#e3f2fd", color: "#1565c0" },
  "Limited":     { background: "#fce4ec", color: "#c62828" },
  "Popular":     { background: "#fff3e0", color: "#e65100" },
  "Flash Sale":  { background: "#fce4ec", color: "#c62828" },
  "Bundle":      { background: "#ede7f6", color: "#5e35b1" },
  "Deal":        { background: "#e8f5e9", color: "#2e7d32" },
};

const getBadgeStyle = (badge) => badgeColors[badge] || { background: "#f5ede2", color: "#b5783c" };

const Offer = () => {
  const { category } = useParams();

  const products = category ? allProducts.filter((p) => p.category === category) : allProducts;
  const heading  = category ? categoryLabels[category] : "All Offers";
  const hero1    = heroImgs[category] || heroImgs.default;
  const hero2    = `https://picsum.photos/seed/${category ?? "offers"}2/900/500`;

  return (
    <>
      <div className="container-fluid py-5 px-4">

        {/* Heading */}
        <h2 className="off-heading mb-4">{heading}</h2>

        {/* Hero images */}
        <div className="row g-3 mb-5">
          <div className="col-md-6 col-12">
            <div className="off-hero-wrap">
              <img src={hero1} alt={heading} className="off-hero-img" />
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="off-hero-wrap">
              <img src={hero2} alt="Special Offer" className="off-hero-img" />
            </div>
          </div>
        </div>

        {/* Product cards */}
        <div className="row g-4">
          {products.length === 0 ? (
            <p className="text-muted">Is category mein koi offer nahi hai.</p>
          ) : (
            products.map((product) => {
              const disc = Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100);
              const bs   = getBadgeStyle(product.badge);
              return (
                <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 col-12">
                  <div className="off-card">

                    {/* Image + overlays */}
                    <div className="off-card__img">
                      <img src={product.img} alt={product.name} />

                      {/* Colored badge (top-left) */}
                      <span className="off-card__label" style={{ background: bs.background, color: bs.color }}>
                        {product.badge}
                      </span>

                      {/* Discount pill (top-right) */}
                      <span className="off-card__disc">{disc}% off</span>
                    </div>

                    {/* Body */}
                    <div className="off-card__body">
                      <span className="off-card__cat">{categoryLabels[product.category]}</span>
                      <h6 className="off-card__name">{product.name}</h6>
                      <div className="off-card__price">
                        <span className="price-new">₹{product.price.toLocaleString("en-IN")}</span>
                        <span className="price-old">₹{product.oldPrice.toLocaleString("en-IN")}</span>
                      </div>
                      <AddToCartButton product={product} />
                    </div>

                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@300;400;500&display=swap');

        /* ── HEADING ── */
        .off-heading {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(26px, 3vw, 40px);
          letter-spacing: 2px;
          color: #0e0e0e;
        }

        /* ── HERO ── */
        .off-hero-wrap {
          overflow: hidden;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
        }
        .off-hero-img {
          width: 100%;
          height: clamp(220px, 35vw, 460px);
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }
        .off-hero-wrap:hover .off-hero-img {
          transform: scale(1.04);
        }

        /* ── CARD ── */
        .off-card {
          background: #ffffff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 2px 16px rgba(0,0,0,0.07);
          display: flex;
          flex-direction: column;
          height: 100%;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .off-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 14px 36px rgba(0,0,0,0.13);
        }

        /* Card image */
        .off-card__img {
          position: relative;
          overflow: hidden;
        }
        .off-card__img img {
          width: 100%;
          height: 220px;
          object-fit: cover;
          display: block;
          transition: transform 0.45s ease;
        }
        .off-card:hover .off-card__img img {
          transform: scale(1.07);
        }

        /* Colored badge top-left */
        .off-card__label {
          position: absolute;
          top: 10px;
          left: 10px;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.8px;
          padding: 4px 10px;
          border-radius: 20px;
          font-family: 'DM Sans', sans-serif;
        }

        /* Discount pill top-right */
        .off-card__disc {
          position: absolute;
          top: 10px;
          right: 10px;
          background: rgba(0,0,0,0.62);
          color: #ffffff;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.8px;
          padding: 4px 10px;
          border-radius: 20px;
          font-family: 'DM Sans', sans-serif;
        }

        /* Card body */
        .off-card__body {
          padding: 16px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .off-card__cat {
          font-size: 10px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #888;
          margin-bottom: 4px;
          font-family: 'DM Sans', sans-serif;
        }
        .off-card__name {
          font-family: 'DM Serif Display', serif;
          font-size: 18px;
          color: #0e0e0e;
          margin-bottom: 10px;
        }
        .off-card__price {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 14px;
          flex-wrap: wrap;
        }
        .price-new { font-size: 16px; font-weight: 600; color: #0e0e0e; }
        .price-old { font-size: 13px; color: #888; text-decoration: line-through; }
      `}</style>
    </>
  );
};

export default Offer;