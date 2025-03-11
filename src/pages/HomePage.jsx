import Adds from "../components/Adds";
import Navbar from "../components/Navbar";
import Navbar2 from "../components/Navbar2";
import Product from "../components/Product";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div id="homepage">
      <Navbar />
      <Navbar2 />
      <Adds />
      <Product />
      <Footer />
    </div>
  );
};

export default HomePage;
