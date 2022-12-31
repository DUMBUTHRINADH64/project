import { Link } from 'react-router-dom';
import { useContext } from 'react';


import AuthContext from '../store/auth-context';
const MainNavigation = () => {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;
  return (
    <header class='w-100 h-150px bg-primary d-flex justify-content-between p-10'>
      <Link to='/' class='display-5' style={{color:'white'}}>Medicines Order app</Link>
      <Link to='/admin' class='display-5' style={{color:'white'}}  >Admin</Link>
     
        
        {!isLoggedIn && 
              <Link to='/auth' class='display-6' style={{color:'white'}}>Login</Link>}
    </header>
  );
};

export default MainNavigation;
