import model11 from "../image/mobile11.jpg";
import model22 from "../image/mobile22.jpg";
import model33 from "../image/mobile33.jpg";
import model44 from "../image/mobile44.jpg";
import ac from "../image/ac.jpg";
import fridge from "../image/Fridge.jpg";
import micro from "../image/microwaves.jpg";
import washing from "../image/washing_machine.jpg";
import home from "../image/home.jpg";
import vasses from "../image/vasses.jpg";
import light from "../image/light.jpg";
import bedsheets from "../image/bedsheet.jpg";
import footwear from "../image/footwear.jpg";
import jwellry from "../image/jwellry.jpg";
import cloth from "../image/cloth.jpg";
import watch from "../image/watch.jpg";
import tshirt from "../image/tshirt.jpg";
import shirt from "../image/shirt.jpg";
import shoes from "../image/shoes.jpg";
import green from "../image/green.jpg";
import lava from "../image/lava.jpg";
import moto from "../image/moto.jpg";
import jio from "../image/jio.jpg";
import redmi from "../image/redmi.jpg";
import router from "../image/router.jpg";
import keyboard from "../image/keyboard.jpg";
import headphone from "../image/headphone.jpg";
import laptop from "../image/laptop.jpg";
import bed from "../image/bed.jpg";
import dec from "../image/dec.jpg";
import stg from "../image/stg.jpg";
import sol from "../image/sol.jpg";
import "../styles/product.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const productArray = [
  {
    heading: "Continue shopping deals",
    img1: model11,
    img2: model22,
    img3: model33,
    img4: model44,
    tittle1: "Snapdragon 4 Gen 2",
    tittle2: "Snapdragon 4 Gen 2a",
    tittle3: "Dimensity",
    tittle4: "Qualcomm",
    value: "See More",
  },
  {
    heading: "Appliances for home | up to 55% off",
    img1: ac,
    img2: fridge,
    img3: micro,
    img4: washing,
    tittle1: "Air Conditioners",
    tittle2: "Refrigertors",
    tittle3: "Microwaves",
    tittle4: "Washing Machine",
    value: "See all details",
  },
  {
    heading: "Revamp your home in style",
    img1: bedsheets,
    img2: home,
    img3: light,
    img4: vasses,
    tittle1: "Cushion covers and bedsheets",
    tittle2: "Home storage",
    tittle3: "Lightening solutions",
    tittle4: "Figurines and vases",
    value: "Explore More",
  },
  {
    heading: "Up to 60% off | Styles for women",
    img1: watch,
    img2: footwear,
    img3: jwellry,
    img4: cloth,
    tittle1: "Watch",
    tittle2: "Footwear and Handbags",
    tittle3: "Fashion jewellery",
    tittle4: "Womens clothes",
    value: "Show Explore",
  },
  {
    heading: "Under ₹499 | Pocket-friendly fashion",
    img1: green,
    img2: tshirt,
    img3: shirt,
    img4: shoes,
    tittle1: "Footwear",
    tittle2: "Backpacks",
    tittle3: "Clothing",
    tittle4: "Viwe All",
    value: "See all other offers",
  },
  {
    heading: "Starting ₹149 | Headphones",
    img1: lava,
    img2: moto,
    img3: jio,
    img4: redmi,
    tittle1: "Starting at ₹249 | boAt",
    tittle2: "Starting at ₹649 | Bult",
    tittle3: "Starting at ₹349 | Noise",
    tittle4: "Starting at ₹149 | Zebronics",
    value: "Show more",
  },
  {
    heading: "Work from home essentials",
    img1: router,
    img2: keyboard,
    img3: laptop,
    img4: headphone,
    tittle1: "Routers",
    tittle2: "Keyboards and Mouse",
    tittle3: "Laptops",
    tittle4: "Headphones",
    value: "Explore more items",
  },
  {
    heading: "Revamp your home in style",
    img1: sol,
    img2: stg,
    img3: dec,
    img4: bed,
    tittle1: "Lightening solutions",
    tittle2: "Home storage",
    tittle3: "Home decorations",
    tittle4: "Curtains  & more",
    value: "Explore more",
  },
  {
    heading: "Continue shopping deals",
    img1: model11,
    img2: model22,
    img3: model33,
    img4: model44,
    tittle1: "Snapdragon 4 Gen 2",
    tittle2: "Snapdragon 4 Gen 2a",
    tittle3: "Dimensity",
    tittle4: "Qualcomm",
    value: "See More",
  },
  {
    heading: "Appliances for home | up to 55% off",
    img1: ac,
    img2: fridge,
    img3: micro,
    img4: washing,
    tittle1: "Air Conditioners",
    tittle2: "Refrigertors",
    tittle3: "Microwaves",
    tittle4: "Washing Machine",
    value: "See all details",
  },
  {
    heading: "Revamp your home in style",
    img1: bedsheets,
    img2: home,
    img3: light,
    img4: vasses,
    tittle1: "Cushion covers and bedsheets",
    tittle2: "Home storage",
    tittle3: "Lightening solutions",
    tittle4: "Figurines and vases",
    value: "Explore More",
  },
  {
    heading: "Up to 60% off | Styles for women",
    img1: watch,
    img2: footwear,
    img3: jwellry,
    img4: cloth,
    tittle1: "Watch",
    tittle2: "Footwear and Handbags",
    tittle3: "Fashion jewellery",
    tittle4: "Womens clothes",
    value: "Show Explore",
  },
  {
    heading: "Under ₹499 | Pocket-friendly fashion",
    img1: green,
    img2: tshirt,
    img3: shirt,
    img4: shoes,
    tittle1: "Footwear",
    tittle2: "Backpacks",
    tittle3: "Clothing",
    tittle4: "Viwe All",
    value: "See all other offers",
  },
  {
    heading: "Starting ₹149 | Headphones",
    img1: lava,
    img2: moto,
    img3: jio,
    img4: redmi,
    tittle1: "Starting at ₹249 | boAt",
    tittle2: "Starting at ₹649 | Bult",
    tittle3: "Starting at ₹349 | Noise",
    tittle4: "Starting at ₹149 | Zebronics",
    value: "Show more",
  },
  {
    heading: "Work from home essentials",
    img1: router,
    img2: keyboard,
    img3: laptop,
    img4: headphone,
    tittle1: "Routers",
    tittle2: "Keyboards and Mouse",
    tittle3: "Laptops",
    tittle4: "Headphones",
    value: "Explore more items",
  },
  {
    heading: "Revamp your home in style",
    img1: sol,
    img2: stg,
    img3: dec,
    img4: bed,
    tittle1: "Lightening solutions",
    tittle2: "Home storage",
    tittle3: "Home decorations",
    tittle4: "Curtains  & more",
    value: "Explore more",
  },
];

const Product = () => {
  const [productData] = useState(productArray);
  const navigate = useNavigate();

  return (
    <>
      <div id="products">
        {productData.map((product, index) => (
          <div
            key={index}
            className="product"
            onClick={() => {
              if (index === 0) {
                navigate("/product");
              }
            }}
          >
            <h3>{product.heading}</h3>
            <div className="photos">
              {[product.img1, product.img2, product.img3, product.img4].map(
                (img, imgIndex) => (
                  <div key={imgIndex} className="photo-item">
                    <img src={img} alt={`Image ${imgIndex}`} />
                    <p>{product[`tittle${imgIndex + 1}`]}</p>
                  </div>
                )
              )}
            </div>
            <a href="#">{product.value}</a>
          </div>
        ))}
      </div>
    </>
  );
};

export default Product;
