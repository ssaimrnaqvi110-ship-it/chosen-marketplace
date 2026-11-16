import { useState } from 'react';

const initialSettings = {
  storeName: 'CHOSEN',
  tagline: 'Upgrade Your Everyday.',
  contactEmail: 'hello@chosen.pk',
  contactNumber: '+92 300 1234567',
  currency: 'PKR',
  shippingCharges: '300',
  freeShippingThreshold: '4500',
  codEnabled: true,
  marketplaceMode: false,
  seoDefaultTitle: 'CHOSEN | Upgrade Your Everyday',
};

export function WebsiteSettingsPage() {
  const [settings, setSettings] = useState(initialSettings);

  return (
    <div className="page-shell">
      <div className="container settings-layout">
        <div className="card-panel settings-main">
          <h1 className="page-heading" style={{ marginTop: 0 }}>Website Settings</h1>
          <div className="builder-settings-form">
            <div className="settings-grid">
              <label className="field-row">
                <span>Store name</span>
                <input type="text" value={settings.storeName} onChange={(event) => setSettings((current) => ({ ...current, storeName: event.target.value }))} />
              </label>
              <label className="field-row">
                <span>Tagline</span>
                <input type="text" value={settings.tagline} onChange={(event) => setSettings((current) => ({ ...current, tagline: event.target.value }))} />
              </label>
              <label className="field-row">
                <span>Contact email</span>
                <input type="email" value={settings.contactEmail} onChange={(event) => setSettings((current) => ({ ...current, contactEmail: event.target.value }))} />
              </label>
              <label className="field-row">
                <span>Contact number</span>
                <input type="text" value={settings.contactNumber} onChange={(event) => setSettings((current) => ({ ...current, contactNumber: event.target.value }))} />
              </label>
              <label className="field-row">
                <span>Currency</span>
                <input type="text" value={settings.currency} onChange={(event) => setSettings((current) => ({ ...current, currency: event.target.value }))} />
              </label>
              <label className="field-row">
                <span>Shipping charges</span>
                <input type="number" value={settings.shippingCharges} onChange={(event) => setSettings((current) => ({ ...current, shippingCharges: event.target.value }))} />
              </label>
              <label className="field-row">
                <span>Free shipping threshold</span>
                <input type="number" value={settings.freeShippingThreshold} onChange={(event) => setSettings((current) => ({ ...current, freeShippingThreshold: event.target.value }))} />
              </label>
              <label className="field-row">
                <span>SEO default title</span>
                <input type="text" value={settings.seoDefaultTitle} onChange={(event) => setSettings((current) => ({ ...current, seoDefaultTitle: event.target.value }))} />
              </label>
            </div>

            <div className="toggle-row">
              <label>
                <input type="checkbox" checked={settings.codEnabled} onChange={(event) => setSettings((current) => ({ ...current, codEnabled: event.target.checked }))} />
                <span>Cash on Delivery enabled</span>
              </label>
              <label>
                <input type="checkbox" checked={settings.marketplaceMode} onChange={(event) => setSettings((current) => ({ ...current, marketplaceMode: event.target.checked }))} />
                <span>Marketplace mode activated</span>
              </label>
            </div>
            <button className="button">Save settings</button>
          </div>
        </div>
      </div>
    </div>
  );
}
