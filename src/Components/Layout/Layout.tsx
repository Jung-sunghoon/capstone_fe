import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const Layout = ({ children }: any) => {
  return (
    <div>
      <Header />

      <main
        style={{
          marginTop: "60px",
        }}
      >
        {children}
      </main>

      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
