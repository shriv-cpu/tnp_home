import { useState } from 'react';
import styles from './Navbar.module.css';
import tnp_logo from '../assets/bgImages/tnp_logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <img src={tnp_logo} alt="RGPV Logo" className={styles.logo} />
        <h1 className={styles.title}>
          Training and Placement RGPV
        </h1>
        <button
          className={styles.menuToggle}
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          &#9776;
        </button>
      </div>

      <div className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>About Us</li>
          <li className={styles.navItem}>Success Stories</li>
          <li className={styles.navItem}>Recruiters</li>
          <li className={styles.navItem}>Contact</li>
        </ul>
        <button className={styles.loginButton}>
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;