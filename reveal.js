const init = function () {
  let items = document.querySelectorAll(".info-block");
  for (let i = 0; i < items.length; i++) {
    items[i].style.background = randomColor({
      luminosity: "light",
      hue: "green",
    });
  }
  cssScrollSnapPolyfill();
};
init();
