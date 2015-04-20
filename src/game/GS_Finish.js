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

var polygonGlow;
var containerCertifBtn;

var imgMsgBox_posX, imgActionButton_posX;

function GS_Finish()
{
	this.GS_Finish_Init = function()
	{
		stage = new createjs.Stage(document.getElementById("testCanvas"));

		stage.removeAllEventListeners();
		console.log("Finish_Init()");
		containerCertifBtn = new createjs.Container();

	//	canvas = document.getElementById("testCanvas");
	//	canvas.width = window.innerWidth; // x
	//	canvas.height = window.innerHeight; // y

		var imgSplash	= new createjs.Bitmap("assets/images/splash_bg.png");
		imgSplash.image.onload = module.setImg(stage, imgSplash, 300, 0);

		//load message box
		var imgMsgBox	= new createjs.Bitmap("assets/images/message_box.png");
		imgMsgBox_posX = 330;
		imgSplash.image.onload = module.setImg(stage, imgMsgBox, imgMsgBox_posX, 20);
    setTextHackButton();

		//load VISA certified
		var imgVisa		= new createjs.Bitmap("assets/images/Visa_logo.png");
		//console.log("imgVisa x : " + imgVisa.image.height);
		imgSplash.image.onload = module.setImg(stage, imgVisa, 330, 460);

		//load action button
		var imgActionButton		= new createjs.Bitmap("assets/images/hack_button.png");
		imgActionButton_posX = 400;
		imgSplash.image.onload = module.setImg(stage, imgActionButton, imgActionButton_posX, 660);
		imgActionButton.scaleX = imgActionButton.scaleY = 0.75;
		imgActionButton.on("click",onButtonClick);

		setCertifiedGlow();

		setTextGetCertifiedButton();

	    createjs.Ticker.setFPS(30);
	    createjs.Ticker.addEventListener("tick",stage);
	}

	// reinit when browser width / height changed
	/*window.addEventListener("resize", function()
		{
			stage.canvas.width = window.innerWidth;
	    	stage.canvas.height = window.innerHeight;
			imgSplash.image.onload = module.setImg(stage, imgSplash, canvas.width/2, 0);
			imgSplash.image.onload = module.setImg(stage, imgMsgBox, (canvas.width/2)+30, canvas.height-(canvas.height-20));
			setTextHackButton();
			imgSplash.image.onload = module.setImg(stage, imgVisa, (canvas.width/2)+35, canvas.height-(canvas.height-300));
			imgSplash.image.onload = module.setImg(stage, imgActionButton, (canvas.width/2)+40, canvas.height-(canvas.height-500));
			setTextGetCertifiedButton();
			stage.update();
		});
*/

	function setTextHackButton()
	{
	  var FINISH_TEXT_WIN_MSG_1 = 'YOU HAVE HACKED THE CODE BUT VISA HAS NOT VERIFIED YOUR IDENTITY,YOU CANNOT PROCCED \n\n WITH VISA YOUR TRANSACTION IS ALWAYS SECURED'
	  var textHack = new createjs.Text(FINISH_TEXT_WIN_MSG_1, '35px Hacker', "#fff");
	  textHack.x = imgMsgBox_posX + 200;
	  textHack.y = 90;
	  textHack.lineWidth = 450;
	  textHack.textAlign = "center";
	  textHack.scaleX = textHack.scaleY = 0.75;
	  stage.addChild(textHack);
	  stage.update();
	}

	function setCertifiedGlow()
	{
	  polygonGlow = new createjs.Shape();
	  //hexShape.beginFill("#005F54").drawPolyStar(posX,posY,31,6,0,-90);
	  polygonGlow.graphics.beginFill("#E87300");
	  polygonGlow.graphics.moveTo(0,0).lineTo(0,50).lineTo(15,63).lineTo(277,63).lineTo(277,24).lineTo(254,0).lineTo(0,0);//.lineTo(0,0);
	  polygonGlow.alpha = 0.01;
	  containerCertifBtn.addChild(polygonGlow);
		containerCertifBtn.x = 400;
		containerCertifBtn.y = 660;
	  stage.addChild(containerCertifBtn);
	  stage.update();
	}


	function setTextGetCertifiedButton()
	{
	  var FINISH_TEXT_CERTIFIED = 'GET CERTIFIED';
	  var textCertified = new createjs.Text(FINISH_TEXT_CERTIFIED, '40px Hacker', "#fff");
	  textCertified.x = imgActionButton_posX + 140;
	  textCertified.y = 670;
	  textCertified.textAlign = "center";
	  //textCertified.scaleX = textCertified.scaleY = 0.75;
	  stage.addChild(textCertified);
	  stage.update();
	}

	//Exit the game
	function onButtonClick(e)
	{
		createjs.Tween.get(polygonGlow).to({alpha:0.7},300).to({alpha:0.01});//.call(onCertifGlowFinish);
	}

	function onCertifGlowFinish()
	{
		window.open("http://www.visa.com", "_blank");
		console.log(" This should exit the game!!");
	}

	this.GS_Finish_OnExit = function(e)
	{

	}
}


var GS_Finish = new GS_Finish;
