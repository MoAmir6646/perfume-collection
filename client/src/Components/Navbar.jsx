//

// src/components/Navbar.jsx
import React, { useState, useEffect, useRef } from "react";
import { Search, ShoppingBag, Menu, X, ChevronDown } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

// ── NAV DATA ──────────────────────────────────────────────────────────────────
const navData = [
  { label: "New Arrivals", href: "/new-arrivals", sub: [] },
  {
    label: "Perfumes",
    href: "/perfumes",
    sub: [
      { label: "Fragrance for Him", href: "/perfumes/him" },
      { label: "Fragrance for Her", href: "/perfumes/her" },
      { label: "Unisex Fragrance", href: "/perfumes/unisex" },
      { label: "Limited Edition", href: "/perfumes/limited-edition" },
      { label: "Gift Sets", href: "/perfumes/gift-sets" },
    ],
  },
  { label: "Best Sellers", href: "/best-sellers", sub: [] },
  {
    label: "Offers",
    href: "/offers",
    sub: [
      { label: "Eid ul-Fitr", href: "/offers/eid-ul-fitr" },
      { label: "Eid ul-Adha", href: "/offers/eid-ul-adha" },
      { label: "Special Offers", href: "/offers/special" },
    ],
  },
  {
    label: "Shop",
    href: "/perfumes",
    sub: [
      { label: "Fragrance for Him", href: "/perfumes/him" },
      { label: "Fragrance for Her", href: "/perfumes/her" },
      { label: "Unisex Fragrance", href: "/perfumes/unisex" },
      { label: "Limited Edition", href: "/perfumes/limited-edition" },
      { label: "Gift Sets", href: "/perfumes/gift-sets" },
      { label: "New Arrivals", href: "/new-arrivals" },
      { label: "Best Sellers", href: "/best-sellers" },
    ],
  },
  { label: "About", href: "/about", sub: [] },
];

// ── PRODUCT DATA ──────────────────────────────────────────────────────────────
// Apne actual products yahan daalein ya API se fetch karein
const ALL_PRODUCTS = [
  {
    id: 1,
    name: "Oud Wood EDP",
    brand: "Tom Ford",
    price: 8500,
    category: "Him",
    notes: "Woody, Spicy",
    slug: "/perfumes/him",
  },
  {
    id: 2,
    name: "Black Oud",
    brand: "Maison Francis",
    price: 12200,
    category: "Unisex",
    notes: "Dark, Smoky",
    slug: "/perfumes/unisex",
  },
  {
    id: 3,
    name: "Rose Oud",
    brand: "Jo Malone",
    price: 6800,
    category: "Her",
    notes: "Floral, Oriental",
    slug: "/perfumes/her",
  },
  {
    id: 4,
    name: "Bleu de Chanel",
    brand: "Chanel",
    price: 11000,
    category: "Him",
    notes: "Fresh, Woody",
    slug: "/perfumes/him",
  },
  {
    id: 5,
    name: "Coco Mademoiselle",
    brand: "Chanel",
    price: 9800,
    category: "Her",
    notes: "Floral, Oriental",
    slug: "/perfumes/her",
  },
  {
    id: 6,
    name: "La Vie Est Belle",
    brand: "Lancôme",
    price: 7200,
    category: "Her",
    notes: "Sweet, Floral",
    slug: "/perfumes/her",
  },
  {
    id: 7,
    name: "Dior Sauvage",
    brand: "Dior",
    price: 10500,
    category: "Him",
    notes: "Fresh, Spicy",
    slug: "/perfumes/him",
  },
  {
    id: 8,
    name: "Miss Dior",
    brand: "Dior",
    price: 8900,
    category: "Her",
    notes: "Floral, Chypre",
    slug: "/perfumes/her",
  },
  {
    id: 9,
    name: "Acqua di Giò",
    brand: "Giorgio Armani",
    price: 7600,
    category: "Him",
    notes: "Aquatic, Fresh",
    slug: "/perfumes/him",
  },
  {
    id: 10,
    name: "Si Passione",
    brand: "Giorgio Armani",
    price: 8100,
    category: "Her",
    notes: "Fruity, Floral",
    slug: "/perfumes/her",
  },
  {
    id: 11,
    name: "Aventus",
    brand: "Creed",
    price: 28000,
    category: "Him",
    notes: "Fruity, Chypre",
    slug: "/perfumes/him",
  },
  {
    id: 12,
    name: "Silver Mountain Water",
    brand: "Creed",
    price: 24000,
    category: "Unisex",
    notes: "Fresh, Metallic",
    slug: "/perfumes/unisex",
  },
  {
    id: 13,
    name: "Baccarat Rouge 540",
    brand: "Maison Margiela",
    price: 32000,
    category: "Unisex",
    notes: "Amber, Floral",
    slug: "/perfumes/unisex",
  },
  {
    id: 14,
    name: "Flowerbomb",
    brand: "Viktor & Rolf",
    price: 9200,
    category: "Her",
    notes: "Floral, Gourmand",
    slug: "/perfumes/her",
  },
  {
    id: 15,
    name: "1 Million",
    brand: "Paco Rabanne",
    price: 7400,
    category: "Him",
    notes: "Spicy, Leather",
    slug: "/perfumes/him",
  },
  {
    id: 16,
    name: "Oud Ispahan",
    brand: "Dior",
    price: 19500,
    category: "Unisex",
    notes: "Oud, Rose",
    slug: "/perfumes/unisex",
  },
  {
    id: 17,
    name: "Ombre Leather",
    brand: "Tom Ford",
    price: 14200,
    category: "Unisex",
    notes: "Leather, Floral",
    slug: "/perfumes/unisex",
  },
  {
    id: 18,
    name: "Good Girl",
    brand: "Carolina Herrera",
    price: 8300,
    category: "Her",
    notes: "Floral, Gourmand",
    slug: "/perfumes/her",
  },
  {
    id: 19,
    name: "Invictus",
    brand: "Paco Rabanne",
    price: 7100,
    category: "Him",
    notes: "Aquatic, Woody",
    slug: "/perfumes/him",
  },
  {
    id: 20,
    name: "Black Opium",
    brand: "YSL",
    price: 8700,
    category: "Her",
    notes: "Coffee, Vanilla",
    slug: "/perfumes/her",
  },
];

