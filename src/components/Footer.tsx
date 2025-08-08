import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* Logo & Description */}
        <div className={styles.footerCol}>
          <img
            src="https://whatthelogo.com/storage/logos/rajiv-gandhi-proudyogiki-vishwavidyalaya-95752.png"
            alt="RGPV Logo"
            className={styles.logoImg}
          />
          <p className={styles.footerDesc}>
            Empowering students for a better tomorrow through quality education and placement opportunities.
          </p>
        </div>

        {/* Quick Links */}
        <div className={styles.footerCol}>
          <h3 className={styles.footerTitle}>Quick Links</h3>
          <ul className={styles.linksList}>
            <li className={styles.linkItem}><a href="#">About Us</a></li>
            <li className={styles.linkItem}><a href="#">Success Stories</a></li>
            <li className={styles.linkItem}><a href="#">Recruiters</a></li>
            <li className={styles.linkItem}><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Connect With Us */}
        <div className={styles.footerCol}>
          <h3 className={styles.footerTitle}>Connect With Us</h3>
          <div className={styles.socials}>
            <a href="#" className={styles.socialIcon} aria-label="Facebook">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#" className={styles.socialIcon} aria-label="Twitter">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="#" className={styles.socialIcon} aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="#" className={styles.socialIcon} aria-label="Instagram">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div className={styles.footerCol}>
          <h3 className={styles.footerTitle}>Newsletter</h3>
          <form className={styles.newsletterForm}>
            <input
              type="email"
              placeholder="Enter your email"
              className={styles.newsletterInput}
            />
            <button type="submit" className={styles.newsletterButton}>
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className={styles.copyright}>
        © 2024 RGPV Training & Placement Cell. All rights reserved.
      </div>
    </footer>
  );
}
