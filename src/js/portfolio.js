window.onscroll = function() {scrollFunction()};

const scrollFunction = () => {
  if (document.documentElement.scrollTop > 1) {
    document.querySelector('.nav').style.padding = "10px";
    // document.querySelector("logo").style.fontSize = "25px";
  } else {
    document.querySelector('.nav').style.padding = "40px";
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
