import { useState } from "react";
import mobile1 from "../image/model1.jpg";
import mobile2 from "../image/model2.jpg";
import mobile3 from "../image/model3.jpg";
import mobile4 from "../image/model4.jpg";
import mobile5 from "../image/model5.jpg";
import download from "../image/download.png";
import "../styles/homepreview.css";

const HoverPreview = () => {
  const [hoveredImage, setHoveredImage] = useState(null);

  const images = [mobile1, mobile2, mobile3, mobile4, mobile5];

  return (
    <div id="whole">
      <div id="imagelist">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Hover Me"
            onMouseEnter={() => setHoveredImage(img)}
            onMouseLeave={() => setHoveredImage(img)}
          />
        ))}
      </div>
      <div id="hover">
        <img src={hoveredImage || mobile1} alt="Preview" />
      </div>
      <div id="dwn">
        <img id="down" src={download} alt="symbol" />
      </div>
    </div>
  );
};

export default HoverPreview;
