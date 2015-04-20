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

function main_debug()
{
	this.Init_Game = function()
	{
		console.log("Init Game");
		UI_Preload.Init_Builder();
	}
	
	this.setState = function(st)
	{
		m_currentState = st;
	}
	
	this.getState = function()
	{
		return m_currentState;
	}
	
	this.gotoNextState = function()
	{
		return m_currentState << 1;
	}
	
	this.aaaa = function()
	{
		console.log("game aaaaaaaa");
	}
	
	this.Update_Game = function ()
	{
		if(m_currentState == GAME_STATE_FINISH)
		{
			mainContainer.addChildAt(finish_containerbox);
		}
		else
		if(m_currentState == GAME_STATE_TUTORIAL)
		{
			//mainContainer.addChildAt(finish_containerbox);
		}
		
		module.setImg( mainStage, mainContainer, 0, 0 );
		
		createjs.Ticker.setFPS(30);
		createjs.Ticker.addEventListener("tick",mainStage);
	}
}

var main_debug = new main_debug();