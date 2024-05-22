// 모든 상품 나열하기
const productsContainerEl = document.querySelector('.products-container');

// 원본 데이터 보존, 불변성
let filteredProducts = [...products];
///////

// 검색
const formEl = document.querySelector('.input-form');
const searchInputEl = document.querySelector('.search-input');

formEl.addEventListener('keyup', () => {
  const inputValue = searchInputEl.value;

  filteredProducts = products.filter(product => {
    return product.title.toLowerCase().includes(inputValue);
  })

  displayProducts();
})


const displayProducts = () => {
  productsContainerEl.innerHTML = filteredProducts.map((product) => {
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
///////

// 상품 회사 이름 나열하기 (메뉴 버튼)
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
////////

// 필터링 기능
compainesEl.addEventListener('click', (e) => {
  const el = e.target;
  console.log(el);
  if(el.classList.contains('company-btn')) {
    if(el.dataset.id === 'all') {
      filteredProducts = [...products];
    } else {
      filteredProducts = products.filter((product) => {
        return product.company === el.dataset.id;
      })
    }

    displayProducts();
  }
})