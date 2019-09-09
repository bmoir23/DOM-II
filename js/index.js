// Your code goes here
// (dblclick/ prepend)
const introH = document.querySelector("header h2");
const headerImg = document.querySelector("header img");
const hiddenText = document.createElement("p");
    hiddenText.textContent = "This is hidden text! Look at you!";
    hiddenText.style.fontSize = "100px";
    
headerImg.addEventListener('dblclick', (event)=> {headerImg.style.display = "none"; introH.prepend(hiddenText);})

// changes header image super secret text when double clicking the header Image



// (mouseover/mouseout)
const sectionHeaders = document.querySelectorAll(".text-content h2");
const sectionContent = document.querySelectorAll(".text-content p");

sectionHeaders[0].addEventListener('mouseover', (event) =>{sectionHeaders[0].style.color = "green";sectionHeaders[1].style.color = "green" });
sectionHeaders[1].addEventListener('mouseover', (event) => {sectionContent[2].style.color = "purple"; sectionContent[3].style.color = "purple"});


sectionHeaders[0].addEventListener('mouseout', (event) => {sectionContent[0].style.color = "purple"; sectionContent[1].style.color = "purple"});
sectionHeaders[1].addEventListener('mouseout', (event) => {sectionContent[2].style.color = "green"; sectionContent[3].style.color = "green"});
// changes headers green and second p purple and inverts them when mouse over heading





//  changes nav(focus/blur)
const links = document.querySelectorAll(".nav-link");

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


// after doing a bunch of studying online I found a few different ways to change the DOM

// (keydown)
let keyPress = document.querySelector('body').addEventListener("keydown", keyFunction);


function keyFunction(){
    this.style.backgroundColor = "grey";
}
// changes background to grey when a key is pressed

// (mousedown/mouseup)
let mouseD = document.querySelector('body div header img')

mouseD.addEventListener("mousedown", downFunc);
mouseD.addEventListener("mouseup", upFunc);

function upFunc(){
    document.body.style.background = "yellow";
};

function downFunc(){
    document.body.style.background = "pink";
}

// changes the color from yellow to pink with mouse movement

// (resize)

window.addEventListener("resize" , sizeFunction)

function sizeFunction(){
    document.body.style.background = "blue"
}
// makes background of body blue when resized





