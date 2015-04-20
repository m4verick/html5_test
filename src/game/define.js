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

	const VERSION 		= "0.0.1";
	const SERVER_URL 	= "";
	
	//GAME STATES
	const	GAME_STATE_SPLASH	=	1<<0;
	const	GAME_STATE_TUTORIAL	=	1<<1;
	const	GAME_STATE_PLAY		=	1<<2;
	const	GAME_STATE_FINISH	=	1<<3;
	var		m_currentState 			= 0;
	
	//anchor for reposition
	const TOP_ANCHOR	=	10;
	const BOTTOM_ANCHOR	=	10;
	const SIDE_ANCHOR	=	10;
	
	var initialXpos = 0;
	var mainCanvas 		= null;
	var mainStage	= null;
	var mainContainer = new createjs.Container(); //main container for game screen
	
	var SOUND_FILES = 
		[
			{file:	"", 			volume:	1},
			{file:	"", 			volume:	1},
			{file:	"",	volume:	1}
		];

	var COUNTRY	=	
		{
			EN: {value: 0, language: 'EN'},
			US: {value: 1, language: 'EN'},
			UK: {value: 2, language: 'EN'},
			FR: {value: 3, language: 'FR'},
			ES: {value: 4, language: 'ES'},
			IT: {value: 5, language: 'IT'},
			DE: {value: 6, language: 'DE'},
		};
	
	var m_unknown_country = false;
	
	function GetCurrentCountry()
	{
		m_unknown_country = false;
		
		var country = COUNTRY.EN;
		if(typeof deviceCountry != 'undefined')
		{
			var mdeviceCountry = deviceCountry.toUpperCase();
			
			if(mdeviceCountry == 'US')
			{
				country = COUNTRY.US;
				m_unknown_country = true;
			}
			else if(mdeviceCountry == 'GB')
			{
				country = COUNTRY.UK;
			}
			else if(mdeviceCountry == 'FR')
			{
				country = COUNTRY.FR;
			}
			else if(mdeviceCountry == 'ES')
			{
				country = COUNTRY.ES;
			}
			else if(mdeviceCountry == 'SP')
			{
				country = COUNTRY.ES;
			}
			else if(mdeviceCountry == 'IT')
			{
				country = COUNTRY.IT;
			}
			else if(mdeviceCountry == 'DE')
			{
				country = COUNTRY.DE;
			}
			else
			{
				m_unknown_country = true;
			}
		}
		return country;
	}
	
	var GAME_COUNTRY               =   GetCurrentCountry();


