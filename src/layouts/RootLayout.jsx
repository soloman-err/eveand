import { Outlet } from 'react-router-dom';
import Footer from '../shared/footer/Footer';
import NavBar from '../shared/header/Header';

const RootLayout = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <NavBar />
      <Outlet />
      <section className="mt-auto">
        <Footer />
      </section>
    </div>
  );
};

export default RootLayout;
