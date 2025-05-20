// Volumen de una esfera
const pi = 3.141992;
var radius = Number(prompt("Type the radius: "));
var volume = (4 / 3) * pi * Math.pow(radius, 3);
alert("The volume of the sphere is: " + volume);

// Verificación si es positivo, negativo o cero
var number = Number(prompt("Type the number:"));
if (number < 0) {
    alert("This number is negative");
} else if (number > 0) {
    alert("This number is positive");
} else {
    alert("This number is zero");
}

// Tabla del 3 - con for
var limit = Number(prompt("Enter a limit for the multiplication table of 3:"));

console.log("Using for loop:");
for (let i = 0; i <= limit; i++) {
    console.log("3 x " + i + " = " + (3 * i));
}

// Tabla del 3 - con while
console.log("Using while loop:");
let i = 0;
while (i <= limit) {
    console.log("3 x " + i + " = " + (3 * i));
    i++;
}

// Descuento en restaurante
var consumption = Number(prompt("Enter the amount of your consumption:"));
var discount = 0;
if (consumption <= 100) {
    discount = consumption * 0.10;
} else {
    discount = consumption * 0.28;
}
var total = consumption - discount;
alert("Discount: $" + discount.toFixed(2) + "\nTotal to pay: $" + total.toFixed(2));

// Función para confirmar envío de correo
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("footer-form");  // Seleccionamos el formulario
    const mensaje = document.getElementById("mailsuccess");  // Seleccionamos el contenedor del mensaje

    // Verificar si ya se ha enviado un correo anteriormente
    if (localStorage.getItem("emailSent")) {
        mensaje.textContent = "¡Gracias por enviar su opinión! ¡Lo contactaremos!";
        mensaje.style.color = "green";  // Cambia el color del mensaje a verde
        localStorage.removeItem("emailSent");  // Limpiamos el indicador después de mostrar el mensaje
    }

    // Agregamos el evento submit al formulario
    document.addEventListener("DOMContentLoaded", function () {
        const form = document.getElementById("footer-form");  // Seleccionamos el formulario
        const mensaje = document.getElementById("mailsuccess");  // Seleccionamos el contenedor del mensaje
    
        // Verificar si ya se ha enviado un correo anteriormente (después de la recarga)
        if (localStorage.getItem("emailSent") === "true") {
            mensaje.textContent = "¡Gracias por enviar su opinión! ¡Lo contactaremos!";
            mensaje.style.color = "green";  // Cambia el color del mensaje a verde
            localStorage.removeItem("emailSent");  // Limpiamos el indicador después de mostrar el mensaje
        }
    
        document.addEventListener("DOMContentLoaded", function () {
            const form = document.getElementById("footer-form");
            const mensaje = document.getElementById("mailsuccess");
        
            // Mostrar mensaje si el email fue enviado antes de la recarga
            if (localStorage.getItem("emailSent") === "true") {
                mensaje.textContent = "¡Gracias por enviar su opinión! ¡Lo contactaremos!";
                mensaje.style.color = "green";
                localStorage.removeItem("emailSent");
            }
        
            // Evento del formulario
            form.addEventListener("submit", function (event) {
                event.preventDefault(); // Prevenir envío por defecto
        
                const emailInput = document.getElementById("footer-email").value;
        
                if (emailInput && emailInput.includes("@")) {
                    // Guardar que el mensaje debe mostrarse después de la recarga
                    localStorage.setItem("emailSent", "true");
                    // Forzar recarga para simular envío real
                    location.reload();
                } else {
                    mensaje.textContent = "Por favor, ingrese un correo electrónico válido.";
                    mensaje.style.color = "red";
                }
            });
        });
        
// Función para adivinar el número
function guessNumber(number, random) {
    // Condition that evaluates if the number typed by the user is between 0 and 100.
    if (number >= 0 && number <= 100) {
        // If the user guesses the number...
        if (number === random) {
            // The paragraph will say that guessed the number.
            document.getElementById("answer").innerHTML = "Congrats! This is the number!";
        } 
        // Otherwise...
        else {
            // The paragraph will say that is not the number and has to try again.
            document.getElementById("answer").innerHTML = "Oh no! Is not the number. Try again.";
        }
