
import React from "react";
import { Link } from "react-router-dom";

const STATS = [
  { number: "10K+", label: "Happy Customers" },
  { number: "200+", label: "Premium Perfumes" },
  { number: "5★",   label: "Customer Rating"  },
  { number: "15+",  label: "Years of Craft"   },
];

const VALUES = [
  { num: "01", title: "Rare Ingredients",   desc: "Oud from Assam, Bulgarian rose, Grasse jasmine — only the finest raw materials." },
  { num: "02", title: "Small Batch Craft",  desc: "Every fragrance blended by hand by master perfumers. No mass production." },
  { num: "03", title: "Long Lasting",       desc: "EDP concentrations formulated for 12–18 hour longevity on skin." },
  { num: "04", title: "Conscious Luxury",   desc: "Cruelty-free, sustainably packaged, free from harmful synthetics." },
];

const About = () => (
  <>
    <div className="ab-wrap">

      {/* ── HERO ── */}
      <section className="ab-hero">
        <img
          src="https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?w=1400&q=80"
          alt="Luxury Perfume"
          className="ab-hero__img"
        />
        <div className="ab-hero__overlay" />
        <div className="ab-hero__content">
          <span className="ab-eyebrow">Est. 2009 · Lucknow, India</span>
          <h1 className="ab-hero__title">The Art of<br /><em>Invisible Beauty</em></h1>
          <p className="ab-hero__sub">We don't sell perfume. We bottle memories, moods, and moments.</p>
          <Link to="/perfumes" className="ab-btn-fill">Explore Collection</Link>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="ab-stats">
        {STATS.map((s, i) => (
          <div key={i} className="ab-stat">
            <span className="ab-stat__num">{s.number}</span>
            <span className="ab-stat__label">{s.label}</span>
          </div>
        ))}
      </section>

      {/* ── STORY ── */}
      <section className="ab-story">
        <div className="ab-story__text">
          <span className="ab-tag">Our Story</span>
          <h2 className="ab-h2">Born from a love of<br /><em>rare scents</em></h2>
          <p>Perfume Palace began in a small workshop in Lucknow — the city of nawabs, poetry, and attar. Our founder spent a decade learning the craft before launching a collection that bridges heritage and modern luxury.</p>
          <p>Today we create fragrances worn in over 40 countries. But our philosophy stays the same: every scent must tell a story and leave a mark long after the wearer has left the room.</p>
        </div>
        <div className="ab-story__imgs">
          <div className="ab-story__main">
            <img src="https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&q=80" alt="Crafting" />
          </div>
          <div className="ab-story__accent">
            <img src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&q=80" alt="Bottle" />
            <span className="ab-story__badge">Since 2009</span>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="ab-values">
        <div className="ab-values__head">
          <span className="ab-tag">Our Philosophy</span>
          <h2 className="ab-h2">What sets us apart</h2>
        </div>
        <div className="ab-values__grid">
          {VALUES.map((v, i) => (
            <div key={i} className="ab-val">
              <span className="ab-val__num">{v.num}</span>
              <h3 className="ab-val__title">{v.title}</h3>
              <p className="ab-val__desc">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="ab-cta">
        <span className="ab-tag ab-tag--light">Ready to discover?</span>
        <h2 className="ab-cta__title">Find your signature scent</h2>
        <p className="ab-cta__sub">Over 200 fragrances waiting to meet you.</p>
        <div className="ab-cta__btns">
          <Link to="/perfumes"     className="ab-btn-fill">Shop Now</Link>
          <Link to="/new-arrivals" className="ab-btn-outline">New Arrivals</Link>
        </div>
      </section>

    </div>

    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=DM+Sans:wght@300;400;500&display=swap');

      .ab-wrap {
        --ink:    #14110e;
        --mid:    #5a5450;
        --muted:  #9a9590;
        --accent: #c9956b;
        --cream:  #faf7f2;
        --off:    #f2ede5;
        --white:  #ffffff;
        --serif:  'Cormorant Garamond', Georgia, serif;
        --sans:   'DM Sans', sans-serif;
        overflow-x: hidden;
        background: var(--white);
      }

      /* shared */
      .ab-tag {
        display: inline-block;
        font-family: var(--sans); font-size: 11px; font-weight: 500;
        letter-spacing: 3px; text-transform: uppercase;
        color: var(--accent); margin-bottom: 14px;
      }
      .ab-tag--light { color: rgba(201,149,107,0.85); }
      .ab-h2 {
        font-family: var(--serif);
        font-size: clamp(30px, 4vw, 50px);
        font-weight: 600; color: var(--ink); line-height: 1.1;
        margin-bottom: 24px;
      }
      .ab-h2 em { font-style: italic; color: var(--accent); }

      .ab-btn-fill, .ab-btn-outline {
        color: #fff; 
        display: inline-block; padding: 12px 32px;
        border-radius: 5px; font-family: var(--sans); font-size: 13px;
        font-weight: 500; letter-spacing: 1px; text-transform: uppercase;
        text-decoration: none; transition: all 0.25s ease;
      }
      .ab-btn-fill { background: var(--ink); color: #fff; border: 1.5px solid var(--ink); }
      .ab-btn-fill:hover { background: var(--accent); border-color: var(--accent); transform: translateY(-2px); }
      .ab-btn-outline { background: transparent; color: #fff; border: 1.5px solid rgba(255,255,255,0.35); }
      .ab-btn-outline:hover { border-color: #fff; transform: translateY(-2px); }

      /* ── HERO ── */
      .ab-hero {
        position: relative; height: 88vh;
        min-height: 560px; max-height: 820px;
        display: flex; align-items: flex-end; overflow: hidden;
      }
      .ab-hero__img {
        position: absolute; inset: 0;
        width: 100%; height: 100%; object-fit: cover;
        animation: abZoom 14s ease forwards;
      }
      @keyframes abZoom { from { transform: scale(1.06); } to { transform: scale(1); } }
      .ab-hero__overlay {
        position: absolute; inset: 0;
        background: linear-gradient(180deg, rgba(20,17,14,0.1) 0%, rgba(20,17,14,0.6) 55%, rgba(20,17,14,0.88) 100%);
      }
      .ab-hero__content {
        position: relative; z-index: 2;
        padding: 0 8% 7%;
        animation: abFade 1s 0.2s ease both;
      }
      @keyframes abFade { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
      .ab-eyebrow {
        display: block; font-family: var(--sans); font-size: 11px;
        letter-spacing: 4px; text-transform: uppercase;
        color: rgba(255,255,255,0.55); margin-bottom: 18px;
      }
      .ab-hero__title {
        font-family: var(--serif);
        font-size: clamp(48px, 8vw, 96px);
        font-weight: 400; line-height: 0.95;
        color: #fff; margin: 0 0 22px;
      }
      .ab-hero__title em { font-style: italic; color: rgba(201,149,107,0.88); }
      .ab-hero__sub {
        font-family: var(--sans); font-size: 15px;
        color: rgba(255,255,255,0.65); max-width: 440px;
        line-height: 1.7; margin-bottom: 32px;
      }

      /* ── STATS ── */
      .ab-stats {
        display: grid; grid-template-columns: repeat(4,1fr);
        background: var(--ink);
      }
      .ab-stat {
        text-align: center; padding: 44px 16px;
        border-right: 1px solid rgba(255,255,255,0.07);
        transition: background 0.3s;
      }
      .ab-stat:last-child { border-right: none; }
      .ab-stat:hover { background: rgba(201,149,107,0.08); }
      .ab-stat__num {
        display: block; font-family: var(--serif);
        font-size: clamp(32px,4vw,48px); font-weight: 600;
        color: #fff; line-height: 1; margin-bottom: 8px;
      }
      .ab-stat__label {
        font-family: var(--sans); font-size: 11px;
        letter-spacing: 1.5px; text-transform: uppercase;
        color: rgba(255,255,255,0.38);
      }

      /* ── STORY ── */
      .ab-story {
        display: grid; grid-template-columns: 1fr 1fr;
        gap: 72px; align-items: center;
        padding: 100px 8%; max-width: 1280px; margin: 0 auto;
      }
      .ab-story__text p {
        font-family: var(--sans); font-size: 14.5px;
        line-height: 1.85; color: var(--mid); margin-bottom: 16px;
      }
      .ab-story__imgs { position: relative; height: 480px; }
      .ab-story__main {
        position: absolute; inset: 0 56px 0 0;
        border-radius: 6px; overflow: hidden;
        box-shadow: 0 16px 48px rgba(0,0,0,0.12);
      }
      .ab-story__main img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease; }
      .ab-story__main:hover img { transform: scale(1.04); }
      .ab-story__accent {
        position: absolute; width: 180px; height: 220px;
        bottom: 0; right: 0; z-index: 2;
        border-radius: 6px; overflow: hidden;
        box-shadow: 0 12px 32px rgba(0,0,0,0.15);
      }
      .ab-story__accent img { width: 100%; height: 100%; object-fit: cover; }
      .ab-story__badge {
        position: absolute; bottom: 14px; left: 14px;
        background: var(--accent); color: #fff;
        font-family: var(--sans); font-size: 10px;
        letter-spacing: 1.5px; text-transform: uppercase;
        padding: 5px 10px; border-radius: 3px;
      }

      /* ── VALUES ── */
      .ab-values { background: var(--cream); padding: 100px 8%; }
      .ab-values__head { margin-bottom: 52px; }
      .ab-values__grid {
        display: grid; grid-template-columns: repeat(4,1fr);
        gap: 2px; max-width: 1280px;
      }
      .ab-val {
        background: var(--white); padding: 36px 28px;
        position: relative; overflow: hidden;
        transition: transform 0.3s;
      }
      .ab-val::after {
        content: ''; position: absolute;
        bottom: 0; left: 0; width: 100%; height: 3px;
        background: var(--accent);
        transform: scaleX(0); transform-origin: left;
        transition: transform 0.35s ease;
      }
      .ab-val:hover { transform: translateY(-4px); }
      .ab-val:hover::after { transform: scaleX(1); }
      .ab-val__num {
        display: block; font-family: var(--serif);
        font-size: 44px; color: var(--off);
        font-weight: 600; line-height: 1; margin-bottom: 16px;
      }
      .ab-val__title {
        font-family: var(--serif); font-size: 20px;
        color: var(--ink); margin-bottom: 10px; font-weight: 600;
      }
      .ab-val__desc {
        font-family: var(--sans); font-size: 13.5px;
        line-height: 1.75; color: var(--muted);
      }

      /* ── CTA ── */
      .ab-cta {
        background: var(--ink); text-align: center;
        padding: 100px 8%;
      }
      .ab-cta__title {
        font-family: var(--serif);
        font-size: clamp(32px, 5vw, 58px);
        color: #fff; font-weight: 400; margin-bottom: 14px;
      }
      .ab-cta__sub {
        font-family: var(--sans); font-size: 14px;
        color: rgba(255,255,255,0.45); margin-bottom: 36px;
      }
      .ab-cta__btns { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }

      /* ── RESPONSIVE ── */
      @media (max-width: 1024px) {
        .ab-values__grid { grid-template-columns: repeat(2,1fr); }
      }
      @media (max-width: 768px) {
        .ab-story { grid-template-columns: 1fr; gap: 40px; padding: 72px 6%; }
        .ab-story__imgs { height: 300px; }
        .ab-stats { grid-template-columns: repeat(2,1fr); }
        .ab-stat { border-bottom: 1px solid rgba(255,255,255,0.07); }
        .ab-values { padding: 72px 6%; }
        .ab-values__grid { grid-template-columns: 1fr; }
        .ab-cta { padding: 72px 6%; }
        .ab-hero__content { padding: 0 6% 10%; }
      }
      @media (max-width: 480px) {
        .ab-cta__btns { flex-direction: column; align-items: center; }
        .ab-btn-fill, .ab-btn-outline { width: 100%; max-width: 260px; text-align: center; }
      }
    `}</style>
  </>
);

export default About;