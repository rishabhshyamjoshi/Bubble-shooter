function Asteroid(){
    this.pos = createVector(random(width),random(height));
    this.vel = p5.Vector.random2D();
    this.r = random(10,30);

    this.update = function(){
        this.pos.add(this.vel);
    }

    this.render = function(){
        push();
        noFill();
        stroke(255);
        translate(this.pos.x, this.pos.y);
        ellipse(0, 0, this.r * 2);
        pop();
    }
    this.edges = function(){
        if(this.pos.x > width + this.r){
            this.pos.x = -this.r;
        }
        else if(this.pos.x < -this.r){
            this.pos.x = width + this.r;
        }
        if(this.pos.y > height + this.r){
            this.pos.y = -this.r;
        }
        else if(this.pos.y < -this.r){
            this.pos.y = height + this.r;
        }
    }
}