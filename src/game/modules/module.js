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

//DEFINE GLOBAL VAR in here
var m_font = "Arial";

//GLOBAL VAR END
function module()
{
	this.GraphicsInit = function()
	{
		//TODO : Set all graphic init in here
	}

	//function moveCenter()
	//{
		this.MoveToCenterY = function(spriteObject, screenHeight)
		{
			if (!spriteObject)
			{
				spriteObject.Y = screenHeight/2;
				return spriteObject.Y;
			}

		}

		this.MoveToCenterX = function(spriteObject, screenWidth)
		{
			if (!spriteObject)
			{
				spriteObject.X = screenWidth/2;
				return spriteObject.X;
			}
		}
//	}


	this.setImg = function(stage, img, x, y)
	{
		//scale = Math.min(canvas.width/768,canvas.height/1024);
		scale = this.resize(mainCanvas, 768, 1024);
		img.scaleX = img.scaleY = scale;
		//this.MoveToCenterX(img, mainCanvas.width-img.width);
		this.MoveToCenterX(img, 500-img.width);
		stage.addChild(img);
		img.x = x;
		img.y = y;
		stage.update();
	}

	this.resize = function (canvas, imgwidth, imgheight)
	{
		scale = Math.min(1024/imgwidth,768/imgheight);
		return scale;
	}

	this.GetDeviceSize = function()
	{
		var gameDiv = document.getElementById(m_mainCanvas);
		console.log("module::GetDeviceSize()");
		console.log("-->>::GetDeviceSize().w = "+gameDiv.offsetWidth);
		console.log("-->>::GetDeviceSize().h = "+gameDiv.offsetHeight);
		return {
			width: gameDiv.offsetWidth,
			height: gameDiv.offsetHeight
		};
	}


	this.SetFont = function(font)
	{
		m_font = font;
	}
}

var module = new module();
