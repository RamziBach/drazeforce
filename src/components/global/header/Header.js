import Link from 'next/link';
import Image from 'next/image';
import styles from './header.module.css';

const Header = ({ price }) => {
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
                  <button className={styles.navBtns}>store</button>
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
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
