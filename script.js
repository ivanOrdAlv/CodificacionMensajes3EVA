let senial = prompt("Escribe algo");

let senialMayusculas=senial.toUpperCase();
if(senial.length==0){

}else{
    console.log(senialMayusculas);
}

let resultado = ""; 
for (var i = 0; i < senial.length; i++) {
    var caracter = senial[i];

    if (caracter === ' ') {
      resultado += ' ';
    } else if (caracter === 'Z') {
      resultado += 'A';
    } else if (caracter >= 'A' && caracter <= 'Y') {
      resultado += String.fromCharCode(caracter.charCodeAt(0) + 1);
    }else if (caracter === 'z') {
        resultado += 'a';
      } else if (caracter >= 'a' && caracter <= 'y') {
        resultado += String.fromCharCode(caracter.charCodeAt(0) + 1);
    } else if (caracter >= '0' && caracter <= '8') {
      resultado += String.fromCharCode(caracter.charCodeAt(0) + 1);
    } else if (caracter === '9') {
      resultado += '0';
    }
  }

document.getElementById('resultado').textContent = resultado.toUpperCase();
  

const div = document.createElement("div");
const titulo = document.createElement("h3");
titulo.textContent = "Foto";
titulo.className = "titulo-foto";
const imagen = document.createElement("img");
imagen.setAttribute("src", "https://source.unsplash.com/random/300x300");

div.appendChild(titulo);
div.appendChild(imagen);
document.body.appendChild(div);


function obtenerImagenAleatoria() {
  return "https://source.unsplash.com/random/300x300" + Math.random();
}


imagen.addEventListener("click", function() {
  imagen.setAttribute("src", obtenerImagenAleatoria());
  const cursor= document.querySelector(".cursor");
  cursor.setAttribute("onpointer", obtenerImagenAleatoria());
});