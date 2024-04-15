import { Footer } from "./footer";
import { Navbar } from "./navbar";

const Layout = ({ children }) => {
  return (
    <main>
      {/* <Navbar /> */}
      {children}
      {/* <Footer /> */}
    </main>
  );
};

export default Layout;