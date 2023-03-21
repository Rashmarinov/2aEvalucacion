import React, { useState, useEffect } from "react";
import Menu from "./Menus";

function Producto() {
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products/1")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProducto(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!producto) {
    // Si todavía no se ha recibido la respuesta de la API, se muestra un mensaje de carga
    return <p>Cargando...</p>;
  }

  return (
    <div className="container">
      <Menu />
      <ul className="producto">
      <h1>{producto.title}</h1>
        <img src={producto.images[0]} alt={producto.title} />

        <p>Precio: ${producto.price}</p>

      </ul>
    </div>
  );
}

export default Producto;

