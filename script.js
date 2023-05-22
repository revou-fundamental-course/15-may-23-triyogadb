var btn_id = 12;
var cardPersegi = document.getElementById("square");
var cardPersegiPanjang = document.getElementById("rectangle");
var luasPersegi = document.getElementById("resultLuasPersegi");
var kelilingPersegi = document.getElementById("resultKelilingPersegi");
var luasPersegiPanjang = document.getElementById("resultLuasPersegiPanjang");
var kelilingPersegiPanjang = document.getElementById(
  "resultKelilingPersegiPanjang"
);
var sisi = document.getElementById("sisi");
var panjang = document.getElementById("panjang");
var lebar = document.getElementById("lebar");

function init() {
  this.current_selected_radio = "square";
  cardPersegi.style.display = "block";
  cardPersegiPanjang.style.display = "none";
}

function handleClick(el) {
  if (el.value == "square") {
    this.current_selected_radio = "square";
    cardPersegi.style.display = "block";
    cardPersegiPanjang.style.display = "none";
    resetPersegi();
  } else {
    this.current_selected_radio = "rectangle";
    cardPersegi.style.display = "none";
    cardPersegiPanjang.style.display = "block";
    resetPersegiPanjang();
  }
}

function calculateSquare() {
  if (sisi.value) {
    luasPersegi.innerHTML =
      `<p>Luas : </p>` +
      `<p class="no-margin">L = S x S </p>` +
      `<p class="no-margin">L = ` +
      sisi.value +
      `x` +
      sisi.value +
      `</p>` +
      `<p class="no-margin">L = <b>` +
      sisi.value * sisi.value +
      `</b></p>`;
    kelilingPersegi.innerHTML =
      `<p>Keliling : </p>` +
      `<p class="no-margin">K = 4 x S </p>` +
      `<p class="no-margin">K = ` +
      4 +
      `x` +
      sisi.value +
      `</p>` +
      `<p class="no-margin">K = <b>` +
      4 * sisi.value +
      `</b></p>`;
  }
}

function calculateRect() {
  if (panjang.value && lebar.value) {
    luasPersegiPanjang.innerHTML =
      `<p>Luas : </p>` +
      `<p class="no-margin">L = p x l </p>` +
      `<p class="no-margin">L = ` +
      panjang.value +
      `x` +
      lebar.value +
      `</p>` +
      `<p class="no-margin">L = <b>` +
      panjang.value * lebar.value +
      `</b></p>`;
    kelilingPersegiPanjang.innerHTML =
      `<p>Keliling : </p>` +
      `<p class="no-margin">K = 2 (p + L) </p>` +
      `<p class="no-margin">K = ` +
      2 +
      `(` +
      panjang.value +
      `+` +
      lebar.value +
      `)` +
      `</p>` +
      `<p class="no-margin">K = <b>` +
      (2 * panjang.value + 2 * lebar.value) +
      `</b></p>`;
  }
}

function resetPersegi() {
  sisi.value = "";
  kelilingPersegi.innerHTML = "";
  luasPersegi.innerHTML = "";
}

function resetPersegiPanjang() {
  panjang.value = "";
  lebar.value = "";
  kelilingPersegiPanjang.innerHTML = "";
  luasPersegiPanjang.innerHTML = "";
}

function handleOnInput() {
  kelilingPersegi.innerHTML = "";
  luasPersegi.innerHTML = "";
  kelilingPersegiPanjang.innerHTML = "";
  luasPersegiPanjang.innerHTML = "";
}

window.onload = init;
