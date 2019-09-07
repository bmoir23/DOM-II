// Your code goes here
// objects
const headerImg = document.querySelector("header img");
const introH = document.querySelector("header h2");
const hiddenText = document.createElement("p");
    hiddenText.textContent = "This is hidden text! Look at you!";
    hiddenText.style.fontSize = "100px";
const sectionHeaders = document.querySelectorAll(".text-content h2");
const sectionContent = document.querySelectorAll(".text-content p");
const links = document.querySelectorAll(".nav-link");
const navBlocker = document.querySelector("nav");
const destinSection = document.querySelector(".content-destination");
const destinDiv = document.querySelector(".destination");


// Events

headerImg.addEventListener('dblclick', (event)=> {headerImg.style.display = "none"; introH.prepend(hiddenText);})
// shows the super secret text when double clicking the header Image

sectionHeaders[0].addEventListener('mouseover', (event) =>{sectionHeaders[0].style.color = "green";sectionHeaders[1].style.color = "green" });
sectionHeaders[1].addEventListener('mouseover', (event) => {sectionContent[2].style.color = "purple"; sectionContent[3].style.color = "purple"});
// changes headers green and second p purple

sectionHeaders[0].addEventListener('mouseout', (event) => {sectionContent[0].style.color = "purple"; sectionContent[1].style.color = "purple"});
sectionHeaders[1].addEventListener('mouseout', (event) => {sectionContent[2].style.color = "green"; sectionContent[3].style.color = "green"});


links[0].addEventListener('focus', (event) => {links[0].style.fontSize = "40px"});
links[1].addEventListener('focus', (event) => {links[1].style.fontSize = "40px"});
links[2].addEventListener('focus', (event) => {links[2].style.fontSize = "40px"});
links[3].addEventListener('focus', (event) => {links[3].style.fontSize = "40px"});
// enlarges nav tags links on click

links[0].addEventListener('blur', (event) => {links[0].style.fontSize = "1.6rem"});
links[1].addEventListener('blur', (event) => {links[1].style.fontSize = "1.6rem"});
links[2].addEventListener('blur', (event) => {links[2].style.fontSize = "1.6rem"});
links[3].addEventListener('blur', (event) => {links[3].style.fontSize = "1.6rem"});
//  reverts nav tags back to normal when clicking the next tag






