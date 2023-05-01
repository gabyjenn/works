var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("touchstart", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});

//
function makeSound(key) {

  switch (key) {
    case "w":
      var clap = new Audio("sounds/angry.wav");
      clap.play();
      break;

    case "a":
      var hihat = new Audio("sounds/hungry.wav");
      hihat.play();
      break;

    case "s":
      var boom = new Audio('sounds/attention.wav');
      boom.play();
      break;

    case "d":
      var snare = new Audio('sounds/sweet.wav');
      snare.play();
      break;

    case "f":
      var openhat = new Audio('sounds/openhat.wav');
      openhat.play();
      break;

    case "g":
      var ride = new Audio('sounds/ride.wav');
      ride.play();
      break;

    case "j":
      var kick = new Audio('sounds/kick.wav');
      kick.play();
      break;

    case "k":
      var tink = new Audio('sounds/tink.wav');
      tink.play();
      break;

    case "l":
      var tom = new Audio('sounds/tom.wav');
      tom.play();
      break;

    default: console.log(key);

  }
}
//

function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}

//new audio script//
console.clear();
var audioA = new Audio('sounds/angry.wav');
audioA.load();
document.getElementById('a').ontouchstart = function() {
    audioA.pause();
    audioA.currentTime = 0;
    audioA.play();
  }

console.clear();
var audioB = new Audio('sounds/hungry.wav');
audioB.load();
document.getElementById('b').ontouchstart = function() {
    audioB.pause();
    audioB.currentTime = 0;
    audioB.play();
  }

console.clear();
var audioC = new Audio('sounds/attention.wav');
audioC.load();
document.getElementById('c').ontouchstart = function() {
    audioC.pause();
    audioC.currentTime = 0;
    audioC.play();
  }
console.clear();
var audioD = new Audio('sounds/sweet.wav');
audioD.load();
document.getElementById('d').ontouchstart = function() {
    audioD.pause();
    audioD.currentTime = 0;
    audioD.play();
  }

console.clear();
var audioE = new Audio('sounds/hungry.wav');
audioE.load();
document.getElementById('e').ontouchstart = function() {
    audioE.pause();
    audioE.currentTime = 0;
    audioE.play();
  }

console.clear();
var audioF = new Audio('sounds/attention.wav');
audioF.load();
document.getElementById('f').ontouchstart = function() {
    audioF.pause();
    audioF.currentTime = 0;
    audioF.play();
  }
console.clear();
var audioG = new Audio('sounds/sweet.wav');
audioG.load();
document.getElementById('g').ontouchstart = function() {
    audioG.pause();
    audioG.currentTime = 0;
    audioG.play();
  }

console.clear();
var audioH = new Audio('sounds/hungry.wav');
audioH.load();
document.getElementById('h').ontouchstart = function() {
    audioH.pause();
    audioH.currentTime = 0;
    audioH.play();
  }

console.clear();
var audioI = new Audio('sounds/attention.wav');
audioI.load();
document.getElementById('i').ontouchstart = function() {
    audioI.pause();
    audioI.currentTime = 0;
    audioI.play();
  }

function fetchCatImage() {
  let image = document.getElementById("cat-image")
  fetch('https://api.thecatapi.com/v1/images/search?api_key=live_D2SYXrLvFwhsxaT4IhTTkhjLJPsUEtsPNtLypBg4Wdj1v6T7VgawRj7AwF2JFLgs', {
    headers: {
      'x-api-key' : 'live_D2SYXrLvFwhsxaT4IhTTkhjLJPsUEtsPNtLypBg4Wdj1v6T7VgawRj7AwF2JFLgs'
    }
  })
  .then(resp => resp.json())
  .then(json => image.src = json[0].url)
}

function btnClick(){
  let button = document.getElementById("new-cat-btn")
  button.addEventListener("click", fetchCatImage)
}

document.addEventListener("DOMContentLoaded", () => {
  fetchCatImage()
  btnClick()
})