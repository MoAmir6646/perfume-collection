import { useState, useMemo } from "react";

// ── Mock data ─────────────────────────────────────────────────────────────────
const MOCK_ORDERS = [
  { id: "ORD-1001", customer: "Rahul Sharma", email: "rahul@email.com", items: ["Midnight Oud × 1", "Ocean Breeze × 2"], total: 18997, date: "2025-06-08", status: "delivered" },
  { id: "ORD-1002", customer: "Priya Mehta",  email: "priya@email.com",  items: ["Royal Rose × 1"], total: 6499, date: "2025-06-09", status: "processing" },
  { id: "ORD-1003", customer: "Arjun Nair",   email: "arjun@email.com",  items: ["Midnight Oud × 2"], total: 15998, date: "2025-06-09", status: "shipped" },
  { id: "ORD-1004", customer: "Sneha Kapoor", email: "sneha@email.com",  items: ["Ocean Breeze × 1", "Royal Rose × 1"], total: 11998, date: "2025-06-10", status: "processing" },
  { id: "ORD-1005", customer: "Vikram Das",   email: "vikram@email.com", items: ["Royal Rose × 3"], total: 19497, date: "2025-06-07", status: "cancelled" },
  { id: "ORD-1006", customer: "Anjali Singh", email: "anjali@email.com", items: ["Midnight Oud × 1"], total: 7999, date: "2025-06-06", status: "delivered" },
];

