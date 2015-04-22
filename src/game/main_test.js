// JavaScript Document
/*
- satrio.budidharmawan -

|--root
  |--assets
  | |--images
  | |--fonts
  |--src
    |--3rd
    | |--js 
    |--game ... (you are here)
*/
var canvas;
var stage;
var screen_width;
var screen_height;
var bmpAnimation;

var imgMonsterARun = new Image();

function init() {
    canvas = document.getElementById("testCanvas");

    imgMonsterARun.onload = handleImageLoad;
    //imgMonsterARun.onerror = handleImageError;
    imgMonsterARun.src = "assets/images/AdsImageAsset.png";
	console.log(GAME_COUNTRY);
}

function reset() {
    stage.removeAllChildren();
    createjs.Ticker.removeAllEventListeners();
    stage.update();
}

function handleImageLoad(e) {
    startGame();
}

function startGame() {
	// create a new stage and point it at our canvas:
	stage = new createjs.Stage(canvas);
	
	// grab canvas width and height for later calculations:
	screen_width = canvas.width;
	screen_height = canvas.height;
	
    // create spritesheet and assign the associated data.
	var spriteSheet = new createjs.SpriteSheet({
	    // image to use
	    images: [imgMonsterARun], 
	    // width, height & registration point of each sprite
	    //frames: {width: 64, height: 64, regX: 32, regY: 32}, 
		frames: [
    	// x, y, width, height, imageIndex*, regX*, regY*
		    	[0, 0, 482, 800],
    			[529, 122, 391, 314]
				]
//	    animations: {	
//	    walk: [0, 0, "walk"]
	    
    });
	
    // create a BitmapAnimation instance to display and play back the sprite sheet:
	bmpAnimation = new createjs.Sprite(spriteSheet);
    // start playing the first sequence:
    // set up a shadow. Note that shadows are ridiculously expensive. You could display hundreds
    // of animated rats if you disabled the shadow.
    bmpAnimation.shadow = new createjs.Shadow("#454", 0, 5, 4);
    bmpAnimation.name = "monster1";
	bmpAnimation.gotoAndStop(1);
    //bmpAnimation.direction = 90;
   // bmpAnimation.vX = 4;
   // bmpAnimation.x = 16;
   // bmpAnimation.y = 32;
	//bmpAnimation.y = screen_height/2;
	console.log("screen height = " + screen_height);
	console.log("bmpAnimation height = " + bmpAnimation.getBounds().height);
	console.log("bmpAnimation.y = " + bmpAnimation.y);
	console.log("getBounds()bmpAnimation = " + bmpAnimation.getBounds().height);
	//module.MoveToCenterY(bmpAnimation, screen_height);
    // have each monster start at a specific frame
    bmpAnimation.currentFrame = 1;
    stage.addChild(bmpAnimation);
	
	var a = new createjs.Shape();
	a.graphics.beginFill("red").drawRect(0,screen_height/2,100,100);
	stage.addChild(a);
	
	//createjs.Ticker.on("tick",stage);
	createjs.Ticker.addEventListener("tick", tick);
    // we want to do some work before we update the canvas,
    // otherwise we could use :
	//Ticker.addListener(stage);
    //createjs.Ticker.addListener(window);
    createjs.Ticker.useRAF = true;
    createjs.Ticker.setFPS(60);
	
}

function gridlines()
{
	var x = screen_width;
	var y = screen_height;
	
	var grid = new createjs.Shape();
	grid.seStrokeStyle(1);
	grid.beginStroke("white");
	
}

//called if there is an error loading the image (usually due to a 404)
function handleImageError(e) {
	console.log("Error Loading Image : " + e.target.src);
}

function tick(event) {
    // Hit testing the screen width, otherwise our sprite would disappear
    if (bmpAnimation.x >= screen_width - 16) {
        // We've reached the right side of our screen
        // We need to walk left now to go back to our initial position
       // bmpAnimation.direction = -90;
    }

    if (bmpAnimation.x < 16) {
        // We've reached the left side of our screen
        // We need to walk right now
       // bmpAnimation.direction = 90;
    }

    // Moving the sprite based on the direction & the speed
    if (bmpAnimation.direction == 90) {
       // bmpAnimation.x += bmpAnimation.vX;
    }
    else {
      //  bmpAnimation.x -= bmpAnimation.vX;
    }

    // update the stage:
    stage.update();
}
