const submarine = {
    horizontalPosition: 0,
    depth: 0,
    aim: 0,
    Multiply: function () {
        return this.horizontalPosition * this.depth;
    },
    Reset: function () {
        this.horizontalPosition = 0
        this.depth = 0
        this.aim = 0
    }
};

const regex = /(forward|down|up)\s([0-9]+)/

fs = require('fs')
fs.readFile('day2_input.txt', 'utf8', function (err, data) {
    if (err) {
        return console.log(err);
    }
    var data = data.split("\n");
    /**
     * part 1
     */
    data.map((instruction) => {
        let match = instruction.match(regex);
        if (match != null) {
            switch (match[1]) {
                case 'forward':
                    submarine.horizontalPosition += parseInt(match[2])
                    break;
                case 'down':
                    submarine.depth += parseInt(match[2])
                    break;
                case 'up':
                    submarine.depth -= parseInt(match[2])
                    break;
            }
        }
    });
    console.log(submarine)
    console.log(submarine.Multiply())

    // reset
    submarine.Reset()
    /**
     * part 2
     */
    data.map((instruction) => {
        let match = instruction.match(regex);
        if (match != null) {
            switch (match[1]) {
                case 'forward':
                    submarine.horizontalPosition += parseInt(match[2])
                    submarine.depth += submarine.aim * parseInt(match[2])
                    break;
                case 'down':
                    submarine.aim += parseInt(match[2])
                    break;
                case 'up':
                    submarine.aim -= parseInt(match[2])
                    break;
            }
        }
    });
    console.log(submarine)
    console.log(submarine.Multiply())
});