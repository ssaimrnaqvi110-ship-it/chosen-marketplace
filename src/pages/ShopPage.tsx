import { ProductCard } from '../components/ProductCard';
import type { Product } from '../types';
import { products } from '../lib/mockData';

export function ShopPage() {
  return (
    <div className="page-shell">
      <div className="container">
        <h1 className="page-heading">Shop All</h1>
        <div className="product-grid">
          {products.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
