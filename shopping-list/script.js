const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearBtn = document.getElementById('clear');

const addItem = (e) => {
  e.preventDefault();

  //   Validate Input
  const newItem = itemInput.value;

  if (newItem === '') alert('Please add an item');

  //   Create List Item
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(newItem));

  const button = createButton('remove-item btn-link text-red');
  li.appendChild(button);

  itemInput.value = '';

  itemList.append(li);
};

const createButton = (classes) => {
  const button = document.createElement('button');
  button.className = classes;
  const icon = createIcon('fa-solid fa-xmark');
  button.appendChild(icon);
  return button;
};

const createIcon = (classes) => {
  const icon = document.createElement('i');
  icon.className = classes;
  return icon;
};

const removeItem = (e) => {
  if (e.target.parentElement.className.includes('remove-item')) {
    e.target.parentElement.parentElement.remove();
  }
};

const clearItems = () => {
  while (itemList.firstChild) itemList.removeChild(itemList.firstChild);
};

// Event listeners
itemForm.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
clearBtn.addEventListener('click', clearItems);
