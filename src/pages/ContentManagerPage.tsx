import { useMemo, useState } from 'react';
import { cmsContent } from '../lib/adminData';

export function ContentManagerPage() {
  const [content, setContent] = useState(cmsContent);
  const [activePage, setActivePage] = useState('About Us');

  const selectedPage = useMemo(
    () => content.find((page) => page.title === activePage) ?? content[0],
    [activePage, content],
  );

  return (
    <div className="page-shell">
      <div className="container settings-layout">
        <aside className="card-panel settings-sidebar">
          <h3>Page list</h3>
          <div className="nav-stack">
            {content.map((page) => (
              <button
                key={page.id}
                className={page.title === activePage ? 'side-nav-item active' : 'side-nav-item'}
                onClick={() => setActivePage(page.title)}
              >
                {page.title}
              </button>
            ))}
          </div>
        </aside>

        <div className="card-panel settings-main">
          <h1 className="page-heading" style={{ marginTop: 0 }}>{selectedPage?.title}</h1>
          <div className="builder-settings-form">
            <label className="field-row">
              <span>Page title</span>
              <input
                type="text"
                value={selectedPage?.title ?? ''}
                onChange={(event) => setContent((current) => current.map((page) => page.id === selectedPage?.id ? { ...page, title: event.target.value } : page))}
              />
            </label>
            <label className="field-row">
              <span>Page body</span>
              <textarea
                rows={10}
                value={selectedPage?.body ?? ''}
                onChange={(event) => setContent((current) => current.map((page) => page.id === selectedPage?.id ? { ...page, body: event.target.value } : page))}
              />
            </label>
            <button className="button">Save page content</button>
          </div>
        </div>
      </div>
    </div>
  );
}
