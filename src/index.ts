//importa el router y los componentes que montara en la pagina

import { initRouter } from "./router";
import "./components/button";
import "./components/paper";
import "./components/tijera";
import "./components/piedra";
//funcion que se encarga de seleccionar el div root del DOM donde se montaran los componentes
(function () {
  const root = document.querySelector(".root");
  initRouter(root as Element);
})();
