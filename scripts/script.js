// JavaScript Document
console.log("hi");

const hamburgerButton = document.querySelector("header button");
const hamburgerClose = document.querySelector("header nav button");

hamburgerButton.onclick = togggleMenu;
hamburgerClose.onclick = togggleMenu;

function togggleMenu() {

  const deNav = document.querySelector("header nav");

  deNav.classList.toggle("toonMenu");

}

console.log(hamburgerClose);

function getMouse(e){
  return [
    Math.round(e.clientX / window.innerWidth * 100),
    Math.round(e.clientY / window.innerHeight * 90),
  ]
}

document.onmousemove = function(e){
  const mouse = getMouse(e);
  const modelViewer = document.querySelector("model-viewer");
  modelViewer.cameraOrbit = `${mouse[0]}deg ` + `${mouse[1] + 5}deg ` + `"110%"`
}

// ##################################################################################################//
// Bron: (How to Make Model Follow Mouse Movement? · Google/Model-viewer · Discussion #2743, n.d.)  //
// https://github.com/google/model-viewer/discussions/2743                                         //
// ###############################################################################################//