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

export function AdminSidebar() {
  return (
    <aside className="admin-sidebar">
      <div className="admin-brand">CHOSEN Admin</div>
      <nav className="admin-nav">
        <span>Dashboard</span>
        <span>Theme Studio</span>
        <span>Website Builder</span>
        <span>Product Manager</span>
        <span>Category Manager</span>
        <span>Order Manager</span>
        <span>Customer Manager</span>
        <span>Campaign Manager</span>
        <span>Media Library</span>
        <span>Content Manager</span>
        <span>Blog Manager</span>
        <span>Seller Manager</span>
        <span>Analytics & Reports</span>
        <span>Website Settings</span>
        <span>User & Permissions</span>
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
