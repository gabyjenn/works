//durm
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
var audioA = new Audio('sounds/sweet.wav');
audioA.load();
document.getElementById('red').ontouchstart = function() {
    audioA.pause();
    audioA.currentTime = 0;
    audioA.play();
  }

console.clear();
var audioB = new Audio('sounds/angry.wav');
audioB.load();
document.getElementById('mint').ontouchstart = function() {
    audioB.pause();
    audioB.currentTime = 0;
    audioB.play();
  }

console.clear();
var audioC = new Audio('sounds/hungry.wav');
audioC.load();
document.getElementById('purple').ontouchstart = function() {
    audioC.pause();
    audioC.currentTime = 0;
    audioC.play();
  }
console.clear();
var audioD = new Audio('sounds/attention.wav');
audioD.load();
document.getElementById('yellow').ontouchstart = function() {
    audioD.pause();
    audioD.currentTime = 0;
    audioD.play();
  }

console.clear();
var audioE = new Audio('sounds/sweet.wav');
audioE.load();
document.getElementById('blue').ontouchstart = function() {
    audioE.pause();
    audioE.currentTime = 0;
    audioE.play();
  }

console.clear();
var audioF = new Audio('sounds/angry.wav');
audioF.load();
document.getElementById('orange').ontouchstart = function() {
    audioF.pause();
    audioF.currentTime = 0;
    audioF.play();
  }
console.clear();
var audioG = new Audio('sounds/hungry.wav');
audioG.load();
document.getElementById('green').ontouchstart = function() {
    audioG.pause();
    audioG.currentTime = 0;
    audioG.play();
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






// just to make sure it's working
console.log("js loaded");

// this function runs when a touchMove is detected.
function move_handler(ev) {
  ev.preventDefault();

  var y_position = ev.targetTouches[0].clientY;
  document.getElementById("yellow").style.height = y_position + "vh";
  
  audio.playbackspeed = y_position;

  var x_position = ev.targetTouches[0].clientX;
  document.getElementById("yellow").style.width = x_position + "vw";
}

// this runs when a touch end is detected. It resets the styles to the initial state.
function end_handler(ev) {
  ev.preventDefault();
  if (ev.targetTouches.length == 0) {
    document.body.style.background = "white";
    document.getElementById("yellow").style.width = "55vw";
    document.getElementById("yellow").style.height = "55vh";
  }
}

// this sets up all the event handlers
function set_handlers(name) {
  var el = document.getElementById(name);
  el.ontouchstart = start_handler;
  el.ontouchmove = move_handler;
  el.ontouchcancel = end_handler;
  el.ontouchend = end_handler;
}

// and this initializes them
function init() {
  set_handlers("target");
}





// Select the image element
const image = document.querySelector('.cat');

// Set a timer to show the image after 5 seconds of inactivity
let timer = setTimeout(() => {
  image.style.display = 'block';
}, 10000);

// Add an event listener to reset the timer and hide the image when the user interacts with the screen
document.addEventListener('touchstart', () => {
  clearTimeout(timer);
  image.style.display = 'none';
  
  // Start a new timer to show the image again after 5 seconds of inactivity
  timer = setTimeout(() => {
    image.style.display = 'block';
  }, 10000);
});

