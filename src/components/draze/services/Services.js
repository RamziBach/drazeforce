import Timescale from '../timescale/Timescale';
import styles from './services.module.css';

const Services = () => {
  return (
    <div className={styles.services}>
      <div className={styles.container}>
        <h3 className={styles.title}>services for sale</h3>
        <div className={styles.parent}>
          <div id={styles.marginBottom} className={styles.childparent}>
            <div className={styles.child}>
              <div className={styles.timescaleContainer}>
                <Timescale />
              </div>
              <h4 className={styles.serviceTitle}>lorem ipsum</h4>
              <div className={styles.servicesContainer}>
                <p className={styles.servicesDescription}>
                  Dolor velit amet eu ex aliqua occaecat dolor Lorem est laborum
                  labore. Duis aute Lorem fugiat non magna exercitation laboris.
                  Proident officia esse tempor fugiat.
                </p>
                <button className="btn-border">buy now</button>
              </div>
            </div>
            <div className={`${styles.child} ${styles.marginLeft}`}>
              <div className={styles.timescaleContainer}>
                <Timescale />
              </div>
              <h4 className={styles.serviceTitle}>lorem ipsum</h4>
              <div className={styles.servicesContainer}>
                <p className={styles.servicesDescription}>
                  Dolor velit amet eu ex aliqua occaecat dolor Lorem est laborum
                  labore. Duis aute Lorem fugiat non magna exercitation laboris.
                  Proident officia esse tempor fugiat.
                </p>
                <button className="btn-border">buy now</button>
              </div>
            </div>
          </div>
          <div className={styles.childparent}>
            <div className={styles.child}>
              <div className={styles.timescaleContainer}>
                <Timescale />
              </div>
              <h4 className={styles.serviceTitle}>lorem ipsum</h4>
              <div className={styles.servicesContainer}>
                <p className={styles.servicesDescription}>
                  Dolor velit amet eu ex aliqua occaecat dolor Lorem est laborum
                  labore. Duis aute Lorem fugiat non magna exercitation laboris.
                  Proident officia esse tempor fugiat.
                </p>
                <button className="btn-border">buy now</button>
              </div>
            </div>
            <div className={`${styles.child} ${styles.marginLeft}`}>
              <div className={styles.timescaleContainer}>
                <Timescale />
              </div>
              <h4 className={styles.serviceTitle}>lorem ipsum</h4>
              <div className={styles.servicesContainer}>
                <p className={styles.servicesDescription}>
                  Dolor velit amet eu ex aliqua occaecat dolor Lorem est laborum
                  labore. Duis aute Lorem fugiat non magna exercitation laboris.
                  Proident officia esse tempor fugiat.
                </p>
                <button className="btn-border">buy now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
