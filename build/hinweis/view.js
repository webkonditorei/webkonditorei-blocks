/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*****************************!*\
  !*** ./src/hinweis/view.js ***!
  \*****************************/
let hinweisContainers = document.querySelectorAll(".wbk-hinweis-holder");
let hinweisCloses = document.querySelectorAll(".wbk-close-icon");
hinweisContainers.forEach((hinweisContainer, index) => {
  hinweisCloses[index].addEventListener("click", () => {
    hinweisContainer.classList.add("close-hinweis");
  });
});
/******/ })()
;
//# sourceMappingURL=view.js.map