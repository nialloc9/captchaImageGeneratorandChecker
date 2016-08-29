# captchaImageGeneratorandChecker
This is javascript and php captcha project for generating and confirming captcha images. 
It is designed to be reusable and simple to use. Include the files and check out the example.

# Instructions
1. Make sure jQuery is available to use in your project.
2. Include the js/captchaImage.js file in your project.
3. Read the code in the script tags in index.html. This how we use the functionality.
4. Give the form that needs captcha image a div with an id of your choice.
5. Give the button to check and to get a new image an id of your choice.
6. Give the input the user will use an id of your choice.
7. Create 2 callback functions to pass as arguements.
8. If you want to change the name of the session from the default 'captcha' go to the createImage.php file and change the variable $name to a differant name. (for example if you had a page with 2 differant capthca images).
9. When the page loads call the function below and give relevant values:
  
        createCaptcha(captchaAreaId, captchaNumberInputId, captchaSessionName, pathToCheckCreateCaptchaSession, pathToCreateImagePhp, newCaptchaImageId, newCaptchaImageClass, callBackFunction)



captchaAreaId:
The id of the div the image will appear in.

captchaNumberInputId:
The id of the input the user will use.

captchaSessionName:
The name you want to call your captcha session(this must match the name of the session you check). Each time we create a new capthca with a differant name we have to create another instance of the CreateImagePhp file and change the variable $name to the one we will call our capthca session.

pathToCheckCreateCaptchaSession: 
The path to where you put the file 'CreateCheckCaptchaSession.php' (this path is from the file want the image to appear)

pathToCreateImagePhp: 
The path to where you put the file 'createImage.captcha.php' (this path is from the file want the image to appear)

newCaptchaImageId:
The id you want the image to have when it appears. (Note this is not the id of the div it appears in)

newCaptchaImageClass: 
The name of the class that holds the styling for the image.

callBackFunction: 
The name of an callback function to handle the boolean data value returned.


8. Reload Image:
To add the reload functionality just call createCaptcha function again after an event.

9. Check value:
To check the value the user inputted matchs the captcha use:

         checkCaptcha(pathToCheckCreateImagePhp, coptchaName, userInputId, callBackFunction)
         
pathToCreateImagePhp: 
The path to where you put the file 'createImage.captcha.php' (this path is from the file want the image to appear)

coptchaName:
The name of the coptcha session value you want to check. (This should be the same as the name you gave when you created it.)

userInputId: 
The id of the input the user will use to enter the number.

callBackFunction:
The name of an callback function to handle the boolean data value returned.

    

# Example
            //CREATE CAPTCHA CALLBACK FUNCTION
            function createCaptchaCallbackFunction(data){

                //DO SOME AWESOME STUFF HERE LIKE GENERATING A CSRF TOKEN.. csrfGeneratorChecker available here: https://github.com/nialloc9/csrfProtection

                //data booleon check
                if(data){
                    $('#info').text('Type the number you see above.');
                }
            }


            //CHECK CAPTCHA CALLBACK FUNCTION
            function checkCaptchaCallbackFunction(data){ //data = true if user input is correct
                //DO SOME AWESOME STUFF HERE LIKE CHECKING ALL INPUTS ARE FILLED IN... inputChecker available here: https://github.com/nialloc9/inputChecker

                //data booleon check
                if(data){
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
        
# NB
If you use this for production remove the console.log() statements from the js file.
