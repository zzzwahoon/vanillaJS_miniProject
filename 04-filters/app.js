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
