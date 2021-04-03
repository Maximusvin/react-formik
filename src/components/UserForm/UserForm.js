import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { v4 as uuidv4 } from 'uuid';

const handleSubmit = user => {
  console.log(user);
};

const createUser = values => {
  const user = {
    ...values,
    id: uuidv4(),
  };

  return user;
};

let validationSchema = yup.object({
  name: yup.string().required('Required'),
  age: yup
    .number()
    .min(18, 'Мінімальний вік користування сайтом 18 років')
    .integer('Хело, твій вік не може бути саме таким. Вкажи повних років')
    .required('Required'),
  hobby: yup.array().required('Required'),
  type: yup.string().required('Required'),
  job: yup.boolean(),
});

const Form2 = () => (
  <>
    <h1>Class Work</h1>
    <Formik
      initialValues={{ name: '', age: 1, hobby: [], type: '', job: false }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        handleSubmit(createUser(values));
        actions.setSubmitting(false);
        actions.resetForm({});
      }}
    >
      <Form>
        <Field name="name" type="text" placeholder="Введіть ім'я" />
        <ErrorMessage name="name" component="div" />

        <Field name="age" type="number" placeholder="Вкажіть ваш вік" />
        <ErrorMessage name="age" component="div" />

        <Field
          name="hobby"
          placeholder="Вкажіть ваш вік"
          multiple={true}
          component="select"
        >
          <option value="football">football</option>
          <option value="hiking">hiking</option>
          <option value="it">it</option>
          <option value="game">game</option>
          <option value="reads">reads</option>
        </Field>
        <ErrorMessage name="hobby" component="div" />

        <Field name="type" as="select">
          <option value="admin">Адмін</option>
          <option value="moder">Модератор</option>
          <option value="corrector">Коректор</option>
          <option value="manager">Контент-менеджер</option>
          <option value="user">Користувач</option>
        </Field>
        <ErrorMessage name="type" component="div" />

        <Field
          name="job"
          type="checkbox"
          placeholder="Вкажіть наявність роботи"
        />
        <ErrorMessage name="job" component="div" />

        <button type="submit">Створити юзера</button>
      </Form>
    </Formik>
  </>
);

export default Form2;
