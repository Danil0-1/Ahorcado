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

  function generarBotones() {
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    botonesContainer.innerHTML = ""
  
    for (let letra of letras) {
      const boton = document.createElement("button")
      boton.classList.add("boton")
      boton.textContent = letra
  
      boton.addEventListener("click", () => {
        verificarLetra(letra, boton)
      });
  
      botonesContainer.appendChild(boton)
    }
  }
  
  function verificarLetra(letra, boton) {
    boton.disabled = true
    let acierto = false
  
    for (let i = 0; i < palabraElegida.length; i++) {
      if (palabraElegida[i] === letra) {
        palabra.children[i].textContent = letra
        palabraOculta[i] = letra
        acierto = true
      }
    }
  
    if (!acierto) {
      contadorErrores++
      dibujarAhorcado()
    }
  
    if (!palabraOculta.includes("")) {
      setTimeout(() => alert("Gano 🙋🏻 La palabra era: " + palabraElegida), 100)
    }
  
    if (contadorErrores >= maxErrores) {
      setTimeout(() => alert("Perdio 🤷🏻 La palabra era: " + palabraElegida), 100)
    }
  }
  
  function dibujarAhorcado() {
    if (contadorErrores <= maxErrores) {
      partes[contadorErrores - 1].style.display = "block"
    }
  }

  function ocultarPartes() {
    partes.forEach(parte => {
      parte.style.display = "none"
    })
  }
  
  function reiniciar() {
    palabraOculta = []
    contadorErrores = 0
    generarPalabra()
    generarBotones()
    ocultarPartes()
  }
  
  
    
  reiniciar()