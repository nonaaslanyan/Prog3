class GrassEater  extends LivingCreature {
    constructor(x, y, index) {
        super (x,y,index);
        this.energy = 8;
        
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
        return super. chooseCell(character);
    }

    mult() {
        var empty = random(this.chooseCell(0));
        if (empty && this.energy > 13) {
            var newX = empty[0];
            var newY = empty[1];
            matrix[newY][newX] = 2;

            var newGrassEaster = new GrassEater(newX, newY, 2);
            grasEaterArr.push(newGrassEaster);
            this.energy = 8;

        }
    }


    move() {
        var empty = random(this.chooseCell(0))
        this.energy--;
        if (empty) {
            matrix[this.y][this.x] = 0
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 2
            this.x = newX
            this.y = newY

        }
    }


    eat() {
        var empty = random(this.chooseCell(1))
        if (empty) {
            matrix[this.y][this.x] = 0
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 2
            this.x = newX
            this.y = newY
            for (var i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }

            this.energy += 2;
        }
    }


    die() {
        if (this.energy < 0) {
            matrix[this.y][this.x] = 0
            for (var i in grasEaterArr) {
                if (grasEaterArr[i].x == this.x && grasEaterArr[i].y == this.y) {
                    grasEaterArr.splice(i, 1)
                    break;
                }

            }
        }


    }

}