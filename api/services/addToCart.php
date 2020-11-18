<?php
header("Access-Control-Allow-Methods: POST");
require_once '../DBhelper.php';
require '/var/www/html/vendor/autoload.php';


$db_helper = new DBhelper;
$prodToCart = json_decode(file_get_contents("php://input", true));
$productById = $db_helper->getProductById($prodToCart->id);

if(!empty($productById))
{   
    $productByIdCart = $db_helper->getProductCartById($prodToCart->idCart,$prodToCart->id);
    if(!empty($productByIdCart))
    {   
        echo var_dump($productByIdCart);
        $newQuantity = $productByIdCart->quantity + $prodToCart->quantity;
        $db_helper->updateProdCart($prodToCart->id,$prodToCart->idCart,$newQuantity);
        #$db_helper->addProductCart($prodToCart->idCart,$productById);  
    }
    else
        $db_helper->addProductCart($prodToCart->idCart,$productById);
}

echo json_encode($db_help->getProductsCart());


