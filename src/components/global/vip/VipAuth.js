import Link from 'next/link';
import styles from './vipauth.module.css';

const VipAuth = ({ display = 'none', handleClose }) => {
  return (
    <div style={{ display }} className={styles.vipauth}>
      <div className={styles.container}>
        <div className={styles.parent}>
          <div className={styles.modal}>
            <div className={styles.header}>
              <h4 className={styles.title}>login</h4>
              <button className={styles.close} onClick={handleClose}>
                <i className={`fas fa-times ${styles.ii}`}></i>
              </button>
            </div>
            <p className={styles.description}>
              You must be logged in with your RALLY account to access the
              Draze's VIP page.
            </p>
            <div className={styles.btnContainer}>
              <button id={styles.marginRight} className={styles.btn}>
                sign up
              </button>
              <Link href="/vip">
                <button className={styles.btn}>
                  <a>log in</a>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VipAuth;
