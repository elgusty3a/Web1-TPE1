let form = document.querySelector('#form'); //busca el boton en el DOM
let capch = document.querySelector('#cap'); //busca en el DOM el titulo donde mostrara el nro aleatorio
let boton = document.querySelector('#btn');
// let num; //defino la variable de forma global
let reset = document.querySelector('#reset'); //boton de reset

//---------------------NUEVOS ALEATORIOS-------------
let comp = "";
captcha();


function captcha() {
  const CANTCARACTCAPTCH = 6;
  for (let i = 0; i < CANTCARACTCAPTCH; i++) {
    // const element = MAXCANTCARACT[i];
    comp = comp + opcRandom();
    console.log("comp es: "+comp);
  }
  capch.innerHTML = comp;
}


function opcRandom() {
  let opc, cadena;
  for (let i = 0; i<3; i++){
    opc = Math.floor(Math.random()*3+1);
    console.log("opc es: "+opc)
    cadena = caracterAleatorio(opc);
    console.log("cadena es: "+cadena);
  }
  return cadena;
}


function caracterAleatorio(opc) {
  let caracter;
  switch (opc) {
    case 1: //digitos aleatorios
      caracter = String.fromCharCode(Math.floor((Math.random()*(57-48)+1)+48));
      break;
    case 2: //letras mayusculas aleatorias
      caracter = String.fromCharCode(Math.floor((Math.random()*(90-65)+1)+65));
      break;
    case 3: //letras minusculas aleatorias
      caracter = String.fromCharCode(Math.floor((Math.random()*(122-97)+1)+97));
      break;
  };
  console.log("caracter es: "+caracter);
  return caracter;
};


form.addEventListener("submit",verificarcap); //cuando hay click en boton de enviar apunta a la funcion comparar
reset.addEventListener("click",resetearCapcha);

function verificarcap(e){ //funcion de verificacion y comparacion
  e.preventDefault();
  console.log("estoy en la consola, hola!!")
  let verif = document.querySelector('#verif'); //busca en el DOM la casilla donde el usuario ingresará el nro para verificar
  verif.classList.remove('vaciocapcha');
  boton.classList.remove('vaciocapcha');
  if ((comp === verif.value)){
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
  comp = "";
  capch.innerHTML = comp;
  verif.value = comp;
  captcha();
};

//----------------------------------------------------