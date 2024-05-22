export class UI {

  // 상품 추가
  addProduct(product) {
    const productList = document.getElementById('product-list');
    const element = document.createElement('div');

    element.innerHTML = `
      <div class="u-full-width">
        <div>
          <strong>Product name</strong>: ${product.name} -
          <strong>Product price</strong>: ${product.price} -
          <strong>Product year</strong>: ${product.year} -
          <a href="#" name="delete">X</a>
        </div>
      </div>
    `
    productList.appendChild(element);
  }

  // 메시지 출력
  showMessage(message, cssClass) {
    const div = document.createElement('div');
    div.classList = `alert ${cssClass}`;
    div.appendChild(document.createTextNode(message));

    const container = document.querySelector('.container');
    const form = document.querySelector('#product-form');

    container.insertBefore(div, form);

    setTimeout(() => {
      document.querySelector('.alert').remove();
    }, 3000);
  }

  // reset form
  resetForm() {
    document.getElementById('product-form').reset();
  }

  // delete product
  deleteProduct(element) {
    if(element.name === 'delete') {
      element.parentElement.parentElement.remove();
      this.showMessage('The product has been deleted successfully', 'success')
    }
  }
}