
import { useParams } from "react-router-dom";
import AddToCartButton from "../components/common/AddToCartButton";

const imgs = {
  p1:  "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500",
  p2:  "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&q=80",
  p3:  "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&q=80",
  p4:  "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&q=80",
  p5:  "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=400&q=80",
  p6:  "https://picsum.photos/seed/perfume6/400/400",
  p7:  "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&q=80",
  p8:  "https://images.unsplash.com/photo-1506377872008-6645d9d29ef7?w=400&q=80",
  p9:  "https://images.unsplash.com/photo-1547887538-047f4f5e0e31?w=400&q=80",
  p10: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400&q=80",
  p11: "https://images.unsplash.com/photo-1601295452898-2e9c3f9e0a2c?w=400&q=80",
  p12: "https://images.unsplash.com/photo-1583467875263-d50b37a6e39a?w=400&q=80",
};

const allProducts = [
  // Him
  { id: 401, name: "Noir Intense",       category: "him",             price: 2499, oldPrice: 3299, img: imgs.p1  },
  { id: 402, name: "Cedar Oud",          category: "him",             price: 3199, oldPrice: 3999, img: imgs.p2  },
  { id: 403, name: "Dark Vetiver",       category: "him",             price: 2799, oldPrice: 3499, img: imgs.p3  },
  { id: 404, name: "Smoky Leather",      category: "him",             price: 3599, oldPrice: 4499, img: imgs.p4  },
  { id: 405, name: "Aqua Marine",        category: "him",             price: 1999, oldPrice: 2599, img: imgs.p5  },
  { id: 406, name: "Black Saffron",      category: "him",             price: 4299, oldPrice: 5299, img: imgs.p6  },
  { id: 407, name: "Wood & Musk",        category: "him",             price: 2699, oldPrice: 3399, img: imgs.p7  },
  { id: 408, name: "Royal Amber",        category: "him",             price: 3899, oldPrice: 4899, img: imgs.p8  },
  // Her
  { id: 409, name: "Velvet Rose",        category: "her",             price: 2799, oldPrice: 3499, img: imgs.p9  },
  { id: 410, name: "Floral Musk",        category: "her",             price: 1999, oldPrice: 2599, img: imgs.p10 },
  { id: 411, name: "Pink Peony",         category: "her",             price: 2499, oldPrice: 3099, img: imgs.p11 },
  { id: 412, name: "Jasmine Bloom",      category: "her",             price: 3199, oldPrice: 3999, img: imgs.p12 },
  { id: 413, name: "Sweet Vanilla",      category: "her",             price: 2299, oldPrice: 2999, img: imgs.p1  },
  { id: 414, name: "Iris Noir",          category: "her",             price: 3499, oldPrice: 4299, img: imgs.p2  },
  { id: 415, name: "Cherry Blossom",     category: "her",             price: 1899, oldPrice: 2499, img: imgs.p3  },
  { id: 416, name: "Satin Orchid",       category: "her",             price: 2999, oldPrice: 3699, img: imgs.p4  },
  // Unisex
  { id: 417, name: "Aqua Libre",         category: "unisex",          price: 2299, oldPrice: 2999, img: imgs.p5  },
  { id: 418, name: "White Amber",        category: "unisex",          price: 3499, oldPrice: 4299, img: imgs.p6  },
  { id: 419, name: "Sandalwood Mist",    category: "unisex",          price: 2799, oldPrice: 3499, img: imgs.p7  },
  { id: 420, name: "Green Tea Zen",      category: "unisex",          price: 1999, oldPrice: 2599, img: imgs.p8  },
  { id: 421, name: "Bergamot & Cedar",   category: "unisex",          price: 3299, oldPrice: 3999, img: imgs.p9  },
  { id: 422, name: "Midnight Oud",       category: "unisex",          price: 4499, oldPrice: 5499, img: imgs.p10 },
  { id: 423, name: "Citrus Breeze",      category: "unisex",          price: 2199, oldPrice: 2799, img: imgs.p11 },
  { id: 424, name: "Woody Amber",        category: "unisex",          price: 2699, oldPrice: 3399, img: imgs.p12 },
  // Limited Edition
  { id: 425, name: "Royal Oud Edition",  category: "limited-edition", price: 5999, oldPrice: 7499, img: imgs.p1  },
  { id: 426, name: "Gold Reserve",       category: "limited-edition", price: 6499, oldPrice: 7999, img: imgs.p3  },
  { id: 427, name: "Platinum Rose",      category: "limited-edition", price: 5499, oldPrice: 6999, img: imgs.p7  },
  { id: 428, name: "Rare Saffron",       category: "limited-edition", price: 7299, oldPrice: 8999, img: imgs.p9  },
  // Gift Sets
  { id: 429, name: "Duo Gift Set",       category: "gift-sets",       price: 4499, oldPrice: 5499, img: imgs.p2  },
  { id: 430, name: "Luxury 3-Pack",      category: "gift-sets",       price: 6999, oldPrice: 8499, img: imgs.p5  },
  { id: 431, name: "His & Hers Set",     category: "gift-sets",       price: 5999, oldPrice: 7499, img: imgs.p8  },
  { id: 432, name: "Mini Discovery Set", category: "gift-sets",       price: 2999, oldPrice: 3799, img: imgs.p11 },
];

