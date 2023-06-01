"use strict"

const menu = document.querySelector("#nav-links");
const openMenuBtn = document.querySelector("#btn-hambur");
const closeMenuBtn = document.querySelector("#btn-cross");

function mostrarMenu() {
  menu.classList.toggle("menu_abierto");
}

openMenuBtn.addEventListener("click", mostrarMenu);
closeMenuBtn.addEventListener("click", mostrarMenu);