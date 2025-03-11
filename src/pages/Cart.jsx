import CartProducts from "../components/CartProducts";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Navbar2 from "../components/Navbar2";
const Cart = () => {
  return (
    <div>
      <Navbar />
      <Navbar2 />
      <CartProducts/>
      <Footer/>
    </div>
  );
};

export default Cart;
