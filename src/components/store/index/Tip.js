import styles from './tip.module.css';

const Tip = () => {
  return (
    <div className={styles.tip}>
      <div className={styles.container}>
        <h2 className={styles.title}>Tip jar</h2>
      </div>
    </div>
  );
};

export default Tip;
