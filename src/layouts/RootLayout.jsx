import { Outlet } from 'react-router-dom';
import Footer from '../shared/footer/Footer';
import NavBar from '../shared/navbar/NavBar';

const RootLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
