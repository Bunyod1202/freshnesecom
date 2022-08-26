window.onload = function(){
  slideOne();
  slideTwo();
}
let sliderOne = document.getElementById("slider-1");
let sliderTwo = document.getElementById("slider-2");
let displayValOne = document.getElementById("range1");
let displayValTwo = document.getElementById("range2");
let minGap = 0;
let sliderTrack = document.querySelector(".slider-track");
let sliderMaxValue = document.getElementById("slider-1").max;
function slideOne(){
  if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
      sliderOne.value = parseInt(sliderTwo.value) - minGap;
  }
  displayValOne.textContent = sliderOne.value;
  fillColor();
}
function slideTwo(){
  if(parseInt(sliderTwo.value) - parseInt(sliderOne.  value) <= minGap){
      sliderTwo.value = parseInt(sliderOne.value) + minGap;
  }
  displayValTwo.textContent = sliderTwo.value;
  fillColor();
}
function fillColor(){
  percent1 = (sliderOne.value / sliderMaxValue) * 100;
  percent2 = (sliderTwo.value / sliderMaxValue) * 100;
  sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #6A983C ${percent1}% , #6A983C ${percent2}%, #dadae5 ${percent2}%)`;
}
// ? //////////////////////////////////////////
var elItem = document.querySelectorAll(".list-item-icon");
var elLink = document.querySelectorAll(".list-link-icon ");
var elSlider = document.querySelectorAll(".sliders");

elLink.forEach(function (links) {
  links.addEventListener("click", function (evt) {
    evt.preventDefault();

    elItem.forEach(function (item) {
      item.classList.remove("list-item-icon--active")
    });
    links.parentElement.classList.add("list-item-icon--active");

    elSlider.forEach(function (item) {
      item.classList.remove("sliders-active")
    });
    document.querySelector(links.getAttribute('href')).classList.add("sliders-active")

  })
})

console.log(elSlider);