import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import StarfieldBackground from "../effects/StarfieldBackground";

function Layout() {
  return (
    <>
      <StarfieldBackground />

      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default Layout;