@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

:root {
  --primary: #5B4032;
  --secondary: #38271F;
  --accent: #D7C2A5;
  --background: #F5F0E8;
  --secondary-background: #E8DED0;
  --text: #29231F;
  --muted-text: #6d5b51;
  --header-bg: #F7F1E9;
  --header-text: #2D2019;
  --footer-bg: #38271F;
  --footer-text: #F5F0E8;
  --button-bg: #5B4032;
  --button-text: #FFFFFF;
  --button-hover: #7B5C4D;
  --card-bg: #FFFFFF;
  --card-border: #E7D7C3;
  --announcement-bar: #38271F;
  --discount-badge: #C25745;
  --nav-bg: #F8F3EC;
  --nav-text: #2A201C;
  --heading-font: 'Georgia', serif;
  --body-font: 'Inter', sans-serif;
  --nav-font: 'Inter', sans-serif;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: var(--background);
  color: var(--text);
  font-family: var(--body-font);
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  display: block;
  max-width: 100%;
}

button,
input {
  font: inherit;
}

.container {
  width: min(1280px, calc(100% - 32px));
  margin: 0 auto;
}

.announcement-bar {
  background: var(--announcement-bar);
  color: var(--footer-text);
  font-size: 0.82rem;
  padding: 0.65rem 0;
}

.site-header {
  background: var(--header-bg);
  border-bottom: 1px solid rgba(91, 64, 50, 0.08);
  position: sticky;
  top: 0;
  z-index: 10;
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 78px;
  gap: 1.25rem;
}

.brand-wrap {
  display: flex;
  align-items: center;
  gap: 0.9rem;
}

.brand-mark {
  font-size: 1.8rem;
  font-family: var(--heading-font);
  letter-spacing: 0.1em;
  font-weight: 700;
  color: var(--primary);
}

.main-nav {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
  font-size: 0.94rem;
  font-family: var(--nav-font);
}

.main-nav a {
  color: var(--nav-text);
  transition: opacity 0.2s ease;
}

