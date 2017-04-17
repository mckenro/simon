var Simon = require('./../js/simon.js').simonModule;


$(document).ready(function(){
  $('#start').click(function(event){
    event.preventDefault();
    var larry = new Simon("blue");
    var turn = larry.cpuTurn();
    for(i=0; i<turn.length; i++){
      $("#cpu").append(turn[i]);
  }
  // $("#cpu").show('fast','linear');
  $("#cpu").show();
  $("#cpu").fadeOut(800).delay(3000);
    console.log(turn);
  });
});
