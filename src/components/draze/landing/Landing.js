import Particles from '../../global/particles/Particles';
import Scene from '../scene/Scene';
import styles from './landing.module.css';

const Landing = () => {
  return (
    <div className={styles.landing}>
      <div className={styles.container}>
        <div className={styles.parent}>
          <div className={styles.childContainer1}>
            <h2 className={styles.title}>$DRAZE coin</h2>
            <h5 className={styles.subtitle}>What is it?</h5>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <p className={styles.description}>
              urus in massa tempor nec feugiat nisl pretium. Eget magna
              fermentum iaculis eu non diam. Auctor urna nunc id cursus.
            </p>
            <button className="btn-border">buy now</button>
          </div>
          <div className={styles.childContainer2}>
            <Particles up="-190px" amount={10} />
            <img
              src="/constellations.svg"
              alt="constellations"
              className={styles.constellations}
            />
            <img src="/box.svg" alt="box" className={styles.box} />
            <Scene />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
