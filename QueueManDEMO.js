/*
FileINFO BEGIN
Vancouver, B.C.
Wed., 14 September 2016.  7:23pm.
FileNAME  ::  "QueueManDEMO.js"
Derivative From Codebase :: Full Feature Platform
FileINFO END
*/


/* ##################################################### */
/* 			Outline

ON PAGE LOAD
SETTING GLOBAL VARIABLES
QueueManagerDEMO
ON PAGELOAD INITIALIZING ELEMENTS AND SETTINGS
Main Function TEST *CATS*
Main Function TEST *DOGZ*
Main Function TEST *Unicorns*
Main Function TEST *Normalize*
ATOMIC Functions Collection
*/
/* ###################################################### */




//  ############
//  ON PAGE LOAD
//  ############
window.onload=function(){
//	console.log("H E L L O    K I T T Y !!!");
	QueueManagerVs15();
	InitDivDefaults();
}

//  ####################
//  END ::  ON PAGE LOAD
//  ####################


//  ########################
//  SETTING GLOBAL VARIABLES
//  ########################

//  	NEEDED for Queue Manager

//  Few Triggers
var TriggerA = Number(0);
var TriggerB = Number(0);
//  Control Vars (mutexii)
var UniDATAx1 = Number(4);
var UniMutexMuleInnyx1 = Number(0);

var UniDATAx2 = Number(4);
var UniMutexMuleInnyx2 = Number(0);

//  Also referred to as *Big~Assed Global Control String*
var FSMxPCOxCBxs = new String("3|A3|B3|C3|D3|E3|F3|G3|H3|I3|J3");

//  Interval for internal IEEF (Immediately Executing Expression Functions)
var MalleableTIMER = Number(0);
//  a kill switch, sorta, despite the innocuous name :
var NumberDangerous = Number(999);

var KoolCount = 0;
var BelieveIt = 1;

//  Interval for internal IEEF (Immediately Executing Expression Functions)
var CallMeImSettable = Number(0);

//  a kill switch, sorta, despite the innocuous name :
var Numminumnum = Number(999);



//  ***********************************************  //
//  *******  Used in AJAX (es) ********************  //

var ForInternal = Number(0);
var UniITEMxCode = new String("English! mutherfucker.  Do you speak it.");

//  Test CATS Set:
var TransmissionOfSin = {};
//  The array sent to server, to hit *QueueManagerDEMO.php* VIA Ajax *** TEST_1st_QueryAJAX ***
var HAZ_JSONx1 = ["abcd", "efgh"];
//  Receiving from: *QueueManagerDEMO.php* VIA Ajax ***TEST_1st_QueryAJAX ***
var AjaxRESPONSE_CatsINIT = new Array();


//  TEST DOGZ Set:
var DataTransgressionLOL = {};
//  The array sent to server, to hit *QueueManagerDEMO.php* VIA Ajax *** TEST_2nd_QueryAJAX ***
var HAZ_JSONx2 = ["abcd", "efgh"];
//  Receiving from: *QueueManagerDEMO.php* VIA Ajax ***TEST_2nd_QueryAJAX ***
var AjaxRESPONSE_DogzINIT = new Array();


//  TEST Run Outside of QueueManager ::  ie., ASYNCHRONOUS but kicked off by a button click
var FlightOfFancy = {};
var HAZ_JSONx3 = ["abcd", "efgh"];
var AjaxRESPONSE_ZOMG_Unicorns = new Array();

//  *******  Endof *Used in AJAX (es) *************  //
//  ***********************************************  //

//  ################################
//  END ::  SETTING GLOBAL VARIABLES
//  ################################



//  #########################################
//  QueueManagerDEMO
//  ########################################

