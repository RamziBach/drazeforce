import Tilt from 'react-parallax-tilt';
import styles from './index.module.css';

const Index = () => {
  return (
    <div className={styles.landing}>
      <div className={styles.container}>
        <div className={styles.parent}>
          <div aria-label="Album image">
            <Tilt
              className={styles.parallaxEffect}
              perspective={500}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              tiltReverse={true}
              scale={1.06}
              transitionSpeed={6000}
            >
              <div className={styles.card}>
                <h2 className={styles.cardTitle}>phantom power</h2>
                <a
                  className="btn-bg"
                  href="https://open.spotify.com/album/3aZgDA2OdCqUz0TQ7nzF41"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Opens spotify"
                >
                  listen now
                </a>
              </div>
            </Tilt>
          </div>
          <div className={styles.content}>
            <h2 className={styles.title}>draze force</h2>
            <p className={styles.description}>
              Returning to his original inspirations, Draze Force is blending
              8-bit sounds with analog synths to create his own sound in the
              synthwave world.
            </p>
            <a
              className={`btn-border ${styles.spotifyBtn}`}
              href="https://open.spotify.com/artist/1ro5yiwSkJ27qvppIgqb7S"
              target="_blank"
              rel="noopener noreferrer"
            >
              spotify
            </a>
            <div className={styles.iconsContainer} aria-label="Social links">
              <a
                href="https://twitter.com/drazeforce"
                target="_blank"
                rel="noopener noreferrer"
                title="Twitter"
              >
                <i className="i fab fa-twitter"></i>
              </a>
              <a
                href="https://www.instagram.com/drazeforce/"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
              >
                <i className="i fab fa-instagram"></i>
              </a>
              <a
                href="https://www.facebook.com/DrazeForce/"
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook"
              >
                <i className="i fab fa-facebook"></i>
              </a>
              <a
                href="https://www.youtube.com/channel/UCFmw-RA25RA1YzACv90WknQ"
                target="_blank"
                rel="noopener noreferrer"
                title="Youtube"
              >
                <i className="i fab fa-youtube"></i>
              </a>
              <a
                href="https://open.spotify.com/artist/1ro5yiwSkJ27qvppIgqb7S?si=czF1QxKyTTu-Lgi9EMLt9w"
                target="_blank"
                rel="noopener noreferrer"
                title="Spotify"
              >
                <i className="i fab fa-spotify"></i>
              </a>
              <a
                href="https://soundcloud.com/drazeforce"
                target="_blank"
                rel="noopener noreferrer"
                title="Soundcloud"
              >
                <i className="i fab fa-soundcloud"></i>
              </a>
              <a
                href="https://discord.com/invite/D3U2Mss"
                target="_blank"
                rel="noopener noreferrer"
                title="Discord"
              >
                <i className="i fab fa-discord"></i>
              </a>
              <a
                href="https://www.twitch.tv/drazeforce"
                target="_blank"
                rel="noopener noreferrer"
                title="Twitch"
              >
                <i className="i fab fa-twitch"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
