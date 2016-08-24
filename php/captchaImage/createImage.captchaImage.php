<?php
session_start();

//SET CONTENT AS IMAGE
header('Content-type: image/jpeg');

//GET SESSION VALUE
$text = $_SESSION['captcha'];

//SET IMAGE PROPERTIES
$font_size = 30;

$image_width = 110;
$image_height= 40;

//CREATE IMAGE
$image = imagecreate($image_width, $image_height);
imagecolorallocate($image, 255, 255, 255);

//SET COLOR TEXT
$text_color = imagecolorallocate($image, 0, 0, 0);

//SET IMAGE LINES
for($x=1; $x<=30; $x++){
    $x1 = rand(1, 100);
    $y1 = rand(1, 100);
    $x2 = rand(1, 100);
    $y2 = rand(1, 100);

    imageline($image, $x1, $y1, $x2, $y2, $text_color);
}


//SET IMAGE TEXT
imagettftext($image, $font_size, 0 , 15, 30, $text_color, 'captchaFont.ttf', $text);

//CREATE JPEG
imagejpeg($image);

?>