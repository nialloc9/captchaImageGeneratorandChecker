<?php
session_start();

            //.................GENERATE..................

//GENERATE FUNCTION
function generateCaptchaSession($name){
    //DELETE PREVIOUS SESSION
    if(isset($_SESSION[$name]) || empty($_SESSION[$name])){
        unset($_SESSION[$name]);
    }

    //SESSION CHECK
        if(!isset($_SESSION[$name])){
            //CREATE SESSION
            $_SESSION[$name] = rand(1000,9999);

            //RETURN VALUE
            echo $_SESSION[$name];
        }else{
            //RETURN VALUE
            echo $_SESSION[$name];
        }
}


//TASK CHECK.. createCapthcaSession
if(isset($_GET['task']) && $_GET['task'] == 'createCapthcaSession'){

    //CHECK NAME
    if(isset($_GET['name']) && !empty($_GET['name'])){

        //ASSING VARIABLES
        $name = $_GET['name'];
        //GENERATE
        generateCaptchaSession($name);
    }

}

            //.................CHECK..................

//CHECK FUNCTION
function checkCaptchaSession($userCaptchaInput, $name){
    if($userCaptchaInput == $_SESSION[$name]){
        echo 1;
    }else{
        echo 0;
    }
}

//TASK CHECK.. checkCaptchaSession
if(isset($_GET['task']) && $_GET['task'] == 'checkCaptchaSession'){
    //DATA CHECK
    if(isset($_GET['userInput']) && !empty($_GET['userInput'])){

        if(isset($_GET['name']) && !empty($_GET['name'])){

            //ASSIGN VARIABLES
            $userInput = $_GET['userInput'];
            $name = $_GET['name'];

            //PASS DATA TO FUNCTION
            checkCaptchaSession($userInput, $name);

        }

    }
}
?>