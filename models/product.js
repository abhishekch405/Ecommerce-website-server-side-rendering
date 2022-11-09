const db=require('../util/database');
const Cart = require('./cart');


module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    return db.execute('Insert into products(title,price,description,imageUrl) Values(?,?,?,?)',
    [this.title,this.price,this.description,this.imageUrl])
  }

  static deleteById(id) {
    
  }

  static fetchAll() {
    return db.execute('Select * From products');
  }

  static findById(id) {   

    return db.execute('SELECT * FROM products WHERE products.id=?',[id]);
    
  }
};
