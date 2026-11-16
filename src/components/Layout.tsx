import { Link, Outlet } from 'react-router-dom';
import { ShoppingCart, Search, User, Menu } from 'lucide-react';
import { navItems } from '../lib/mockData';

export function Layout() {
  return (
    <div className="app-shell">
      <div className="announcement-bar">
        <div className="container">
          <p>Free shipping over PKR 4,500 • Cash on Delivery available across Pakistan</p>
        </div>
      </div>

      <header className="site-header">
        <div className="container header-inner">
          <div className="brand-wrap">
            <button className="mobile-menu-button" aria-label="Open menu">
              <Menu size={18} />
            </button>
            <Link to="/" className="brand-mark">
              CHOSEN
            </Link>
          </div>

          <nav className="main-nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link key={item.label} to={item.to}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="header-actions">
            <button className="icon-button" aria-label="Search">
              <Search size={18} />
            </button>
            <Link to="/account" className="icon-button" aria-label="Account">
              <User size={18} />
            </Link>
            <Link to="/cart" className="icon-button cart-button" aria-label="Cart">
              <ShoppingCart size={18} />
              <span className="cart-count">2</span>
            </Link>
          </div>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <h3>CHOSEN</h3>
            <p>Upgrade Your Everyday.</p>
          </div>
          <div>
            <h4>Shop</h4>
            <ul>
              <li>Mobile Gadgets</li>
              <li>Kitchen Gadgets</li>
              <li>Home Appliances</li>
              <li>Fashion</li>
            </ul>
          </div>
          <div>
            <h4>Support</h4>
            <ul>
              <li>Shipping Policy</li>
              <li>Return & Refund</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li>hello@chosen.pk</li>
              <li>+92 300 1234567</li>
              <li>Islamabad, Pakistan</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