const categoryLabels = {
  him:               "Fragrance for Him",
  her:               "Fragrance for Her",
  unisex:            "Unisex Fragrance",
  "limited-edition": "Limited Edition",
  "gift-sets":       "Gift Sets",
};

const heroImgs = {
  him:               "https://picsum.photos/seed/him1/900/500",
  her:               "https://picsum.photos/seed/her1/900/500",
  unisex:            "https://picsum.photos/seed/unisex1/900/500",
  "limited-edition": "https://picsum.photos/seed/limited1/900/500",
  "gift-sets":       "https://picsum.photos/seed/gift1/900/500",
  default:           "https://picsum.photos/seed/perfume0/900/500",
};

const Perfumes = () => {
  const { category } = useParams();

  const products = category ? allProducts.filter((p) => p.category === category) : allProducts;
  const heading  = category ? categoryLabels[category] : "All Perfumes";
  const hero1    = heroImgs[category] || heroImgs.default;
  const hero2    = `https://picsum.photos/seed/${category ?? "all"}2/900/500`;

  return (
    <>
      <div className="container-fluid py-5 px-4">
        <h2 className="mb-4 perf-heading">{heading}</h2>

        {/* Hero images */}
        <div className="row g-3 mb-5">
          <div className="col-md-6 col-12">
            <div className="perf-hero-img-wrap">
              <img src={hero1} alt={heading} className="perf-hero-img" />
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="perf-hero-img-wrap">
              <img src={hero2} alt="Luxury Perfume" className="perf-hero-img" />
            </div>
          </div>
        </div>

        {/* Product grid */}
        <div className="row g-4">
          {products.length === 0 ? (
            <p className="text-muted">Is category mein koi product nahi hai.</p>
          ) : (
            products.map((product) => {
              const disc = Math.round((1 - product.price / product.oldPrice) * 100);
              return (
                <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 col-12">
                  <div className="perf-card">
                    <div className="perf-card__img">
                      <img src={product.img} alt={product.name} />
                      <span className="perf-card__badge">{categoryLabels[product.category]}</span>
                    </div>
                    <div className="perf-card__body">
                      <span className="perf-card__cat">{categoryLabels[product.category]}</span>
                      <h6 className="perf-card__name">{product.name}</h6>
                      <div className="perf-card__price">
                        <span className="price-new">₹{product.price.toLocaleString("en-IN")}</span>
                        <span className="price-old">₹{product.oldPrice.toLocaleString("en-IN")}</span>
                        <span className="price-badge">{disc}% off</span>
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

        .perf-heading {
          font-family: 'DM Serif Display', serif;
          letter-spacing: 2px;
          font-size: clamp(26px, 3vw, 40px);
        }

        /* Hero */
        .perf-hero-img-wrap {
          overflow: hidden;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
        }
        .perf-hero-img {
          width: 100%;
          height: clamp(220px, 35vw, 460px);
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }
        .perf-hero-img-wrap:hover .perf-hero-img {
          transform: scale(1.04);
        }

        /* Card */
        .perf-card {
          background: #ffffff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 2px 16px rgba(0,0,0,0.07);
          display: flex;
          flex-direction: column;
          height: 100%;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .perf-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 14px 36px rgba(0,0,0,0.13);
        }

        /* Card image */
        .perf-card__img {
          position: relative;
          overflow: hidden;
        }
        .perf-card__img img {
          width: 100%;
          height: 220px;
          object-fit: cover;
          display: block;
          transition: transform 0.45s ease;
        }
        .perf-card:hover .perf-card__img img {
          transform: scale(1.07);
        }
        .perf-card__badge {
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
        .perf-card__body {
          padding: 16px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .perf-card__cat {
          font-size: 10px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #888;
          margin-bottom: 4px;
          font-family: 'DM Sans', sans-serif;
        }
        .perf-card__name {
          font-family: 'DM Serif Display', serif;
          font-size: 18px;
          color: #0e0e0e;
          margin-bottom: 10px;
        }
        .perf-card__price {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 14px;
          flex-wrap: wrap;
        }
        .price-new {
          font-size: 16px;
          font-weight: 600;
          color: #0e0e0e;
        }
        .price-old {
          font-size: 13px;
          color: #888;
          text-decoration: line-through;
        }
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
};

export default Perfumes;