function QueueManagerVs15(){

	var CommenceAnnoyance;

	// GLOBALS ::
	KoolCount = ((KoolCount*1)+BelieveIt);
	// Half a second is acceptable; it works all the way down to about 35, if data load is small and latency minimal.
	CallMeImSettable = 500;

	if(Numminumnum >= 357){

	//  >>>> Block 1  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  //

		//  >>>  QueueManagerVs15, ITEM 1ne, Block1ne  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  //
		//  SERVES :: TEST_1st_QueryAJAX
		if(FSMxPCOxCBxs[3] == 7){
			//  >>>>>>>     5 = Busy     1 = DONE     7 = Ready     <<<<<<<<<<<  //	
	        	if(UniDATAx1 == 1){     // This, bearing a * 1 * means the JOB, Completed.
				// Anyhow. Reset it to 4. Which is READY~STATE value.
				UniDATAx1 = 4;
				x = 3;
				//   NOTE ::  This is critical : a call to a function which acts on
				//   a string which is an overall controller.  Instead of setting a property
				//   on an object, or kicking around some poor array, we just cheap out and
				//   use a string.  Nice and low level, in theory.  That was funny, damnit!
				InitEtcFSMx2ndx3(x);
			}
		}
	
		//  >>>   QueueManagerVs15, ITEM 2wo, Block1ne  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  //
		//  SERVES :: TEST_2nd_QueryAJAX
		if(FSMxPCOxCBxs[6] == 7){
	        	if(UniDATAx2 == 1){
				UniDATAx2 = 4;
				x = 3;
				InitEtcFSMx2ndx6(x);
			}
		}


	//  >>>> Block 2  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  //

		//  >>>   QueueManagerVs15, ITEM 1ne, Block2wo  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  //
		//  SERVES :: TEST_1st_QueryAJAX
		//  Fired from MAIN FUNCTION  ::  FiringOFFxCatsTESTxDATA(x)
		if(FSMxPCOxCBxs[3]==7){
			if(UniMutexMuleInnyx1 ==  1){
				UniDATAx1=5; // still busy...
			}
			if(UniMutexMuleInnyx1 == 99){
				// tell others://  >>>>>>>     5 = Busy     1 = DONE     4 = Ready     <<<<<<<<<<<  //
				UniDATAx1 = 1;
				// data should then be available, so fire related Retrieved~Data~Handling~Function
				// alert("Hello! Kitty!");
				RETURNEDxFromAJAX_TestCATZ();
			}      
		}

		//  >>>   QueueManagerVs15, ITEM 2wo, Block2wo  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  //
		//  SERVES :: TEST_2nd_QueryAJAX
		//  Fired from MAIN FUNCTION  ::  FiringOFFxDogzTESTxDATA();
		if(FSMxPCOxCBxs[6] == 7){
			if(UniMutexMuleInnyx2 == 1){
				UniDATAx2 = 5;
			}
			if(UniMutexMuleInnyx2 == 99){
				UniDATAx2 = 1;
				RETURNEDxFromAJAX_TestDOGZ();
			}      
		}


	//  NOTE :: for execution logic reasons, this code is located at the bottom, of 3 blocks, but make
	//  no mistake, THIS is the block which actually kicks shit off, via *TriggerA* or *TriggerB* global
	//  having had a value specific to it, assigned, outside the QueueManager.
	//
	//  Where things get real
	//  >>>> Block 3  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  //

		//  >>>   QueueManagerVs15, ITEM 1ne, Block3hree  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  //
		
		//  Here we check ALL the Mutex Controllers :: *4* is "Ready" value;
		//  Lastly, see if THIS item*s Trigger is Ought or SET.
		
		if(UniDATAx1 == 4 && UniDATAx2 == 4  && TriggerA == 29){
			//  Set mutex to *5* = BUSY From Now until Holds Other Value: 7
			UniDATAx1 = 5;
			//  SET innerMutexMule
			UniMutexMuleInnyx1 = 1;  ///////  1 = SET. || 99 = RELEASED (data should be available now!)
			//  SET PRIMARY STATUS INDICATOR to BUSY = *7*  in the Big~Assed Global Control String
			x = 7;
			InitEtcFSMx2ndx3(x);
			TEST_1st_QueryAJAX();
		}
	 
		//  >>>   QueueManagerVs15, ITEM 2wo, Block3hree  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  //
		if(UniDATAx1 == 4 && UniDATAx2 == 4 && TriggerB == 31){
			UniDATAx2 = 5;
			UniMutexMuleInnyx2 = 1;
			x = 7;
			InitEtcFSMx2ndx6(x);
			TEST_2nd_QueryAJAX();
		}

	} // end : if(Numminumnum >= 357)  [Note: this is getting checked each trip through; like a while / do

	// Calling the function we are in.  How is that even possible! LOL.
	CommenceAnnoyance =  window.setTimeout(QueueManagerVs15, CallMeImSettable);

} // end : QueueManagerVs15 Timer FauxLoop



//	HELPER Functions to QueueManagerVs15

	//  This is where we tweak that *Big~Assed Global Control String* : the global
	//  var FSMxPCOxCBxs = new String("3|A3|B3|C3|D3|E3|F3|G3|H3|I3");