// ── BADGE COLOR helper ────────────────────────────────────────────────────────
const BADGE = {
  Him: { bg: "#e8f0fe", color: "#1a56db" },
  Her: { bg: "#fce7f3", color: "#c0456b" },
  Unisex: { bg: "#f5ede2", color: "#b5783c" },
};

// ── COMPONENT ─────────────────────────────────────────────────────────────────
const Navbar = () => {
  const { totalItems } = useCart();
  const navigate = useNavigate();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [recentSearches, setRecentSearches] = useState(() =>
    JSON.parse(localStorage.getItem("pf_recent") || "[]"),
  );

  const inputRef = useRef(null);

  // scroll shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // focus input when panel opens
  useEffect(() => {
    if (searchOpen) setTimeout(() => inputRef.current?.focus(), 50);
    else {
      setQuery("");
      setResults([]);
    }
  }, [searchOpen]);

  // live product filter
  const handleSearch = (val) => {
    setQuery(val);
    if (!val.trim()) {
      setResults([]);
      return;
    }
    const q = val.toLowerCase();
    setResults(
      ALL_PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.notes.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q),
      ).slice(0, 6),
    );
  };

  // save to recent
  const saveRecent = (term) => {
    const updated = [term, ...recentSearches.filter((s) => s !== term)].slice(
      0,
      5,
    );
    setRecentSearches(updated);
    localStorage.setItem("pf_recent", JSON.stringify(updated));
  };

  // Enter key → search page
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && query.trim()) {
      saveRecent(query.trim());
      setSearchOpen(false);
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    }
    if (e.key === "Escape") setSearchOpen(false);
  };

  const clearRecent = () => {
    setRecentSearches([]);
    localStorage.removeItem("pf_recent");
  };

  const handleRecentClick = (term) => {
    setQuery(term);
    handleSearch(term);
    inputRef.current?.focus();
  };

  const handleResultClick = (product) => {
    saveRecent(query.trim() || product.name);
    setSearchOpen(false);
    navigate(product.slug);
  };

  return (
    <>
      <header className={`header ${scrolled ? "header--shadow" : ""}`}>
        <nav className="nav">
          {/* Hamburger */}
          <button
            className="hamburger"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Logo */}
          <Link to="/" className="brand">
            <span className="brand__name fs-2 ">PARFUMÉ</span>
          </Link>

          {/* Desktop nav */}
          <ul className="nav__links">
            {navData.map((item, idx) => (
              <li
                key={item.label}
                className={`nav__item ${idx === 4 ? "nav__item--shop" : ""}`}
                onMouseEnter={() =>
                  item.sub.length && setActiveDropdown(item.label)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link to={item.href} className="nav__link">
                  {item.label}
                  {item.sub.length > 0 && (
                    <ChevronDown size={13} className="nav__chevron" />
                  )}
                </Link>
                {item.sub.length > 0 && activeDropdown === item.label && (
                  <div className="dropdown">
                    {item.sub.map((s) => (
                      <Link
                        key={s.label}
                        to={s.href}
                        className="dropdown__item"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Action icons */}
          <div className="nav__actions">
            <button
              className={`action-btn ${searchOpen ? "action-btn--active" : ""}`}
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Search"
            >
              {searchOpen ? <X size={19} /> : <Search size={19} />}
            </button>

            <Link
              to="/cart"
              className="action-btn action-btn--badge"
              aria-label="Cart"
            >
              <ShoppingBag size={19} />
              {totalItems > 0 && (
                <span className="badge">
                  {totalItems > 99 ? "99+" : totalItems}
                </span>
              )}
            </Link>

          <Link
  to="/admin"
  className="action-btn"
  aria-label="Admin Panel"
  title="Admin Panel"
>
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="3" y="3" width="7" height="7" rx="1.5" />
    <rect x="14" y="3" width="7" height="7" rx="1.5" />
    <rect x="3" y="14" width="7" height="7" rx="1.5" />
    <rect x="14" y="14" width="7" height="7" rx="1.5" />
  </svg>
</Link>

<Link to="/register" className="btn-primary">
  Sign In
</Link>
          </div>
        </nav>

        {/* ── SEARCH PANEL ─────────────────────────────────────────────────── */}
        <div
          className={`search-panel ${searchOpen ? "search-panel--open" : ""}`}
        >
          {/* Input row */}
          <div className="search-wrap">
            <Search size={17} color="#b5783c" />
            <input
              ref={inputRef}
              className="search-input"
              placeholder="Search fragrances, brands, notes…"
              value={query}
              onChange={(e) => handleSearch(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            {query && (
              <button
                className="search-clear"
                onClick={() => {
                  setQuery("");
                  setResults([]);
                  inputRef.current?.focus();
                }}
              >
                <X size={15} />
              </button>
            )}
          </div>

          {/* Recent searches — only when input empty */}
          {!query && recentSearches.length > 0 && (
            <div className="search-recents">
              <div className="search-section-header">
                <span className="search-section-label">Recent searches</span>
                <button className="search-clear-all" onClick={clearRecent}>
                  Clear all
                </button>
              </div>
              <div className="search-tags">
                {recentSearches.map((s) => (
                  <button
                    key={s}
                    className="search-tag"
                    onClick={() => handleRecentClick(s)}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Empty state — no query, no recents */}
          {!query && recentSearches.length === 0 && (
            <div className="search-hint">
              <span>Try: </span>
              {["Oud Wood", "Floral Her", "Chanel", "Gift Sets"].map((h) => (
                <button
                  key={h}
                  className="search-tag"
                  onClick={() => handleRecentClick(h)}
                >
                  {h}
                </button>
              ))}
            </div>
          )}

          {/* Results */}
          {results.length > 0 && (
            <div className="search-results">
              <div className="search-section-header">
                <span className="search-section-label">
                  {results.length} product{results.length > 1 ? "s" : ""} found
                </span>
              </div>
              {results.map((p) => {
                const badge = BADGE[p.category] || BADGE.Unisex;
                return (
                  <button
                    key={p.id}
                    className="result-item"
                    onClick={() => handleResultClick(p)}
                  >
                    <div className="result-icon">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#b5783c"
                        strokeWidth="1.5"
                      >
                        <path d="M12 2C9 2 7 5 7 8c0 4 5 10 5 10s5-6 5-10c0-3-2-6-5-6z" />
                        <circle cx="12" cy="8" r="2" />
                      </svg>
                    </div>
                    <div className="result-info">
                      <span className="result-name">{p.name}</span>
                      <span className="result-meta">
                        {p.brand} &middot; {p.notes}
                      </span>
                    </div>
                    <div className="result-right">
                      <span className="result-price">
                        ₹{p.price.toLocaleString("en-IN")}
                      </span>
                      <span
                        className="result-badge"
                        style={{ background: badge.bg, color: badge.color }}
                      >
                        {p.category}
                      </span>
                    </div>
                  </button>
                );
              })}

              <Link
                to={`/search?q=${encodeURIComponent(query)}`}
                className="view-all-btn"
                onClick={() => {
                  saveRecent(query.trim());
                  setSearchOpen(false);
                }}
              >
                View all results for &ldquo;{query}&rdquo;
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
          )}

          {/* No results */}
          {query && results.length === 0 && (
            <div className="search-empty">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#d0ccc8"
                strokeWidth="1.5"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <span>No products found for &ldquo;{query}&rdquo;</span>
            </div>
          )}
        </div>
      </header>

      {/* ── MOBILE DRAWER ────────────────────────────────────────────────────── */}
      <div className={`drawer ${mobileOpen ? "drawer--open" : ""}`}>
        {navData.map((item) => (
          <div key={item.label} className="drawer__group">
            <Link
              to={item.href}
              className="drawer__title"
              onClick={() => setMobileOpen(false)}
            ></Link>
            {item.sub.map((s) => (
              <a key={s.label} href={s.href} className="drawer__sub">
                {s.label}
              </a>
            ))}
          </div>
        ))}
        <div className="drawer__bottom">
          <Link to="/register" className="drawer__cta">
            Create Account
          </Link>
          <Link to="/register" className="btn-primary">
            Sign In
          </Link>
        </div>
      </div>

      {mobileOpen && (
        <div className="overlay" onClick={() => setMobileOpen(false)} />
      )}

      {/* ── STYLES ──────────────────────────────────────────────────────────── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@300;400;500&display=swap');
        *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

        :root {
          --cream:       #faf8f5;
          --white:       #ffffff;
          --ink:         #1a1814;
          --ink-mid:     #4a4742;
          --ink-light:   #8a8782;
          --accent:      #b5783c;
          --accent-soft: #f5ede2;
          --border:      #e8e4de;
          --font-serif:  'DM Serif Display', Georgia, serif;
          --font-sans:   'DM Sans', sans-serif;
        }

        /* ── HEADER ── */
        .header {
          position: sticky; top: 0; z-index: 900;
          background: var(--white);
          border-bottom: 1px solid var(--border);
          transition: box-shadow 0.3s;
        }
        .header--shadow { box-shadow: 0 2px 24px rgba(0,0,0,0.08); }

        /* ── NAV ── */
        .nav {
          max-width: 1300px; margin: auto; padding: 0 40px;
          height: 72px; display: flex; align-items: center; gap: 32px;
        }
        .brand { text-decoration: none; flex-shrink: 0; }
        .brand__name {
          font-family: var(--font-serif); font-size: 24px;
          color: var(--ink); letter-spacing: 5px;
        }

        /* ── NAV LINKS ── */
        .nav__links { display: flex; align-items: center; gap: 2px; list-style: none; flex: 1; }
        .nav__item  { position: relative; }
        .nav__link {
          display: flex; align-items: center; gap: 4px;
          padding: 8px 12px; text-decoration: none;
          font-family: var(--font-sans); font-size: 13.5px;
          color: var(--ink-mid); border-radius: 6px;
          transition: background 0.2s, color 0.2s; white-space: nowrap;
        }
        .nav__link:hover { background: var(--cream); color: var(--ink); }
        .nav__chevron { opacity: 0.45; transition: transform 0.2s; }
        .nav__item:hover .nav__chevron { transform: rotate(180deg); }
        .nav__item--shop .nav__link { color: var(--accent); font-weight: 500; }
        .nav__item--shop .nav__link:hover { background: var(--accent-soft); }

        /* ── DROPDOWN ── */
        .dropdown {
          position: absolute; top: calc(100% + 6px); left: 0;
          min-width: 210px; background: var(--white);
          border: 1px solid var(--border); border-radius: 10px;
          padding: 8px; box-shadow: 0 8px 32px rgba(0,0,0,0.09);
          animation: fadeDown 0.18s ease;
        }
        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .dropdown__item {
          display: block; padding: 9px 14px; text-decoration: none;
          font-family: var(--font-sans); font-size: 13px; color: var(--ink-mid);
          border-radius: 6px; transition: background 0.15s, color 0.15s;
        }
        .dropdown__item:hover { background: var(--accent-soft); color: var(--accent); }

        /* ── ACTIONS ── */
        .nav__actions { display: flex; align-items: center; gap: 6px; margin-left: auto; flex-shrink: 0; }
        .action-btn {
          position: relative; width: 38px; height: 38px;
          border-radius: 8px; border: none; background: transparent;
          color: var(--ink-mid); display: flex; align-items: center;
          justify-content: center; cursor: pointer;
          transition: background 0.2s, color 0.2s; text-decoration: none;
        }
        .action-btn:hover  { background: var(--cream); color: var(--ink); }
        .action-btn--active { background: var(--accent-soft) !important; color: var(--accent) !important; }

        .badge {
          position: absolute; top: 3px; right: 3px;
          width: 18px; height: 18px; border-radius: 50%;
          background: var(--accent); color: #fff;
          font-family: var(--font-sans); font-size: 10px; font-weight: 600;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 2px 6px rgba(181,120,60,0.4);
        }
        .btn-primary {
          margin-left: 8px; padding: 8px 20px; border-radius: 8px;
          background: var(--ink); color: #fff; text-decoration: none;
          font-family: var(--font-sans); font-size: 13px;
          transition: background 0.2s, transform 0.15s; white-space: nowrap;
        }
        .btn-primary:hover { background: #2e2b27; transform: translateY(-1px); }

        /* ── SEARCH PANEL ── */
        .search-panel {
          overflow: hidden; max-height: 0;
          border-top: 1px solid transparent;
          transition: max-height 0.4s cubic-bezier(0.4,0,0.2,1), border-color 0.3s;
          background: var(--white);
        }
        .search-panel--open { max-height: 520px; border-top-color: var(--border); }

        .search-wrap {
          max-width: 720px; margin: 0 auto;
          display: flex; align-items: center; gap: 12px;
          padding: 18px 40px 14px;
          border-bottom: 1px solid var(--border);
        }
        .search-input {
          flex: 1; border: none; background: transparent; outline: none;
          font-family: var(--font-sans); font-size: 15px; color: var(--ink);
        }
        .search-input::placeholder { color: var(--ink-light); }
        .search-clear {
          border: none; background: none; color: var(--ink-light);
          cursor: pointer; display: flex; padding: 2px;
          border-radius: 4px; transition: color 0.2s, background 0.2s;
        }
        .search-clear:hover { color: var(--ink); background: var(--cream); }

        /* Recent & hint row */
        .search-recents, .search-hint {
          max-width: 720px; margin: 0 auto;
          padding: 14px 40px 12px;
        }
        .search-hint { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
        .search-hint span { font-family: var(--font-sans); font-size: 12.5px; color: var(--ink-light); }
        .search-section-header {
          display: flex; align-items: center; justify-content: space-between;
          margin-bottom: 10px;
        }
        .search-section-label {
          font-family: var(--font-sans); font-size: 11px; font-weight: 500;
          color: var(--ink-light); letter-spacing: 0.8px; text-transform: uppercase;
        }
        .search-clear-all {
          font-family: var(--font-sans); font-size: 11.5px; color: var(--ink-light);
          border: none; background: none; cursor: pointer;
          transition: color 0.2s; padding: 0;
        }
        .search-clear-all:hover { color: var(--accent); }

        .search-tags { display: flex; flex-wrap: wrap; gap: 8px; }
        .search-tag {
          display: flex; align-items: center; gap: 5px;
          padding: 5px 12px; border: 1px solid var(--border); border-radius: 20px;
          font-family: var(--font-sans); font-size: 12.5px; color: var(--ink-mid);
          background: var(--white); cursor: pointer;
          transition: border-color 0.2s, color 0.2s, background 0.2s;
        }
        .search-tag:hover { border-color: var(--accent); color: var(--accent); background: var(--accent-soft); }

        /* Results */
        .search-results { max-width: 720px; margin: 0 auto; padding: 0 40px 12px; }
        .search-results .search-section-header { padding-top: 14px; }

        .result-item {
          width: 100%; display: flex; align-items: center; gap: 14px;
          padding: 10px 0; border-bottom: 1px solid var(--border);
          background: none; border-left: none; border-right: none; border-top: none;
          cursor: pointer; transition: background 0.15s;
          border-radius: 0; text-align: left;
        }
        .result-item:last-of-type { border-bottom: none; }
        .result-item:hover { background: var(--cream); margin: 0 -12px; padding: 10px 12px; border-radius: 8px; border-bottom: 1px solid transparent; }

        .result-icon {
          width: 42px; height: 42px; border-radius: 10px;
          background: var(--accent-soft);
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .result-info { flex: 1; min-width: 0; }
        .result-name {
          display: block; font-family: var(--font-sans); font-size: 14px;
          font-weight: 500; color: var(--ink); white-space: nowrap;
          overflow: hidden; text-overflow: ellipsis;
        }
        .result-meta {
          display: block; font-family: var(--font-sans); font-size: 12px;
          color: var(--ink-light); margin-top: 2px;
        }
        .result-right { display: flex; flex-direction: column; align-items: flex-end; gap: 4px; flex-shrink: 0; }
        .result-price {
          font-family: var(--font-sans); font-size: 14px;
          font-weight: 500; color: var(--accent);
        }
        .result-badge {
          font-family: var(--font-sans); font-size: 10.5px;
          font-weight: 500; padding: 2px 8px; border-radius: 4px;
        }

        .view-all-btn {
          display: flex; align-items: center; justify-content: center; gap: 6px;
          width: 100%; padding: 11px 0; margin-top: 8px;
          border: 1px solid var(--border); border-radius: 8px;
          font-family: var(--font-sans); font-size: 13px; color: var(--ink-mid);
          text-decoration: none; background: var(--cream);
          transition: color 0.2s, border-color 0.2s, background 0.2s;
        }
        .view-all-btn:hover { color: var(--accent); border-color: var(--accent); background: var(--accent-soft); }

        /* Empty */
        .search-empty {
          display: flex; flex-direction: column; align-items: center;
          gap: 8px; padding: 28px 40px;
          font-family: var(--font-sans); font-size: 13px; color: var(--ink-light);
        }

        /* ── HAMBURGER ── */
        .hamburger {
          display: none; background: none; border: 1px solid var(--border);
          color: var(--ink); width: 38px; height: 38px; border-radius: 8px;
          cursor: pointer; align-items: center; justify-content: center;
          flex-shrink: 0; transition: background 0.2s;
        }
        .hamburger:hover { background: var(--cream); }

        /* ── OVERLAY ── */
        .overlay { position: fixed; inset: 0; background: rgba(26,24,20,0.35); z-index: 800; }

        /* ── DRAWER ── */
        .drawer {
          position: fixed; top: 0; left: -320px;
          width: 300px; height: 100dvh;
          background: var(--white); z-index: 850;
          overflow-y: auto; padding: 28px 24px 40px;
          transition: left 0.35s cubic-bezier(0.25,0.8,0.25,1);
          border-right: 1px solid var(--border);
        }
        .drawer--open { left: 0; }
        .drawer__group { margin-bottom: 28px; }
        .drawer__title {
          display: block; text-decoration: none;
          font-family: var(--font-serif); font-size: 18px;
          color: var(--ink); margin-bottom: 10px; letter-spacing: 0.5px;
        }
        .drawer__sub {
          display: block; text-decoration: none;
          font-family: var(--font-sans); font-size: 13px; color: var(--ink-light);
          padding: 6px 0; border-bottom: 1px solid var(--border);
          transition: color 0.2s, padding-left 0.2s;
        }
        .drawer__sub:hover { color: var(--accent); padding-left: 6px; }
        .drawer__bottom { display: flex; flex-direction: column; gap: 10px; margin-top: 12px; }
        .drawer__cta {
          display: block; text-align: center; padding: 12px; border-radius: 8px;
          text-decoration: none; font-family: var(--font-sans); font-size: 13.5px;
          background: var(--ink); color: #fff; transition: background 0.2s;
        }
        .drawer__cta:hover { background: #2e2b27; }
        .drawer__cta--outline {
          background: transparent; border: 1px solid var(--border); color: var(--ink-mid);
        }
        .drawer__cta--outline:hover { background: var(--cream); }

        /* ── RESPONSIVE ── */
        @media (max-width: 960px) {
          .hamburger { display: flex; }
          .nav__links, .btn-primary { display: none; }
          .nav { gap: 0; padding: 0 20px; }
          .brand { position: absolute; left: 50%; transform: translateX(-50%); }
          .search-wrap, .search-recents, .search-hint, .search-results { padding-left: 20px; padding-right: 20px; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
