<?php
header("Access-Control-Allow-Methods: POST");
require_once '../DBhelper.php';
require '/var/www/html/vendor/autoload.php';

#session_start();


$db_help = new DBhelper();

$products = $db_help->getCartProducts();
if (empty($products))
{
    echo json_encode(
        array("message" => "No products found.")
    );
}
else 
{
    $sum = 0;
    foreach($products as $product)
    {
            if(isset($product->priceWoTaxes) && isset($product->tax) && isset($product->quantity))
            {
                    $sum += ($product->priceWoTaxes + $product->tax) * $product->quantity;
    
            } 
    }

    echo json_encode(["data"=>["prod"=>$products, "total"=>$sum]]);

}


