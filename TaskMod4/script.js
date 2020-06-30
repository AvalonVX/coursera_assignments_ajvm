/*Solution for assignment module 4
  Alvaro Javier Vargas Miranda
*/
(function () {
  //Ignore this
  console.log("Solution assignment 4\nAJVM\n\n\n\n\n");

  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for (var i in names) {

    //I reduce the comparison of the first character converting it to lowercase.
    if (names[i].charAt(0).toLowerCase() === 'j') {
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }
})();
