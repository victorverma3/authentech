import { Outlet } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer"

// Layout element is the template for all other page: each has the header, then the Outlet (actual page rendered)
function Layout() {
  return (
    <div className="layout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;