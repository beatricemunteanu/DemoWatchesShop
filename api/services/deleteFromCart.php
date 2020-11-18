<?php

#session_start();

$prodToCart = json_decode(file_get_contents("php://input", true));
$db_helper = new DBhelper;
$db_helper->deleteCartProducts($_GET['id']);

