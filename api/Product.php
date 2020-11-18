<?php
class Product {

    #private
    public $name;
    public $_id;
    public $priceWoTaxes;
    public $tax;
    public $description;
    public $quantity;
    public $image;

#set/get
    public function __construct($_id = '',$name = '', $priceWoTaxes=null, $description = '',$quantity = null,$image = '' ) {
        $this->name = $name;
        $this->_id = $_id;
        $this->priceWoTaxes = $priceWoTaxes;
        $this->tax = 100*$price/19;
        $this->description = $description;
        $this->quantity = $quantity;
        $this->image = $image;
    }

    
}
