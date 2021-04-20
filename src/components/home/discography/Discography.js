import Tilt from 'react-parallax-tilt';
import styles from './discography.module.css';

const Discography = () => {
  return (
    <div className={styles.discography}>
      <div className={styles.container}>
        <h3 className={styles.title}>Discography</h3>
        <p className={styles.description}>
          The music is inspired by the sounds of Synthwave, Rock, Hip-hop, and
          8-bit. This all blends together to make Draze Force unique. <br />{' '}
          Below is some recently published music. Go listen on your favorite
          audio streaming service! All published music is free from DMCA for
          streamers.
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
