// Player Class
// has player properties such as location on x and y axis
// block size, start position, updated position,
// and a method to render or "draw" the player on the game board
class Player {
  constructor() {
    this.sprite = "images/trump.png";
    this.horizontal = 103;
    this.vertical = 83;
    this.start_X = this.horizontal * 2 + 30;
    this.start_Y = this.vertical * 5 + 55;
    this.x = this.start_X;
    this.y = this.start_Y;
    this.render = function() {
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
      return this.render;
    };
  }
}

// switch statement to handle user directional input
// also checks to see if player is in bounds
Player.prototype.handleInput = function(input) {
  switch (input) {
    case "left":
      if (this.x - this.horizontal >= 5) {
        this.x -= this.horizontal;
      }
      break;

    case "up":
      if (this.y > this.vertical) {
        this.y -= this.vertical;
      }
      break;

    case "right":
      if (this.x < this.horizontal * 4) {
        this.x += this.horizontal;
      }
      break;

    case "down":
      if (this.y < this.vertical * 5) {
        this.y += this.vertical;
      }
      break;
  }
};

// checks for collision and game win
Player.prototype.update = function() {
  // loops allEnimies array and checks for collision
  // player and enemy share same block
  for (let enemy of allEnemies) {
    if (
      this.y === enemy.y &&
      (enemy.x + enemy.horizontal / 2 > this.x &&
        enemy.x < this.x + this.horizontal / 2)
    ) {
      // action and reset after collision
      alert("Ouch!");
      location.reload();
    }
  }

  // action and reset after win
  if (this.y === 55) {
    alert("win!");
    location.reload();
  }
};

// create a new player
const player = new Player();

// provided function for user input and player movements
// has an event listener
document.addEventListener("keyup", function(e) {
  var allowedKeys = {
    37: "left",
    38: "up",
    39: "right",
    40: "down"
  };
  player.handleInput(allowedKeys[e.keyCode]);
});
