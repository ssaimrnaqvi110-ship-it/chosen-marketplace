import type { Product } from '../types';
import { products } from '../lib/mockData';

export function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Premium lifestyle essentials</p>
            <h1>Upgrade Your Everyday.</h1>
            <p>
              Discover thoughtful gadgets, home improvements, kitchen upgrades and modern essentials curated for Pakistan’s lifestyle.
            </p>
            <div className="hero-actions">
              <a href="/shop" className="button">Shop Collection</a>
              <a href="/admin" className="button button-secondary">Admin Demo</a>
            </div>
          </div>

          <div className="hero-panel">
            <img
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80"
              alt="Premium home and lifestyle essentials"
            />
            <div className="hero-badge">
              <strong>New Arrival</strong>
              <div>Curated for modern living</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Best Sellers</h2>
            <a href="/shop">View all</a>
          </div>
          <div className="product-grid">
            {products.slice(0, 4).map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container feature-band">
          <div className="section-header">
            <h2>Why CHOSEN</h2>
          </div>
          <div className="feature-list">
            <div className="info-card">
              <h3>Thoughtful curation</h3>
              <p>Every product is selected for practical value, quality and daily convenience.</p>
            </div>
            <div className="info-card">
              <h3>Secure transactions</h3>
              <p>Orders are validated before placement to avoid stock and pricing issues.</p>
            </div>
            <div className="info-card">
              <h3>Built for Pakistan</h3>
              <p>Designed around local pricing, delivery expectations and e-commerce workflows.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
