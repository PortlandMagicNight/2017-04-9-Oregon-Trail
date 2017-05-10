window.prompt("Welcome to Oregon Trail!\nWhat do you want to do?")

var Game = {
  setup: function() {
    var eventLoop = [];

    for(var i = 0; i <= 27; i++) {
      var event = 'event ' + i;
      eventLoop.push(event);

      for(var j = 0; j < 3; j++) {
        var td = 'td ' + j;
        eventLoop.push(td);
      }
    }

    return eventLoop;
  },
  run: function(eventLoop, party) {
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
