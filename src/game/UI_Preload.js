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

var bg		= null; //background
var m_state	= 0;
var finish_containerbox = null;
var play_containerbox = null;
var play_containerGroupbox = null;
var manifest;
var canvasH;
var canvasW;

function UI_Preload()
{
	function setupManifest()
	{
		var tempManifest;
		var imgPath = "assets/images/";
		m_currentState = GAME_STATE_FINISH;
		switch (m_currentState)
		{
			case GAME_STATE_SPLASH:
				break;
			case GAME_STATE_TUTORIAL:
				break;
			case GAME_STATE_TUTORIAL:
				break;
			case GAME_STATE_PLAY:
				tempManifest = [
				{
					src: imgPath + "main_bg.png",
					id: "main_bg"
				},
				{
					src: imgPath + "digicode_bg_num.png",
					id: "digicode_bg_num"
				},
				{
					src: imgPath + "page_frame.png",
					id: "page_frame"
				},
				{
					src: imgPath + "top_left.png",
					id: "top_left",
					group: "containerTime"
				},
				{
					src: imgPath + "bottom_left.png",
					id: "bottom_left",
					group: "containerTime"
				},
				{
					src: imgPath + "bottom_right.png",
					id: "bottom_right",
					group: "containerTime"
				},
				{
					src: imgPath + "top_right.png",
					id: "top_right",
					group: "containerTime"
				}
				];
				break;
			case GAME_STATE_FINISH:
				tempManifest = [  
				{
					src: imgPath + "splash_bg.png",
					id: "bg"
				},
				{
					src: imgPath + "text_box.png",
					id: "textBox"
				},
				{
					src: imgPath + "Visa_logo.png",
					id: "visaLogo"
				},
				{
					src: imgPath + "message_box_w_border.png",
					id: "msgBox"
				}, 
				{
					src: imgPath + "hack_button.png",
					id: "actButton"
				}
				];
				break;
			default:
				console.log("State not found!");
		}
		manifest = tempManifest;
	}
	
	function startPreload() 
	{
		preload = new createjs.LoadQueue(true);
		//preload.installPlugin(createjs.Sound);          
		preload.on("fileload", handleFileLoad);
		preload.on("progress", handleFileProgress);
		preload.on("complete", loadComplete);
		preload.on("error", loadError);
		preload.loadManifest(manifest);	 
	}
	
	function handleFileLoad(event) 
	{
		//console.log("A file has loaded of type: " + event.item.type);
		var bgBounds;
		//var scaleContainer = module.resize( mainCanvas, 1024, 768);
		canvasH = mainCanvas.height;
		canvasW = mainCanvas.width;
		console.log("-->>mainCanvas h:" + canvasH + " w:"+ canvasW);
		switch (m_currentState)
		{
			case GAME_STATE_PLAY:
				if(event.item.id == "main_bg")
				{
					//console.log("Action Button is loaded");
					//create bitmap here
					var imgMainBg	= new createjs.Bitmap(event.result);
					var a = imgMainBg.getBounds();
					imgMainBg.x =0;// ((canvasW - a.width)/2);
					console.log("handleFileLoad : " + a.width);
					//imgMainBg.on("click",main_debug.aaaa);
					play_containerbox.addChild(imgMainBg);
				}
				else
				if(event.item.id == "digicode_bg_num")
				{
					console.log("Messagebox is loaded");
					//create bitmap here
					var imgDigicodeNum	= new createjs.Bitmap(event.result);
					var a = imgDigicodeNum.getBounds();
					imgDigicodeNum.x = ((canvasW - a.width)/2);
					console.log("handleFileLoad : " + a.width);
					play_containerbox.addChild(imgDigicodeNum);
				}
				else
				if(event.item.id == "page_frame")
				{
					console.log("Background is loaded");
					//create bitmap here
					var imgPageFrame	= new createjs.Bitmap(event.result);
					var a = imgPageFrame.getBounds();
					bgBounds = a;
					console.log("bgBounds : " + bgBounds);
					imgPageFrame.x = ((canvasW - a.width)/2);
					console.log("handleFileLoad : " + a.width);
					play_containerbox.addChild(imgPageFrame);
				}
				else
				if(event.item.group == "containerTime")
				{
					if(event.item.id == "top_left")
					{
						console.log("Visa Logo is loaded");
						//create bitmap here
						var imgTopLeft	= new createjs.Bitmap(event.result);
						var a = imgTopLeft.getBounds();
						console.log("mainCanvas : " + mainCanvas.width);
						imgTopLeft.x = ((canvasW - a.width)/2);
						imgTopLeft.y = ((canvasH - a.height));
						console.log("bgBounds2 : " + bgBounds);
						//imgVisa.y = bgBounds.height - a.height;
						console.log("handleFileLoad : " + a.width);
						play_containerGroupbox.addChild(imgTopLeft);
						play_containerbox.addChild(play_containerGroupbox);
					}
					else
					if(event.item.id == "bottom_left")
					{
						console.log("Visa Logo is loaded");
						//create bitmap here
						var imgBottomLeft	= new createjs.Bitmap(event.result);
						var a = imgBottomLeft.getBounds();
						console.log("mainCanvas : " + mainCanvas.width);
						imgBottomLeft.x = ((canvasW - a.width)/2);
						imgBottomLeft.y = ((canvasH - a.height));
						console.log("bgBounds2 : " + bgBounds);
						//imgVisa.y = bgBounds.height - a.height;
						console.log("handleFileLoad : " + a.width);
						play_containerGroupbox.addChild(imgBottomLeft);
						play_containerbox.addChild(play_containerGroupbox);
					}
					else
					if(event.item.id == "bottom_right")
					{
						console.log("Visa Logo is loaded");
						//create bitmap here
						var imgBottomRight	= new createjs.Bitmap(event.result);
						var a = imgBottomRight.getBounds();
						console.log("mainCanvas : " + mainCanvas.width);
						imgBottomRight.x = ((canvasW - a.width)/2);
						imgBottomRight.y = ((canvasH - a.height));
						console.log("bgBounds2 : " + bgBounds);
						//imgVisa.y = bgBounds.height - a.height;
						console.log("handleFileLoad : " + a.width);
						play_containerGroupbox.addChild(imgBottomRight);
						play_containerbox.addChild(play_containerGroupbox);
					}
					else
					if(event.item.id == "top_right")
					{
						console.log("Visa Logo is loaded");
						//create bitmap here
						var imgTopRight	= new createjs.Bitmap(event.result);
						var a = imgTopRight.getBounds();
						console.log("mainCanvas : " + mainCanvas.width);
						imgTopRight.x = ((canvasW - a.width)/2);
						imgTopRight.y = ((canvasH - a.height));
						console.log("bgBounds2 : " + bgBounds);
						//imgVisa.y = bgBounds.height - a.height;
						console.log("handleFileLoad : " + a.width);
						play_containerGroupbox.addChild(imgTopRight);
						play_containerbox.addChild(play_containerGroupbox);
					}
				}
				break;
			case GAME_STATE_FINISH:
				if(event.item.id == "actButton")
				{
					console.log("-->>Action Button is loaded");
					//create bitmap here
					var imgActButton	= new createjs.Bitmap(event.result);
					var a = imgActButton.getBounds();
					imgActButton.x =((480-a.width)/2);
					imgActButton.y = 800-150;//((canvasH - a.heigth));
					console.log("---->>handleFileLoad imgActButton: " + a);
					imgActButton.on("click",main_debug.Button_onClick);
					finish_containerbox.addChild(imgActButton);
				}
				else
				if(event.item.id == "msgBox")
				{
					//console.log("-->>Messagebox is loaded");
					//create bitmap here
					var imgMsgBox	= new createjs.Bitmap(event.result);
					var a = imgMsgBox.getBounds();
					imgMsgBox.x = 0;//((canvasW - a.width)/2);
					//console.log("---->>handleFileLoad imgMsgBox: " + a);
					finish_containerbox.addChild(imgMsgBox);
				}
				else
				if(event.item.id == "bg")
				{
					//console.log("-->>Background is loaded");
					//create bitmap here
					var imgSplash	= new createjs.Bitmap(event.result);
					var a = imgSplash.getBounds();
					bgBounds = a;
					imgSplash.x = 0;//((canvasW - a.width)/2);
					//console.log("-->>handleFileLoad imgSplash: " + a.width);
					finish_containerbox.addChild(imgSplash);
				}
				else
				if(event.item.id == "visaLogo")
				{
					//console.log("Visa Logo is loaded");
					//create bitmap here
					var imgVisa	= new createjs.Bitmap(event.result);
					var a = imgVisa.getBounds();
					imgVisa.x = SIDE_ANCHOR << 2;//((canvasW - a.width)/2);
					imgVisa.y = ((canvasH - a.height) + (BOTTOM_ANCHOR << 1));
					//imgVisa.y = bgBounds.height - a.height;
					//console.log("handleFileLoad imgVisa: " + a);
					finish_containerbox.addChild(imgVisa);
				}
				break;
			default:
				console.log("handleFileLoad error : state not found!");
		}
		
	
		//Scale and contains the manifest to the stage
		//finish_containerbox.scaleY = window.innerHeight/800;
		//finish_containerbox.scaleX = window.innerWidth/480;
		console.log("Window InnerSize w,h : " + window.innerWidth + "," +window.innerHeight);
		finish_containerbox.scaleX = finish_containerbox.scaleY = Math.min(window.innerHeight/800,window.innerWidth/480);
		//;
		main_debug.Update_Game();
		//mainContainer.addChildAt(finish_containerbox);
		//module.setImg( mainStage, mainContainer, 0, 0 );
		//createjs.Ticker.setFPS(30);
		//createjs.Ticker.addEventListener("tick",mainStage);
	}
	
	function loadError(evt) 
	{
		console.log("Error!",evt.text);
	}
	 
	function handleFileProgress(event) 
	{
		mainStage.update();
	}
	 
	
	 
	function loadComplete(event) {
		console.log("Finished Loading Assets");
	}
	this.Init_Builder = function()
	{
		mainStage = new createjs.Stage(document.getElementById("testCanvas"));
		mainCanvas = document.getElementById("testCanvas");
		
		mainCanvas.width =  window.innerWidth;
		mainCanvas.height =  window.innerHeight;
		console.log("Init_Builder -->> Main Canvas : " + mainCanvas.width +","+mainCanvas.height);
		finish_containerbox = new createjs.Container();
		setupManifest();
		startPreload();
		mainStage.update();	
	}
	
}

var UI_Preload = new UI_Preload();