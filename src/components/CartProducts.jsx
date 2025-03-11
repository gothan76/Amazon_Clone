import React, { useState } from "react";
import cart1 from "../image/cart1.jpg";
import cart2 from "../image/cart2.jpg";
import ful from "../image/fulfill.png";
import dustbin from "../image/dustbin.png";
import plus from "../image/plus.png";
import "../styles/CartProduct.css";

const CartProducts = () => {
  const [cartData] = useState([
    {
      id: 1,
      name: "OnePlus Nord 4 5G",
      image: cart1,
      color: "Oasis Green",
      size: "8GB+256GB",
      inStock: true,
      discount: "12%",
      price: 28998,
      mrp: 32999,
    },
    {
      id: 2,
      name: "OnePlus Nord CE4 Lite 5G",
      image: cart2,
      color: "Super Silver",
      size: "8GB+128GB",
      inStock: true,
      discount: "14%",
      price: 17998,
      mrp: 20999,
    },
  ]);

  return (
    <div className="cart-container">
      <h1 className="cart-title">Shopping Cart</h1>
      <hr className="nee" />

      {cartData.map((product) => (
        <div key={product.id} className="cart-item">
          <img src={product.image} alt="Product" className="product-image" />

          <div className="product-details">
            <h3>
              {product.name} ({product.color}, {product.size})
            </h3>
            <h5 className="stock">
              {product.inStock ? "In stock" : "Out of stock"}
            </h5>
            <h5 className="shipping">Eligible for FREE Shipping</h5>
            <img src={ful} alt="Fulfilled" className="fulfilled-icon" />
            <label className="gift-option">
              <input type="checkbox" /> This will be a gift{" "}
              <a href="#">Learn more</a>
            </label>
            <h5>
              <strong>Colour:</strong> {product.color}
            </h5>
            <h5>
              <strong>Size:</strong> {product.size}
            </h5>

            {/* Quantity & Actions in Same Line */}
            <div className="quantity-action-container">
              <div className="quantity-control">
                <img src={dustbin} alt="Delete" className="icon" />
                <span className="quantity-box">1</span>
                <img src={plus} alt="Increase" className="icon" />
              </div>

              <div className="action-links">
                <a href="#">Delete</a> | <a href="#">Save for later</a> |
                <a href="#">See more like this</a> | <a href="#">Share</a>
              </div>
            </div>
          </div>

          <div className="price-section">
            <div className="discount-container">
              <span className="discount-badge">{product.discount} off</span>
              <span className="limited-time">Limited time deal</span>
            </div>
            <h3 className="price">&#8377;{product.price.toLocaleString()}</h3>
            <h4 className="mrp">
              M.R.P.: <del>&#8377;{product.mrp.toLocaleString()}</del>
            </h4>
          </div>
        </div>
      ))}

      <hr />
      <div className="subtotal">
        Subtotal ({cartData.length} items):{" "}
        <strong>
          &#8377;
          {cartData
            .reduce((total, item) => total + item.price, 0)
            .toLocaleString()}
        </strong>
      </div>
    </div>
  );
};

export default CartProducts;
