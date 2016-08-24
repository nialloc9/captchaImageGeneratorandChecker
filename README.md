# captchaImageGeneratorandChecker
This is javascript and php captcha project for generating and confirming captcha images. 
It is designed to be reusable and simple to use. Include the files and check out the example.

# Instructions
1. Make sure jQuery is available to use in your project.
2. Include the js/captchaImage.js file in your project.
3. Read the code in teh script tags in index.html. This how we use the functionality.
4. Give the form that needs csrf protection a div with an id of your choice.
5. Give the button to check and to get a new image an id of your choice.
6. Give the input the user will use an id of your choice.
7. When the page loads call the function below and give relevant values:
  
        createCaptcha(captchaAreaId, captchaNumberInputId, captchaSessionName, pathToCheckCreateCaptchaSession, pathToCreateImagePhp, newCaptchaImageId, newCaptchaImageClass, callBackFunction)



captchaAreaId:
The id of the div the image will appear in.

captchaNumberInputId:
The id of the input the user will use.

captchaSessionName:
The name you want to call your captcha session(this must match the name of the session you check).

pathToCheckCreateCaptchaSession: 
The path to where you put the file 'CreateCheckCaptchaSession.php' (this path is from the file want the image to appear)

pathToCreateImagePhp: 
The path to where you put the file 'createImage.captcha.php' (this path is from the file want the image to appear)

newCaptchaImageId:
The id you want the image to have when it appears. (Note this is not the id of the div it appears in)

newCaptchaImageClass: 
The name of the class that holds the styling for the image.

callBackFunction: 
The name of an optional callback function. (Note: if you don't want to use a callback function add '' here)


Reload Image:
To add the reload functionality just call createCaptcha function again after an event.

Check value:
To check the value the user inputted matchs the captcha use:

         checkCaptcha(pathToCheckCreateImagePhp, coptchaName, userInputId, callBackFunction)
         
pathToCreateImagePhp: 
The path to where you put the file 'createImage.captcha.php' (this path is from the file want the image to appear)

coptchaName:
The name of the coptcha session value you want to check. (This should be the same as the name you gave when you created it.)

userInputId: 
The id of the input the user will use to enter the number.

callBackFunction:
The name of an optional callback function. (Note: if you don't want to use a callback function add '' here);

    

# Example
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <title>Captcha Image</title>

    <!-- CSS STYLES -->
    <link rel="stylesheet" href="css/styles.css">

    <!-- JS JQUERY-->
    <script src="js/jquery.js"></script>

    <!-- JS ADD COLOR INPUT BOX -->
    <script src="js/capthcaImage.js"></script>

    <!-- JS CUSTOM -->
    <script>
        //CREATE CAPTCHA CALLBACK FUNCTION
        function createCaptchaCallbackFunction(){
            //DO SOME AWESOME STUFF HERE
            $('#info').text('Type the number you see above.');
        }

        //CHECK CAPTCHA CALLBACK FUNCTION
        function checkCaptchaCallbackFunction(){
            $('#info').text('Its a match!..');
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
        </script>

         </head>
        <body>
          <div id="captchaImageArea"></div>
            <input type="text" id="userInput">
            <input type="button" value="New Image" id="newBtn"><input type="button" value="Check" id="checkBtn"><br>
            <p id="info">Type the number you see above.</p>
        </body>
      </html>
        
# NB
If you use this for production remove the console.log() statements from the js file.
