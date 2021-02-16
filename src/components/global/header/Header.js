import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './header.module.css';

const Header = ({ price }) => {
  const [opacity, setOpacity] = useState(0);

  const onMouseEnter = () => setOpacity(1);

  const onMouseLeave = () => setOpacity(0);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.parent}>
          <div
            className={`${styles.flex} ${styles.titleContainer}`}
            aria-label="Title"
          >
            <h3 className={styles.title}>DRAZE FORCE</h3>
          </div>
          <div className={styles.flex}>
            <nav className={styles.menu}>
              <ul className={styles.navigation}>
                <li>
                  <Link href="/">
                    <a className={styles.navBtns}>home</a>
                  </Link>
                </li>
                <li>
                  <button className={styles.navBtns}>$draze</button>
                </li>
                <li>
                  <Link href="/store">
                    <a className={styles.navBtns}>store</a>
                  </Link>
                </li>
                <li>
                  <button className={styles.navBtns}>vip</button>
                </li>
              </ul>
            </nav>
          </div>
          <div
            className={`${styles.flex} ${styles.drazeCoin}`}
            aria-label="Draze coin price"
          >
            <Image src="/logo.png" alt="logo" width={60} height={60} />
            <a
              href="https://rally.io/creator/DRAZE/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.price}
              title="$DRAZE Coin Price"
            >
              ${price}
            </a>
            <button onMouseEnter={onMouseEnter} title="Tooltip">
              <i className={`fas fa-info-circle ${styles.i}`}></i>
            </button>
            <div
              style={{ opacity: opacity }}
              className={styles.tooltipContainer}
            >
              <div className={styles.arrowUp}></div>
              <div className={styles.tooltipHeader}>
                <div className={styles.tooltipHeaderChild1}>
                  <i className={`fas fa-info-circle ${styles.ii}`}></i>
                  <h5 className={styles.tooltipTitle}>what is this number?</h5>
                </div>
                <button className={styles.close} onClick={onMouseLeave}>
                  <i className={`fas fa-times ${styles.ii}`}></i>
                </button>
              </div>
              <p className={styles.tooltipDescription}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div>
                <button id={styles.btn1} className={styles.tooltipBtn}>
                  buy now
                </button>
                <button className={styles.tooltipBtn}>learn more</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
