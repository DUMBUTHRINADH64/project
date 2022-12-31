import { Switch, Route } from 'react-router-dom';
import { useContext } from 'react';
import Layout from './components/Layout/Layout';
import AuthForm from './components/Auth/AuthForm';
import Admin from './components/Auth/Admin';
import AdminDetails from './components/Auth/AdminDetails';
import AuthContext from './components/store/auth-context';
import HomePage from './components/HomePage/Homepage';
function App() {
  const  authctx=useContext(AuthContext);
  return (
    <Layout>
      <Switch>
      <Route path='/auth'>
          <AuthForm />
        </Route>
        <Route path='/admin' exact><Admin/></Route>
        <Route path='/adminlogin' exact><AdminDetails /></Route>
        {authctx.isLoggedIn && <Route path='/' exact>
          <HomePage/>
        </Route>
}
      </Switch>
    </Layout>
  );
}

export default App;
