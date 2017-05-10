var party;
var game;

var Game = function(party) {
  this.eventLoop = function() {
    var eventLoop = [];

    for(var i = 0; i <= 27; i++) {
      eventLoop.push(new Event());
    }

    return eventLoop;
  },
  this.run = function() {
    var eventLoop = this.eventLoop();
    for(var i = 0; i < eventLoop.length; i++) {
      eventLoop[i].call(party);
      if(party.health <= 0) {
        alert('Game Over!');
        return false;
      }
    }

    alert('You made it! Welcome to Oregon City');
  }
}

party = new Party();
game = new Game(party);
game.run();