.main-nav a:hover {
  opacity: 0.7;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.icon-button,
.mobile-menu-button {
  border: 1px solid rgba(91, 64, 50, 0.12);
  background: rgba(255, 255, 255, 0.3);
  color: var(--text);
  border-radius: 999px;
  width: 42px;
  height: 42px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.cart-button {
  position: relative;
}

.cart-count {
  position: absolute;
  top: -6px;
  right: -4px;
  background: var(--button-bg);
  color: var(--button-text);
  border-radius: 50%;
  width: 18px;
  height: 18px;
  font-size: 0.68rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.hero {
  padding: 4rem 0 2rem;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 2rem;
  align-items: center;
}

.hero-copy h1 {
  margin: 0;
  font-size: clamp(2.8rem, 5vw, 5rem);
  line-height: 0.98;
  font-family: var(--heading-font);
  color: var(--primary);
}

.hero-copy p {
  margin: 1.3rem 0 2rem;
  font-size: 1.08rem;
  line-height: 1.7;
  color: var(--muted-text);
}

.eyebrow {
  margin: 0 0 0.55rem;
  color: var(--primary);
  letter-spacing: 0.16em;
  text-transform: uppercase;
  font-size: 0.74rem;
  font-weight: 700;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 46px;
  padding: 0.8rem 1.15rem;
  border: none;
  border-radius: 12px;
  background: var(--button-bg);
  color: var(--button-text);
  cursor: pointer;
  transition: background 0.2s ease;
}

.button:hover {
  background: var(--button-hover);
}

.button-secondary {
  background: transparent;
  color: var(--primary);
  border: 1px solid rgba(91, 64, 50, 0.15);
}

.button-small {
  min-height: 36px;
  padding: 0.55rem 0.8rem;
}

.hero-panel {
  min-height: 540px;
  border-radius: 28px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 18px 40px rgba(56, 39, 31, 0.08);
}

.hero-panel img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-badge {
  position: absolute;
  left: 1.2rem;
  bottom: 1.2rem;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(8px);
  padding: 0.9rem 1rem;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.06);
}

.section {
  padding: 2.25rem 0 1rem;
}

.section-header {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.4rem;
}

.section-header h2 {
  margin: 0;
  font-family: var(--heading-font);
  color: var(--secondary);
  font-size: clamp(2rem, 3vw, 3rem);
}

.section-header a {
  color: var(--primary);
  font-weight: 600;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.2rem;
}

.product-card {
  background: var(--card-bg);
  border-radius: 24px;
  border: 1px solid var(--card-border);
  overflow: hidden;
  box-shadow: 0 10px 24px rgba(41, 35, 31, 0.04);
}

.product-image-wrap {
  position: relative;
  aspect-ratio: 1 / 1;
  overflow: hidden;
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.discount-badge {
  position: absolute;
  top: 12px;
  left: 12px;
  background: var(--discount-badge);
  color: white;
  border-radius: 999px;
  padding: 0.35rem 0.7rem;
  font-size: 0.72rem;
  font-weight: 700;
}

.product-meta {
  padding: 1rem;
}

.product-category {
  display: inline-block;
  color: var(--muted-text);
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 0.5rem;
}

.product-meta h3 {
  margin: 0 0 0.8rem;
  font-size: 1.1rem;
}

.price-row {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  margin-bottom: 1rem;
}

.price-row strong {
  color: var(--primary);
  font-size: 1.18rem;
}

.price-row span {
  color: var(--muted-text);
  text-decoration: line-through;
  font-size: 0.88rem;
}

.product-actions {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.feature-band {
  background: linear-gradient(135deg, rgba(91, 64, 50, 0.08), rgba(215, 194, 165, 0.25));
  border-radius: 28px;
  padding: 2.2rem;
  margin-top: 3rem;
}

.feature-list {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.2rem;
  margin-top: 1rem;
}

.info-card {
  background: rgba(255, 255, 255, 0.48);
  border: 1px solid rgba(91, 64, 50, 0.08);
  border-radius: 18px;
  padding: 1.2rem;
}

.info-card h3 {
  margin-top: 0;
}

.site-footer {
  background: var(--footer-bg);
  color: var(--footer-text);
  margin-top: 4rem;
  padding: 3rem 0;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr 1fr 1fr;
  gap: 1.5rem;
}

.footer-grid h3,
.footer-grid h4 {
  margin-top: 0;
}

.footer-grid ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.45rem;
  color: rgba(245, 240, 232, 0.82);
}

.page-shell {
  padding: 3rem 0;
}

.page-heading {
  font-family: var(--heading-font);
  font-size: clamp(2.2rem, 4vw, 4rem);
  color: var(--primary);
  margin-bottom: 1.2rem;
}

.checkout-card,
.cart-card,
.admin-panel,
.card-panel {
  background: rgba(255, 255, 255, 0.55);
  border: 1px solid var(--card-border);
  border-radius: 24px;
  padding: 1.25rem;
  box-shadow: 0 12px 26px rgba(48, 31, 20, 0.04);
}

.cart-layout,
.admin-layout {
  display: grid;
  grid-template-columns: 1.6fr 0.9fr;
  gap: 1.5rem;
}

.summary-box {
  background: var(--secondary-background);
  border-radius: 20px;
  padding: 1.2rem;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  margin: 0.5rem 0;
  color: var(--muted-text);
}

.summary-row strong {
  color: var(--text);
}

.admin-layout {
  grid-template-columns: 320px 1fr;
}

.admin-sidebar {
  background: #efe6dc;
  border: 1px solid rgba(91, 64, 50, 0.12);
  border-radius: 24px;
  padding: 1.2rem;
}

.admin-brand {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 56px;
  background: rgba(91, 64, 50, 0.08);
  border-radius: 12px;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 1rem;
}

.admin-nav {
  display: grid;
  gap: 0.5rem;
  font-size: 0.93rem;
}

.admin-nav span {
  background: rgba(255, 255, 255, 0.2);
  padding: 0.75rem 0.9rem;
  border-radius: 12px;
  color: var(--secondary);
}

.admin-cards {
  display: grid;
  gap: 0.75rem;
  margin-top: 1.2rem;
}

.mini-card {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 16px;
  padding: 0.75rem 0.8rem;
}

.mini-card small {
  display: block;
  color: var(--muted-text);
}

.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.metric-card {
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid var(--card-border);
  border-radius: 20px;
  padding: 1rem;
}

.metric-card p {
  margin: 0 0 0.5rem;
  color: var(--muted-text);
}

.metric-card h3 {
  margin: 0;
  font-size: 1.7rem;
}

.theme-layout {
  display: grid;
  grid-template-columns: 420px minmax(0, 1fr);
  gap: 1.5rem;
}

.theme-grid {
  display: grid;
  gap: 0.75rem;
}

.field-row {
  display: grid;
  gap: 0.45rem;
  font-size: 0.9rem;
  color: var(--muted-text);
}

.field-row input[type='text'] {
  width: 100%;
  min-height: 42px;
  border: 1px solid rgba(91, 64, 50, 0.15);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.5);
  padding: 0.65rem 0.8rem;
}

.color-input-wrap {
  display: flex;
  align-items: center;
  gap: 0.65rem;
}

.color-input-wrap input[type='color'] {
  width: 52px;
  height: 42px;
  border: none;
  border-radius: 10px;
  background: transparent;
  padding: 0;
}

.color-input-wrap input[type='text'] {
  flex: 1;
}

.preview-toolbar {
  display: flex;
  justify-content: flex-end;
  gap: 0.7rem;
  margin-bottom: 1rem;
}

.device-frame {
  border: 1px solid rgba(91, 64, 50, 0.12);
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.75);
  min-height: 540px;
  padding: 1rem;
}

.device-frame.tablet {
  max-width: 760px;
  margin: 0 auto;
}

.device-frame.mobile {
  max-width: 380px;
  margin: 0 auto;
}

.mini-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 0.6rem 0.8rem;
  border-radius: 12px;
  background: rgba(91, 64, 50, 0.06);
  font-size: 0.85rem;
  color: var(--text);
}

