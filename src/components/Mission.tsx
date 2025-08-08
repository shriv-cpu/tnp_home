import styles from './Mission.module.css';

const Mission = () => {
    return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            
            {/* Vision Box */}
            <div className={styles.visionBox}>
              <h2>Our Vision</h2>
              <p>
                To be a premier Training and Placement Cell that bridges the gap between academia and industry,
                fostering excellence in career development and ensuring optimal placement opportunities for all students.
                We strive to build strong industry connections and prepare our students to be future-ready professionals.
              </p>
            </div>
  
            {/* Mission Box */}
            <div className={styles.missionBox}>
              <h2>Our Mission</h2>
              <ul>
                <li>
                  To provide comprehensive training programs that enhance students' technical and soft skills
                </li>
                <li>
                  To facilitate quality placements with leading organizations across various sectors
                </li>
                <li>
                  To maintain strong industry relationships and create networking opportunities
                </li>
                <li>
                  To guide students in making informed career choices and professional development
                </li>
                <li>
                  To organize career development workshops, seminars, and industry interactions
                </li>
              </ul>
            </div>
  
          </div>
        </div>
      </div>
    );
  };
  
  export default Mission;