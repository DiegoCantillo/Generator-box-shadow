const square = document.querySelector(".square");
const size = document.getElementById("size");
const borderRadius = document.getElementById("border-radius");
const blur = document.getElementById("blur");
const dHorizontal = document.getElementById("d-horizontal");
const dVertical = document.getElementById("d-vertical");
const spreadRadius = document.getElementById("spreadRadius");
const shadowColor = document.getElementById("color");
const propWidth = document.querySelector(".prop-Text1");
const propHeight = document.querySelector(".prop-Text2");
const propBorderRadius = document.querySelector(".prop-Text3");
const propBoxShadow = document.querySelector(".prop-Text4");
const allShadow = document.querySelectorAll(".box-shadow");
const inputs = document.querySelectorAll('input');

inputs.forEach((input)=> {
    input.value = 0;
})

for(let i = 0; i < allShadow.length; i++){
    allShadow[i].addEventListener("input", rangeActive)
}

size.addEventListener("input", (e) => {
    const size = e.target.value;
    square.style.width = `${size}px`;
    square.style.height = `${size}px`
    propWidth.textContent = `width: ${size}px`;
    propHeight.textContent = `height: ${size}px`;
})

borderRadius.addEventListener("input", (e) => {
    const borderR = e.target.value;
    square.style.borderRadius = `${borderR}px`;
    propBorderRadius.textContent = `border-radius: ${borderR}px`
})


function rangeActive() {
    const pxEjeX = `${dHorizontal.value}px`
    const pxEjeY = `${dVertical.value}px`
    const pxBlur =  `${blur.value}px`;
    const pxSpreadRadius= `${spreadRadius.value}px`;
    const exadecimal = shadowColor.value;
    square.style.boxShadow = `${pxEjeX} ${pxEjeY} ${pxBlur} ${pxSpreadRadius} ${exadecimal}`;
    propBoxShadow.textContent = `box-shadow: ${pxEjeX} ${pxEjeY}  ${pxBlur}  ${pxSpreadRadius}  ${exadecimal}`
}




