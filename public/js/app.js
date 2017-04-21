var height = 83;
var width = 101;

function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

// Enemies our player must avoid
var Enemy = function(x,y,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.x = x;
    this.y = y;
    this.sprite = 'images/enemy-bug.png';
    this.speed = speed;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed*dt

    if(this.x > 505){
        this.x = - 5;
    }
    console.log(this.x + ' enemy position' );
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x*width, this.y*height);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function(x,y){
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-cat-girl.png';
};

Player.prototype.update = function(dt){

    if(this.cntrl === 'up'){
        this.y -= 1;
    }
    else if(this.cntrl === 'down'){
        this.y += 1;
    }
    else if(this.cntrl === 'left'){
        this.x -= 1;
    }
    else if(this.cntrl === 'right'){
        this.x += 1;
    }

    this.cntrl = null;   
    console.log("i am a update function");
};

Player.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite), this.x*width, this.y*height);
    console.log("i am a function");
};

Player.prototype.handleInput = function(key){
    this.cntrl = key;
    console.log("handle Input: set cntrl to key");
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies=[];
var player = new Player(2,5);

var enemy = new Enemy(0,randomIntFromInterval(2,5),1);

allEnemies.push(enemy);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
