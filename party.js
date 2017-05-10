class Party {
    constructor() {
        var s = "Choose your class:"
        for (var i = 0; i < Occupations.length; i++) {
            s += `\n${i+1} = ${Occupations[i].name} (starts with ${Occupations[i].money})`
        }
        while (!this.occupation) {
            this.occupation = Occupations[window.prompt(s)];
        }
    }
}
