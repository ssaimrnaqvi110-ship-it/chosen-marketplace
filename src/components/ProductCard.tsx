import { Link } from 'react-router-dom';
import type { Product } from '../types';

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <img src={product.image} alt={product.name} className="product-image" />
        {product.discount ? <span className="discount-badge">-{product.discount}%</span> : null}
      </div>
      <div className="product-meta">
        <span className="product-category">{product.category}</span>
        <h3>{product.name}</h3>
        <div className="price-row">
          <strong>PKR {product.price.toLocaleString()}</strong>
          <span>PKR {product.originalPrice.toLocaleString()}</span>
        </div>
        <div className="product-actions">
          <Link to={`/product/${product.id}`} className="button button-secondary">
            View Details
          </Link>
          <button className="button">Add to Cart</button>
        </div>
      </div>
    </article>
  );
}
