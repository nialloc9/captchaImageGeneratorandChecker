<?php
session_start();

$name = 'captcha';

//set content as image
header('Content-type: image/jpeg');

//get session variable
$text = $_SESSION[$name];

//set image properties
$font_size = 30;

$image_width = 110;
$image_height= 40;

//create image
$image = imagecreate($image_width, $image_height);
imagecolorallocate($image, 255, 255, 255);

//set text color
$text_color = imagecolorallocate($image, 0, 0, 0);

//set image lines
for($x=1; $x<=30; $x++){
    $x1 = rand(1, 100);
    $y1 = rand(1, 100);
    $x2 = rand(1, 100);
    $y2 = rand(1, 100);

    imageline($image, $x1, $y1, $x2, $y2, $text_color);
}


//set image text
imagettftext($image, $font_size, 0 , 15, 30, $text_color, 'captchaFont.ttf', $text);

//create jpeg
imagejpeg($image);

?>