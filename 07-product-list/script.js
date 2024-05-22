import { Product } from './product.js';
import { UI } from './ui.js';

const formEl = document.getElementById('product-form');
const nameInputEl = document.getElementById('name');
const priceInputEl = document.getElementById('price');
const yearInputEl = document.getElementById('year');
formEl.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = nameInputEl.value;
  const price = priceInputEl.value;
  const year = yearInputEl.value;

  const product = new Product(name, price, year);

  const ui = new UI();

  if(name === '' || price === '' || year === '') {
    return ui.showMessage('Insert data into all blank fields','error')
  }
  
  // 추가
  ui.addProduct(product);
  // 성공 메시지
  ui.showMessage('The product has been added successfully','success')

  // field 초기화
  ui.resetForm();

}) 

document.getElementById('product-list').addEventListener('click', (e) => {
  const ui = new UI();

  ui.deleteProduct(e.target);
})