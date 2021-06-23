import { useState, useEffect } from 'react';
import styles from './index.module.css';

const Index = () => {
  const [balance, setBalance] = useState();

  const getBalance = async () => {
    try {
      const res = await fetch('/api/auth/balance');
      const data = await res.json();
      setBalance(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getBalance();
  }, []);

  if (balance.error)
    return <div>You must be logged in to view this content.</div>;

  const hasDraze = balance.some(item => item.coinKind === 'DRAZE');

  if (!hasDraze) return <div>You do not own any $DRAZE coin.</div>;

  const drazeBalance = balance.find(item => item.coinKind === 'DRAZE');

  if (hasDraze && drazeBalance.coinBalance < 10)
    return (
      <div>You must own 10 or more $DRAZE coins to view this content.</div>
    );

  return (
    <div data-scroll-section>
      <section className={styles.landing}>
        <div className={styles.container}>
          <h2 className={styles.title}>Coming Soon !</h2>
        </div>
      </section>
    </div>
  );
};

export default Index;
