
// import React from "react";
// import { Link } from "react-router-dom";
// import AddToCartButton from "../components/common/AddToCartButton";
// import img from "../assets/images/ChatGPT Image May 23, 2026, 05_00_58 PM.png";

// const newArrivalsData = [
//   {
//     id: 201,
//     image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=500",
//     name: "Midnight Oud",
//     brand: "Luxury Essence",
//     price: 7999,
//     oldPrice: 9999,
//     description: "Deep oud aur warm amber ka luxury blend.",
//     isTrending: true,
//   },
//   {
//     id: 202,
//     image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=500",
//     name: "Ocean Breeze",
//     brand: "Aqua Mist",
//     price: 5499,
//     oldPrice: 6999,
//     description: "Fresh marine notes aur citrus energy.",
//     isTrending: false,
//   },
//   {
//     id: 203,
//     image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=500",
//     name: "Royal Rose",
//     brand: "Velvet Bloom",
//     price: 6499,
//     oldPrice: 7999,
//     description: "Soft rose petals aur vanilla musk.",
//     isTrending: true,
//   },
//   {
//     id: 204,
//     image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500",
//     name: "Golden Musk",
//     brand: "Elite Aroma",
//     price: 6999,
//     oldPrice: 8499,
//     description: "Rich musk fragrance with woody notes.",
//     isTrending: false,
//   },
//   {
//     id: 205,
//     image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=500&q=80",
//     name: "Black Orchid",
//     brand: "Noir Collection",
//     price: 8999,
//     oldPrice: 10999,
//     description: "Dark floral scent with luxury appeal.",
//     isTrending: false,
//   },
//   {
//     id: 206,
//     image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=500",
//     name: "Velvet Night",
//     brand: "Moon Essence",
//     price: 5999,
//     oldPrice: 7499,
//     description: "Warm vanilla and amber combination.",
//     isTrending: true,
//   },
//   {
//     id: 207,
//     image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=500&q=80",
//     name: "Fresh Citrus",
//     brand: "Sunny Perfumes",
//     price: 4999,
//     oldPrice: 6499,
//     description: "Lemon and orange freshness all day.",
//     isTrending: false,
//   },
//   {
//     id: 208,
//     image: "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?w=500",
//     name: "Amber Gold",
//     brand: "Royal Scents",
//     price: 7499,
//     oldPrice: 8999,
//     description: "Premium amber with spicy undertones.",
//     isTrending: false,
//   },
// ];

// const NewArrival = () => {
//   const featuredProduct = newArrivalsData[0];

//   return (
//     <div style={{ backgroundColor: "#fdfdfb" }}>
//       {/* Hero Banner */}
//       <div className="container-fluid p-0 mb-5">
//         <div className="position-relative" style={{ height: "450px" }}>
//           <img
//             src={img}
//             alt="New Arrival Collection"
//             className="w-100 h-100"
//             style={{ objectFit: "cover" }}
//           />
//           <div
//             className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
//             style={{
//               background:
//                 "linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.2))",
//             }}
//           >
//             <div className="container text-white px-4">
//               <span className="text-uppercase tracking-widest text-warning small fw-bold">
//                 Just Launched
//               </span>
//               <h1 className="display-3 fw-bold my-2">THE NEW ARRIVALS</h1>
//               <p className="fs-5 text-light opacity-75 mb-4">
//                 Explore the season's most anticipated luxury fragrances.
//               </p>
//               <a
//                 href="#collection-grid"
//                 className="btn btn-outline-light rounded-0 px-4 py-2 fw-semibold"
//               >
//                 VIEW COLLECTION
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="container py-4" id="collection-grid">
//         {/* Section Title */}
//         <div className="text-center mb-5">
//           <h2
//             className="fw-bold display-6 text-uppercase"
//             style={{ letterSpacing: "1px" }}
//           >
//             New Arrival Perfumes
//           </h2>
//           <p className="text-secondary small">
//             Stay ahead of the curve with our newly curated premium arrivals
//           </p>
//           <div
//             className="mx-auto mt-2"
//             style={{ height: "2px", width: "50px", backgroundColor: "#000" }}
//           />
//         </div>

