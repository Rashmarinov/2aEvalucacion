import React, { useState, useEffect } from "react";
import Menu from "./Menus";
function Carrousel() {
  const [productos, setProductos] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProductos(data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handlePrevImage = () => {
    setCurrentImage((prevImage) => (prevImage === 0 ? productos.length - 1 : prevImage - 1));
  };

  const handleNextImage = () => {
    setCurrentImage((prevImage) => (prevImage === productos.length - 1 ? 0 : prevImage + 1));
  };

  return (
    <div>
        <Menu></Menu>
      <div className="carrousel-container">
        <img src={productos[currentImage]?.thumbnail} alt={productos[currentImage]?.title} />

      </div>
      <div>       
         <button onClick={handlePrevImage}>Anterior</button>
        <button onClick={handleNextImage}>Siguiente</button>
    </div>
    </div>
  );
}

export default Carrousel;
