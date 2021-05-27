import Tilt from 'react-parallax-tilt';
import styles from './discography.module.css';

const Discography = () => {
  return (
    <div data-scroll-section>
      <section className={styles.discography}>
        <div className={styles.container}>
          <h3
            data-scroll
            data-scroll-speed={-1}
            data-scroll-direction="horizontal"
            className={styles.title}
          >
            Discography
          </h3>
          {/* <p className={styles.description}>
            The music is inspired by the sounds of Synthwave, Rock, Hip-hop, and
            8-bit. This all blends together to make Draze Force unique. <br />{' '}
            Below is some recently published music. Go listen on your favorite
            audio streaming service! All published music is free from DMCA for
            streamers.
          </p> */}
          <div className={styles.parent}>
            <div className={styles.ep1}>
              <div
                className={styles.imgContainer}
                data-scroll
                data-scroll-direction="horizontal"
                data-scroll-speed={-8}
              >
                <Tilt
                  className={`${styles.parallaxEffect} ${styles.parallaxEffectEp1}`}
                  perspective={500}
                  tiltMaxAngleX={10}
                  tiltMaxAngleY={10}
                  tiltReverse={true}
                  scale={1.06}
                  transitionSpeed={6000}
                ></Tilt>
              </div>
              <div className={`${styles.content} ${styles.contentRight}`}>
                <h1 className={styles.contentTitle}>b.t.a.n</h1>
                <a
                  href="https://open.spotify.com/album/4iMvvOx4MuKXICaQnhzJw7?si=_-2BxyscRJaz0_75zAEPSA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn-border ${styles.btnRight}`}
                >
                  listen now
                </a>
              </div>
            </div>
            <div className={styles.ep2}>
              <div
                className={styles.imgContainer}
                data-scroll
                data-scroll-direction="horizontal"
                data-scroll-speed={8}
              >
                <Tilt
                  className={`${styles.parallaxEffect} ${styles.parallaxEffectEp2}`}
                  perspective={500}
                  tiltMaxAngleX={10}
                  tiltMaxAngleY={10}
                  tiltReverse={true}
                  scale={1.06}
                  transitionSpeed={6000}
                ></Tilt>
              </div>
              <div className={`${styles.content} ${styles.contentLeft}`}>
                <h1 className={styles.contentTitle}>phantom power</h1>
                <a
                  href="https://open.spotify.com/album/3aZgDA2OdCqUz0TQ7nzF41?si=qWVO_3aPRlC1kJ-f10uV7w"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn-border ${styles.btnLeft}`}
                >
                  listen now
                </a>
              </div>
            </div>
            <div className={styles.ep3}>
              <div
                className={styles.imgContainer}
                data-scroll
                data-scroll-direction="horizontal"
                data-scroll-speed={-8}
              >
                <Tilt
                  className={`${styles.parallaxEffect} ${styles.parallaxEffectEp3}`}
                  perspective={500}
                  tiltMaxAngleX={10}
                  tiltMaxAngleY={10}
                  tiltReverse={true}
                  scale={1.06}
                  transitionSpeed={6000}
                ></Tilt>
              </div>
              <div className={`${styles.content} ${styles.contentRight}`}>
                <h1 className={styles.contentTitle}>draze ep III</h1>
                <a
                  href="https://open.spotify.com/album/1mAU37AiVst2xkpYfCWQCz?si=VPOFyjbIQ7e4XA-PgmLTtQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn-border ${styles.btnRight}`}
                >
                  listen now
                </a>
              </div>
            </div>
            <div className={styles.single1}>
              <div
                className={styles.imgContainer}
                data-scroll
                data-scroll-direction="horizontal"
                data-scroll-speed={8}
              >
                <Tilt
                  className={`${styles.parallaxEffect} ${styles.parallaxEffectSingle1}`}
                  perspective={500}
                  tiltMaxAngleX={10}
                  tiltMaxAngleY={10}
                  tiltReverse={true}
                  scale={1.06}
                  transitionSpeed={6000}
                ></Tilt>
              </div>
              <div className={`${styles.content} ${styles.contentLeft}`}>
                <h1 className={styles.contentTitle}>august</h1>
                <a
                  href="https://open.spotify.com/album/1x9XbNMthZ1JRCEknuJ4LP?si=g96q0dIdTVC86wZ0mfn5MA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn-border ${styles.btnLeft}`}
                >
                  listen now
                </a>
              </div>
            </div>
            <div className={styles.single2}>
              <div
                className={styles.imgContainer}
                data-scroll
                data-scroll-direction="horizontal"
                data-scroll-speed={-8}
              >
                <Tilt
                  className={`${styles.parallaxEffect} ${styles.parallaxEffectSingle2}`}
                  perspective={500}
                  tiltMaxAngleX={10}
                  tiltMaxAngleY={10}
                  tiltReverse={true}
                  scale={1.06}
                  transitionSpeed={6000}
                ></Tilt>
              </div>
              <div className={`${styles.content} ${styles.contentRight}`}>
                <h1 className={styles.contentTitle}>chilled</h1>
                <a
                  href="https://open.spotify.com/album/5dUp8vtEAciJMiFeOdG4t4?si=td7SxpYJR3azaJOUOd5p3A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn-border ${styles.btnRight}`}
                >
                  listen now
                </a>
              </div>
            </div>
            <div className={styles.single3}>
              <div
                className={styles.imgContainer}
                data-scroll
                data-scroll-direction="horizontal"
                data-scroll-speed={8}
              >
                <Tilt
                  className={`${styles.parallaxEffect} ${styles.parallaxEffectSingle3}`}
                  perspective={500}
                  tiltMaxAngleX={10}
                  tiltMaxAngleY={10}
                  tiltReverse={true}
                  scale={1.06}
                  transitionSpeed={6000}
                ></Tilt>
              </div>
              <div className={`${styles.content} ${styles.contentLeft}`}>
                <h1 className={styles.contentTitle}>time trial</h1>
                <a
                  href="https://open.spotify.com/album/1zunoqsnkfl5cNrxME5Aj3?si=NiqwaXPHQuCtsoD2pupYPQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn-border ${styles.btnLeft}`}
                >
                  listen now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Discography;
