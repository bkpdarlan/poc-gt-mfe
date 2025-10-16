import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navigation.module.scss';

const Navigation: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={styles.navigation}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <h1>🚀 Module Federation</h1>
          <span className={styles.subtitle}>Host App</span>
        </div>
        
        <ul className={styles.navLinks}>
          <li>
            <Link 
              to="/" 
              className={`${styles.navLink} ${isActive('/') ? styles.active : ''}`}
            >
              🏠 Home
            </Link>
          </li>
          <li>
            <Link 
              to="/remote" 
              className={`${styles.navLink} ${isActive('/remote') ? styles.active : ''}`}
            >
              🔗 Remote App
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;