//         {/* Product Grid */}
//         <div className="row g-4">
//           {newArrivalsData.map((item) => (
//             <div key={item.id} className="col-lg-3 col-md-6 col-sm-6 col-12">
//               <div className="card h-100 border-0 overflow-hidden position-relative product-card na-card">
//                 <span
//                   className="position-absolute top-0 start-0 bg-dark text-white text-uppercase px-3 py-1 small fw-bold m-3 z-3"
//                   style={{ fontSize: "11px", letterSpacing: "1px" }}
//                 >
//                   New
//                 </span>
//                 <div
//                   className="overflow-hidden na-card-img"
//                   style={{ height: "280px" }}
//                 >
//                   <img
//                     src={item.image}
//                     alt={item.name}
//                     className="w-100 h-100 na-card-image"
//                     style={{ objectFit: "cover" }}
//                   />
//                 </div>
//                 <div className="card-body d-flex flex-column p-3 bg-white">
//                   <span
//                     className="text-muted text-uppercase fw-semibold"
//                     style={{ fontSize: "12px", letterSpacing: "0.5px" }}
//                   >
//                     {item.brand}
//                   </span>
//                   <h5 className="fw-bold my-1 text-dark fs-5">{item.name}</h5>
//                   <p className="small text-secondary flex-grow-1 mb-3">
//                     {item.description}
//                   </p>
//                   <div className="mb-3 d-flex align-items-center gap-2">
//                     <span className="fw-bold fs-5 text-dark">
//                       ₹{item.price.toLocaleString("en-IN")}
//                     </span>
//                     {item.oldPrice && (
//                       <span
//                         className="text-muted small"
//                         style={{ textDecoration: "line-through" }}
//                       >
//                         ₹{item.oldPrice.toLocaleString("en-IN")}
//                       </span>
//                     )}
//                     <span
//                       style={{
//                         fontSize: "11px",
//                         background: "#fef2e9",
//                         color: "#c9956b",
//                         padding: "2px 8px",
//                         borderRadius: "20px",
//                         fontWeight: 500,
//                       }}
//                     >
//                       {Math.round((1 - item.price / item.oldPrice) * 100)}% off
//                     </span>
//                   </div>
//                   <AddToCartButton product={item} />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Featured Product (Niche wala section fix kiya) */}
//         <div className="my-5 pt-5">
//           {/* Added 'na-featured-card' class here for hover lifting and shadow effect */}
//           <div className="row g-0 rounded-3 overflow-hidden border bg-white align-items-center na-featured-card">
//             <div className="col-md-5 bg-light p-4 text-center">
//               <div
//                 className="position-relative mx-auto rounded-2 overflow-hidden na-featured-img-wrap"
//                 style={{ maxWidth: "320px", height: "380px" }}
//               >
//                 <img
//                   src={featuredProduct.image}
//                   alt={featuredProduct.name}
//                   className="w-100 h-100 na-featured-image"
//                   style={{ objectFit: "cover" }}
//                 />
//               </div>
//             </div>
//             <div className="col-md-7 p-4 p-md-5">
//               <span className="text-uppercase text-muted small fw-bold d-block mb-1">
//                 Featured New Release
//               </span>
//               <h2 className="display-5 fw-bold text-dark mb-2">
//                 {featuredProduct.name}
//               </h2>
//               <h6 className="text-secondary mb-4">
//                 by {featuredProduct.brand}
//               </h6>
//               <p
//                 className="lead text-secondary mb-4 fs-6"
//                 style={{ lineHeight: "1.7" }}
//               >
//                 Experience the highlight of our latest collection.{" "}
//                 {featuredProduct.description} Meticulously blended for a
//                 sophisticated signature trail that lasts all day.
//               </p>
//               <div className="d-flex align-items-center gap-3 mb-4">
//                 <span className="fs-2 fw-bold text-dark">
//                   ₹{featuredProduct.price.toLocaleString("en-IN")}
//                 </span>
//                 <span className="text-muted fs-6 text-decoration-line-through">
//                   ₹{featuredProduct.oldPrice.toLocaleString("en-IN")}
//                 </span>
//                 <span className="badge bg-danger px-2 py-1 small">
//                   SAVE ₹
//                   {(
//                     featuredProduct.oldPrice - featuredProduct.price
//                   ).toLocaleString("en-IN")}
//                 </span>
//               </div>
//               <div className="d-flex gap-2 align-items-center">
//                 <div style={{ width: "180px" }}>
//                   <AddToCartButton product={featuredProduct} />
//                 </div>
//                 <Link
//                   to="/perfumes"
//                   className="btn btn-outline-dark rounded-0 px-4 py-2 text-uppercase fw-bold btn-sm"
//                 >
//                   Explore More Scents
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Philosophy */}
//         <div className="text-center py-5 mt-4 border-top">
//           <h3
//             className="fw-bold text-uppercase mb-2"
//             style={{ fontSize: "20px" }}
//           >
//             Our Philosophy
//           </h3>
//           <p
//             className="text-secondary mx-auto fs-6"
//             style={{ maxWidth: "600px" }}
//           >
//             Every bottle contains a story. Responsibly sourced ingredients,
//             hand-blended carefully to create an exceptional luxury aura for your
//             everyday statement.
//           </p>
//         </div>
//       </div>

