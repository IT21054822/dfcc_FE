
import HomeNavbar from './NavbarH'
import { useLocation } from 'react-router-dom'

const Navbar: React.FC = () => {
    const location = useLocation();
    const currentPath = location.pathname;
  

    const renderNavbar = (): React.ReactNode => {
      if (currentPath === '/Home') {
        return <HomeNavbar />;
      } else if(currentPath === '/Activity'){
        return <HomeNavbar />;
      }
      else if(currentPath === '/Form'){
        return <HomeNavbar />;
      }
      else if(currentPath === '/Analysis'){
        return <HomeNavbar />;
      }
      
    };
  
    return <div>{renderNavbar()}</div>;
  };

export default Navbar
