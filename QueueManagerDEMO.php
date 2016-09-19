<?php
/*
FileINFO BEGIN
Thursday, 15 September 2016. 10:57am.
Vancouver, B.C.
FileNAME  ::  "QueueManagerDEMO.php"
Derived From CODEBASE *Full Feature Platform*
SubProject :: Belongs To *QueueManDEMO.js*
END FileINFO
*/


/*
//  ##################################################################################################  //
//  ######################   OUTLINE  of  SCRIPT  "QueueManagerDEMO.php"   ###########################  //

OUTLINE
VARIABLES INITS
POSTS  To  Retrieve
Disposition of USER Actions Requests and System Biz
ResponseText

//  ######################   OUTLINE  of  SCRIPT  "QueueManagerDEMO.php"   ###########################  //
//  ##################################################################################################  //
*/


//  #######################################################################################  //
//  #######################################################################################  //
//  ###############                  VARIABLES INITS                      #################  //
//  #######################################################################################  //

//  Standard Personal Set:
$HtmlxLB="<br />";$LB = "\r\n";$ROFLMFAO=0;$LOL = "";$Comma = ",";$EOW = "☭";$ENDxOfxProof = "∎";$EmptySET = "∅";
$FS = ".";$Bar = "|";$FairAndSquare = 10000;$SpecialChar = "|";
$FairAndSquare = 0;$LetsUseTHIS = "";$DAxSQL = "";$LetsUseTHISxALT = "";$MessageSUCCESS = "";

//  Script~Specific EnvVars
$MySERVER = $_SERVER['QueueManagerDEMO.php'];
$PHP_SELF = "";
$PHP_SELF = "QueueManagerDEMO.php";

//  POST Commons:
$CommonsComplaint = "";
$CommonsMalcontent = "";
$CntrlVar = 0;
$ClientSpecdMode = 0;
$DivinerOf = "";
$SOMExDamnPOSTxISACTIVE = 0;
$BoatyMcBoatFace = 0;

// POST 1ne *207*
$Channel1neMcBoatFace = 0;
$GodDamnOnlyVisitWhenAuthourized = 0;
// POST 2wo *209*
$Channel2woMcBoatFace = 0;
$OrRiskGettingShotDamnit = 0;

//  Post # 3hree:


set_time_limit(30);

//  #######################################################################################  //
//  ###############                  VARIABLES INITS                      #################  //
//  #######################################################################################  //
//  #######################################################################################  //




//  #################################################################################################  //
//  #################################################################################################  //
//  ####################################   POSTS  To  Retrieve    ###################################  //
//  #################################################################################################  //


//  *207* / *209*
//  POST :: The General CASE :: An INCOMING POST : Read SwitchVAR and Use For Internal Routing

$CommonsComplaint = $_POST['BIGxTransporterArray'];
if($CommonsComplaint != ""){
	$DivinerOf = json_decode($CommonsComplaint, true);
	$SOMExDamnPOSTxISACTIVE = 1;
	$ClientSpecdMode = $DivinerOf['CntrlSwitchVarCliDctd'];
	if($ClientSpecdMode == 207){
		$GodDamnOnlyVisitWhenAuthourized = 0;
		$OrRiskGettingShotDamnit = 1;
		$Channel1neMcBoatFace = 777;
	}
	if($ClientSpecdMode == 209){
		$GodDamnOnlyVisitWhenAuthourized = 1;
		$OrRiskGettingShotDamnit = 0;
		$Channel2woMcBoatFace = 777;
	}
}


//  ########################################################################################  //
//  POST #1ne  *207* Regular [ Visit ] button~click @ Client. HOURS Report Requests, VARIOUS
//  TheUPTOPx207Vars

if($SOMExDamnPOSTxISACTIVE == 1 && $GodDamnOnlyVisitWhenAuthourized == 0 && $Channel1neMcBoatFace == 777){

	//  $DivinerOf = json_decode($CommonsComplaint, true);
	//@1
	$CntrlVar = $DivinerOf['CntrlSwitchVarCliDctd'];  // 207 // OK for sure.
	//@2
	$ProjectFOCUS = $DivinerOf['ReITEMxCode']; // OK for sure.

	$BoatyMcBoatFace = 7;
	$InternalRouter = 43;
	$GodDamnOnlyVisitWhenAuthourized = 1;
}


//  Basement207VarsDisp
//  POST #1ne  *207* Regular [ Visit ] button~click @ Client. HOURS Report Requests, VARIOUS
//  ########################################################################################  //



//  #####################################################################################  //
//  POST #2wo  *209* Regular [ Visit ] button~click @ Client. HOURS WRITES Query, VARIOUS
//  TheUPTOPx209Vars
if($SOMExDamnPOSTxISACTIVE == 1 && $OrRiskGettingShotDamnit == 0 && $Channel2woMcBoatFace == 777){

	//  $DivinerOf = json_decode($CommonsComplaint, true);
	$CntrlVar = $DivinerOf['CntrlSwitchVarCliDctd'];  // 207 // OK for sure.
	$ProjectFOCUS = $DivinerOf['ReITEMxCode']; // OK for sure.

	$BoatyMcBoatFace = 7;
	$InternalRouter = 47;
}

//  POST #2wo  *209* Regular [ Visit ] button~click @ Client. HOURS WRITES Query, VARIOUS
//  ########################################################################################  //



//  #####################################################################################  //
//  POST #3hree  [ Visit ] button~click @ Client.:: Random TEST

$CommonsMalcontent = $_POST['XWingRunaboutFighter'];
if($CommonsMalcontent != "" && $BoatyMcBoatFace != 7){
	$DivinerOf = json_decode($CommonsMalcontent, true);


	//  $DivinerOf = json_decode($CommonsComplaint, true);
	$CntrlVar = $DivinerOf['CntrlSwitchVarCliDctd'];  // 357 // OK for sure.
	$ProjectFOCUS = $DivinerOf['ReITEMxCode']; // OK for sure.

	$InternalRouter = 71;
}

//  POST #3hree  [ Visit ] button~click @ Client.:: Random TEST
//  ########################################################################################  //



//  #################################################################################################  //
//  ####################################   POSTS  To  Retrieve    ###################################  //
//  #################################################################################################  //
//  #################################################################################################  //



//  #############################################################################################  //
//  #############################################################################################  //
//  #################    Disposition of USER Actions Requests and System Biz    #################  //

if($InternalRouter == 43 || $InternalRouter == 47){
	if($ProjectFOCUS == "Animal We EXPECT is CATS."){
		$TESTxReturnAnimalType = "It is raining Cats!";
		sleep(4);
	}
	if($ProjectFOCUS == "Animal We EXPECT is DOGZ."){
		$TESTxReturnAnimalType = "Now raining Dogs!";
		sleep(3);
	}
	$LOL = $TESTxReturnAnimalType;	
}


if($InternalRouter == 71){
	if($ProjectFOCUS == "Just Make Shit Up."){
		$TESTxReturnAnimalType = "It is raining Unicorns.  True Story.";
	}
	$LOL = $TESTxReturnAnimalType;	
}

//  #################    Disposition of USER Actions Requests and System Biz    #################  //
//  #############################################################################################  //
//  #############################################################################################  //


$responseText=$LOL;
echo $responseText;?>

