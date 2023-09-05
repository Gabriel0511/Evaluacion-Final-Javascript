const botonEmpezar = document.getElementById('btn-empezar')
const botonSiguiente = document.getElementById('btn-siguiente')
const botonReiniciar = document.getElementById('btn-reiniciar')
const containerElementoPregunta = document.getElementById('container-preguntas')
const elementoPregunta = document.getElementById('preguntas')
const elementoBotonesRespuesta = document.getElementById('botones-respuestas')
const mensaje = document.getElementById('mensaje')

let preguntasAzar
let preguntaActual

/* Score */
const textScore = document.getElementById('textoScore')
const scoreVisible = document.getElementById('hud-item')
const puntos = 20

let score = 0

incrementoScore = num => {
    score += num
    textScore.innerText = score
}
/* Botones */

botonEmpezar.addEventListener('click', empezarJuego)
botonSiguiente.addEventListener('click', () => {    
    preguntaActual++
    siguientePregunta()
})
botonReiniciar.addEventListener("click", function(){
    document.location.href = 'game.html';
})

function empezarJuego() {
    botonEmpezar.classList.add('hide')
    preguntasAzar = preguntas.sort(() => Math.random() - .5)
    preguntaActual = 0
    score = 0
    textScore.innerText = score
    containerElementoPregunta.classList.remove('hide')
    scoreVisible.classList.remove('hide')
    siguientePregunta()
}

function siguientePregunta() {
    reiniciar()
    mostrarPregunta(preguntasAzar[preguntaActual])
    
}

function mostrarPregunta(pregunta) {
    elementoPregunta.innerText = pregunta.pregunta
    pregunta.respuestas.forEach(respuesta => {
        const boton = document.createElement('boton')
        boton.innerText = respuesta.text
        boton.classList.add('btn')
        if (respuesta.correcto) {
            boton.dataset.correcto = respuesta.correcto
        }
        boton.addEventListener('click', seleccionarRespuesta)
        elementoBotonesRespuesta.appendChild(boton)
    })
}

function reiniciar() {
    limpiarEstadoClase(document.body)
    botonSiguiente.classList.add('hide')
    while (elementoBotonesRespuesta.firstChild) {
        elementoBotonesRespuesta.removeChild(elementoBotonesRespuesta.firstChild)
    }
}

function seleccionarRespuesta(e) {
    const botonSeleccionado = e.target
    const correct = botonSeleccionado.dataset.correcto
    estadoClase(document.body, correct)
    Array.from(elementoBotonesRespuesta.children).forEach(boton => {estadoClase(boton, boton.dataset.correcto)})
    if(correct) {
        incrementoScore(puntos);
    }
    if (preguntasAzar.length > preguntaActual + 1) {
        botonSiguiente.classList.remove('hide')
    } else {
        botonReiniciar.classList.remove('hide')
        if(score == 100) {
            mensaje.innerHTML = "Ganaste!!"
        } else {
            mensaje.innerHTML = "Intenta de nuevo!"
        }
    } 
}

function estadoClase(element, correcto) {
    limpiarEstadoClase(element)
    if (correcto) {
        element.classList.add('correcto')
    } else {
        element.classList.add('error')
    }
}

function limpiarEstadoClase(element) {
    element.classList.remove('correcto')
    element.classList.remove('error')
}

const preguntas = [
    {
        pregunta: '¿Cuál es el animal más grande de la Tierra?',
        respuestas: [
            {text: 'Tiburón ballena', correcto: false},
            {text: 'Ballena azul', correcto: true},
            {text: 'Cachalote', correcto: false},
            {text: 'Calamar gigante', correcto: false}
        ]
    },
    {
        pregunta: '¿Cuál es el planeta más grande del Sistema Solar?',
        respuestas: [
            {text: 'Urano', correcto: false},
            {text: 'Neptuno', correcto: false},
            {text: 'Saturno', correcto: false},
            {text: 'Júpiter', correcto: true}
        ]
    },
    {
        pregunta: '¿Cuántos años duró la Primera Guerra Mundial?',
        respuestas: [
            {text: '3 años', correcto: false},
            {text: '6 años', correcto: false},
            {text: '4 años', correcto: true},
            {text: '7 años', correcto: false}
        ]
    },
    {
        pregunta: '¿Cuál es el océano más grande del mundo?',
        respuestas: [
            {text: 'Océano Pacífico', correcto: true},
            {text: 'Océano Atlántico', correcto: false},
            {text: 'Océano Ártico', correcto: false},
            {text: 'Océano Antártico', correcto: false}
        ]
    },
    {
        pregunta: '¿Cuántos lados tiene un heptágono?',
        respuestas: [
            {text: '4', correcto: false},
            {text: '8', correcto: false},
            {text: '7', correcto: true},
            {text: '5', correcto: false}
        ]
    },
]

