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
var imgSplashHackBtn;

function Splash_Init()
{
    //var m_loadingBgImg = new Image();
    //var m_loadingBg

    stage = new createjs.Stage(document.getElementById("testCanvas"));
    containerHackBtn = new createjs.Container();

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

    imgSplashHackBtn = new createjs.Bitmap("assets/images/hack_button.png");
    var imgSplashHackBtnX = 400;
    var imgSplashHackBtnY = 600;
    //imgSplashHackBtn.alpha = 1;
    imgSplashHackBtn.name = "hackBtn";
    imgSplashHackBtn.scaleX = imgSplashHackBtn.scaleY = 0.75;
    imgSplashHackBtn.addEventListener("click",onHackClick);
    imgSplashHackBtn.image.onload = setImg(stage, imgSplashHackBtn, imgSplashHackBtnX, imgSplashHackBtnY);

    setHackGlow();

    setTextHackButton();

    createjs.Ticker.setFPS(30);
    createjs.Ticker.addEventListener("tick",stage);
}

var indexImg = 0;

var containerHackBtn;
var polygonGlow;

function setHackGlow()
{
  polygonGlow = new createjs.Shape();
  //hexShape.beginFill("#005F54").drawPolyStar(posX,posY,31,6,0,-90);
  polygonGlow.graphics.beginFill("#E87300");
  polygonGlow.graphics.moveTo(0,0).lineTo(0,50).lineTo(15,63).lineTo(277,63).lineTo(277,24).lineTo(254,0).lineTo(0,0);//.lineTo(0,0);
  polygonGlow.alpha = 0.01;
  containerHackBtn.addChild(polygonGlow);
  containerHackBtn.x = 400;
  containerHackBtn.y = 600;
  stage.addChild(containerHackBtn);
  stage.update();
}

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
    /*
    if (img.name == "hackBtn")
    {
      imgSplashHackBtn.cache(0,0,imgSplashHackBtn.width,imgSplashHackBtn.height);
      var redFilter = new createjs.ColorFilter(0,1,0,1);
      imgSplashHackBtn.filters = [redFilter];
      stage.addChild(img);
    }
    else
    {
    */
      stage.addChild(img);
    //}
    img.x = x;
    img.y = y;
    //img.scaleX = img.scaleY = scale;
    stage.update();
//    indexImg++;
}

function onHackClick(e)
{
    createjs.Tween.get(polygonGlow).to({alpha:0.7},300).to({alpha:0.01}).call(onHackGlowFinish);
    console.log("ghfdaskjkjasd");
    //stage.removeChildAt(3);
    //stage.removeChildAt(2);
    //stage.removeChildAt(1);
    //stage.removeChildAt(0);

  //  stage.removeAllEventListeners();
  //  stage.removeAllChildren();
  //  Gameplay_Init();

}

function onHackGlowFinish()
{
  //console.log("tessssttttt");
  stage.removeAllEventListeners();
  stage.removeAllChildren();
  Gameplay_Init();
}

/*
function Splash_Update()
{

}
*/
