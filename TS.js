let produktHeader = document.querySelector("#HeaderProdukt");
let produktHeaderMobil = document.querySelector("#HeaderProduktMobil");
let HeaderKontakt = document.querySelector("#HeaderKontakt");
let HeaderFarm = document.querySelector("#HeaderFarm");

let produkt = document.querySelector("#produkt");
let produktMobil = document.querySelector("#produkt-mobil");
let farm = document.querySelector("#farm");
let kontakt = document.querySelector("#kontakt");

(function OnLoad() {
  resizeWindow();
})();

function resizeWindow() {
  if (window.innerWidth < 901) {
    produktHeader.style.display = "none";
    produktHeaderMobil.style.display = "flex";
  } else {
    produktHeader.style.display = "flex";
    produktHeaderMobil.style.display = "none";
  }
}

window.addEventListener("resize", resizeWindow);

produktHeader.addEventListener("click", (e) => {
  produkt.scrollIntoView();
});
produktHeaderMobil.addEventListener("click", (e) => {
  produktMobil.scrollIntoView();
});
HeaderKontakt.addEventListener("click", (e) => {
  kontakt.scrollIntoView();
});
HeaderFarm.addEventListener("click", (e) => {
  farm.scrollIntoView();
});
