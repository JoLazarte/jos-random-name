//Se declara el arreglo
const messages = [
    "David",
    "Mika",
    "Joanna",
    "Isabela",
    "Ricardo",
    "Mandy",
    "Pedro",
    "Lautaro"
]

//Crear función para enviar aleatoriamente  los nombres del arreglo
const randomMsg = () => {
    const message = messages[Math.floor(Math.random()*messages.length)]
    //dame un numero random redondeado (entero) que sea uno de los indices del array messages
    console.log(message);
}

// Exportar la función como un módulo

module.exports = { randomMsg };