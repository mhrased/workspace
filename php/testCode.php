<?php 
$x = '1';
$y = &$x;
$y = "2$y";


echo $x ."," .$y;