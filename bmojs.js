const sumar = document.getElementById("suma");
suma.addEventListener("click", (event) => {
    event.preventDefault();
    const valor1 = parseFloat(document.getElementById("caja1").value);
    const valor2 = parseFloat(document.getElementById("caja2").value);
    const resultado = document.getElementById("resultado");
    if (isNaN(valor1) || isNaN(valor2)) {
        resultado.textContent = "";
    } else if (valor1 === 0 || valor2 === 0) {
        resultado.textContent = "No se puede dividir por cero";
    } else {
        const suma = valor1 + valor2;
        resultado.textContent = `BMO ha sumado: ${suma}`;
    }
});
const resta = document.getElementById("resta");
resta.addEventListener("click", (event) => {
    event.preventDefault();
    const valor1 = parseFloat(document.getElementById("caja1").value);
    const valor2 = parseFloat(document.getElementById("caja2").value);
    const resultado = document.getElementById("resultado");
    if (isNaN(valor1) || isNaN(valor2)) {
        resultado.textContent = "";
    } else if (valor1 === 0 || valor2 === 0) {
        resultado.textContent = "No se puede dividir por cero";
    } else {
        const resta = valor1 - valor2;
        resultado.textContent = `BMO ha restado: ${resta}`;
    }
});
const multiplicacion = document.getElementById("multiplicacion");
multiplicacion.addEventListener("click", (event) => {
    event.preventDefault();
    const valor1 = parseFloat(document.getElementById("caja1").value);
    const valor2 = parseFloat(document.getElementById("caja2").value);
    const resultado = document.getElementById("resultado");
    if (isNaN(valor1) || isNaN(valor2)) {
        resultado.textContent = "";
    } else if (valor1 === 0 || valor2 === 0) {
        resultado.textContent = "No se puede dividir por cero";
    } else {
        const multiplicacion = valor1 * valor2;
        resultado.textContent = `BMO ha multiplicado: ${multiplicacion}`;
    }
});
const dividir = document.getElementById("division");
division.addEventListener("click", (event) => {
    event.preventDefault();
    const valor1 = parseFloat(document.getElementById("caja1").value);
    const valor2 = parseFloat(document.getElementById("caja2").value);
    const resultado = document.getElementById("resultado");
    if (isNaN(valor1) || isNaN(valor2)) {
        resultado.textContent = "";
    } else if (valor1 === 0 || valor2 === 0) {
        resultado.textContent = "No se puede dividir por cero";
    } else {
        const division = valor1 / valor2;
        resultado.textContent = `BMO ha dividido: ${division}`;
    }
});

const limpiar = document.getElementById("limpiar");
limpiar.addEventListener("click", () => {
    document.getElementById("caja1").value = "";
    document.getElementById("caja2").value = "";
    document.getElementById("resultado").textContent = "";
});
