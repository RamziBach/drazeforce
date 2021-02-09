import Image from 'next/image';
import styles from './discography.module.css';

const Discography = () => {
  return (
    <div className={styles.discography}>
      <div className={styles.container}>
        <h3 className={styles.title}>Discography</h3>
        <div className={styles.albumsGrid}>
          <div className={styles.ep1}></div>
          <div className={styles.ep2}></div>
          <div className={styles.ep3}></div>
          <div className={styles.singl1}></div>
          <div className={styles.singl2}></div>
          <a
            className={`btn-border ${styles.btn}`}
            href="https://soundcloud.com/drazeforce"
            target="_blank"
            rel="noopener noreferrer"
          >
            Soundcloud
          </a>
        </div>
      </div>
    </div>
  );
};

export default Discography;
