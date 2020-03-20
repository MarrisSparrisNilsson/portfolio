window.onscroll = function() {scrollFunction()};

const nav = document.querySelector('.nav')
const overviewBtn = document.querySelector('#overview')
const aboutBtn = document.querySelector('#about')
const projectsBtn = document.querySelector('#projects')
const contactBtn = document.querySelector('#contact')

const scrollFunction = () => {
  if (document.documentElement.scrollTop > 1) {
    nav.style.height = "60px";
    nav.style.transition = "height 0.4s";
    overviewBtn.style.padding = "5px";
    aboutBtn.style.padding = "5px";
    projectsBtn.style.padding = "5px";
    contactBtn.style.padding = "5px";
    // document.querySelector("logo").style.fontSize = "25px";
  } else {
    nav.style.height = "100px";
    nav.style.transition = "height 0.4s";
    overviewBtn.style.padding = "10px";
    aboutBtn.style.padding = "10px";
    projectsBtn.style.padding = "10px";
    contactBtn.style.padding = "10px";
    // document.querySelector("logo").style.fontSize = "35px";
  }
}

const projectItem = document.querySelector('.project-item');
const projectImg = document.querySelector('.project-img');
const projectText = document.querySelector('.project-text');

projectItem.addEventListener('mouseover', e => {
  // console.log('entered!');
  projectText.style.marginTop = "-150px";
  projectImg.style.filter = "blur(3px)"
  
  // console.log('hover');
})

projectItem.addEventListener('mouseout', e => {

  // console.log('left!');
  projectText.style.marginTop = "0px";
  projectImg.style.filter = "blur(0px)"
})

const menuBubble = document.querySelector('.menuBubble')
// const bubbleLinkContainers = document.querySelectorAll('.bubbleLink-Container')
// const rotationBoxes = document.querySelectorAll('.rotationBox')
// const bubbleLinks = document.querySelectorAll('.bubbleLink')

const bubbleLinkContainer1 = document.querySelector('.one')
const bubbleLinkContainer2 = document.querySelector('.two')
const bubbleLinkContainer3 = document.querySelector('.three')
const bubbleLinkContainer4 = document.querySelector('.four')

const rotationBox1= document.querySelector('.rotate1')
const rotationBox2= document.querySelector('.rotate2')
const rotationBox3= document.querySelector('.rotate3')
const rotationBox4= document.querySelector('.rotate4')

// const bubbleLink = document.querySelector('.bubbleLink')
const bubbleLink1 = document.querySelector('.overview')
const bubbleLink2 = document.querySelector('.about')
const bubbleLink3 = document.querySelector('.projects')
const bubbleLink4 = document.querySelector('.contact')

const overView = document.querySelector('.overview')
const about = document.querySelector('.about')
const projects = document.querySelector('.projects')
const contact = document.querySelector('.contact')

const bubbleMenuBars = document.querySelector('#bubbleMenuBars')
const closeBubble = document.querySelector('#closeBubble')


// menuBubble.addEventListener('mouseover', e => {
//   bubbleLink.style.transform = "rotate(90deg)";
// })

// menuBubble.addEventListener('mouseout', e => {
//   bubbleLink.style.transform = "rotate(0deg)";
// })

let isClicked = false
menuBubble.addEventListener('click', e => {
  if (isClicked) {
    // Array.from(bubbleLinkContainers).forEach(bubbleLinkContainer => {
    //   bubbleLinkContainer.style.transform = "translateX(0px)";
    // })

    // Array.from(rotationBoxes).forEach(rotationBox => {
    //   rotationBox.style.transform = "rotate(0deg)";      
    // })

    // Array.from(bubbleLinks).forEach(bubbleLink => {
    //   bubbleLink.style.transform = "scale(0)";
    // })

    bubbleLinkContainer1.style.transform = "translateX(0px)";
    rotationBox1.style.transform = "rotate(0deg)";
    bubbleLink1.style.transform = "scale(0)";

    bubbleLinkContainer2.style.transform = "translateX(0px)";
    rotationBox2.style.transform = "rotate(0deg)";
    bubbleLink2.style.transform = "scale(0)";

    bubbleLinkContainer3.style.transform = "translateX(0px)";
    rotationBox3.style.transform = "rotate(0deg)";
    bubbleLink3.style.transform = "scale(0)";

    bubbleLinkContainer4.style.transform = "translateX(0px)";
    rotationBox4.style.transform = "rotate(0deg)";
    bubbleLink4.style.transform = "scale(0)";
    
    menuBubble.style.transform = "rotate(0deg)"

    bubbleMenuBars.style.transform = "scale(1)"
    // bubbleMenuBars.style.display = "block"

    closeBubble.style.transform = "scale(0)"
    // closeBubble.style.display = "none"

    isClicked = false    
  } 
  else {

    // Array.from(bubbleLinkContainers).forEach(bubbleLinkContainer => {
    //   bubbleLinkContainer.style.transform = "translateX(80px)";
    // })

    // Array.from(rotationBoxes).forEach(rotationBox => {
    //   rotationBox.style.transform = "rotate(90deg)";
    // })

    // Array.from(bubbleLinks).forEach(bubbleLink => {
    //   bubbleLink.style.transform = "scale(1)";
    // })

    bubbleLinkContainer1.style.transform = "translateX(120px)";
    rotationBox1.style.transform = "rotate(90deg)";
    bubbleLink1.style.transform = "scale(1)";

    bubbleLinkContainer2.style.transform = "translate(80px, 100px)";
    rotationBox2.style.transform = "rotate(90deg)";
    bubbleLink2.style.transform = "scale(1)";

    bubbleLinkContainer3.style.transform = "translate(30px, 160px)";
    rotationBox3.style.transform = "rotate(90deg)";
    bubbleLink3.style.transform = "scale(1)";

    bubbleLinkContainer4.style.transform = "translate(-30px, 190px)";
    rotationBox4.style.transform = "rotate(90deg)";
    bubbleLink4.style.transform = "scale(1)";

    // bubbleLinkContainer.style.transform = "translateX(80px)";
    // rotationBox.style.transform = "rotate(90deg)";
    // bubbleLink.style.transform = "scale(1)";


    bubbleMenuBars.style.transform = "scale(0)"
    // bubbleMenuBars.style.display = "none"

    closeBubble.style.transform = "scale(1)"
    // closeBubble.style.display = "block"

    menuBubble.style.transform = "rotate(-90deg)"

    isClicked = true    
  }
})