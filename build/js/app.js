(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
  $("#cpu").show(turn[i]);
  $("#cpu").fadeOut(800).delay(3000);
    console.log(turn);
  });
});

},{"./../js/simon.js":2}],2:[function(require,module,exports){




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

},{}]},{},[1]);
