<?php
session_start();
require_once '../FakeDB.php';
require_once '../DBhelper.php';
header("Content-Type: application/json; charset=UTF-8");
require '/var/www/html/vendor/autoload.php';



$db_help = new DBhelper();
$db_help->drop();

$db_help->addProduct(new Product('1', 'Watch1', 33,'cheap watch',2,''));
$db_help->addProduct(new Product('2', 'Watch4', 378,'expensive watch',4,''));

$products = $db_help->getProducts();
if (empty($products))
{
    echo json_encode(
        array("message" => "No products found.")
    );
}

else echo json_encode(["data"=>$products,"id-Cart"=>uniqid()]);
