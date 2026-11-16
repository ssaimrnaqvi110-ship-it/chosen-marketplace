# CHOSEN Marketplace

CHOSEN is a premium Pakistani e-commerce marketplace built with React + TypeScript, Tailwind CSS, and Supabase. This repository is the foundation for the full storefront and admin platform described in the project brief.

## Current project status

- Phase 1 foundation is in progress.
- Initial architecture, routes, design tokens, storefront structure, and admin shell have been created.
- The project is ready to expand into the full marketplace and admin experience in subsequent phases.

## Local development

1. Install dependencies:
   `npm install`
2. Copy `.env.example` to `.env.local` and fill in values from your Supabase project.
3. Run the dev server:
   `npm run dev`
4. Build the production bundle:
   `npm run build`

## Environment variables

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`
- `VITE_APP_NAME`
- `VITE_DEFAULT_CURRENCY`

## Project architecture

- Frontend: React + TypeScript + Tailwind CSS
- Backend: Supabase Auth + PostgreSQL + RLS + Storage
- Deployment target: Cloudflare Pages
- Theme engine: centralized CSS variables sourced from database-backed theme records
- Storefront pages: home, shop, product details, cart, checkout and customer/app content pages
- Admin modules: dashboard, theme studio, CMS, products, orders, settings and analytics

## Directory structure

- `src/` — frontend application source
- `database/` — PostgreSQL schema and migration starter files
- `docs/` — architecture and phase planning documentation
- `supabase/` — optional function and migration staging area

## Database foundations

The initial database schema includes core entities for:

- storefront settings
- categories and products
- product variants, images and inventory
- carts and orders
- customers and addresses
- campaigns and coupons
- theme versions and page sections
- blog posts and media assets
- admin audit logs

See `database/schema.sql`.

## Important notes

- The repository intentionally uses a safe mock/offline storefront foundation when Supabase configuration is not present.
- No production secrets are committed to source control.
- Theme and product data are designed to be driven from database records before production launch.
