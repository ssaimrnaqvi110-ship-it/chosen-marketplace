# CHOSEN Architecture

## 1. System overview

CHOSEN is a premium Pakistani e-commerce platform with a customer storefront and a protected admin workspace. The core architecture is designed for future growth into a multi-vendor marketplace while starting in single-seller mode.

### Frontend

- React + TypeScript single-page app
- Tailwind CSS design system
- Centralised theme token engine
- Responsive storefront sections and admin workspace shells
- Route-based storefront and admin views

### Backend

- Supabase PostgreSQL database
- Supabase Auth for authentication
- RLS for access control and private customer records
- Supabase Storage for images, logos and banners
- Edge Functions for server-side validation and privileged operations

### Deployment

- Cloudflare Pages for the frontend build
- Supabase for the app data layer and storage
- Secure secret management outside version control

## 2. Sitemap

### Storefront

- Home
- Shop All
- Category pages
- Product detail
- Search and filtering
- Cart
- Checkout
- Account
- My Orders
- Tracking
- Wishlist
- About
- Contact
- FAQs
- Shipping Policy
- Return & Refund Policy
- Privacy Policy
- Terms & Conditions
- Blog
- Seller registration/login (off by default)

### Admin

- Dashboard
- Theme Studio
- Website Builder
- Product Manager
- Category Manager
- Order Manager
- Customer Manager
- Campaign Manager
- Media Library
- Content Manager
- Blog Manager
- Seller Manager
- Analytics & Reports
- Website Settings
- User & Permissions

## 3. Database schema

The schema begins with the following core entities:

- `profiles`
- `user_roles`
- `store_settings`
- `themes`
- `theme_versions`
- `categories`
- `products`
- `product_images`
- `product_variants`
- `inventory`
- `carts`
- `cart_items`
- `orders`
- `order_items`
- `payments`
- `addresses`
- `wishlists`
- `wishlist_items`
- `campaigns`
- `campaign_products`
- `coupons`
- `media_assets`
- `pages`
- `page_sections`
- `blog_posts`
- `blog_categories`
- `customers`
- `sellers`
- `seller_applications`
- `audit_logs`

These are designed with constraints, foreign keys and timestamps so that order creation and stock validation can be transactional and secure.

## 4. Development checklist

- [x] Repository setup
- [x] Project architecture foundation
- [x] Storefront structure and route shell
- [x] Admin dashboard shell and metrics cards
- [x] Centralized theme configuration foundation
- [ ] Supabase schema migration and RLS setup
- [ ] Storefront CMS and theme persistence
- [ ] Product manager and inventory module
- [ ] Cart and COD checkout flow
- [ ] Order workflow and customer tracking
- [ ] Campaign and blog modules
- [ ] Analytics and reporting
- [ ] Deployment configuration and docs
