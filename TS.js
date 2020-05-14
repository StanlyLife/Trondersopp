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
  if (window.innerWidth < 990) {
    produktHeader.style.display = "none";
    produktHeaderMobil.style.display = "block";
  } else {
    produktHeader.style.display = "block";
    produktHeaderMobil.style.display = "none";
  }
}

window.addEventListener("resize", resizeWindow);

produktHeader.addEventListener("click", (e) => {
  produkt.scrollIntoView();
  console.log(produkt);
});
produktHeaderMobil.addEventListener("click", (e) => {
  produktMobil.scrollIntoView();
  console.log(produkt);
});
HeaderKontakt.addEventListener("click", (e) => {
  kontakt.scrollIntoView();
  console.log(kontakt);
});
HeaderFarm.addEventListener("click", (e) => {
  farm.scrollIntoView();
  console.log(farm);
});
