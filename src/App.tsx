import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { CartPage } from './pages/CartPage';
import { AdminDashboardPage } from './pages/AdminDashboardPage';
import { ThemeStudioPage } from './pages/ThemeStudioPage';
import { WebsiteBuilderPage } from './pages/WebsiteBuilderPage';
import { ContentManagerPage } from './pages/ContentManagerPage';
import { WebsiteSettingsPage } from './pages/WebsiteSettingsPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/shop/:category" element={<ShopPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/admin" element={<AdminDashboardPage />} />
          <Route path="/admin/theme-studio" element={<ThemeStudioPage />} />
          <Route path="/admin/website-builder" element={<WebsiteBuilderPage />} />
          <Route path="/admin/content-manager" element={<ContentManagerPage />} />
          <Route path="/admin/website-settings" element={<WebsiteSettingsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
