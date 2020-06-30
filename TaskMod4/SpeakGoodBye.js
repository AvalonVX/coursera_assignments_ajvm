/* Solution for Assignment 4,
   Alvaro Javier Vargas Miranda
   
*/

(function (window){
  var speakWord = "Good Bye";

  var byeSpeaker = new Object();

  byeSpeaker.speak =  function (name) {
    console.log(speakWord + " " + name);
  };
  window.byeSpeaker = byeSpeaker;
  
})(window);
