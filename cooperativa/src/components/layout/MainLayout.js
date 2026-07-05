import { Outlet } from 'react-router-dom';

import Navbar from './Navbar.js';
import Footer from './Footer.js';

function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default MainLayout