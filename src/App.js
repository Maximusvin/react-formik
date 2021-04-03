import Layout from './components/Layout/Layout';
import FormBox from './components/FormBox/FormBox';
import UserForm from './components/UserForm/UserForm';

import './App.css';

function App() {
  return (
    <Layout>
      <FormBox />
      <UserForm />
    </Layout>
  );
}

export default App;
