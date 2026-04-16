let boton1 = document.getElementById("btn-1");
let boton2 = document.getElementById("btn-2");
let boton3 = document.getElementById("btn-3");

boton1.addEventListener("click", function() {
    console.log("Botón 1 presionado");
    bgColor("black");
});

boton3.addEventListener("mouseenter", function() {
    console.log("Mouse Enter 3");
    bgColor("red");
});
boton2.addEventListener("mouseenter", mouseEnterBtn2);
boton2.addEventListener("mouseleave", mouseLeave);
function mouseEnterBtn2() {
    console.log("Mouse Enter");
    bgColor("pink");
}
function mouseLeave() {
    console.log("Mouse Leave 2");
    bgColor("white");
}
boton3.addEventListener("mouseenter", mouseEnter);
boton3.addEventListener("mouseleave", mouseLeave);
function mouseEnter() {
    console.log("Mouse Enter");
    bgColor("red");
}
function bgColor(color)  {
    document.body.style.backgroundColor = color;
}