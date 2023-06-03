class Predator extends LivingCreature  {
    constructor(x, y,index) {
        super(x,y,index)
        this.energy = 3;
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
    chooseCell(char1, char2) {
        this.getNewCoordinates()
        var found = []
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == char1 || matrix[y][x] == char2) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    mult() {
        var empty = random(this.chooseCell(0));
        if (empty && this.energy > 5) {
            var newX = empty[0];
            var newY = empty[1];
            matrix[newY][newX] = 3;
            var p = new Predator(newX, newY, 3);
            predatorArr.push(p);
            this.energy = 3;

        }
    }


    move() {
        var empty = random(this.chooseCell(0))
        this.energy--;
        if (empty) {
            matrix[this.y][this.x] = 0
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 3
            this.x = newX
            this.y = newY

        }
    }


    eat() {
        var empty = random(this.chooseCell(2, 4, 5))
        if (empty) {
            matrix[this.y][this.x] = 0
            var newX = empty[0]
            var newY = empty[1]
            if (matrix[newY][newX] == 2) {
                for (var i in grasEaterArr) {
                    if (newX == grasEaterArr[i].x && newY == grasEaterArr[i].y) {
                        grasEaterArr.splice(i, 1);
                        break;
                    }
                }
            } else if (matrix[newY][newX] == 4) {
                for (var i in energyArr) {
                    if (newX == energyArr[i].x && newY == energyArr[i].y) {
                        energyArr.splice(i, 1);
                        break;
                    }
                }

                this.energy += 3;
            }
            else if (matrix[newY][newX] == 5) {
                for (var i in rumbArr) {
                    if (newX == rumbArr[i].x && newY == rumbArr[i].y) {
                        rumbArr.splice(i, 1);
                        break;
                    }
                }

                this.energy = -6;
            }

            matrix[newY][newX] = 3
            this.x = newX
            this.y = newY
            this.energy += 3;
        }
    }


    die() {
        if (this.energy < 0) {
            matrix[this.y][this.x] = 0
            for (var i in predatorArr) {
                if (predatorArr[i].x == this.x && predatorArr[i].y == this.y) {
                    predatorArr.splice(i, 1)
                    break;
                }

            }
        }


    }

}