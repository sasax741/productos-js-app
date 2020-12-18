class product {
  constructor(name, price, year) {
    this.name = name;
    this.price = price;
    this.year = year;
  }

}
class ui {
  addProduct() {

  }
  deleteProduct(){

  }
  showMessage(){

  }
}

// DOM event
document.getElementById('product-form').addEventListener('submit', function(e) {
    
     const name = document.getElementById('name').value;
     const price = document.getElementById('price').value;
     const year = document.getElementById('year').value;
    
     
    console.log(new product(name, price, year));

    
    e.preventDefault();

  });
