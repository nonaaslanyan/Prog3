
class Energy {
    constructor(x, y,) {
        this.x = x;
        this.y = y;
        this.directions = []
    }

    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ]
    }
    chooseCell(character) {
        this.getNewCoordinates()
        var found = []
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }


    move() {
        var empty = random(this.chooseCell(0))
        if (empty) {
            matrix[this.y][this.x] = 0
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 4
            this.x = newX
            this.y = newY
        }
    }
    mult() {
        if (energyArr.length < 10) {
            var empty = random(this.chooseCell(0));
            if (empty) {
                var newX = empty[0];
                var newY = empty[1];
                matrix[newY][newX] = 4;
                var p = new Energy(newX, newY, 4);
                energyArr.push(p);
            }
        }
    }

}