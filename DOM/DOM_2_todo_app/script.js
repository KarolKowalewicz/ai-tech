const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const input = document.querySelector('#todoContent')
  if (input.value.length < 4) {
    return;
  }
  
  const listEl = document.createElement('li');
  listEl.textContent = input.value;

  document.querySelector('.list').appendChild(listEl)
  input.value = '';
});
