import React, { useState } from "react";
import Menu from "./Menus";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  //Constantes a modo de base de datos falsa
  const bdemail = "alberto@gmail.com";
  const bdpassword = "Qwer3$";
  

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);

    // Validar el correo electrónico
    if (!value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      setEmailError("El correo electrónico no es válido");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);

    // Validar la contraseña
    if (!value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/)) {
      setPasswordError("La contraseña debe tener al menos 6 caracteres, una letra mayúscula, una letra minúscula y un número");
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Si hay errores, no enviar el formulario
    if (emailError || passwordError) {
      return;
    }

    // Validar las credenciales del usuario
    if (email === bdemail && password === bdpassword) {
      

      console.log("Credenciales válidas, iniciando sesión...");
      // Las credenciales son válidas, nos redirige al menu principal
      window.location.href = "/";
    } else {
      // Las credenciales son inválidas, mostrar mensaje de error
      console.log("Correo electrónico o contraseña incorrectos");
      setErrorMessage("Correo electrónico o contraseña incorrectos");

    }
  };

  return (
    <div className="container">
      <Menu />
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Correo electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            className={emailError ? "form-control is-invalid" : "form-control"}
          />
          {emailError && <div className="invalid-feedback">{emailError}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="text"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            className={passwordError ? "form-control is-invalid" : "form-control"}
          />
          {passwordError && <div className="invalid-feedback">{passwordError}</div>}
        </div>
        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
        <button type="submit" className="btn btn-primary">
          Iniciar sesión
        </button>
      </form>
    </div>
  );
}

export default Login;

