function Ship(){
    this.pos = createVector(width/2, height/2);
    this.r = 20;
    this.a = 0;
    this.rotation = 0;
    this.vel = createVector(0, 0);
    this.isBoosting = false;
    

    this.boosting = function(b){
        this.isBoosting = b;
    }
    this.update = function(){
        if(this.isBoosting){
            this.boost();
        }
        this.pos.add(this.vel);
        this.vel.mult(0.95);
    }
    this.boost = function(){
        var force = p5.Vector.fromAngle(this.a);
        this.vel.mult(0.8);
        this.vel.add(force);
    }

    this.render = function(){
        push();
        translate(this.pos.x, this.pos.y);
        rotate(this.a + PI/2);
        fill(0);
        stroke(255);
        triangle(-this.r, this.r, this.r, this.r, 0, -this.r);
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
    this.setRotation = function(angle){
        this.rotation = angle;
    }
    this.turn = function() {
        this.a += this.rotation;
    }
}