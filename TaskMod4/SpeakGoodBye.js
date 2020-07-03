/* Solution for Assignment 4,
   Alvaro Javier Vargas Miranda
   
*/

(function (global){
  var speakWord = "Good Bye";

  var byeSpeaker = new Object();

  byeSpeaker.speak =  function (name) {
    console.log(speakWord + " " + name);
  };
  global.byeSpeaker = byeSpeaker;
  
})(window);
