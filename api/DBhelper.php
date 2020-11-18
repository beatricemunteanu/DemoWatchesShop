<?php
require_once '../DBconnect.php';
require_once '../Product.php';
require '/var/www/html/vendor/autoload.php';

class DBhelper {
    private $database_conn;

    function __construct(){
        $this->database_conn = (new DBconnect())->getDatabase();
    }
    public function drop()
    {
        $this->database_conn->watchesShop->products->drop();

    }
    public function getProducts() {
        $products = array();
        $db_products = $this->database_conn->watchesShop->products->find();
        if (is_array($db_products) || is_object($db_products))
        {
            foreach ($db_products as $db_product) {
                $product = new Product($db_product['_id'], 
                                        $db_product['name'], 
                                        $db_product['priceWoTaxes'],
                                        $db_product['description'],
                                        $db_product['quantity'],
                                        $db_product['image'] );                 
                array_push($products, $product);
             }
    
        }
        return $products;
    }
    public function getProductById($_id) {
        $db_product = $this->database_conn->watchesShop->products->findOne(['_id'=> (string)$_id]);        
        if (is_object($db_product)) 
                return new Product($db_product['_id'], 
                                $db_product['name'], 
                                $db_product['priceWoTaxes'],
                                $db_product['description'],
                                $db_product['quantity'],
                                $db_product['image']);  
        
        return null;
    }

    public function getProductCartById($idCart,$_id) {
        $db_product = $this->database_conn->watchesShop->cart->findOne(['_id'=> (string)$_id, 'products'=>['_id' =>$_id]]);        
        echo "djsdhkf";
        echo var_dump($db_product);
        if (is_object($db_product)) 
                return new Product($db_product['_id'], 
                                $db_product['name'], 
                                $db_product['priceWoTaxes'],
                                $db_product['description'],
                                $db_product['quantity'],
                                $db_product['image']);  
        
        return null;
    }
    public function addProduct($product){
        $col_products = $this->database_conn->watchesShop->products;
        $db_products = $col_products->insertOne($product);
    }

    public function addProductCart($idCart,$product){
        $cart_products = $this->database_conn->watchesShop->cart;
        $find_products = $cart_products->findOne(['_id'=> strval($_id)]);

        if (is_array($find_products) || is_object($find_products))
            $$cart_products->updateOne(["_id"=> $idCart],
                [ '$push'=> ['products' => $product]]);

        else

            $cart_products->insertOne(['_id'=> $idCart, 'products'=>[$product]]);
    }

    public function updateProdCart($idCart,$idPeod,$quantity){
        $cart_products = $this->database_conn->watchesShop->$cart;
        $cart_products->updateOne(
            ['_id'=> strval($idCart), 'products'=>['_id'=> strval($idProd)]],
            [ '$set' => ['quantity' => $quantity ]]);
    }

    public function getCartProducts() {
        $products = array();
        $db_products = $this->database_conn->watchesShop->cart->find();
        if (is_array($db_products) || is_object($db_products))
        {
            foreach ($db_products as $db_product) {
                $product = new Product($db_product['_id'], 
                                        $db_product['name'], 
                                        $db_product['priceWoTaxes'],
                                        $db_product['description'],
                                        $db_product['quantity'],
                                        $db_product['image'] );                 
                array_push($products, $product);
             }
    
        }
        return $products;
    }

    public function deleteCartProducts($_id) {
            $db_products = $this->database_conn->watchesShop->cart->remove(['_id'=> (string)$_id]);        
    }
}