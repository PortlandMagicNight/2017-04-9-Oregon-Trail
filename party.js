class Party {
    constructor() {
        this.health = 100;

        var s = "Choose your class:"
        for (var i = 0; i < Occupations.length; i++) {
            s += `\n${i+1} = ${Occupations[i].name} (starts with $${Occupations[i].money})`
        }
        while (!this.occupation) {
            try {
                this.occupation = Occupations[parseInt(window.prompt(s), 10) - 1]
            } catch (e) {
                console.log(e)
            }
        }

        this.money = this.occupation.money

        // TODO refactor these 3 copypastas into a method
        while (!this.wheels) {
            try {
                const cost = 100
                var result = window.prompt(`How many spare wheels would you like?\nThey are $${cost} each.\nYou have $${this.money} dollars left.`)
                result = parseInt(result, 10)
                if (result === 0) {
                    this.wheels = 0;
                    break;
                }
                if (result * cost <= this.money) {
                    this.wheels = result;
                    this.money -= result * cost;
                }
            } catch (e) {
                console.error(e)
            }
        }
        while (!this.food) {
            try {
                const cost = 10
                var result = window.prompt(`How many foods would you like?\nThey cost $${cost} each.\nYou have $${this.money} dollars left.`)
                result = parseInt(result, 10)
                if (result === 0) {
                    this.food = 0;
                    break;
                }
                if (result * cost <= this.money) {
                    this.food = result;
                    this.money -= result * cost;
                }
            } catch (e) {
                console.error(e)
            }
        }
        while (!this.oxen) {
            try {
                const cost = 50
                var result = window.prompt(`How many oxen would you like?\nThey cost $${cost} each.\nYou have $${this.money} dollars left.`)
                result = parseInt(result, 10)
                if (result === 0) {
                    this.oxen = 0;
                    break;
                }
                if (result * cost <= this.money) {
                    this.oxen = result;
                    this.money -= result * cost;
                }
            } catch (e) {
                console.error(e)
            }
        }
    }
}
