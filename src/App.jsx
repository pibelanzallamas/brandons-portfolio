import { useState } from "react";
import "./styles/app.css";
import AppRoutes from "./components/AppRoutes";
import { Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AppRoutes />
      <h1>Brandon Castillo </h1>
      <div>Esta es la pagina de Brandon Castillo.</div>
      <div className="redes">
        <li className="card">
          <a href="mailto:brandoncastillo.09@gmail.com">
            <p>brandoncastillo.09@gmail.com</p>
          </a>
        </li>

        <li>
          <a href="https://github.com/pibelanzallamas/" target="_blank">
            <figure className="redes-icons">
              <img
                src="https://pngimg.com/uploads/github/github_PNG23.png"
                alt="github-logo"
              ></img>
            </figure>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/brandon-castillo-dev/"
            target="_blank"
          >
            <figure className="redes-icons">
              <img
                src="https://1000marcas.net/wp-content/uploads/2020/01/Logo-Linkedin-500x313.png"
                alt="likedin-logo"
              ></img>
            </figure>
          </a>
        </li>
      </div>
      <div>
        <Link to="/home">
          <button className="brandon-boton">Entrar</button>
        </Link>
      </div>
    </>
  );
}

export default App;
