import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Menu from "./Menus";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carrousel() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProductos(data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div>
    <Menu></Menu>
      <h2>Productos</h2>
      <Slider {...settings}>
        {productos.map((producto) => (
          <div key={producto.id}>
            <img src={producto.thumbnail} alt={producto.title} />
            <p>{producto.title}</p>
            <p>${producto.price}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carrousel;