const MOCK_PRODUCTS = [
  { id: 1, name: "Midnight Oud",  brand: "Luxury Essence", price: 7999, oldPrice: 9999, stock: 24, category: "Woody",   image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=200" },
  { id: 2, name: "Ocean Breeze",  brand: "Aqua Mist",      price: 5499, oldPrice: 6999, stock: 41, category: "Fresh",   image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=200" },
  { id: 3, name: "Royal Rose",    brand: "Velvet Bloom",   price: 6499, oldPrice: 7999, stock: 12, category: "Floral",  image: "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?w=200" },
  { id: 4, name: "Noir Absolu",   brand: "Luxury Essence", price: 8999, oldPrice: 10999, stock: 8, category: "Oriental", image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=200" },
  { id: 5, name: "First Light",   brand: "Aqua Mist",      price: 4999, oldPrice: 5999, stock: 35, category: "Fresh",   image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=200" },
];

const STATUS_META = {
  processing: { label: "Processing", color: "#b45309", bg: "#fef3c7" },
  shipped:    { label: "Shipped",    color: "#1d4ed8", bg: "#dbeafe" },
  delivered:  { label: "Delivered",  color: "#166534", bg: "#dcfce7" },
  cancelled:  { label: "Cancelled",  color: "#991b1b", bg: "#fee2e2" },
};

// ── Login gate ────────────────────────────────────────────────────────────────
const Login = ({ onLogin }) => {
  const [user, setUser]   = useState("");
  const [pass, setPass]   = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = () => {
    if (!user || !pass) { setError("Enter username and password."); return; }
    setLoading(true);
    setTimeout(() => {
      if (user === "admin" && pass === "admin123") {
        onLogin();
      } else {
        setError("Invalid credentials. Try admin / admin123.");
        setLoading(false);
      }
    }, 600);
  };

  return (
    <div className="adm-login">
      <div className="adm-login__box">
        <div className="adm-login__logo">
          <span className="adm-login__logo-mark">M</span>
          <span>Maison Admin</span>
        </div>
        <h2 className="adm-login__title">Sign in</h2>
        <p className="adm-login__sub">Restricted to authorised personnel only.</p>
        <div className="adm-field">
          <label>Username</label>
          <input value={user} onChange={e => { setUser(e.target.value); setError(""); }} placeholder="admin" onKeyDown={e => e.key === "Enter" && submit()} />
        </div>
        <div className="adm-field">
          <label>Password</label>
          <input type="password" value={pass} onChange={e => { setPass(e.target.value); setError(""); }} placeholder="••••••••" onKeyDown={e => e.key === "Enter" && submit()} />
        </div>
        {error && <p className="adm-login__err">{error}</p>}
        <button className="adm-login__btn" onClick={submit} disabled={loading}>
          {loading ? "Signing in…" : "Sign in →"}
        </button>
        <p className="adm-login__hint">Hint: admin / admin123</p>
      </div>
    </div>
  );
};

// ── Stat card ─────────────────────────────────────────────────────────────────
const StatCard = ({ label, value, sub, accent }) => (
  <div className="adm-stat" style={{ borderTopColor: accent }}>
    <p className="adm-stat__label">{label}</p>
    <p className="adm-stat__value">{value}</p>
    {sub && <p className="adm-stat__sub">{sub}</p>}
  </div>
);

// ── Orders tab ────────────────────────────────────────────────────────────────
const OrdersTab = () => {
  const [orders, setOrders]   = useState(MOCK_ORDERS);
  const [search, setSearch]   = useState("");
  const [filter, setFilter]   = useState("all");
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(() =>
    orders.filter(o =>
      (filter === "all" || o.status === filter) &&
      (o.id.toLowerCase().includes(search.toLowerCase()) ||
       o.customer.toLowerCase().includes(search.toLowerCase()))
    ), [orders, search, filter]);

  const updateStatus = (id, status) => {
    setOrders(prev => prev.map(o => o.id === id ? { ...o, status } : o));
    if (selected?.id === id) setSelected(prev => ({ ...prev, status }));
  };

  return (
    <div className="adm-tab-content">
      <div className="adm-toolbar">
        <input className="adm-search" placeholder="Search orders or customers…" value={search} onChange={e => setSearch(e.target.value)} />
        <div className="adm-filters">
          {["all", "processing", "shipped", "delivered", "cancelled"].map(f => (
            <button key={f} className={`adm-filter-btn ${filter === f ? "adm-filter-btn--active" : ""}`} onClick={() => setFilter(f)}>
              {f === "all" ? "All" : STATUS_META[f].label}
            </button>
          ))}
        </div>
      </div>

      <div className="adm-table-wrap">
        <table className="adm-table">
          <thead>
            <tr>
              <th>Order ID</th><th>Customer</th><th>Items</th>
              <th>Total</th><th>Date</th><th>Status</th><th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(order => {
              const s = STATUS_META[order.status];
              return (
                <tr key={order.id} className="adm-table__row" onClick={() => setSelected(order)}>
                  <td className="adm-table__id">{order.id}</td>
                  <td>
                    <p className="adm-table__name">{order.customer}</p>
                    <p className="adm-table__email">{order.email}</p>
                  </td>
                  <td className="adm-table__items">{order.items.length} item{order.items.length !== 1 ? "s" : ""}</td>
                  <td className="adm-table__price">₹{order.total.toLocaleString("en-IN")}</td>
                  <td className="adm-table__date">{order.date}</td>
                  <td>
                    <span className="adm-badge" style={{ color: s.color, background: s.bg }}>{s.label}</span>
                  </td>
                  <td onClick={e => e.stopPropagation()}>
                    <select className="adm-status-select" value={order.status} onChange={e => updateStatus(order.id, e.target.value)}>
                      {Object.entries(STATUS_META).map(([k, v]) => <option key={k} value={k}>{v.label}</option>)}
                    </select>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {filtered.length === 0 && <p className="adm-empty">No orders match your filter.</p>}
      </div>

      {/* Order detail drawer */}
      {selected && (
        <div className="adm-drawer-overlay" onClick={() => setSelected(null)}>
          <div className="adm-drawer" onClick={e => e.stopPropagation()}>
            <div className="adm-drawer__head">
              <h3>{selected.id}</h3>
              <button className="adm-drawer__close" onClick={() => setSelected(null)}>✕</button>
            </div>
            <div className="adm-drawer__section">
              <p className="adm-drawer__label">Customer</p>
              <p className="adm-drawer__val">{selected.customer}</p>
              <p className="adm-drawer__val adm-drawer__val--muted">{selected.email}</p>
            </div>
            <div className="adm-drawer__section">
              <p className="adm-drawer__label">Items</p>
              {selected.items.map((it, i) => <p key={i} className="adm-drawer__val">{it}</p>)}
            </div>
            <div className="adm-drawer__section">
              <p className="adm-drawer__label">Total</p>
              <p className="adm-drawer__val adm-drawer__val--accent">₹{selected.total.toLocaleString("en-IN")}</p>
            </div>
            <div className="adm-drawer__section">
              <p className="adm-drawer__label">Update Status</p>
              <div className="adm-drawer__status-btns">
                {Object.entries(STATUS_META).map(([k, v]) => (
                  <button
                    key={k}
                    className={`adm-drawer__status-btn ${selected.status === k ? "adm-drawer__status-btn--active" : ""}`}
                    style={selected.status === k ? { background: v.bg, color: v.color, borderColor: v.color } : {}}
                    onClick={() => updateStatus(selected.id, k)}
                  >{v.label}</button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// ── Products tab ──────────────────────────────────────────────────────────────
const ProductsTab = () => {
  const [products, setProducts] = useState(MOCK_PRODUCTS);
  const [editing, setEditing]   = useState(null);
  const [adding, setAdding]     = useState(false);
  const [form, setForm]         = useState({});
  const [search, setSearch]     = useState("");

  const blank = { name: "", brand: "", price: "", oldPrice: "", stock: "", category: "", image: "" };

  const openEdit = (p) => { setForm({ ...p }); setEditing(p.id); setAdding(false); };
  const openAdd  = () => { setForm(blank); setAdding(true); setEditing(null); };
  const closeForm = () => { setEditing(null); setAdding(false); };

  const save = () => {
    if (!form.name || !form.price) return;
    if (adding) {
      setProducts(prev => [...prev, { ...form, id: Date.now(), price: +form.price, oldPrice: +form.oldPrice, stock: +form.stock }]);
    } else {
      setProducts(prev => prev.map(p => p.id === editing ? { ...form, price: +form.price, oldPrice: +form.oldPrice, stock: +form.stock } : p));
    }
    closeForm();
  };

  const remove = (id) => setProducts(prev => prev.filter(p => p.id !== id));

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.brand.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="adm-tab-content">
      <div className="adm-toolbar">
        <input className="adm-search" placeholder="Search products…" value={search} onChange={e => setSearch(e.target.value)} />
        <button className="adm-add-btn" onClick={openAdd}>+ Add Product</button>
      </div>

      <div className="adm-products-grid">
        {filtered.map(p => (
          <div key={p.id} className="adm-product-card">
            <div className="adm-product-card__img">
              <img src={p.image} alt={p.name} />
              <span className={`adm-stock-badge ${p.stock < 10 ? "adm-stock-badge--low" : ""}`}>
                {p.stock < 10 ? "Low stock" : `${p.stock} in stock`}
              </span>
            </div>
            <div className="adm-product-card__body">
              <p className="adm-product-card__cat">{p.category}</p>
              <p className="adm-product-card__name">{p.name}</p>
              <p className="adm-product-card__brand">{p.brand}</p>
              <div className="adm-product-card__prices">
                <span className="adm-price-new">₹{p.price.toLocaleString("en-IN")}</span>
                <span className="adm-price-old">₹{p.oldPrice.toLocaleString("en-IN")}</span>
              </div>
              <div className="adm-product-card__actions">
                <button className="adm-btn-edit" onClick={() => openEdit(p)}>Edit</button>
                <button className="adm-btn-del" onClick={() => remove(p.id)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add / Edit form modal */}
      {(editing || adding) && (
        <div className="adm-drawer-overlay" onClick={closeForm}>
          <div className="adm-drawer adm-drawer--wide" onClick={e => e.stopPropagation()}>
            <div className="adm-drawer__head">
              <h3>{adding ? "Add Product" : "Edit Product"}</h3>
              <button className="adm-drawer__close" onClick={closeForm}>✕</button>
            </div>
            {[
              ["name", "Product Name", "Midnight Oud"],
              ["brand", "Brand", "Luxury Essence"],
              ["category", "Category", "Woody / Floral / Fresh…"],
              ["price", "Price (₹)", "7999"],
              ["oldPrice", "Old Price (₹)", "9999"],
              ["stock", "Stock", "24"],
              ["image", "Image URL", "https://…"],
            ].map(([key, label, placeholder]) => (
              <div className="adm-field" key={key}>
                <label>{label}</label>
                <input
                  placeholder={placeholder}
                  value={form[key] || ""}
                  onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
                />
              </div>
            ))}
            {form.image && <img src={form.image} alt="preview" className="adm-img-preview" />}
            <div className="adm-drawer__foot">
              <button className="adm-btn-cancel" onClick={closeForm}>Cancel</button>
              <button className="adm-btn-save" onClick={save}>{adding ? "Add Product" : "Save Changes"}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// ── Dashboard tab ─────────────────────────────────────────────────────────────
const DashboardTab = () => {
  const totalRevenue  = MOCK_ORDERS.filter(o => o.status !== "cancelled").reduce((s, o) => s + o.total, 0);
  const totalOrders   = MOCK_ORDERS.length;
  const delivered     = MOCK_ORDERS.filter(o => o.status === "delivered").length;
  const lowStock      = MOCK_PRODUCTS.filter(p => p.stock < 10).length;

  const recentOrders  = [...MOCK_ORDERS].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 4);

  return (
    <div className="adm-tab-content">
      <div className="adm-stats-grid">
        <StatCard label="Total Revenue"   value={`₹${totalRevenue.toLocaleString("en-IN")}`} sub="Excl. cancelled orders" accent="#c9956b" />
        <StatCard label="Total Orders"    value={totalOrders} sub={`${delivered} delivered`} accent="#1d4ed8" />
        <StatCard label="Products Listed" value={MOCK_PRODUCTS.length} sub={`${lowStock} low stock`} accent="#166534" />
        <StatCard label="Avg. Order Value" value={`₹${Math.round(totalRevenue / (totalOrders - 1)).toLocaleString("en-IN")}`} sub="Excl. cancelled" accent="#7c3aed" />
      </div>

      <div className="adm-dash-grid">
        <div className="adm-dash-card">
          <h4 className="adm-dash-card__title">Recent Orders</h4>
          {recentOrders.map(o => {
            const s = STATUS_META[o.status];
            return (
              <div key={o.id} className="adm-dash-row">
                <div>
                  <p className="adm-dash-row__id">{o.id}</p>
                  <p className="adm-dash-row__name">{o.customer}</p>
                </div>
                <div className="adm-dash-row__right">
                  <span className="adm-badge" style={{ color: s.color, background: s.bg }}>{s.label}</span>
                  <p className="adm-dash-row__price">₹{o.total.toLocaleString("en-IN")}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="adm-dash-card">
          <h4 className="adm-dash-card__title">Order Status Breakdown</h4>
          {Object.entries(STATUS_META).map(([k, v]) => {
            const count = MOCK_ORDERS.filter(o => o.status === k).length;
            const pct   = Math.round((count / MOCK_ORDERS.length) * 100);
            return (
              <div key={k} className="adm-bar-row">
                <span className="adm-bar-row__label">{v.label}</span>
                <div className="adm-bar-track">
                  <div className="adm-bar-fill" style={{ width: `${pct}%`, background: v.color }} />
                </div>
                <span className="adm-bar-row__count">{count}</span>
              </div>
            );
          })}

          <h4 className="adm-dash-card__title" style={{ marginTop: 28 }}>Low Stock Alert</h4>
          {MOCK_PRODUCTS.filter(p => p.stock < 15).map(p => (
            <div key={p.id} className="adm-dash-row">
              <p className="adm-dash-row__name">{p.name}</p>
              <span className="adm-badge" style={{ color: p.stock < 10 ? "#991b1b" : "#b45309", background: p.stock < 10 ? "#fee2e2" : "#fef3c7" }}>
                {p.stock} left
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ── Main Admin component ──────────────────────────────────────────────────────
const Admin = () => {
  const [authed, setAuthed] = useState(false);
  const [tab, setTab]       = useState("dashboard");

  if (!authed) return (
    <>
      <Login onLogin={() => setAuthed(true)} />
      <style>{adminStyles}</style>
    </>
  );

  return (
    <div className="adm-layout">
      {/* Sidebar */}
      <aside className="adm-sidebar">
        <div className="adm-sidebar__brand">
          <span className="adm-sidebar__mark">M</span>
          <div>
            <p className="adm-sidebar__name">Maison Admin</p>
            <p className="adm-sidebar__role">Administrator</p>
          </div>
        </div>
        <nav className="adm-nav">
          {[["dashboard", "📊", "Dashboard"], ["orders", "📦", "Orders"], ["products", "🧴", "Products"]].map(([id, icon, label]) => (
            <button key={id} className={`adm-nav__item ${tab === id ? "adm-nav__item--active" : ""}`} onClick={() => setTab(id)}>
              <span className="adm-nav__icon">{icon}</span>
              <span>{label}</span>
            </button>
          ))}
        </nav>
        <button className="adm-logout" onClick={() => setAuthed(false)}>Sign out</button>
      </aside>

      {/* Main content */}
      <main className="adm-main">
        <div className="adm-topbar">
          <h1 className="adm-topbar__title">
            {tab === "dashboard" ? "Dashboard" : tab === "orders" ? "Orders" : "Products"}
          </h1>
          <p className="adm-topbar__date">{new Date().toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}</p>
        </div>
        {tab === "dashboard" && <DashboardTab />}
        {tab === "orders"    && <OrdersTab />}
        {tab === "products"  && <ProductsTab />}
      </main>

      <style>{adminStyles}</style>
    </div>
  );
};

// ── Styles ────────────────────────────────────────────────────────────────────
const adminStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400&family=Jost:wght@300;400;500&display=swap');
  :root {
    --accent: #c9956b; --black: #0a0a0a; --white: #fff;
    --off: #f7f4f0; --muted: #888; --border: #e8e8e8;
    --font-serif: 'Cormorant Garamond', serif; --font-sans: 'Jost', sans-serif;
    --sidebar-w: 220px;
  }

  /* Login */
  .adm-login { min-height: 100vh; background: var(--off); display: flex; align-items: center; justify-content: center; font-family: var(--font-sans); }
  .adm-login__box { background: white; border-radius: 14px; padding: 48px 40px; width: 100%; max-width: 400px; box-shadow: 0 4px 32px rgba(0,0,0,0.08); }
  .adm-login__logo { display: flex; align-items: center; gap: 12px; margin-bottom: 32px; font-size: 15px; font-weight: 500; }
  .adm-login__logo-mark { width: 36px; height: 36px; background: var(--black); color: white; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-family: var(--font-serif); font-size: 20px; }
  .adm-login__title { font-family: var(--font-serif); font-size: 30px; font-weight: 400; margin: 0 0 6px; }
  .adm-login__sub { font-size: 13px; color: var(--muted); margin: 0 0 28px; }
  .adm-login__err { font-size: 13px; color: #dc2626; margin: -8px 0 12px; }
  .adm-login__btn { width: 100%; padding: 13px; background: var(--black); color: white; border: none; border-radius: 6px; font-family: var(--font-sans); font-size: 13px; letter-spacing: 1px; cursor: pointer; margin-top: 8px; transition: background 0.3s; }
  .adm-login__btn:hover { background: var(--accent); }
  .adm-login__hint { font-size: 12px; color: var(--muted); text-align: center; margin-top: 14px; }

  /* Fields */
  .adm-field { display: flex; flex-direction: column; gap: 6px; margin-bottom: 16px; }
  .adm-field label { font-size: 11px; letter-spacing: 1.5px; text-transform: uppercase; color: var(--muted); }
  .adm-field input { padding: 10px 13px; border: 1.5px solid var(--border); border-radius: 6px; font-family: var(--font-sans); font-size: 14px; color: var(--black); outline: none; transition: border-color 0.2s; }
  .adm-field input:focus { border-color: var(--accent); }

  /* Layout */
  .adm-layout { display: flex; min-height: 100vh; font-family: var(--font-sans); background: var(--off); }

  /* Sidebar */
  .adm-sidebar { width: var(--sidebar-w); background: var(--black); display: flex; flex-direction: column; padding: 28px 0; flex-shrink: 0; }
  .adm-sidebar__brand { display: flex; align-items: center; gap: 12px; padding: 0 20px 28px; border-bottom: 1px solid rgba(255,255,255,0.08); margin-bottom: 16px; }
  .adm-sidebar__mark { width: 36px; height: 36px; background: var(--accent); border-radius: 8px; display: flex; align-items: center; justify-content: center; font-family: var(--font-serif); font-size: 20px; color: white; flex-shrink: 0; }
  .adm-sidebar__name { font-size: 14px; font-weight: 500; color: white; margin: 0; }
  .adm-sidebar__role { font-size: 11px; color: rgba(255,255,255,0.4); margin: 2px 0 0; }
  .adm-nav { display: flex; flex-direction: column; gap: 4px; padding: 0 12px; flex: 1; }
  .adm-nav__item { display: flex; align-items: center; gap: 12px; padding: 11px 14px; border-radius: 8px; border: none; background: none; color: rgba(255,255,255,0.5); font-family: var(--font-sans); font-size: 14px; cursor: pointer; transition: all 0.2s; text-align: left; }
  .adm-nav__item:hover { background: rgba(255,255,255,0.06); color: rgba(255,255,255,0.85); }
  .adm-nav__item--active { background: rgba(201,149,107,0.18); color: var(--accent); }
  .adm-nav__icon { font-size: 16px; }
  .adm-logout { margin: 0 12px 0; padding: 11px 14px; background: none; border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; color: rgba(255,255,255,0.35); font-family: var(--font-sans); font-size: 13px; cursor: pointer; transition: all 0.2s; }
  .adm-logout:hover { color: #ef4444; border-color: #ef4444; }

  /* Main */
  .adm-main { flex: 1; overflow: auto; }
  .adm-topbar { display: flex; align-items: baseline; justify-content: space-between; padding: 32px 36px 24px; border-bottom: 1px solid var(--border); background: white; }
  .adm-topbar__title { font-family: var(--font-serif); font-size: 32px; font-weight: 400; margin: 0; color: var(--black); }
  .adm-topbar__date { font-size: 13px; color: var(--muted); }
  .adm-tab-content { padding: 32px 36px; }

  /* Stat cards */
  .adm-stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-bottom: 32px; }
  .adm-stat { background: white; border-radius: 10px; padding: 22px 24px; border-top: 3px solid var(--accent); box-shadow: 0 2px 12px rgba(0,0,0,0.05); }
  .adm-stat__label { font-size: 11px; letter-spacing: 1.5px; text-transform: uppercase; color: var(--muted); margin: 0 0 10px; }
  .adm-stat__value { font-family: var(--font-serif); font-size: 30px; font-weight: 400; color: var(--black); margin: 0 0 4px; }
  .adm-stat__sub { font-size: 12px; color: var(--muted); margin: 0; }

  /* Dashboard grid */
  .adm-dash-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
  .adm-dash-card { background: white; border-radius: 10px; padding: 24px; box-shadow: 0 2px 12px rgba(0,0,0,0.05); }
  .adm-dash-card__title { font-family: var(--font-serif); font-size: 20px; font-weight: 400; margin: 0 0 18px; color: var(--black); }
  .adm-dash-row { display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-bottom: 1px solid var(--border); }
  .adm-dash-row:last-child { border-bottom: none; }
  .adm-dash-row__id { font-size: 12px; color: var(--muted); margin: 0; }
  .adm-dash-row__name { font-size: 14px; font-weight: 500; color: var(--black); margin: 2px 0 0; }
  .adm-dash-row__right { display: flex; flex-direction: column; align-items: flex-end; gap: 4px; }
  .adm-dash-row__price { font-size: 14px; font-weight: 500; color: var(--black); margin: 0; }

  /* Bar chart */
  .adm-bar-row { display: flex; align-items: center; gap: 12px; margin-bottom: 12px; }
  .adm-bar-row__label { font-size: 13px; color: var(--muted); width: 84px; flex-shrink: 0; }
  .adm-bar-track { flex: 1; height: 6px; background: var(--off); border-radius: 3px; overflow: hidden; }
  .adm-bar-fill { height: 100%; border-radius: 3px; transition: width 0.6s ease; }
  .adm-bar-row__count { font-size: 13px; font-weight: 500; color: var(--black); width: 20px; text-align: right; }

  /* Toolbar */
  .adm-toolbar { display: flex; align-items: center; gap: 16px; margin-bottom: 24px; flex-wrap: wrap; }
  .adm-search { padding: 9px 14px; border: 1.5px solid var(--border); border-radius: 6px; font-family: var(--font-sans); font-size: 14px; outline: none; width: 260px; transition: border-color 0.2s; background: white; }
  .adm-search:focus { border-color: var(--accent); }
  .adm-filters { display: flex; gap: 8px; flex-wrap: wrap; }
  .adm-filter-btn { padding: 7px 14px; border: 1.5px solid var(--border); border-radius: 20px; background: white; font-family: var(--font-sans); font-size: 12px; cursor: pointer; transition: all 0.2s; color: var(--muted); }
  .adm-filter-btn:hover { border-color: var(--accent); color: var(--accent); }
  .adm-filter-btn--active { background: var(--black); color: white; border-color: var(--black); }
  .adm-add-btn { padding: 9px 20px; background: var(--accent); color: white; border: none; border-radius: 6px; font-family: var(--font-sans); font-size: 13px; cursor: pointer; margin-left: auto; transition: background 0.2s; }
  .adm-add-btn:hover { background: #b8845a; }

  /* Table */
  .adm-table-wrap { background: white; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 12px rgba(0,0,0,0.05); overflow-x: auto; }
  .adm-table { width: 100%; border-collapse: collapse; font-size: 14px; }
  .adm-table thead tr { background: var(--off); }
  .adm-table th { padding: 13px 16px; text-align: left; font-size: 11px; letter-spacing: 1.2px; text-transform: uppercase; color: var(--muted); font-weight: 500; border-bottom: 1px solid var(--border); }
  .adm-table__row { border-bottom: 1px solid var(--border); cursor: pointer; transition: background 0.15s; }
  .adm-table__row:last-child { border-bottom: none; }
  .adm-table__row:hover { background: #faf9f7; }
  .adm-table td { padding: 14px 16px; vertical-align: middle; }
  .adm-table__id { font-size: 12px; color: var(--accent); font-weight: 500; }
  .adm-table__name { font-weight: 500; color: var(--black); margin: 0; font-size: 14px; }
  .adm-table__email { font-size: 12px; color: var(--muted); margin: 2px 0 0; }
  .adm-table__items { color: var(--muted); }
  .adm-table__price { font-weight: 500; }
  .adm-table__date { color: var(--muted); font-size: 13px; }
  .adm-status-select { padding: 5px 8px; border: 1.5px solid var(--border); border-radius: 5px; font-family: var(--font-sans); font-size: 12px; cursor: pointer; background: white; outline: none; }
  .adm-status-select:focus { border-color: var(--accent); }
  .adm-empty { text-align: center; color: var(--muted); padding: 48px; font-size: 14px; }

  /* Badge */
  .adm-badge { display: inline-block; padding: 4px 10px; border-radius: 20px; font-size: 11px; font-weight: 500; }

  /* Products grid */
  .adm-products-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 20px; }
  .adm-product-card { background: white; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 12px rgba(0,0,0,0.05); }
  .adm-product-card__img { position: relative; }
  .adm-product-card__img img { width: 100%; height: 160px; object-fit: cover; display: block; }
  .adm-stock-badge { position: absolute; top: 8px; right: 8px; padding: 3px 9px; border-radius: 20px; font-size: 11px; background: #dcfce7; color: #166534; font-weight: 500; }
  .adm-stock-badge--low { background: #fee2e2; color: #991b1b; }
  .adm-product-card__body { padding: 14px; }
  .adm-product-card__cat { font-size: 10px; letter-spacing: 1.5px; text-transform: uppercase; color: var(--muted); margin: 0 0 4px; }
  .adm-product-card__name { font-family: var(--font-serif); font-size: 18px; font-weight: 400; margin: 0 0 2px; color: var(--black); }
  .adm-product-card__brand { font-size: 12px; color: var(--muted); margin: 0 0 10px; }
  .adm-product-card__prices { display: flex; align-items: baseline; gap: 8px; margin-bottom: 12px; }
  .adm-price-new { font-size: 15px; font-weight: 500; color: var(--black); }
  .adm-price-old { font-size: 12px; color: var(--muted); text-decoration: line-through; }
  .adm-product-card__actions { display: flex; gap: 8px; }
  .adm-btn-edit { flex: 1; padding: 7px; border: 1.5px solid var(--border); border-radius: 5px; background: none; font-family: var(--font-sans); font-size: 12px; cursor: pointer; transition: all 0.2s; color: var(--black); }
  .adm-btn-edit:hover { border-color: var(--accent); color: var(--accent); }
  .adm-btn-del { padding: 7px 10px; border: 1.5px solid var(--border); border-radius: 5px; background: none; font-family: var(--font-sans); font-size: 12px; cursor: pointer; transition: all 0.2s; color: var(--muted); }
  .adm-btn-del:hover { border-color: #ef4444; color: #ef4444; }

  /* Drawer */
  .adm-drawer-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.4); z-index: 100; display: flex; justify-content: flex-end; }
  .adm-drawer { width: 380px; background: white; height: 100%; overflow-y: auto; padding: 28px; box-shadow: -4px 0 24px rgba(0,0,0,0.12); }
  .adm-drawer--wide { width: 460px; }
  .adm-drawer__head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; }
  .adm-drawer__head h3 { font-family: var(--font-serif); font-size: 24px; font-weight: 400; margin: 0; }
  .adm-drawer__close { background: none; border: none; font-size: 18px; cursor: pointer; color: var(--muted); padding: 4px 8px; }
  .adm-drawer__close:hover { color: var(--black); }
  .adm-drawer__section { margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid var(--border); }
  .adm-drawer__label { font-size: 11px; letter-spacing: 1.5px; text-transform: uppercase; color: var(--muted); margin: 0 0 8px; }
  .adm-drawer__val { font-size: 15px; color: var(--black); margin: 2px 0; }
  .adm-drawer__val--muted { color: var(--muted); font-size: 13px; }
  .adm-drawer__val--accent { color: var(--accent); font-weight: 500; font-size: 18px; }
  .adm-drawer__status-btns { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 8px; }
  .adm-drawer__status-btn { padding: 7px 14px; border: 1.5px solid var(--border); border-radius: 20px; font-family: var(--font-sans); font-size: 12px; cursor: pointer; background: none; color: var(--muted); transition: all 0.2s; }
  .adm-drawer__status-btn--active { font-weight: 500; }
  .adm-drawer__foot { display: flex; justify-content: flex-end; gap: 12px; margin-top: 24px; padding-top: 20px; border-top: 1px solid var(--border); }
  .adm-btn-cancel { padding: 10px 20px; border: 1.5px solid var(--border); border-radius: 6px; background: none; font-family: var(--font-sans); font-size: 13px; cursor: pointer; color: var(--muted); }
  .adm-btn-save { padding: 10px 24px; background: var(--black); color: white; border: none; border-radius: 6px; font-family: var(--font-sans); font-size: 13px; cursor: pointer; transition: background 0.2s; }
  .adm-btn-save:hover { background: var(--accent); }
  .adm-img-preview { width: 100%; height: 120px; object-fit: cover; border-radius: 6px; margin-top: -8px; margin-bottom: 16px; }

  @media (max-width: 900px) {
    .adm-sidebar { display: none; }
    .adm-dash-grid { grid-template-columns: 1fr; }
    .adm-tab-content { padding: 20px; }
    .adm-topbar { padding: 20px; }
    .adm-drawer { width: 100vw; }
  }
`;

export default Admin;