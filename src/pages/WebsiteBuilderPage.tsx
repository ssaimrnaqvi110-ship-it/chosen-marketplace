import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { sectionLibrary } from '../lib/adminData';

export function WebsiteBuilderPage() {
  const [sections, setSections] = useState(sectionLibrary);
  const [selected, setSelected] = useState(sectionLibrary[0]?.id ?? 'hero');

  const sectionMap = useMemo(
    () => Object.fromEntries(sections.map((section) => [section.id, section])),
    [sections],
  );

  const selectedSection = sectionMap[selected] ?? sections[0];

  const toggleVisibility = (id: string) => {
    setSections((current) =>
      current.map((section) =>
        section.id === id ? { ...section, visible: !section.visible } : section,
      ),
    );
  };

  const duplicateSection = (id: string) => {
    setSections((current) => {
      const target = current.find((section) => section.id === id);
      if (!target) return current;

      const duplicate = {
        ...target,
        id: `${target.id}-copy-${Date.now()}`,
        title: `${target.title} Copy`,
      };

      return [...current, duplicate];
    });
  };

  const removeSection = (id: string) => {
    setSections((current) => current.filter((section) => section.id !== id));
    setSelected((current) => (current === id ? 'hero' : current));
  };

  return (
    <div className="page-shell">
      <div className="container builder-layout">
        <div className="card-panel builder-left">
          <div className="section-header" style={{ alignItems: 'center' }}>
            <div>
              <p className="eyebrow">Admin tool</p>
              <h1 className="page-heading" style={{ margin: 0 }}>Website Builder</h1>
            </div>
            <Link to="/admin" className="button button-secondary">
              Dashboard
            </Link>
          </div>

          <div className="builder-stack">
            {sections.map((section) => (
              <button
                key={section.id}
                className={selected === section.id ? 'builder-item active' : 'builder-item'}
                onClick={() => setSelected(section.id)}
              >
                <div>
                  <strong>{section.title}</strong>
                  <small>{section.type}</small>
                </div>
                <div className="builder-actions">
                  <span>{section.visible ? 'Visible' : 'Hidden'}</span>
                  <button className="mini-button" onClick={(event) => { event.stopPropagation(); duplicateSection(section.id); }}>Duplicate</button>
                  <button className="mini-button" onClick={(event) => { event.stopPropagation(); toggleVisibility(section.id); }}>Toggle</button>
                  <button className="mini-button danger" onClick={(event) => { event.stopPropagation(); removeSection(section.id); }}>Delete</button>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="card-panel builder-right">
          <h3>Selected section</h3>
          {selectedSection ? (
            <div className="builder-settings-form">
              <label className="field-row">
                <span>Heading</span>
                <input type="text" value={selectedSection.title} onChange={(event) => setSections((current) => current.map((section) => section.id === selectedSection.id ? { ...section, title: event.target.value } : section))} />
              </label>
              <label className="field-row">
                <span>Subtitle</span>
                <textarea value={selectedSection.description} onChange={(event) => setSections((current) => current.map((section) => section.id === selectedSection.id ? { ...section, description: event.target.value } : section))} />
              </label>
              <label className="field-row">
                <span>Button label</span>
                <input type="text" value={selectedSection.ctaLabel} onChange={(event) => setSections((current) => current.map((section) => section.id === selectedSection.id ? { ...section, ctaLabel: event.target.value } : section))} />
              </label>
              <div className="builder-actions-row">
                <button className="button button-secondary" onClick={() => toggleVisibility(selectedSection.id)}>{selectedSection.visible ? 'Hide section' : 'Show section'}</button>
                <button className="button" onClick={() => duplicateSection(selectedSection.id)}>Duplicate section</button>
              </div>
            </div>
          ) : (
            <p>No section selected.</p>
          )}
        </div>
      </div>
    </div>
  );
}
