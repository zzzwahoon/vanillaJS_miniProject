import getElement from './getElement.js';
import removeActive from './removeActive.js';

const userImage = getElement('.user-img');
const title = getElement('.user-title');
const value = getElement('.user-value');
const btns = [...document.querySelectorAll('.icon')];

const displayUser = (person) => {
  userImage.src = person.image;
  value.textContent = person.name;
  title.textContent = 'My name is';
  removeActive(btns);

  btns.forEach((btn) => {
    const label = btn.dataset.label;
    btn.addEventListener('click', () => {
      title.textContent = `My ${label} is`;
      value.textContent = person[label];
      removeActive(btns);
      btn.classList.add('active');
    })
  })
}

export default displayUser;