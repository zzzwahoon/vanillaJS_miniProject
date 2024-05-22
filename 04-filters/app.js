const productsContainerEl = document.querySelector('.products-container');

const displayProducts = () => {
  productsContainerEl.innerHTML = products.map((product) => {
    const { id, title, image, price } = product;
    return `<article class="product" data-id="${id}">
    <img
      src="${image}"
      alt="product-img"
      class="product-img img"
    />
    <div>
      <h5 class="product-name">${title}</h5>
      <span class="product-price">${price}</span>
    </div>
  </article>`
  })
  .join('');
}

displayProducts();

const compainesEl = document.querySelector('.companies');

const displayButtons = () => {
  const buttons = [
    'all',
    ...new Set(products.map(product => product.company))
  ]
    compainesEl.innerHTML = buttons
    .map((company) => {
      return `<button class="company-btn" data-id="${company}">${company}</button>`
    })
    .join('');
  
}

displayButtons();