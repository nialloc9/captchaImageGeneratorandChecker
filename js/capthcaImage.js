/**
 * Created by Niall on 24/08/2016.
 */

                //...................GENERATE....................

//CREATE CAPTCHA FUNCTION
function createCaptcha(captchaAreaId, captchaNumberInputId, captchaSessionName, pathToCheckCreateCaptchaSession, pathToCreateImagePhp, newCaptchaImageId, newCaptchaImageClass, callBackFunction){

    //ASSIGN VARIABLES
    var areaId = '#' + captchaAreaId;

    //HTTP REQUEST
    $.get(
        pathToCheckCreateCaptchaSession,
        {
            task: 'createCapthcaSession',
            name: captchaSessionName
        }
    ).
        error(function(){
            console.log('ERROR: createCaptha() http request failure in createCapthcaImage.http.js');
        }).
        success(function(data){
            if(data > 0){
                console.log('SUCCESS: captcha value ' + data +' found. Creating capthca session..');
                addCaptcha(captchaAreaId, captchaNumberInputId, pathToCreateImagePhp, newCaptchaImageId, newCaptchaImageClass, callBackFunction);
            }else{
                console.log('ERROR: creating capthca session');
            }
        });
}

//ADD IMAGE TO ELEMENT
function addCaptcha(captchaAreaId, captchaNumberInputId, pathToCheckCreateImagePhp, newCaptchaImageId, newCaptchaImageClass, callBackFunction){
    //ASSIGN VARIABLES
    var areaId = '#' + captchaAreaId;
    var inputArea = '#' + captchaNumberInputId;

    //ADD IMAGE
    $(areaId).html('<img src="' + pathToCheckCreateImagePhp + '?' + (new Date().getTime()) +'" alt="security code" id="'+ newCaptchaImageId +'" class="'+ newCaptchaImageClass +'" width="50%"/>');

    //CLEAR INPUT
    $(inputArea).val('');

    //DEVELOPER CALL BACK FUNCTION
    if(callBackFunction != ''){
        callBackFunction();
    }
}

                //...................CHECK....................

//CHECK CAPTCHA CALLBACK FUNCTION(not developer)
function checkCaptchaCallback(callBackfunction){

    //DEVELOPER CALLBACK FUNCTION
    if(callBackfunction != ''){
        callBackfunction();
    }
}

//CHECK CAPTCHA SESSION
function checkCaptcha(pathToCheckCreateImagePhp, coptchaName, userInputId, callBackFunction){
    //ASSIGN VARIABLES
    var id = '#' + userInputId;

    var userVal = $(id).val();

    $.get(
        pathToCheckCreateImagePhp,
        {
            task: 'checkCaptchaSession',
            userInput: userVal,
            name: coptchaName
        }
    ).
        error(function(){
            console.log('ERROR: checking capthca session');
        }).
        success(function(data){
            console.log('SUCCESS: checking capthca session.. returned: ' + data);
            //DATA CHECK
            if(data > 0){
                console.log("SUCCESS: Captcha session and user data match.");
                checkCaptchaCallback(callBackFunction);
            }else{
                console.log("ERROR: Captcha session and user data do not match.");
            }
        });
}