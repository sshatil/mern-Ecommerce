import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      {children}
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
