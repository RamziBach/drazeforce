import Image from 'next/image';
import ReactPlayer from 'react-player/lazy';
import styles from './about.module.css';

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <h3 className={styles.sectionTitle}>About</h3>
        <div className={styles.parent}>
          <div className={styles.content}>
            <div className={styles.imgContainer}>
              <Image
                className={styles.profile}
                src="/profile.jpg"
                alt="logo"
                layout="fill"
              />
            </div>
            <h3 className={styles.title}>Nick Morris</h3>
            <p className={styles.description}>
              Growing up in the 90s, Nick Morris was always inspired by the
              sounds and visuals of video games, and rock music. Producing music
              under the moniker Draze Force, Nick has spent the last few years
              relocating from Minnesota to Colorado and collecting analog
              synths.
            </p>
            <a className="btn-border">Twitch</a>
          </div>
          <div className={styles.border}>
            <ReactPlayer
              className={styles.reactPlayer}
              url="https://www.twitch.tv/drazeforce"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
