var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload,
                                                        create: create,
                                                        update: update,
                                                        render: render });

var debug = false;

var ball;
var pads, leftPad, rightPad;
var keys;


function preload () {

  game.load.image('ball', 'assets/ball.png');
  game.load.image('pad',  'assets/pad.png');

}

function create () {

  game.physics.startSystem(Phaser.Physics.ARCADE);
  game.stage.backgroundColor = '#000000';

  keys = game.input.keyboard.createCursorKeys();

  ball = game.add.sprite(game.world.width / 2, game.world.height / 2, 'ball');
  game.physics.arcade.enable(ball);
  ball.body.bounce.x = 1;
  ball.body.bounce.y = 1;
  ball.body.velocity.x = -300;
  ball.body.velocity.y = 50;
  ball.body.collideWorldBounds = true;

  pads = game.add.group();
  pads.enableBody = true;

  leftPad  = pads.create(0, game.world.height / 2, 'pad');
  rightPad = pads.create(game.world.width - 20, game.world.height / 2, 'pad');

  pads.setAll('scale.y', 1.5);
  pads.setAll('body.immovable', true);

}

function update () {

  game.physics.arcade.collide(ball, pads);

  if (keys.up.isDown && leftPad.y > 0) {
    leftPad.y -= 10;
  }

  if (keys.down.isDown && leftPad.y < (game.world.height - leftPad.height)) {
    leftPad.y += 10;
  }

  // Quick and dirty unbeatable "IA" for the right pad
  rightPad.y = ball.y - (rightPad.height / 2);

}

function render() {

  if (debug) {
    game.debug.body(ball);
    game.debug.body(leftPad);
    game.debug.body(rightPad);
    game.debug.bodyInfo(leftPad, 0, 0);
  }

}