//       <style>{`
//         /* ── GRID CARDS HOVER ── */
//         .na-card {
//           background: #ffffff;
//           border-radius: 12px;
//           box-shadow: 0 2px 16px rgba(0,0,0,0.07) !important;
//           transition: transform 0.3s ease, box-shadow 0.3s ease !important;
//         }
//         .na-card:hover {
//           transform: translateY(-7px);
//           box-shadow: 0 14px 36px rgba(0,0,0,0.13) !important;
//         }
//         .na-card-image {
//           transition: transform 0.45s ease !important;
//         }
//         .na-card:hover .na-card-image {
//           transform: scale(1.07);
//         }

//         /* ── NICHE VALA FEATURED PRODUCT BANNER HOVER ── */
//         .na-featured-card {
//           box-shadow: 0 2px 16px rgba(0,0,0,0.07) !important;
//           transition: transform 0.3s ease, box-shadow 0.3s ease !important;
//         }
//         .na-featured-card:hover {
//           transform: translateY(-7px);
//           box-shadow: 0 14px 36px rgba(0,0,0,0.13) !important;
//         }
//         .na-featured-image {
//           transition: transform 0.45s ease !important;
//         }
//         .na-featured-card:hover .na-featured-image {
//           transform: scale(1.05);
//         }
//       `}</style>
//     </div>
//   );
// };

// export default NewArrival;


import React from "react";
import { Link } from "react-router-dom";
import AddToCartButton from "../components/common/AddToCartButton";
import img from "../assets/images/ChatGPT Image May 23, 2026, 05_00_58 PM.png";

