import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/sidebar.css';
import styles from '../styles/dashboard.module.css';

function Dashboard() {
  const navigate = useNavigate();

  const handleCreate = () => {
    const saved = localStorage.getItem('answerSheets');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          navigate('/generate');
          return;
        }
      } catch {}
    }
    navigate('/answersheet');
  };

  return (
    <div className={styles['dashboard-outer']}>
      <div className={styles['dashboard-container']}>
        <aside className="sidebar">
          <h2>Dashboard</h2>
          <button className="new-answer-sheet-btn" onClick={handleCreate}>+ New Answer Sheet</button>
        </aside>
        <div className={styles['dashboard-main-container']}>
          <div className={styles['dashboard-content']}>
            <h1 className={styles['dashboard-title']}>SNAPCHECK</h1>
            <p className={styles['dashboard-subtitle']}>Create sheets. Upload scans. Get results.</p>
            <button className={styles['dashboard-create-btn']} onClick={handleCreate}>
              Create Answer Sheet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;