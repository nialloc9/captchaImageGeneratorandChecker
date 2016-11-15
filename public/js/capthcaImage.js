/**
 * Created by Niall on 25/08/2016.
 */

//...................GENERATE....................

//CREATE CAPTCHA FUNCTION
function createCaptcha(captchaAreaId, captchaNumberInputId, captchaSessionName, pathToCheckCreateCaptchaSession, pathToCreateImagePhp, newCaptchaImageId, newCaptchaImageClass, callBackFunction){

    //assign variable
    var areaId = '#' + captchaAreaId;

    //http request
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

            //assign variable
            var result = false;

            if(data == 1){
                console.log('SUCCESS: captcha value ' + data +' found. Creating capthca session..');
                addCaptcha(captchaAreaId, captchaNumberInputId, pathToCreateImagePhp, newCaptchaImageId, newCaptchaImageClass);

                result = true;
            }else{
                console.log('ERROR: creating capthca session');
            }

            //callback function
            if(callBackFunction != ''){
                callBackFunction(result);
            }
        });
}

//ADD IMAGE TO ELEMENT
function addCaptcha(captchaAreaId, captchaNumberInputId, pathToCheckCreateImagePhp, newCaptchaImageId, newCaptchaImageClass){

    //assign variables
    var areaId = '#' + captchaAreaId;
    var inputArea = '#' + captchaNumberInputId;

    //add image
    $(areaId).html('<img src="' + pathToCheckCreateImagePhp + '?' + (new Date().getTime()) +'" alt="security code" id="'+ newCaptchaImageId +'" class="'+ newCaptchaImageClass +'" width="50%"/>');

    //clear input
    $(inputArea).val('');
}

//CHECK CAPTCHA SESSION
function checkCaptcha(pathToCheckCreateImagePhp, coptchaName, userInputId, callBackFunction){

    //assign variables
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
            //assign variable
            var result = false;

            console.log('SUCCESS: checking capthca session.. returned: ' + data);

            //data check
            if(data == 1){
                console.log("SUCCESS: Captcha session and user data match.");

                //change result
                result = true;
            }else{
                console.log("ERROR: Captcha session and user data do not match.");
            }

            //callback function
            if(callBackFunction != ''){
                callBackFunction(result);
            }
        });
}


