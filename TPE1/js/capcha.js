let form = document.querySelector('#form'); //busca el boton en el DOM
let capch = document.querySelector('#cap'); //busca en el DOM el titulo donde mostrara el nro aleatorio
let boton = document.querySelector('#btn');
let num; //defino la variable de forma global
let reset = document.querySelector('#reset'); //boton de reset


capcha(); //cada vez que recargue la pagina arrojara un nuevo capcha

function capcha(){   //genera un nro de captcha random
  num = Math.floor(Math.random()*100000+1);
  capch.innerHTML=(num);
  console.log(num);
};

form.addEventListener("submit",verificarcap); //cuando hay click en boton de enviar apunta a la funcion comparar
reset.addEventListener("click",resetearCapcha);

function verificarcap(e){ //funcion de verificacion y comparacion
  e.preventDefault();
  console.log("estoy en la consola, hola!!")
  let verif = document.querySelector('#verif'); //busca en el DOM la casilla donde el usuario ingresará el nro para verificar
  verif.classList.remove('vaciocapcha');
  boton.classList.remove('vaciocapcha');
  if ((num == verif.value)){
    boton.value=("CORRECTO!!");
    verif.classList.add('greencapcha');
    boton.classList.add('greencapcha');
  }else{
    boton.value=("INCORRECTO!!");
    verif.classList.add('redcapcha');
    boton.classList.add('redcapcha');
  }
};

function resetearCapcha() {
  console.log("Estoy reseteando en consola");
  let verif = document.querySelector('#verif');
  boton.value=("Enviar");
  verif.classList.remove('redcapcha');
  boton.classList.remove('redcapcha');
  verif.classList.add('vaciocapcha');
  boton.classList.add('vaciocapcha');
  capcha();
};