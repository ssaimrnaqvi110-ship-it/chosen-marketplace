import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { defaultTheme, applyTheme } from '../lib/theme';
import { getInitialTheme, saveDraftTheme, publishTheme, restorePublishedTheme, resetThemeToDefault } from '../lib/themeStore';

export function ThemeStudioPage() {
  const [theme, setTheme] = useState(defaultTheme);
  const [screen, setScreen] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  useEffect(() => {
    const loadedTheme = getInitialTheme();
    setTheme(loadedTheme);
    applyTheme(loadedTheme);
  }, []);

  const themeOptions = useMemo(
    () => [
      { label: 'Primary', key: 'primary', value: theme.palette.primary },
      { label: 'Secondary', key: 'secondary', value: theme.palette.secondary },
      { label: 'Accent', key: 'accent', value: theme.palette.accent },
      { label: 'Background', key: 'background', value: theme.palette.background },
      { label: 'Panel', key: 'secondaryBackground', value: theme.palette.secondaryBackground },
      { label: 'Button', key: 'buttonBackground', value: theme.palette.buttonBackground },
      { label: 'Header', key: 'headerBackground', value: theme.palette.headerBackground },
    ],
    [theme],
  );

  const updateThemeState = (updater: (current: typeof theme) => typeof theme) => {
    setTheme((current) => {
      const next = updater(current);
      applyTheme(next);
      return next;
    });
  };

  const updateColor = (field: keyof typeof theme.palette, value: string) => {
    updateThemeState((current) => ({
      ...current,
      palette: {
        ...current.palette,
        [field]: value,
      },
    }));
  };

  const handleSaveDraft = () => {
    saveDraftTheme(theme);
    window.alert('Draft saved successfully.');
  };

  const handlePublish = async () => {
    const result = await publishTheme(theme);
    if (result.error) {
      console.error('Theme publish failed', result.error);
      window.alert('Publishing failed. Please check your environment and try again.');
      return;
    }

    window.alert('Theme published successfully.');
  };

  const handleRestore = () => {
    const previous = restorePublishedTheme();
    setTheme(previous);
    applyTheme(previous);
  };

  const handleReset = () => {
    const reset = resetThemeToDefault();
    setTheme(reset);
    applyTheme(reset);
  };

  return (
    <div className="page-shell">
      <div className="container">
        <div className="section-header" style={{ alignItems: 'center', marginBottom: '1.8rem' }}>
          <div>
            <p className="eyebrow">Admin control center</p>
            <h1 className="page-heading" style={{ margin: 0 }}>Theme Studio</h1>
          </div>
          <div className="hero-actions">
            <button className="button button-secondary" onClick={handleSaveDraft}>Save Draft</button>
            <button className="button" onClick={handlePublish}>Publish Changes</button>
            <Link to="/admin" className="button button-secondary">Back to Dashboard</Link>
          </div>
        </div>

        <div className="theme-layout">
          <aside className="theme-editor card-panel">
            <h3>Colour Customization</h3>
            <div className="theme-grid">
              {themeOptions.map(({ label, key, value }) => (
                <label key={key} className="field-row">
                  <span>{label}</span>
                  <div className="color-input-wrap">
                    <input type="color" value={value} onChange={(event) => updateColor(key as keyof typeof theme.palette, event.target.value)} />
                    <input type="text" value={value} onChange={(event) => updateColor(key as keyof typeof theme.palette, event.target.value)} />
                  </div>
                </label>
              ))}
            </div>

            <h3 style={{ marginTop: '1.5rem' }}>Typography</h3>
            <div className="theme-grid">
              <label className="field-row">
                <span>Heading font</span>
                <input type="text" value={theme.fonts.heading} onChange={(event) => updateThemeState((current) => ({ ...current, fonts: { ...current.fonts, heading: event.target.value } }))} />
              </label>
              <label className="field-row">
                <span>Body font</span>
                <input type="text" value={theme.fonts.body} onChange={(event) => updateThemeState((current) => ({ ...current, fonts: { ...current.fonts, body: event.target.value } }))} />
              </label>
              <label className="field-row">
                <span>Store name</span>
                <input type="text" value={theme.brand.storeName} onChange={(event) => updateThemeState((current) => ({ ...current, brand: { ...current.brand, storeName: event.target.value } }))} />
              </label>
              <label className="field-row">
                <span>Tagline</span>
                <input type="text" value={theme.brand.tagline} onChange={(event) => updateThemeState((current) => ({ ...current, brand: { ...current.brand, tagline: event.target.value } }))} />
              </label>
            </div>
            <div className="hero-actions" style={{ marginTop: '1rem' }}>
              <button className="button button-secondary" onClick={handleRestore}>Restore Previous</button>
              <button className="button button-secondary" onClick={handleReset}>Reset Default</button>
            </div>
          </aside>

          <div className="theme-preview-panel card-panel">
            <div className="preview-toolbar">
              {(['desktop', 'tablet', 'mobile'] as const).map((mode) => (
                <button
                  key={mode}
                  className={screen === mode ? 'button button-small' : 'button button-secondary button-small'}
                  onClick={() => setScreen(mode)}
                >
                  {mode}
                </button>
              ))}
            </div>

            <div className={`device-frame ${screen}`}>
              <div className="mini-header">
                <strong>{theme.brand.storeName || 'CHOSEN'}</strong>
                <span>{theme.brand.tagline}</span>
              </div>
              <div className="mini-hero">
                <div>
                  <h3>Upgrade Your Everyday.</h3>
                  <p>Theme preview for the live storefront</p>
                </div>
              </div>
              <div className="mini-grid">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="mini-card-preview" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
