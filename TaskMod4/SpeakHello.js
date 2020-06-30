/*Solution for assignment module 4
  Alvaro Javier Vargas Miranda
*/
(function (window){
  
  var speakWord = "Hello";

  var helloSpeaker = new Object();

  helloSpeaker.speak = function (name){
    console.log(speakWord + " " + name);
  };

  window.helloSpeaker = helloSpeaker;
  
})(window);






