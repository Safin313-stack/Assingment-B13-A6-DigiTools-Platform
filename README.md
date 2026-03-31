<div align="center">

<br/>

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0f0c29,50:1a1a3e,100:0f3460&height=200&section=header&text=DigiTools+Platform&fontSize=52&fontColor=ffffff&fontAlignY=38&desc=A+modern+digital+tools+marketplace+built+with+React+and+Vite&descAlignY=60&descSize=15&descColor=94a3b8" width="100%"/>

<br/>

[![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![DaisyUI](https://img.shields.io/badge/DaisyUI-5A0EF8?style=flat-square&logo=daisyui&logoColor=white)](https://daisyui.com/)
[![MIT License](https://img.shields.io/badge/License-MIT-22c55e?style=flat-square)](LICENSE)
[![Deployed](https://img.shields.io/badge/Deployed-GitHub%20Pages-0ea5e9?style=flat-square&logo=github)](https://safin313-stack.github.io/Assingment-B13-A6-DigiTools-Platform/)
[![PH Batch](https://img.shields.io/badge/Programming%20Hero-Batch%2013-f97316?style=flat-square)](https://web.programming-hero.com)

<br/>

<a href="https://safin313-stack.github.io/Assingment-B13-A6-DigiTools-Platform/">
  <img src="https://img.shields.io/badge/-%F0%9F%9B%A0%EF%B8%8F%20%20LIVE%20DEMO%20%20%E2%86%92-0f3460?style=for-the-badge&logoColor=white" alt="Live Demo" height="42"/>
</a>

<br/>
<sub>✦ No login &nbsp;·&nbsp; No install &nbsp;·&nbsp; Opens instantly in your browser ✦</sub>

<br/><br/>

</div>

---

<div align="center">

### 🛠️ What You Get

| 🛒 Smart Cart | 🔄 Product/Cart Toggle | 🔔 Toast Alerts | 🌙 Dark Theme | 📊 Platform Stats | 💰 Pricing Plans |
|:---:|:---:|:---:|:---:|:---:|:---:|
| Add · remove · clear with live running total | Tab system switches between product grid and cart list | React-Toastify feedback on every cart action | Fully dark-themed UI with gradient accents | Stats section showing platform numbers | Tiered pricing plan section |

</div>

---

## 🖥️ Page Structure

```
╔══════════════════════════════════════════════════════════════╗
║  🛠️  DigiTools                              🛒 Cart [3]     ║  ← Navbar
╠══════════════════════════════════════════════════════════════╣
║                                                              ║
║   Discover the Best Digital Tools          [ floating card ] ║  ← Hero Banner
║   for Your Workflow                                          ║
║                                                              ║
╠══════════════════════════════════════════════════════════════╣
║   10K+ Tools   ·   50K+ Users   ·   4.9★ Rating             ║  ← Stats
╠══════════════════════════════════════════════════════════════╣
║                                                              ║
║  [ All Products ]  [ Cart (3) ]   ← tab toggle              ║
║                                                              ║
║  ╔══════════════╗ ╔══════════════╗ ╔══════════════╗          ║  ← Product Grid
║  ║ Design Tool  ║ ║ Dev Package  ║ ║ Analytics    ║          ║
║  ║ $29/mo       ║ ║ $49/mo       ║ ║ $19/mo       ║          ║
║  ║ [Add to Cart]║ ║ [Add to Cart]║ ║ [Add to Cart]║          ║
║  ╚══════════════╝ ╚══════════════╝ ╚══════════════╝          ║
╠══════════════════════════════════════════════════════════════╣
║   How It Works  →  Step 1  →  Step 2  →  Step 3             ║  ← Steps
╠══════════════════════════════════════════════════════════════╣
║   Free  ·  Pro  ·  Enterprise   ← pricing plans             ║  ← Pricing
╠══════════════════════════════════════════════════════════════╣
║                        Footer                                ║
╚══════════════════════════════════════════════════════════════╝
```

---

## ⚡ Key Features

### Smart Cart System

```jsx
// Cart state managed in App.jsx — passed as props
const [cart, setCart] = useState([]);

const addToCart = (product) => {
  setCart(prev => [...prev, product]);
  toast.success(`${product.name} added to cart!`);
};

const removeFromCart = (id) => {
  setCart(prev => prev.filter(item => item.id !== id));
  toast.error('Item removed from cart');
};

const clearCart = () => {
  setCart([]);
  toast.info('Cart cleared — checkout complete!');
};
```

### Product / Cart Toggle View

```jsx
// Tab system with live cart count badge
const [activeTab, setActiveTab] = useState('products');

<div className="tabs">
  <button onClick={() => setActiveTab('products')}>
    All Products
  </button>
  <button onClick={() => setActiveTab('cart')}>
    Cart
    <span className="badge">{cart.length}</span>
  </button>
</div>

{activeTab === 'products'
  ? <ProductGrid products={products} onAdd={addToCart} />
  : <CartList items={cart} onRemove={removeFromCart} onClear={clearCart} />
}
```

### Running Total Calculation

```jsx
const total = cart.reduce((sum, item) => sum + item.price, 0);

<p>Total: ${total.toFixed(2)}</p>
```

---

## 📁 Project Structure

```
Assingment-B13-A6-DigiTools-Platform/
│
├── 📄 index.html
├── ⚙️  vite.config.js
├── 🎨 tailwind.config.js
├── 📦 package.json
│
└── 📂 src/
    ├── 🚀 App.jsx              ← Root · cart state · product data
    ├── 🎨 index.css            ← Global styles + animations
    ├── 📋 products.json        ← 8 product entries (data source)
    │
    └── 📂 components/
        ├── Navbar.jsx          ← Sticky navbar with cart count badge
        ├── Banner.jsx          ← Hero section with floating card
        ├── Stats.jsx           ← Platform statistics section
        ├── MainSection.jsx     ← Products grid + cart tab toggle
        ├── ProductCard.jsx     ← Individual product card component
        ├── CartItem.jsx        ← Cart item with remove button
        ├── Steps.jsx           ← How it works section
        ├── Pricing.jsx         ← Tiered pricing plans
        └── Footer.jsx          ← Site footer
```

---

## 🚀 Getting Started

**Option 1 — Live (instant, no setup)**

> 🔗 **[https://safin313-stack.github.io/Assingment-B13-A6-DigiTools-Platform/](https://safin313-stack.github.io/Assingment-B13-A6-DigiTools-Platform/)**

**Option 2 — Run locally**

```bash
git clone https://github.com/Safin313-stack/Assingment-B13-A6-DigiTools-Platform.git
cd Assingment-B13-A6-DigiTools-Platform
npm install
npm run dev
```

> App runs at `http://localhost:5173` ✅

**Option 3 — Build for production**

```bash
npm run build
```

---

## 🛠️ Tech Stack

```
┌──────────────────────────────────────────────────────────┐
│              React · Vite · Tailwind · DaisyUI           │
├─────────────────────┬────────────────────────────────────┤
│  React.js           │  Component-based UI architecture  │
│  Vite               │  Lightning-fast dev + build tool  │
│  Tailwind CSS       │  Utility-first styling            │
│  DaisyUI            │  Tailwind component library       │
│  React-Toastify     │  Toast notification system        │
│  JSON               │  Product data management          │
│  ESLint             │  Code quality and linting         │
└─────────────────────┴────────────────────────────────────┘
```

---

## 📚 Key Concepts Used

```
useState()           → cart state management in App.jsx
props drilling       → cart functions passed to child components
Array methods        → filter · reduce · spread for cart operations
Component structure  → 9 reusable React components
JSON data            → products.json as the data source
React-Toastify       → add · remove · clear notifications
Tab/toggle pattern   → conditional rendering based on active tab
Tailwind + DaisyUI   → rapid, consistent dark-themed UI
Vite                 → fast HMR development and optimised build
```

---

## 💡 Credits & Inspiration

Special thanks to **TCW - AI & coding resources** (Telegram Community)
for ideas, guidance, and coding support throughout this project. 🙏

---

<div align="center">

## 👤 Developer

<br/>

**Saharia Hassan Safin**
Front-end Developer · Programming Hero Batch 13

<br/>

[![GitHub](https://img.shields.io/badge/GitHub-Safin313--stack-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Safin313-stack)
&nbsp;
[![Live Project](https://img.shields.io/badge/Live%20Project-Visit%20Now-0f3460?style=for-the-badge&logo=vercel&logoColor=white)](https://safin313-stack.github.io/Assingment-B13-A6-DigiTools-Platform/)

<br/>

*"From vanilla JS to React — the toolkit keeps growing"* 🛠️

<br/>

</div>

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0f3460,50:1a1a3e,100:0f0c29&height=120&section=footer" width="100%"/>

<sub>MIT License · © 2025 Saharia Hassan Safin · ⭐ Star this repo if it helped you!</sub>

</div>
