import { useParams } from 'react-router-dom';
import { products } from '../lib/mockData';

export function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return <div className="page-shell"><div className="container">Product not found.</div></div>;
  }

  return (
    <div className="page-shell">
      <div className="container cart-layout">
        <div className="cart-card">
          <img src={product.image} alt={product.name} style={{ borderRadius: 20, width: '100%', maxHeight: 520, objectFit: 'cover' }} />
        </div>

        <div className="checkout-card">
          <span className="product-category">{product.category}</span>
          <h1 className="page-heading" style={{ fontSize: '2.5rem', marginBottom: '0.8rem' }}>{product.name}</h1>
          <div className="price-row" style={{ marginBottom: '1rem' }}>
            <strong>PKR {product.price.toLocaleString()}</strong>
            <span>PKR {product.originalPrice.toLocaleString()}</span>
          </div>
          <p>{product.description}</p>
          <div className="hero-actions" style={{ marginTop: '1rem' }}>
            <button className="button">Add to Cart</button>
            <button className="button button-secondary">Add to Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
}
