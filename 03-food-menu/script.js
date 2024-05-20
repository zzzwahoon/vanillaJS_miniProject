const menu = [
  {
      id: 1,
      title: "pancakes",
      category: "breakfast",
      price: 3000,
      img: "./images/item-1.jpeg",
      desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil repellendus repellat exercitationem commodi! Cumque perferendis molestias iste aliquam, nulla, qui reprehenderit ea, sequi eveniet dolorem praesentium aliquid aperiam vel libero!`,
  },
  {
      id: 2,
      title: "diner",
      category: "lunch",
      price: 1000,
      img: "./images/item-2.jpeg",
      desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil repellendus repellat exercitationem commodi! Cumque perferendis molestias iste aliquam, nulla, qui reprehenderit ea, sequi eveniet dolorem praesentium aliquid aperiam vel libero!`,
  },
  {
      id: 3,
      title: "milkshake",
      category: "shakes",
      price: 2000,
      img: "./images/item-3.jpeg",
      desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil repellendus repellat exercitationem commodi! Cumque perferendis molestias iste aliquam, nulla, qui reprehenderit ea, sequi eveniet dolorem praesentium aliquid aperiam vel libero!`,
  },
  {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 8000,
      img: "./images/item-4.jpeg",
      desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil repellendus repellat exercitationem commodi! Cumque perferendis molestias iste aliquam, nulla, qui reprehenderit ea, sequi eveniet dolorem praesentium aliquid aperiam vel libero!`,
  },
  {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 3000,
      img: "./images/item-5.jpeg",
      desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil repellendus repellat exercitationem commodi! Cumque perferendis molestias iste aliquam, nulla, qui reprehenderit ea, sequi eveniet dolorem praesentium aliquid aperiam vel libero!`,
  },
  {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 7000,
      img: "./images/item-6.jpeg",
      desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil repellendus repellat exercitationem commodi! Cumque perferendis molestias iste aliquam, nulla, qui reprehenderit ea, sequi eveniet dolorem praesentium aliquid aperiam vel libero!`,
  },
  {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 3000,
      img: "./images/item-7.jpeg",
      desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil repellendus repellat exercitationem commodi! Cumque perferendis molestias iste aliquam, nulla, qui reprehenderit ea, sequi eveniet dolorem praesentium aliquid aperiam vel libero!`,
  },
  {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 4000,
      img: "./images/item-8.jpeg",
      desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil repellendus repellat exercitationem commodi! Cumque perferendis molestias iste aliquam, nulla, qui reprehenderit ea, sequi eveniet dolorem praesentium aliquid aperiam vel libero!`,
  },
  {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 1000,
      img: "./images/item-9.jpeg",
      desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil repellendus repellat exercitationem commodi! Cumque perferendis molestias iste aliquam, nulla, qui reprehenderit ea, sequi eveniet dolorem praesentium aliquid aperiam vel libero!`,
  },
  {
      id: 10,
      title: "bison steak",
      category: "dinner",
      price: 2000,
      img: "./images/item-10.jpeg",
      desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil repellendus repellat exercitationem commodi! Cumque perferendis molestias iste aliquam, nulla, qui reprehenderit ea, sequi eveniet dolorem praesentium aliquid aperiam vel libero!`,
  },
];

window.addEventListener('DOMContentLoaded', () => {
  displayMenuButtons();
  displayMenuItems(menu);
})

const sectionCenterEl = document.querySelector('.section-center')
const btnContainerEl = document.querySelector('.btn-container')

function displayMenuButtons() {
  // reduce 누적, 하나씩 추가
  const categories = menu.reduce((acc, curr) => {
    if(!acc.includes(curr.category)) {
      acc.push(curr.category);
    }
    return acc;
  },['all'])

  const categoryBtns = categories
  .map((category) => {
    return `<button type="button" class="filter-btn" data-id=${category}>${category}
    </button>`
  })
  .join('');

  btnContainerEl.innerHTML = categoryBtns;

  const filtersBtns = btnContainerEl.querySelectorAll('.filter-btn');

  filtersBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const category = e.currentTarget.dataset.id;

      const menuCategory = menu.filter((menuItem) => {
        if(menuItem.category === category) {
          return menuItem;
        }
      })

      if(category === 'all') {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory)
      }
    })
  })
}

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map((item) => {
    return  `<article class="menu-item">
    <img src=${item.img} alt=${item.title} class="photo" />
    <div class="item-info">
        <div class="header">
            <h4>${item.title}</h4>
            <h4 class="price">${item.price}원</h4>
        </div>
        <p class="item-text">
            ${item.desc}
        </p>
    </div>
    </article>`

  })
  displayMenu = displayMenu.join('');
  sectionCenterEl.innerHTML = displayMenu;
}