//Detecting BUTTON press
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumButtons; i++) {
document.querySelectorAll(".drum")[i].addEventListener("click", function() {

   var buttonInnerHTML = this.innerHTML;
   makeSound(buttonInnerHTML);
   buttonAnimation(buttonInnerHTML);
});
}

//Detecting KEYBOARD press
document.addEventListener("keydown", function(event) {
   makeSound(event.key);                                    // key property of the event
   buttonAnimation(event.key);
   });


   function makeSound(key) {

   switch (key) {

      case 'w':
         var crash = new Audio('sounds/crash.mp3');         // Here we`re using the Audio() constructor
         crash.play();
         break;

      case 'a':                                             // Cases - diffferent scenarios
         var kickBass = new Audio('sounds/kick-bass.mp3');  // How it should behave under the current scenario
         kickBass.play();
         break;                                             // Stop executing the code for the given scenario

      case 's':
         var snare = new Audio('sounds/snare.mp3');
         snare.play();
         break;

      case 'd':
         var tom1 = new Audio('sounds/tom-1.mp3');
         tom1.play();
         break;

      case 'j':
         var tom2 = new Audio('sounds/tom-2.mp3');
         tom2.play();
         break;

      case 'k':
         var tom3 = new Audio('sounds/tom-3.mp3');
         tom3.play();
         break;

      case 'l':
         var tom4 = new Audio('sounds/tom-4.mp3');
         tom4.play();
         break;

      default:                                        // How it needs to behave if a scenario different from the above ones might happen. This is actually optional, but better to include it as well
         console.log(buttonInnerHTML);
   }
}

function buttonAnimation(currentKey) {
   var activeButton = document.querySelector("." + currentKey);
   activeButton.classList.add("pressed");
   setTimeout(function () {
      activeButton.classList.remove("pressed");
   },200);
}