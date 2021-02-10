import Tilt from 'react-parallax-tilt';
import styles from './discography.module.css';

const Discography = () => {
  return (
    <div className={styles.discography}>
      <div className={styles.container}>
        <h3 className={styles.title}>Discography</h3>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div className={styles.albumsGrid}>
          <Tilt
            className={styles.ep1}
            perspective={500}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            tiltReverse={true}
            scale={1.06}
            transitionSpeed={6000}
          >
            <div className={styles.card}>
              {/* <h3 className={styles.cardTitle}>phantom power</h3> */}
              <a
                className={`btn-bg ${styles.cardBtn}`}
                href="https://open.spotify.com/album/3aZgDA2OdCqUz0TQ7nzF41"
                target="_blank"
                rel="noopener noreferrer"
                title="Opens spotify"
              >
                phantom power
              </a>
            </div>
          </Tilt>
          <Tilt
            className={styles.ep2}
            perspective={500}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            tiltReverse={true}
            scale={1.06}
            transitionSpeed={6000}
          >
            <div className={styles.card}>
              {/* <h3 className={styles.cardTitle}>between then and now</h3> */}
              <a
                className={`btn-bg ${styles.cardBtn}`}
                href="https://open.spotify.com/album/3aZgDA2OdCqUz0TQ7nzF41"
                target="_blank"
                rel="noopener noreferrer"
                title="Opens spotify"
              >
                then and now
              </a>
            </div>
          </Tilt>
          <Tilt
            className={styles.ep3}
            perspective={500}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            tiltReverse={true}
            scale={1.06}
            transitionSpeed={6000}
          >
            <div className={styles.card}>
              {/* <h3 className={styles.cardTitle}>III</h3> */}
              <a
                className={`btn-bg ${styles.cardBtn}`}
                href="https://open.spotify.com/album/3aZgDA2OdCqUz0TQ7nzF41"
                target="_blank"
                rel="noopener noreferrer"
                title="Opens spotify"
              >
                I I I
              </a>
            </div>
          </Tilt>
          <Tilt
            className={styles.singl1}
            perspective={500}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            tiltReverse={true}
            scale={1.06}
            transitionSpeed={6000}
          >
            <div className={styles.card}>
              {/* <h3 className={styles.cardTitle}>august</h3> */}
              <a
                className={`btn-bg ${styles.cardBtn}`}
                href="https://open.spotify.com/album/3aZgDA2OdCqUz0TQ7nzF41"
                target="_blank"
                rel="noopener noreferrer"
                title="Opens spotify"
              >
                august
              </a>
            </div>
          </Tilt>
          <Tilt
            className={styles.singl2}
            perspective={500}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            tiltReverse={true}
            scale={1.06}
            transitionSpeed={6000}
          >
            <div className={styles.card}>
              {/* <h3 className={styles.cardTitle}>chilled</h3> */}
              <a
                className={`btn-bg ${styles.cardBtn}`}
                href="https://open.spotify.com/album/3aZgDA2OdCqUz0TQ7nzF41"
                target="_blank"
                rel="noopener noreferrer"
                title="Opens spotify"
              >
                chilled
              </a>
            </div>
          </Tilt>
          {/* <a
            className={`btn-border ${styles.btn}`}
            href="https://soundcloud.com/drazeforce"
            target="_blank"
            rel="noopener noreferrer"
          >
            Soundcloud
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Discography;
