let produktHeader = document.querySelector("#HeaderProdukt");
let produktHeaderMobil = document.querySelector("#HeaderProduktMobil");
let HeaderKontakt = document.querySelector("#HeaderKontakt");
let HeaderFarm = document.querySelector("#HeaderFarm");

(function OnLoad() {
  console.log(produkt);
  if (window.innerWidth < 901) {
    produktHeader.style.display = "none";
  } else {
    produktHeaderMobil.style.display = "none";
  }
})();

produktHeader.addEventListener((x) => {
  console.log(x);
});
