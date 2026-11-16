import { Link } from 'react-router-dom';
import { BarChart3, Boxes, FolderOpen, LayoutTemplate, Package, ShieldCheck, ShoppingBag, ShoppingCart, Users } from 'lucide-react';

const adminCards = [
  { title: 'Sales Overview', value: 'PKR 2.4M', icon: BarChart3 },
  { title: 'Orders', value: '1,284', icon: ShoppingBag },
  { title: 'Customers', value: '628', icon: Users },
  { title: 'Products', value: '248', icon: Package },
  { title: 'Inventory', value: '18 low stock', icon: Boxes },
  { title: 'Content', value: '12 pages', icon: LayoutTemplate },
  { title: 'Media Assets', value: '190 files', icon: FolderOpen },
  { title: 'Security', value: 'RLS enabled', icon: ShieldCheck },
  { title: 'Cart Queue', value: '23 active', icon: ShoppingCart },
];

const adminModules = [
  { label: 'Dashboard', href: '/admin' },
  { label: 'Theme Studio', href: '/admin/theme-studio' },
  { label: 'Website Builder', href: '/admin/website-builder' },
  { label: 'Product Manager', href: '/admin' },
  { label: 'Category Manager', href: '/admin' },
  { label: 'Order Manager', href: '/admin' },
  { label: 'Customer Manager', href: '/admin' },
  { label: 'Campaign Manager', href: '/admin' },
  { label: 'Media Library', href: '/admin' },
  { label: 'Content Manager', href: '/admin/content-manager' },
  { label: 'Blog Manager', href: '/admin' },
  { label: 'Seller Manager', href: '/admin' },
  { label: 'Analytics & Reports', href: '/admin' },
  { label: 'Website Settings', href: '/admin/website-settings' },
  { label: 'User & Permissions', href: '/admin' },
];

export function AdminSidebar() {
  return (
    <aside className="admin-sidebar">
      <div className="admin-brand">CHOSEN Admin</div>
      <nav className="admin-nav">
        {adminModules.map(({ label, href }) => (
          <Link key={label} to={href} className="admin-nav-item">
            {label}
          </Link>
        ))}
      </nav>
      <div className="admin-cards">
        {adminCards.map(({ title, value, icon: Icon }) => (
          <div key={title} className="mini-card">
            <Icon size={18} />
            <div>
              <strong>{value}</strong>
              <small>{title}</small>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
