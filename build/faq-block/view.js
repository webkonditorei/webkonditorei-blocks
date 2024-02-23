/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*******************************!*\
  !*** ./src/faq-block/view.js ***!
  \*******************************/
let faqItems = document.querySelectorAll(".wbk-faq-title-holder");
let faqContents = document.querySelectorAll(".wbk-faq-holder .wbk-faq-content-holder");
let faqMainContainers = document.querySelectorAll(".wbk-faq-holder");
faqItems.forEach((faqItem, index) => {
  faqItem.addEventListener("click", () => {
    if (faqMainContainers[index].classList.contains("active-faq")) {
      faqMainContainers[index].classList.remove("active-faq");
      faqContents[index].style.maxHeight = "0px";
    } else {
      faqMainContainers[index].classList.add("active-faq");
      faqContents[index].style.maxHeight = "10000px";
      let contentHeight = faqContents[index].scrollHeight;
      faqContents[index].style.maxHeight = contentHeight + "px";
    }
  });
});
/******/ })()
;
//# sourceMappingURL=view.js.map