function InitEtcFSMx2ndx3(x){
	var PA;
	var PB;
	// SO :: [ FSMxPCOxCBxs  3|A   ]
	PA = FSMxPCOxCBxs.substr(0, 3);
	// SO :: Balance of string FSMxPCOxCBxs  |B3|C3|D3|E3|F3|G3|H3|I3  ]
	PB = FSMxPCOxCBxs.substr(4, 27);
	// Note in the concatenation the sneaky innocuous *x*  this could, be a *3* or a *7* !!!
	//
	// Say it IS a *7* :: We then have 3|A7|B3|C3|D3|E3|F3|G3|H3|I3
	// and from that the QueueManager can see that the system is busy; particularly, that Item 1, is *OUT* / active
	// picking its nose or waiting for a return AJAX response or something...
	FSMxPCOxCBxs = (PA+x+PB);
	//console.log("In QueManager, TEST 1 Business :"+x+". This=*PA* :"+PA+", This=*PB* :"+PB+". Last=*FSMxPCOxCBxs* = "+FSMxPCOxCBxs);
}

function InitEtcFSMx2ndx6(x){
	var PA; var PB; PA = FSMxPCOxCBxs.substr(0, 6); PB = FSMxPCOxCBxs.substr(7, 24); FSMxPCOxCBxs = (PA+x+PB);
	//console.log("In QueManager, TEST 2 Business : "+x+". This=*PA* :"+PA+", This=*PB* :"+PB+". Last=*FSMxPCOxCBxs* = "+FSMxPCOxCBxs);
}

//  #################################################
//  END ::  QueueManagerVs15
//  #################################################



//  ##############################################
//  ON PAGELOAD INITIALIZING ELEMENTS AND SETTINGS
//  ##############################################

function InitDivDefaults(){
	HDxRandomHINTxUnicorns();

}

//  ######################################################
//  END ::  ON PAGELOAD INITIALIZING ELEMENTS AND SETTINGS
//  ######################################################




/* #################################################################### */
/* #################################################################### */
/* ###### Begin Main Function TEST *CATS*   ########################### */

// 1. Function To SEND Data:   ~~~~~~~~~~~~~~~~~~~~~~~~  FiringOFFxCatsTESTxDATA()
// 2. An actual bygolly AJAX:     ~~~~~~~~~~~~~~~~~~~~~  TEST_1st_QueryAJAX()
// 3. The Catch Return and Provision Vars:  ~~~~~~~~~~~  RETURNEDxFromAJAX_TestCATZ()

// 1. Function To SEND Data:
function FiringOFFxCatsTESTxDATA(x){

	ForInternal=x;
	// Usual schtick: *ForInternal* set by user button clicks; let server know what to do with sent data.	
	TransmissionOfSin["CntrlSwitchVarCliDctd"] = ForInternal;

	if(ForInternal == 207){
		UniITEMxCode = "Animal We EXPECT is CATS.";
	}

	TransmissionOfSin["ReITEMxCode"] = UniITEMxCode;

	HAZ_JSONx1 = JSON.stringify(TransmissionOfSin);

	TriggerA = 29;
}

// 2. An actual bygolly AJAX:
function TEST_1st_QueryAJAX(){
    function DoItLikeSo(){
	var UniURL;
	    //  /var/www/QueueManagerDEMO.php
	    UniURL = "QueueManagerDEMO.php";  
	    ModestRequest(UniURL);
        function ModestRequest(UniURL){
            var passData=('BIGxTransporterArray='+HAZ_JSONx1);
	    //console.log("Sending : in PageLoadQueryDBxAJAX :: "+HAZ_JSONx1);
            if(window.XMLHttpRequest){
                ModesthttpRequest = new XMLHttpRequest();
            }else if(window.ActiveXObject){
                try{
                    ModesthttpRequest = new ActiveXObject("Msxml2.XMLHTTP");
                } 
            catch(e){
                try{
                    ModesthttpRequest = new ActiveXObject("Microsoft.XMLHTTP");
                } 
                catch(e){}
                }
            }
            if(!ModesthttpRequest){
                alert('There has been an unusual problem.  Could you check for Internet Connection and try again?');
                return false;
            }
            ModesthttpRequest.open('POST', UniURL, true);
            ModesthttpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            ModesthttpRequest.onreadystatechange = function(){
                if (ModesthttpRequest.readyState==4 && ModesthttpRequest.status==200){
                    AjaxRESPONSE_CatsINIT = ModesthttpRequest.responseText;
                    TriggerA = 0;
		    UNIVERSALthing = ModesthttpRequest.status;
		    UniMutexMuleInnyx1 = 99;
                }
            }
            ModesthttpRequest.send(passData);
        }
    }
    DoItLikeSo();
}  //EOFunc NOTASxWriterQueryDBxAJAX


