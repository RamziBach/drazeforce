import styles from './contact.module.css';

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.container}>
        <h3 className={styles.title}>contact</h3>
        <div className={styles.parent}>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button className="btn-border">contact me</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