.mini-hero {
  margin-top: 1rem;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  border-radius: 18px;
  color: white;
  padding: 1.25rem;
}

.mini-hero h3 {
  margin: 0;
  font-family: var(--heading-font);
  font-size: 2rem;
}

.mini-hero p {
  margin: 0.4rem 0 0;
  opacity: 0.9;
}

.mini-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.75rem;
  margin-top: 1rem;
}

.mini-card-preview {
  aspect-ratio: 1;
  border-radius: 18px;
  background: linear-gradient(135deg, rgba(215, 194, 165, 0.6), rgba(255, 255, 255, 0.8));
  border: 1px solid rgba(91, 64, 50, 0.08);
}

@media (max-width: 980px) {
  .product-grid,
  .feature-list,
  .dashboard-grid,
  .footer-grid,
  .hero-grid,
  .cart-layout,
  .admin-layout,
  .theme-layout {
    grid-template-columns: 1fr 1fr;
  }

  .main-nav {
    display: none;
  }
}

@media (max-width: 700px) {
  .product-grid,
  .feature-list,
  .dashboard-grid,
  .footer-grid,
  .hero-grid,
  .cart-layout,
  .admin-layout,
  .theme-layout {
    grid-template-columns: 1fr;
  }

  .header-inner {
    gap: 0.6rem;
  }

  .brand-mark {
    font-size: 1.4rem;
  }
}

@media (max-width: 520px) {
  .section-header {
    align-items: flex-start;
    flex-direction: column;
  }
}
