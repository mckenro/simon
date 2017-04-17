



function Simon(color) {
  this.color = [];
}

Simon.prototype.turn = function(){

};


cpuArray = [];
Simon.prototype.cpuTurn = function(){
    number = Math.floor(Math.random() * 4);
    colorsArray = ['red','blue','yellow','green'];
    output = [];
    cpuArray.push(colorsArray[number]);
  for(i=0; i<cpuArray.length; i++){
    output.push("<p id='cheese" + [i] + "'> " + colorsArray[i] + "</p>");
  }
  return output;
};
exports.simonModule = Simon;
