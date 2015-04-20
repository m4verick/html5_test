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

    State Splash :
    this state triggered at the first time when user play the game
*/
var stage;

function Splash_Init()
{
    //var m_loadingBgImg = new Image();
    //var m_loadingBg

    stage = new createjs.Stage(document.getElementById("testCanvas"));

    createjs.Touch.enable(stage);
    //stage.enableMouseOver(10);

    var imgSplash = new createjs.Bitmap("assets/images/splash_bg.png");
    var imgSplashX = 300;
    var imgSplashY = 0;
    imgSplash.image.onload = setImg(stage, imgSplash, imgSplashX, imgSplashY);

    var imgSplashMsgBox = new createjs.Bitmap("assets/images/message_box.png");
    var imgSplashMsgBoxX = 300;
    var imgSplashMsgBoxY = 200;
    imgSplashMsgBox.scaleX = imgSplashMsgBox.scaleY = 0.9;
    imgSplashMsgBox.image.onload = setImg(stage, imgSplashMsgBox, imgSplashMsgBoxX, imgSplashMsgBoxY);

    setContainerStart();

    var imgSplashCellphone = new createjs.Bitmap("assets/images/cellphone.png");
    var imgSplashCellphoneX = 600;
    var imgSplashCellphoneY = 250;
    imgSplashCellphone.scaleX = imgSplashCellphone.scaleY = 0.6;
    imgSplashCellphone.image.onload = setImg(stage, imgSplashCellphone, imgSplashCellphoneX, imgSplashCellphoneY);

    var imgSplashHackBtn = new createjs.Bitmap("assets/images/hack_button.png");
    var imgSplashHackBtnX = 400;
    var imgSplashHackBtnY = 600;
    imgSplashHackBtn.scaleX = imgSplashHackBtn.scaleY = 0.75;
    imgSplashHackBtn.addEventListener("click",onHackClick);
    imgSplashHackBtn.image.onload = setImg(stage, imgSplashHackBtn, imgSplashHackBtnX, imgSplashHackBtnY);

    setTextHackButton();

    createjs.Ticker.setFPS(30);
    createjs.Ticker.addEventListener("tick",stage);
}

var indexImg = 0;

function setContainerStart()
{
  var textContent = "ENTER INTO THE SKIN OF A \nCREDIT CARD HACKER BY \nPLAYING A QUICK MINIGAME";
  var textStart = new createjs.Text(textContent, '30px Hacker', "#FFFFFF");
  textStart.x = 330;
  textStart.y = 300;
  textStart.scaleX = textStart.scaleY = 0.75;
  stage.addChild(textStart);
  stage.update();
}

function setTextHackButton()
{
  var textHack = new createjs.Text('HACK', '70px Hacker', "#FFFFFF");
  textHack.x = 480;
  textHack.y = 605;
  textHack.scaleX = textHack.scaleY = 0.75;
  stage.addChild(textHack);
  stage.update();
}

function setImg(stage, img, x, y)
{
    stage.addChild(img);
    img.x = x;
    img.y = y;
    //img.scaleX = img.scaleY = scale;
    stage.update();
    indexImg++;
}

function onHackClick(e)
{
    //stage.removeChildAt(3);
    //stage.removeChildAt(2);
    //stage.removeChildAt(1);
    //stage.removeChildAt(0);
    stage.removeAllEventListeners();
    stage.removeAllChildren();
    Gameplay_Init();
    console.log("heuahhahahahah");
}

/*
function Splash_Update()
{

}
*/
