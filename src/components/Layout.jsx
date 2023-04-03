import { Outlet } from 'react-router-dom';
import Navbar from '@/components/Navbar.JSX';
import { AuthProvider } from '@/context/AuthContext.JSX';

const Layout = () => (
  <div className="wrapper">
    <AuthProvider>
      <Navbar />
      <Outlet />
    </AuthProvider>
  </div>
);
export default Layout;
