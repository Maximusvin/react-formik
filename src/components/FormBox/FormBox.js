import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import s from './FormBox.module.css';

let validationSchema = yup.object().shape({
  email: yup.string().email('Invalid email address').required('Required'),
  password: yup
    .string()
    .min(6, 'Мінімум 6 символів')
    .max(20, 'Максимум 20 символів')
    .required('Required'),
  checkbox: yup
    .boolean()
    .oneOf([true], 'Потрібно прийняти ліцензію')
    .required('Required'),
});

const FormBox = () => (
  <>
    <h1>Home work</h1>
    <Formik
      initialValues={{ email: '', password: '', checkbox: false }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        console.log(values);
        actions.setSubmitting(false);
        actions.resetForm({ email: '', password: '' });
      }}
    >
      <Form className={s.form}>
        <h2>Sign in to your account</h2>

        <Field
          name="email"
          type="email"
          placeholder="artdesign@gmail.com"
          className={s.input}
        />
        <ErrorMessage name="email" component="div" className={s.error} />

        <Field
          name="password"
          type="password"
          placeholder="* * * * * *"
          className={s.input}
        />
        <ErrorMessage name="password" component="div" className={s.error} />

        <div className={s.checkboxWrap}>
          <Field
            name="checkbox"
            type="checkbox"
            className={s.checkbox}
            id="checkbox"
          />
          <label htmlFor="checkbox">agreement with the license</label>
          <ErrorMessage name="checkbox" component="div" className={s.error} />
        </div>

        <button type="submit" className={s.btn}>
          Sign in
        </button>
      </Form>
    </Formik>
  </>
);

export default FormBox;
