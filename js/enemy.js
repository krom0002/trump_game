// Enemy Class
// has player properties such as location on x and y axis
// block size, start position, updated position,
// creates a random speed for each enemy

var Enemy = function(x, y) {
  this.x = x;
  this.y = y + 55;
  this.sprite = "images/enemy-bug.png";
  this.horizontal = 101;
  this.boundary = this.horizontal * 5;
  this.resetPos = -this.horizontal;
  this.speed = (Math.floor(Math.random() * 5) + 2) * 50;
};

// create three new enemies
const enemy_1 = new Enemy(-101 * 1.5, 83);
const enemy_2 = new Enemy(-101, 166);
const enemy_3 = new Enemy(-101 * 3.5, 249);
const enemy_4 = new Enemy(-101 * 3.5, 249);
const enemy_5 = new Enemy(-101 * 3.5, 249);

// create an enemy array
let allEnemies = [];

// adds enemies to the array
allEnemies.push(enemy_1, enemy_2, enemy_3, enemy_4, enemy_5);

// Draw the enemy
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Update the enemy's position
Enemy.prototype.update = function(dt) {
  if (this.x < this.boundary) {
    this.x += this.speed * dt;
  } else {
    this.x = this.resetPos;
  }
};
