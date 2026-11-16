import { AdminSidebar } from '../components/AdminSidebar';
import { adminMetrics } from '../lib/mockData';

export function AdminDashboardPage() {
  return (
    <div className="page-shell">
      <div className="container admin-layout">
        <AdminSidebar />

        <div className="admin-panel">
          <h1 className="page-heading" style={{ marginTop: 0 }}>Dashboard</h1>
          <div className="dashboard-grid">
            {adminMetrics.map((metric) => (
              <div key={metric.label} className="metric-card">
                <p>{metric.label}</p>
                <h3>{metric.value}</h3>
                <small>{metric.change}</small>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '1.5rem' }} className="summary-box">
            <h3>Theme Studio status</h3>
            <p>Original beige and brown theme is active and ready for editing from the admin control center.</p>
            <p>Drafts, scheduled theme changes, and publishing controls will be connected to the database-backed theme engine as Phase 3 is completed.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
