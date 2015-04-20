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

    State Finish :
    this state triggered when user finish the game (whether success or failed)
*/

var isWin = false;
var stage = null;
var canvas = null;

function GS_Finish()
{
	this.GS_Finish_Init = function()
	{
		stage = new createjs.Stage(document.getElementById("testCanvas"));
		console.log("Finish_Init()");
		
		canvas = document.getElementById("testCanvas");
		canvas.width = window.innerWidth; // y
		canvas.height = window.innerHeight; // x
		
		var imgSplash	= new createjs.Bitmap("assets/images/splash_bg.png");
		imgSplash.image.onload = module.setImg(stage, imgSplash, canvas.height/2, 0);
    	
		//load message box
		var imgMsgBox	= new createjs.Bitmap("assets/images/message_box.png");
		imgSplash.image.onload = module.setImg(stage, imgMsgBox, (canvas.height/2)+30, canvas.height-(canvas.height-20));
    	setTextHackButton();

		//load VISA certified
		var imgVisa		= new createjs.Bitmap("assets/images/Visa_logo.png");
		console.log("imgVisa x : " + imgVisa.image.height);
		imgSplash.image.onload = module.setImg(stage, imgVisa, (canvas.height/2)+35, canvas.height-(canvas.height-300));	

		//load action button
		var imgActionButton		= new createjs.Bitmap("assets/images/hack_button.png");
		imgSplash.image.onload = module.setImg(stage, imgActionButton, (canvas.height/2)+40, canvas.height-(canvas.height-500));
		imgActionButton.on("click",onButtonClick);
		setTextGetCertifiedButton();

	    createjs.Ticker.setFPS(30);
	    createjs.Ticker.addEventListener("tick",stage);
	}

	function setTextHackButton()
	{
	  var FINISH_TEXT_WIN_MSG_1 = 'YOU HAVE HACKED THE CODE BUT VISA HAS NOT VERIFIED YOUR IDENTITY,YOU CANNOT PROCCED \n\n WITH VISA YOUR TRANSACTION IS ALWAYS SECURED'
	  var textHack = new createjs.Text(FINISH_TEXT_WIN_MSG_1, '26px Hacker', "#fff");
	  textHack.x = canvas.width/2;
	  textHack.y = canvas.height-(canvas.height-60);
	  textHack.lineWidth = 300;
	  textHack.textAlign = "center";
	  textHack.scaleX = textHack.scaleY = 0.75;
	  stage.addChild(textHack);
	  stage.update();
	}

	function setTextGetCertifiedButton()
	{
	  var FINISH_TEXT_CERTIFIED = 'GET CERTIFIED';
	  var textHack = new createjs.Text(FINISH_TEXT_CERTIFIED, '45px Hacker', "#fff");
	  textHack.x = canvas.width-(canvas.width/2);
	  textHack.y = canvas.height-(canvas.height-515);
	  textHack.textAlign = "center";
	  textHack.scaleX = textHack.scaleY = 0.75;
	  stage.addChild(textHack);
	  stage.update();
	}

	//Exit the game
	function onButtonClick(e)
	{
		window.open("http://www.visa.com", "_blank");
		console.log(" This should exit the game!!");
	}

	this.GS_Finish_OnExit = function(e)
	{

	}
}


var GS_Finish = new GS_Finish;