const newArrivalsData = [
  {
    id: 201,
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=500",
    name: "Midnight Oud",
    brand: "Luxury Essence",
    price: 7999,
    oldPrice: 9999,
    description: "Deep oud aur warm amber ka luxury blend.",
    isTrending: true,
  },
  {
    id: 202,
    image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=500",
    name: "Ocean Breeze",
    brand: "Aqua Mist",
    price: 5499,
    oldPrice: 6999,
    description: "Fresh marine notes aur citrus energy.",
    isTrending: false,
  },
  {
    id: 203,
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=500",
    name: "Royal Rose",
    brand: "Velvet Bloom",
    price: 6499,
    oldPrice: 7999,
    description: "Soft rose petals aur vanilla musk.",
    isTrending: true,
  },
  {
    id: 204,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500",
    name: "Golden Musk",
    brand: "Elite Aroma",
    price: 6999,
    oldPrice: 8499,
    description: "Rich musk fragrance with woody notes.",
    isTrending: false,
  },
  {
    id: 205,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=500&q=80",
    name: "Black Orchid",
    brand: "Noir Collection",
    price: 8999,
    oldPrice: 10999,
    description: "Dark floral scent with luxury appeal.",
    isTrending: false,
  },
  {
    id: 206,
    image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=500",
    name: "Velvet Night",
    brand: "Moon Essence",
    price: 5999,
    oldPrice: 7499,
    description: "Warm vanilla and amber combination.",
    isTrending: true,
  },
  {
    id: 207,
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=500&q=80",
    name: "Fresh Citrus",
    brand: "Sunny Perfumes",
    price: 4999,
    oldPrice: 6499,
    description: "Lemon and orange freshness all day.",
    isTrending: false,
  },
  {
    id: 208,
    image: "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?w=500",
    name: "Amber Gold",
    brand: "Royal Scents",
    price: 7499,
    oldPrice: 8999,
    description: "Premium amber with spicy undertones.",
    isTrending: false,
  },
];

