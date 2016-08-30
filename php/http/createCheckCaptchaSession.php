<?php
session_start();

            //.................GENERATE..................

//GENERATE FUNCTION
function generateCaptchaSession($name){

    //assign variables
    $result = 0;
    //delete previous session
    if(isset($_SESSION[$name]) || empty($_SESSION[$name])){
        unset($_SESSION[$name]);
    }

    //session check
        if(!isset($_SESSION[$name])){

            //create session
            $_SESSION[$name] = rand(1000,9999);

            //re-assign $result variable
            $result = 1;
        }

    echo $result;
}


//TASK CHECK.. createCapthcaSession
if(isset($_GET['task']) && $_GET['task'] == 'createCapthcaSession'){

    //check name
    if(isset($_GET['name']) && !empty($_GET['name'])){

        //assing more variables
        $name = $_GET['name'];

        //generate
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

    //data check
    if(isset($_GET['userInput']) && !empty($_GET['userInput'])){

        if(isset($_GET['name']) && !empty($_GET['name'])){

            //assign variables
            $userInput = $_GET['userInput'];
            $name = $_GET['name'];

            //pass data to function
            checkCaptchaSession($userInput, $name);

        }

    }
}
?>