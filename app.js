class Product {
  constructor(name, price, year) {
    this.name = name;
    this.price = price;
    this.year = year;
  }

}
class UI {
  addProduct(product)
  {
    const productList = document.getElementById('product-list');
    var element = document.createElement('div');
    element.innerHTML = `
      <div class="card text-center mb-4">
        <div class="card-body">
          <strong>Product Name: </strong> ${product.name}
          <strong>Product Price: </strong> ${product.price}
          <strong>Product Year: </strong> ${product.year}
          <a href="#" class="btn btn-danger" name="delete">Borrar</a>
        </div>
      </div>
    `;
    productList.appendChild(element);
    //this.resetForm()
  }
  resetForm()
  {
      document.getElementById('product-form').reset();
  }
  deleteProduct(element)
  {
    if (element.name === 'delete') {
      element.parentElement.parentElement.parentElement.remove();
      this.showMessage('Producto eliminado satisfactoriamente', 'danger');
    }
  }
  showMessage(message, cssClass)
  {
    const div = document.createElement('div');
    div.className = `alert alert-${cssClass}`;
    div.appendChild(document.createTextNode(message));
    //
    const container = document.querySelector('.container');
    const app = document.querySelector('#App');
    container.insertBefore(div, app);
    setTimeout(function(){
      document.querySelector('.alert').remove();
    }, 3000);
  }
}

// DOM event
document.getElementById('product-form').addEventListener('submit', function(e) {

     const name = document.getElementById('name').value;
     const price = document.getElementById('price').value;
     const year = document.getElementById('year').value;

    const product = new Product(name, price, year);

    const ui = new UI();
    if (name === '' || price === '' || year === '') {
        return ui.showMessage('Complete el formulario por favor!', 'danger');
    }
    else {
      ui.addProduct(product);
      ui.resetForm();
      ui.showMessage('Producto agregado satisfactoriamente', 'success');
    }

    e.preventDefault();

  });
document.getElementById('product-list').addEventListener('click', function(e){
  const ui = new UI();
  ui.deleteProduct(e.target);
});