const NewArrival = () => {
  const featuredProduct = newArrivalsData[0];

  return (
    <div style={{ backgroundColor: "#fdfdfb" }}>

      {/* ── HERO BANNER ── */}
      <div className="container-fluid p-0 mb-5">
        <div className="na-hero">
          <img
            src={img}
            alt="New Arrival Collection"
            className="na-hero__img"
          />
          <div className="na-hero__overlay">
            <div className="container px-4">
              <span className="na-hero__tag">Just Launched</span>
              <h1 className="na-hero__title">THE NEW ARRIVALS</h1>
              <p className="na-hero__sub">
                Explore the season's most anticipated luxury fragrances.
              </p>
              <a href="#collection-grid" className="na-hero__btn">
                VIEW COLLECTION
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── COLLECTION GRID ── */}
      <div className="container py-4" id="collection-grid">

        {/* Section Title */}
        <div className="text-center mb-5">
          <h2 className="na-section-title">New Arrival Perfumes</h2>
          <p className="text-secondary small">
            Stay ahead of the curve with our newly curated premium arrivals
          </p>
          <div className="na-divider" />
        </div>

        {/* Product Grid */}
        <div className="row g-4">
          {newArrivalsData.map((item) => (
            <div key={item.id} className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="na-card">
                <span className="na-card__new-tag">New</span>
                <div className="na-card__img-wrap">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="na-card__image"
                  />
                </div>
                <div className="na-card__body">
                  <span className="na-card__brand">{item.brand}</span>
                  <h5 className="na-card__name">{item.name}</h5>
                  <p className="na-card__desc">{item.description}</p>
                  <div className="na-card__price-row">
                    <span className="na-price-new">
                      ₹{item.price.toLocaleString("en-IN")}
                    </span>
                    {item.oldPrice && (
                      <span className="na-price-old">
                        ₹{item.oldPrice.toLocaleString("en-IN")}
                      </span>
                    )}
                    <span className="na-price-badge">
                      {Math.round((1 - item.price / item.oldPrice) * 100)}% off
                    </span>
                  </div>
                  <AddToCartButton product={item} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── FEATURED PRODUCT ── */}
        <div className="na-featured mt-5 pt-4">
          <div className="na-featured__img-col">
            <div className="na-featured__img-wrap">
              <img
                src={featuredProduct.image}
                alt={featuredProduct.name}
                className="na-featured__img"
              />
            </div>
          </div>
          <div className="na-featured__content">
            <span className="na-featured__eyebrow">Featured New Release</span>
            <h2 className="na-featured__title">{featuredProduct.name}</h2>
            <h6 className="na-featured__brand">by {featuredProduct.brand}</h6>
            <p className="na-featured__desc">
              Experience the highlight of our latest collection.{" "}
              {featuredProduct.description} Meticulously blended for a
              sophisticated signature trail that lasts all day.
            </p>
            <div className="na-featured__price-row">
              <span className="na-featured__price-new">
                ₹{featuredProduct.price.toLocaleString("en-IN")}
              </span>
              <span className="na-featured__price-old">
                ₹{featuredProduct.oldPrice.toLocaleString("en-IN")}
              </span>
              <span className="na-featured__save-badge">
                SAVE ₹
                {(featuredProduct.oldPrice - featuredProduct.price).toLocaleString("en-IN")}
              </span>
            </div>
            <div className="na-featured__btns">
              <div className="na-featured__atc">
                <AddToCartButton product={featuredProduct} />
              </div>
              <Link
                to="/perfumes"
                className="na-featured__explore-btn"
              >
                Explore More Scents
              </Link>
            </div>
          </div>
        </div>

        {/* ── PHILOSOPHY ── */}
        <div className="text-center py-5 mt-4 border-top">
          <h3 className="na-philosophy-title">Our Philosophy</h3>
          <p className="text-secondary mx-auto fs-6" style={{ maxWidth: "600px" }}>
            Every bottle contains a story. Responsibly sourced ingredients,
            hand-blended carefully to create an exceptional luxury aura for your
            everyday statement.
          </p>
        </div>

      </div>

      {/* ── STYLES ── */}
      <style>{`
        /* ── HERO ── */
        .na-hero {
          position: relative;
          width: 100%;
          height: clamp(260px, 45vw, 450px);
          overflow: hidden;
        }
        .na-hero__img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
        }
        .na-hero__overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, rgba(0,0,0,0.72), rgba(0,0,0,0.2));
          display: flex;
          align-items: center;
        }
        .na-hero__tag {
          display: inline-block;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #ffc107;
          margin-bottom: 10px;
        }
        .na-hero__title {
          font-size: clamp(28px, 5vw, 64px);
          font-weight: 700;
          color: #fff;
          margin: 8px 0 12px;
          line-height: 1.1;
        }
        .na-hero__sub {
          font-size: clamp(13px, 2vw, 18px);
          color: rgba(255,255,255,0.75);
          margin-bottom: 20px;
          max-width: 460px;
        }
        .na-hero__btn {
          display: inline-block;
          padding: 10px 28px;
          border: 1.5px solid #fff;
          color: #fff;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 1px;
          text-decoration: none;
          text-transform: uppercase;
          transition: background 0.25s, color 0.25s;
        }
        .na-hero__btn:hover {
          background: #fff;
          color: #000;
        }

        /* ── SECTION TITLE ── */
        .na-section-title {
          font-weight: 700;
          font-size: clamp(22px, 4vw, 36px);
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #0e0e0e;
          margin-bottom: 8px;
        }
        .na-divider {
          height: 2px;
          width: 50px;
          background: #000;
          margin: 10px auto 0;
        }

        /* ── PRODUCT CARD ── */
        .na-card {
          position: relative;
          background: #ffffff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 2px 16px rgba(0,0,0,0.07);
          display: flex;
          flex-direction: column;
          height: 100%;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .na-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 14px 36px rgba(0,0,0,0.13);
        }
        .na-card__new-tag {
          position: absolute;
          top: 12px;
          left: 12px;
          z-index: 3;
          background: #0e0e0e;
          color: #fff;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 3px;
        }
        .na-card__img-wrap {
          height: 240px;
          overflow: hidden;
        }
        .na-card__image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.45s ease;
        }
        .na-card:hover .na-card__image {
          transform: scale(1.07);
        }
        .na-card__body {
          padding: 14px 16px 16px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .na-card__brand {
          font-size: 11px;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          color: #888;
          font-weight: 600;
          margin-bottom: 4px;
        }
        .na-card__name {
          font-weight: 700;
          font-size: 17px;
          color: #0e0e0e;
          margin: 0 0 6px;
        }
        .na-card__desc {
          font-size: 13px;
          color: #888;
          line-height: 1.6;
          flex: 1;
          margin-bottom: 12px;
        }
        .na-card__price-row {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 14px;
          flex-wrap: wrap;
        }
        .na-price-new  { font-size: 16px; font-weight: 700; color: #0e0e0e; }
        .na-price-old  { font-size: 13px; color: #aaa; text-decoration: line-through; }
        .na-price-badge {
          font-size: 10px;
          padding: 2px 8px;
          border-radius: 20px;
          background: #fef2e9;
          color: #c9956b;
          font-weight: 500;
        }

        /* ── FEATURED PRODUCT ── */
        .na-featured {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid #e5e5e5;
          background: #fff;
          box-shadow: 0 2px 16px rgba(0,0,0,0.07);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .na-featured:hover {
          transform: translateY(-6px);
          box-shadow: 0 14px 36px rgba(0,0,0,0.13);
        }
        .na-featured__img-col {
          background: #f7f4f0;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 28px;
        }
        .na-featured__img-wrap {
          width: 100%;
          max-width: 320px;
          height: clamp(220px, 30vw, 380px);
          border-radius: 8px;
          overflow: hidden;
        }
        .na-featured__img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.45s ease;
        }
        .na-featured:hover .na-featured__img {
          transform: scale(1.05);
        }
        .na-featured__content {
          padding: clamp(24px, 4vw, 48px);
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .na-featured__eyebrow {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #888;
          margin-bottom: 8px;
          display: block;
        }
        .na-featured__title {
          font-size: clamp(26px, 3.5vw, 44px);
          font-weight: 700;
          color: #0e0e0e;
          margin-bottom: 6px;
          line-height: 1.1;
        }
        .na-featured__brand {
          color: #888;
          font-size: 14px;
          margin-bottom: 18px;
        }
        .na-featured__desc {
          font-size: 14px;
          line-height: 1.75;
          color: #666;
          margin-bottom: 22px;
        }
        .na-featured__price-row {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 24px;
        }
        .na-featured__price-new {
          font-size: clamp(26px, 3vw, 36px);
          font-weight: 700;
          color: #0e0e0e;
        }
        .na-featured__price-old {
          font-size: 14px;
          color: #aaa;
          text-decoration: line-through;
        }
        .na-featured__save-badge {
          background: #dc3545;
          color: #fff;
          font-size: 11px;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: 4px;
          letter-spacing: 0.5px;
        }
        .na-featured__btns {
          display: flex;
          gap: 12px;
          align-items: center;
          flex-wrap: wrap;
        }
        .na-featured__atc {
          width: 160px;
          min-width: 140px;
          flex-shrink: 0;
        }
        .na-featured__explore-btn {
          display: inline-block;
          padding: 11px 20px;
          border: 1.5px solid #0e0e0e;
          color: #0e0e0e;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          text-decoration: none;
          border-radius: 0;
          transition: background 0.25s, color 0.25s;
          white-space: nowrap;
        }
        .na-featured__explore-btn:hover {
          background: #0e0e0e;
          color: #fff;
        }

        /* ── PHILOSOPHY ── */
        .na-philosophy-title {
          font-weight: 700;
          font-size: 18px;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 10px;
          color: #0e0e0e;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 767px) {
          /* Featured: stack vertically */
          .na-featured {
            grid-template-columns: 1fr;
          }
          .na-featured__img-col {
            padding: 20px;
          }
          .na-featured__img-wrap {
            height: 240px;
            max-width: 100%;
          }
          .na-featured__content {
            padding: 24px 20px;
          }
          .na-featured__btns {
            flex-direction: column;
            align-items: stretch;
          }
          .na-featured__atc {
            width: 100%;
          }
          .na-featured__explore-btn {
            text-align: center;
          }
        }

        @media (max-width: 480px) {
          .na-card__img-wrap {
            height: 200px;
          }
          .na-featured__price-row {
            gap: 8px;
          }
        }
      `}</style>
    </div>
  );
};

export default NewArrival;