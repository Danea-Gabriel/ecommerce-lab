import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet, ScrollRestoration } from "react-router-dom";
const Layout = () => {
  return (
    <main>
      <Navbar />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </main>
  );
};
export default Layout;