// 3. The Catch Return and Provision Relevant Vars:
function RETURNEDxFromAJAX_TestCATZ(){

	var EvzEh = document.getElementById("ExpectingX");
	EvzEh.innerHTML = "It is raining Cats!";

	var Evz = document.getElementById("ActualTESTxData");
	Evz.innerHTML = AjaxRESPONSE_CatsINIT;
}

/* ###### Endof Main Function TEST *CATS*   ########################### */
/* #################################################################### */
/* #################################################################### */




/* #################################################################### */
/* #################################################################### */
/* ###### Begin Main Function TEST *DOGZ*   ########################### */

// 1. Function To SEND Data:   ~~~~~~~~~~~~~~~~~~~~~~~~  FiringOFFxDogzTESTxDATA()
// 2. An actual bygolly AJAX:     ~~~~~~~~~~~~~~~~~~~~~  TEST_2nd_QueryAJAX()
// 3. The Catch Return and Provision Vars:  ~~~~~~~~~~~  RETURNEDxFromAJAX_TestDOGZ()

// 1. Function To SEND Data:
function FiringOFFxDogzTESTxDATA(x){

	ForInternal=x;
	// Usual schtick: *ForInternal* set by user button clicks; let server know what to do with sent data.	
	DataTransgressionLOL["CntrlSwitchVarCliDctd"] = ForInternal;

	if(ForInternal == 209){
		UniITEMxCode = "Animal We EXPECT is DOGZ."
	}

	// $RExPClockItem = $HearSayLOL->ReITEMxCode;
	DataTransgressionLOL["ReITEMxCode"] = UniITEMxCode;

	HAZ_JSONx2 = JSON.stringify(DataTransgressionLOL);

	TriggerB = 31;
}

// 2. An actual bygolly AJAX:
function TEST_2nd_QueryAJAX(){
    function DoItLikeSo(){
	var UniURL;
	    //  /var/www/QueueManagerDEMO.php
	    UniURL = "QueueManagerDEMO.php";  
	    ModestRequest(UniURL);
        function ModestRequest(UniURL){
            var passData=('BIGxTransporterArray='+HAZ_JSONx2);
	    //console.log("Sending : in PageLoadQueryDBxAJAX :: "+HAZ_JSONx2);
            if(window.XMLHttpRequest){
                ModesthttpRequest = new XMLHttpRequest();
            }else if(window.ActiveXObject){
                try{
                    ModesthttpRequest = new ActiveXObject("Msxml2.XMLHTTP");
                } 
            catch(e){
                try{
                    ModesthttpRequest = new ActiveXObject("Microsoft.XMLHTTP");
                } 
                catch(e){}
                }
            }
            if(!ModesthttpRequest){
                alert('There has been an unusual problem.  Could you check for Internet Connection and try again?');
                return false;
            }
            ModesthttpRequest.open('POST', UniURL, true);
            ModesthttpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            ModesthttpRequest.onreadystatechange = function(){
                if (ModesthttpRequest.readyState==4 && ModesthttpRequest.status==200){
                    AjaxRESPONSE_DogzINIT = ModesthttpRequest.responseText;
                    TriggerB = 0;
		    UNIVERSALthing = ModesthttpRequest.status;
		    UniMutexMuleInnyx2 = 99;
                }
            }
            ModesthttpRequest.send(passData);
        }
    }
    DoItLikeSo();
}  //EOFunc TEST_2nd_QueryAJAX


// 3. The Catch Return and Provision Relevant Vars:
// AjaxRETURNEDxNOTASxBusiness
function RETURNEDxFromAJAX_TestDOGZ(){

	var EvzEh = document.getElementById("ExpectingX");
	EvzEh.innerHTML = "Now raining Dogs!";

	var Evz = document.getElementById("ActualTESTxData");
	Evz.innerHTML = AjaxRESPONSE_DogzINIT;
}

/* ###### Endof Main Function TEST *DOGZ*   ########################### */
/* #################################################################### */
/* #################################################################### */




/* ######################################################################## */
/* ######################################################################## */
/* ######  Begin Main Function TEST *Unicorns*  ########################### */

// 1. Function To SEND Data:   ~~~~~~~~~~~~~~~~~~~~~~~~  FiringOFFxRANDOMxShit()
// 2. An actual bygolly AJAX:     ~~~~~~~~~~~~~~~~~~~~~  TEST_3rd_QueryAJAX()
// 3. The Catch Return and Provision Vars:  ~~~~~~~~~~~  RETURNEDxFromTriggeringUnicornSTORM()

