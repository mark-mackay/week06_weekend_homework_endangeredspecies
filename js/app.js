document.addEventListener('DOMContentLoaded', () => {
  const newItemform = document.querySelector('#new-item-form');
  newItemform.addEventListener('submit', handleNewItemFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewItemFormSubmit = function (event) {
  event.preventDefault();

  const animalListItem = createAnimalListItem(event.target);
  const animalList = document.querySelector('#animal-list');
  animalList.appendChild(animalListItem);

  event.target.reset();
}

const createAnimalListItem = function (form) {
  const animalListItem = document.createElement('li');
  animalListItem.classList.add('animal-list-item');

  const name = document.createElement('h2');
  name.textContent = form.name.value;
  animalListItem.appendChild(name);

  const species = document.createElement('h3');
  species.textContent = form.species.value;
  animalListItem.appendChild(species);

  const continent = document.createElement('p');
  continent.textContent = form.continent.value;
  animalListItem.appendChild(continent);

  return animalListItem;
}

const handleDeleteAllClick = function (event) {
  const animalList = document.querySelector('#animal-list');
  animalList.innerHTML = '';
}
