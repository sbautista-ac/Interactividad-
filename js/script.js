let a = 1;
let b = 2;
let c = a + b;

console.log(c); 
function saludar(nombre = "Mundo ") {
     alert("Hola " + nombre);
}
    saludar("Sarai");

    function sumar(a, b) {
        const resultado = a + b;
        alert("la suma de " + a + " y " + b + " es " + resultado);
    }
    sumar(2, 3);
    sumar(8, 5);

    function restar(a, b) {
        const resultado = a - b;
        alert("la resta de " + a + " y " + b + " es " + resultado);
    }
    restar(10, 4);
    restar(20, 7);

    function changeColor() {
        //camelCase
        document.body.style.backgroundColor = "lightblue";
        const rgbColor = "rgb(" + Math.floor(Math.random() * 256) + "," +
                          Math.floor(Math.random() * 256) + "," +
                          Math.floor(Math.random() * 256) + ")";
        document.body.style.backgroundColor = rgbColor; 
    }

    document.addEventListener("click", changeColor); 