import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './header.module.css';

const Header = ({ price }) => {
  const [display, setDisplay] = useState('none');

  const onMouseEnter = () => setDisplay('block');

  const handleClose = () => setDisplay('none');

  useEffect(() => {
    console.log('Website developed by Ramzi Bach - www.ramzibach.com');
  }, []);

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
                  <Link href="/draze">
                    <a className={styles.navBtns}>$draze</a>
                  </Link>
                </li>
                <li>
                  <Link href="/store">
                    <a className={styles.navBtns}>store</a>
                  </Link>
                </li>
                <li>
                  <Link href="/vip">
                    <a className={styles.navBtns}>vip</a>
                  </Link>
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
              style={{ display: display }}
              className={styles.tooltipContainer}
            >
              <div className={styles.arrowUp}></div>
              <div className={styles.tooltipHeader}>
                <div className={styles.tooltipHeaderChild1}>
                  <i className={`fas fa-info-circle ${styles.ii}`}></i>
                  <h5 className={styles.tooltipTitle}>what is this number?</h5>
                </div>
                <button className={styles.close} onClick={handleClose}>
                  <i className={`fas fa-times ${styles.ii}`}></i>
                </button>
              </div>
              <p className={styles.tooltipDescription}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div>
                <button id={styles.btn1} className={styles.tooltipBtn}>
                  <a
                    href="https://rally.io/creator/DRAZE/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    buy now
                  </a>
                </button>
                <Link href="/draze">
                  <a className={styles.tooltipBtn}>Learn more</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
