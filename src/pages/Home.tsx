import Navbar from '../components/Navbar';
import Mission from '../components/Mission';
import AboutUs from '../components/AboutUs';
import SuccessStories from '../components/SuccessStories ';
import ContactForm from '../components/ContactForm';
import styles from './Home.module.css';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className={styles.container}>
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Shape Your Future with<br />
            Training and Placement RGPV
          </h1>
          <p className={styles.heroSubtitle}>
            Empowering students through excellence in training and placement opportunities.
          </p>
          <button className={styles.heroButton}>
            Get Started
          </button>
        </div>
      </section>

      {/* Our Vision & Mission Section */}
      <Mission />

      {/* About Us Section */}
      <AboutUs />

      {/* Success Stories Section */}
      <SuccessStories />

      {/* Our Recruiters Section */}
      <section className={styles.recruitersSection}>
        <div className={styles.recruitersContainer}>
          <h2 className={styles.recruitersTitle}>
            Our Recruiters
          </h2>
          <div className={styles.recruitersCard}>
            <div className={styles.recruitersLogo}>LO GO</div>
            <p className={styles.recruitersText}>Recruiter logos will be displayed here</p>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className={styles.contactSection}>
        <div className={styles.contactContainer}>
          <div className={styles.contactGrid}>
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Training & Placement Cell Information */}
            <div className={styles.contactInfo}>
              <h2 className={styles.contactTitle}>
                Training & Placement Cell
              </h2>
              
              <div>
                {/* Location */}
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className={`${styles.contactText} ${styles.location}`}>
                      RGPV Campus, Airport Bypass Road, Gandhi Nagar, Bhopal, Madhya Pradesh 462033
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <p className={styles.contactText}>+91 755 2678 800</p>
                  </div>
                </div>

                {/* Email */}
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <p className={styles.contactText}>placement@rgpv.ac.in</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className={styles.mapPlaceholder}>
                <div className={styles.mapContainer}>
                  <p className={styles.mapText}>Google Maps will be embedded here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
