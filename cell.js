function Cell(i, j, w) {
    this.i = i;
    this.j = j;
    this.x = i * w;
    this.y = j * w;
    this.w = w;
    this.neighborCount = 0;
    this.mine = false;
    this.revealed = false;
    this.flag = false;
}

Cell.prototype.show = function() {
    stroke(0);
    noFill();
    rect(this.x, this.y, this.w, this.w);

    if (this.revealed) {
        if (this.mine) {
            textAlign(CENTER);
            fill(200);
            text('💣', this.x + this.w * 0.6, this.y + this.w - 6);
        } else {
            fill(200); 
            rect(this.x, this.y, this.w, this.w);
            if (this.neighborCount > 0) {
                textAlign(CENTER);
                fill(0);
                text(this.neighborCount, this.x + this.w * 0.5, this.y + this.w - 6);
            }
        }
    }

    if (this.flag) {
        textAlign(CENTER);
        fill(200);
        text('🚩', this.x + this.w * 0.6, this.y + this.w - 6);
    }
}

Cell.prototype.countMines = function() {
    if (this.mine) {
        this.neighborCount = -1;
    }

    var total = 0;

    for(var xoff = -1; xoff <= 1; xoff++) {
        for(var yoff = -1; yoff <= 1; yoff++) {
            var i = this.i + xoff;
            var j = this.j + yoff;
            if (i > -1 && i < cols && j > -1 && j < rows) {
                var neighbor = grid[i][j];

                if (neighbor.mine) {
                    total++;
                }   
            }
        }    
    }

    this.neighborCount = total;
}

Cell.prototype.contains = function(x, y) {
    return (x > this.x && x < this.x + this.w && y > this.y && y < this.y + this.w);
}

Cell.prototype.reveal = function() {
    this.revealed = true

    if(this.flag) {
        this.flag = false
    }

    if (this.neighborCount == 0) {
        this.floodFill()
    }
}

Cell.prototype.floodFill = function() {
    for (var xoff = -1; xoff <= 1; xoff++) {
        var i = this.i + xoff;
        if (i < 0 || i >= cols) continue;
    
        for (var yoff = -1; yoff <= 1; yoff++) {
            var j = this.j + yoff;
            if (j < 0 || j >= rows) continue;
    
            var neighbor = grid[i][j];
            
            if (!neighbor.revealed) {
                neighbor.reveal();
            }
        }
    }
}