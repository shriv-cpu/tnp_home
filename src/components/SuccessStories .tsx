import styles from './SuccessStories.module.css';

const SuccessStories = () => {
  const successStories = [
    {
      id: 1,
      name: "Rahul Sharma",
      position: "Software Engineer at Google",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      testimonial: "RGPV's placement cell played a crucial role in helping me achieve my dream job."
    },
    {
      id: 2,
      name: "Rahul Sharma",
      position: "Software Engineer at Google",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      testimonial: "RGPV's placement cell played a crucial role in helping me achieve my dream job."
    },
    {
      id: 3,
      name: "Rahul Sharma",
      position: "Software Engineer at Google",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      testimonial: "RGPV's placement cell played a crucial role in helping me achieve my dream job."
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>
            Success Stories
          </h2>
        </div>

        {/* Success Stories Grid */}
        <div className={styles.grid}>
          {successStories.map((story) => (
            <div
              key={story.id}
              className={styles.card}
            >
              {/* Profile Image */}
              <div className={styles.profileImage}>
                <div className={styles.imageContainer}>
                  <img
                    src={story.image}
                    alt={story.name}
                    className={styles.image}
                  />
                </div>
                <div className={styles.badge}>
                  <svg
                    className={styles.checkIcon}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>

              {/* Name */}
              <h3 className={styles.name}>
                {story.name}
              </h3>

              {/* Position */}
              <p className={styles.position}>
                {story.position}
              </p>

              {/* Testimonial */}
              <div className={styles.testimonial}>
                <p className={styles.testimonialText}>
                  "{story.testimonial}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories; 