// NOTE, that unlike Cats N Dogz, this function is called Outside of QueueManager.

// 1. Function To SEND Data:
function FiringOFFxRANDOMxShit(x){
	UnicornInternals=x;
	var UnicornFarts;
	// Usual schtick: *ForInternal* set by user button clicks; let server know what to do with sent data.	
	FlightOfFancy["CntrlSwitchVarCliDctd"] = UnicornInternals;
	if(UnicornInternals == 9001){
		UnicornFarts = "Just Make Shit Up.";
	}
	// $RExPClockItem = $HearSayLOL->ReITEMxCode;
	FlightOfFancy["ReITEMxCode"] = UnicornFarts;

	HAZ_JSONx3 = JSON.stringify(FlightOfFancy);

	// Here, the AJAX is in a function chain:
	TEST_3rd_QueryAJAX();
}

// 2. An actual bygolly AJAX:
function TEST_3rd_QueryAJAX(){
    function DoItLikeSo2(){
	var UniURL;
	    //  /var/www/QueueManagerDEMO.php
	    UniURL = "QueueManagerDEMO.php";  
	    ModestRequest2(UniURL);

        //  We are forced to use a unique name for this function which initiates an AJAX:
        function ModestRequest2(UniURL){
            var passData=('XWingRunaboutFighter='+HAZ_JSONx3);
	    //console.log("Sending : in TEST_3rd_QueryAJAX :: "+HAZ_JSONx3);
            if(window.XMLHttpRequest){
                ModesthttpRequest2 = new XMLHttpRequest();
            }else if(window.ActiveXObject){
                try{
                    ModesthttpRequest2 = new ActiveXObject("Msxml2.XMLHTTP");
                } 
            catch(e){
                try{
                    ModesthttpRequest2 = new ActiveXObject("Microsoft.XMLHTTP");
                } 
                catch(e){}
                }
            }
            if(!ModesthttpRequest2){
                alert('There has been an unusual problem.  Could you check for Internet Connection and try again?');
                return false;
            }
            ModesthttpRequest2.open('POST', UniURL, true);
            ModesthttpRequest2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            ModesthttpRequest2.onreadystatechange = function(){
                if (ModesthttpRequest2.readyState==4 && ModesthttpRequest2.status==200){
                    AjaxRESPONSE_ZOMG_Unicorns = ModesthttpRequest2.responseText;
                    RETURNEDxFromTriggeringUnicornSTORM(AjaxRESPONSE_ZOMG_Unicorns);
                }
            }
            ModesthttpRequest2.send(passData);
        }
    }
    DoItLikeSo2();
}  //EOFunc TEST_3rd_QueryAJAX


// 3. The Catch Return and Provision Relevant Vars:
// AjaxRESPONSE_ZOMG_Unicorns
function RETURNEDxFromTriggeringUnicornSTORM(AjaxRESPONSE_ZOMG_Unicorns){
	
	// Presentational; call to an Atomic ON OFF function:
	MVxRandomHINTxUnicorns();
	
	var Evz = document.getElementById("DisplayRANDOMxData");
	Evz.innerHTML = AjaxRESPONSE_ZOMG_Unicorns;

}

/* ######  Endof Main Function TEST *Unicorns*  ########################### */
/* ######################################################################## */
/* ######################################################################## */




/* ######################################################################## */
/* ######################################################################## */
/* ######  Begin Main Function TEST *Normalize*  ########################## */

function ReSetNormalizeEVZ(){
	var Inny1;
	var Inny2;
	var Inny3;

	Inny1 = document.getElementById("ActualTESTxData");	
	Inny1.innerHTML = "Ha.&nbsp;&nbsp;Sure, Whatevz!";

	Inny2 = document.getElementById("ExpectingX");
	Inny2.textContent = "";

	Inny3 = document.getElementById("DisplayRANDOMxData");
	Inny3.textContent = "";

	//  GUI:
	HDxRandomHINTxUnicorns();
	
}

/* ######  Endof Main Function TEST *Normalize*  ########################## */
/* ######################################################################## */
/* ###########(we think that word may not mean what you think)############# */



/* ######################################################################## */
/* ######################################################################## */
/* ######  Begin  ::  ATOMIC Functions Collection  ######################## */

function MVxRandomHINTxUnicorns(){
	document.getElementById("DisplayRANDOMxData").className = "on";
}
function HDxRandomHINTxUnicorns(){
	document.getElementById("DisplayRANDOMxData").className = "OFF";
}


/* ######  Endof  ::  ATOMIC Functions Collection  ######################## */
/* ######################################################################## */
/* ######################################################################## */

