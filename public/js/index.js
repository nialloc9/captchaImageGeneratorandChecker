//CREATE CAPTCHA CALLBACK FUNCTION
function createCaptchaCallbackFunction(result){ //result = true if captcha created successfully

    //DO SOME AWESOME STUFF HERE LIKE GENERATING A CSRF TOKEN.. csrfGeneratorChecker available here: https://github.com/nialloc9/csrfProtection

    //result booleon check
    if(result){
        $('#info').text('Type the number you see above.');
    }
}


//CHECK CAPTCHA CALLBACK FUNCTION
function checkCaptchaCallbackFunction(result){ //result = true if user input is correct
    //DO SOME AWESOME STUFF HERE LIKE CHECKING ALL INPUTS ARE FILLED IN... inputChecker available here: https://github.com/nialloc9/inputChecker

    //result booleon check
    if(result){
        $('#info').text('Its a match!..');
    }else{
        $('#info').text('Please write the correct number.');
    }
}

$(document).ready(function(){
    createCaptcha('captchaImageArea', 'userInput', 'captcha', 'php/http/createCheckCaptchaSession.php', 'php/captchaImage/createImage.captchaImage.php', 'myNewCaptchaImage', 'captchaImageClass', createCaptchaCallbackFunction);

    $('#newBtn').click(function(){
        createCaptcha('captchaImageArea', 'userInput', 'captcha', 'php/http/createCheckCaptchaSession.php', 'php/captchaImage/createImage.captchaImage.php', 'myNewCaptchaImage', 'captchaImageClass', createCaptchaCallbackFunction);
    });

    $('#checkBtn').click(function(){
        checkCaptcha('php/http/createCheckCaptchaSession.php', 'captcha', 'userInput', checkCaptchaCallbackFunction);
    });
});