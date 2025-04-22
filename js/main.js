const palabra = document.querySelector(".palabra");
const botonesContainer = document.querySelector(".teclado");
const partes = document.querySelectorAll(".parte");

const palabras = ["DANILO", "UWU", "DARWIN"]
let palabraElegida = ""
let palabraOculta = []
let contadorErrores = 0
const maxErrores = partes.length

function generarPalabra() {
    palabraElegida = palabras[Math.floor(Math.random() * palabras.length)]
    palabraOculta = Array(palabraElegida.length).fill("")
  
    palabra.innerHTML = ""
  
    for (let i = 0; i < palabraElegida.length; i++) {
      const span = document.createElement("span")
      span.classList.add("parte")
      span.textContent = ""
      palabra.appendChild(span)
    }
  }