import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Sidebar from "./Sidebar";
const Layout = () => {
  return (
    <main>
      <Navbar />
      <ScrollRestoration />
      <Outlet />
      <Sidebar />
      <Footer />
    </main>
  );
};
export default Layout;
