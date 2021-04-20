import styles from './contact.module.css';

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.container}>
        <h3 className={styles.title}>contact</h3>
        <div className={styles.parent}>
          {/* <p className={styles.description}>
            Want to get in touch? Click the button below.
          </p> */}
          <button className="btn-border">contact me</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
