/*Solution for assignment module 4
  Alvaro Javier Vargas Miranda
*/
(function (global){
  
  var speakWord = "Hello";

  var helloSpeaker = new Object();

  helloSpeaker.speak = function (name){
    console.log(speakWord + " " + name);
  };

  global.helloSpeaker = helloSpeaker;
  
})(window);






