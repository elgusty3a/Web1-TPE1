"use strict"

/* ---- Comienzo del nav ----*/
const menu = document.querySelector("#nav-links");
const openMenuBtn = document.querySelector("#btn-hambur");
const closeMenuBtn = document.querySelector("#btn-cross");

function mostrarMenu() {
  menu.classList.toggle("menu_abierto");
}

openMenuBtn.addEventListener("click", mostrarMenu);
closeMenuBtn.addEventListener("click", mostrarMenu);
/* ---- FIN del nav ----*/




/* ---- comienxo del slide ----*/

let arregloImg = ["img1.jpg","img2.jpg","img3.jpg","img4.jpg","img5.jpg","img6.jpg","img7.jpg"];
let imgActual = 0;

//setear tiempo
let tempo;
tempo = setInterval(pasarImagen, 2000);
document.querySelector('#btn-sig').addEventListener("click" , pasarImagen);
document.querySelector('#btn-ant').addEventListener("click" , pasarImagen);
let contImgSlide = document.querySelector('.img-slide');
contImgSlide.addEventListener("mouseover", detenerSlide);
contImgSlide.addEventListener("mouseout", arrancarSlide);

function pasarImagen() {
  let boton= this.id;
  if(boton!=undefined){
    clearInterval(pasarImagen,2000);
    tempo = setInterval(pasarImagen, 2000);
  }
  if (boton=='btn-sig') {
    imgActual++;
    if(imgActual==arregloImg.length()){
      imgActual = 0;
    }
  } else {
    imgActual--;
    if (imgActual<0) {
      imgActual=arregloImg.length()-1;
    }
  }
  let showImg = arregloImg[imgActual];
  contImgSlide.scr = `img/${showImg}`;
}