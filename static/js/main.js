import {burgerMenu} from "./nav-bar.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {

    burgerMenu(".menu-btn", ".menu", ".menu a");

})