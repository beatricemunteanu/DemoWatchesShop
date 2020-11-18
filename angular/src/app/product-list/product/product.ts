export class Product {

      _id:   number
      name: string
      price: number
      priceWoTaxes: number
      tax: number
      quantity: number
      description:string
      image:string

      constructor(id, name, priceWoTaxes = 0,tax=0, quantity=0,description = '', image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR608TWmLRWFNYPlY5xgKkgZPYe7mwv0GDMDtAS9nRdlVo4aytG') {
    this._id = id
    this.name = name
    this.description = description
    this.priceWoTaxes = priceWoTaxes
    this.tax = tax
    this.quantity = quantity
    this.image = image
  }
}
