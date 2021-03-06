// var Party = function(occupation, wheels, food, oxen, health) {
//   this.occupation = occupation;
//   this.wheels = wheels;
//   this.food = food;
//   this.oxen = oxen;
//   this.health = health;
// }

var Actions = {wagonWheelBroke:
  { name: "wagonWheelBroke",
    inventoryAfected : "wagon",
    outcome: "wagonDisabled",
    remedy: "useWheel",
    probabilities: {
      banker: 10,
      carpenter: 90,
      teacher: 40,
      farmer: 80
      }
    },
  }

var Event = function(actions) {
  this.actions = actions;
}

Event.prototype.call = function(party) {
  switch(party.occupation.name) {
    case "banker":
      party.health--;
      break;
    case "carpenter":
      party.health = party.health -= 2;
      break;
    case "teacher":
      party.health -= 4;
      break;
    case "farmer":
      party.health -= 5
      break;
   }
  return party;
}
