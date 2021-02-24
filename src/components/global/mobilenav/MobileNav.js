import Image from 'next/image';
import Link from 'next/link';
import styles from './mobilenav.module.css';

const MobileNav = ({ price, display }) => {
  return (
    <div
      style={display ? { display: 'flex' } : { display: 'none' }}
      className={styles.mobilenav}
    >
      <div className={styles.container}>
        <div className={styles.parent}>
          <Link href="/">
            <a className={styles.btn}>home</a>
          </Link>
          <Link href="/draze">
            <a className={styles.btn}>$DRAZE</a>
          </Link>
          <Link href="/store">
            <a className={styles.btn}>store</a>
          </Link>
          <button className={styles.btn}>vip</button>
          <div className={styles.drazeCoin} aria-label="Draze coin price">
            <div className={styles.logo}>
              <Image src="/logo2.png" alt="logo" layout="fill" />
            </div>
            <a
              href="https://rally.io/creator/DRAZE/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.price}
              title="$DRAZE Coin Price"
            >
              ${price}
            </a>
            {/* <button onMouseEnter={onMouseEnter} title="Tooltip">
              <i className={`fas fa-info-circle ${styles.i}`}></i>
            </button> */}
            {/* <Tooltip display={display} handleClose={handleClose} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
