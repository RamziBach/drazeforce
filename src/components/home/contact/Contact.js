import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import styles from './contact.module.css';

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className={styles.inputContainer}>
      <div>
        <label className={styles.label} htmlFor={props.id || props.name}>
          {label}
        </label>
      </div>
      <input
        className={styles.input}
        {...field}
        {...props}
        autoComplete="off"
      />
      <div className={styles.errorContainer}>
        {meta.touched && meta.error ? (
          <div className={styles.error}>{meta.error}</div>
        ) : null}
      </div>
    </div>
  );
};

const MyTextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className={styles.inputContainer}>
      <div>
        <label className={styles.label} htmlFor={props.id || props.name}>
          {label}
        </label>
      </div>
      <textarea
        className={styles.input}
        {...field}
        {...props}
        autoComplete="off"
      />
      <div className={styles.errorContainer}>
        {meta.touched && meta.error ? (
          <div className={styles.error}>{meta.error}</div>
        ) : null}
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <div data-scroll-section>
      <section className={styles.contact}>
        <div className={styles.container}>
          <h3
            data-scroll
            data-scroll-speed={-1}
            data-scroll-direction="horizontal"
            className={styles.title}
          >
            get in touch
          </h3>
          <div className={styles.parent}>
            <div>
              <Formik
                initialValues={{
                  name: '',
                  email: '',
                  message: '',
                }}
                validationSchema={Yup.object({
                  name: Yup.string()
                    .max(40, 'Must be 40 characters or less')
                    .required('Required'),
                  email: Yup.string()
                    .max(254, 'Must be 254 characters or less')
                    .email('Invalid email address')
                    .required('Required'),
                  message: Yup.string()
                    .max(500, 'Must be 500 characters or less')
                    .required('Required'),
                })}
                onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                  }, 400);
                }}
              >
                {({ isSubmitting }) => (
                  <Form className={styles.form}>
                    <MyTextInput
                      label="Name"
                      name="name"
                      type="text"
                      placeholder="Enter your name."
                    />

                    <MyTextInput
                      label="Email"
                      name="email"
                      type="email"
                      placeholder="Enter your email."
                    />

                    <MyTextArea
                      label="Message"
                      name="message"
                      placeholder="Enter your message."
                      rows="4"
                    />
                    <button
                      className={styles.submitBtn}
                      disabled={isSubmitting}
                      type="submit"
                    >
                      <div>Send</div>
                      <i className={`far fa-paper-plane ${styles.i}`}></i>
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
