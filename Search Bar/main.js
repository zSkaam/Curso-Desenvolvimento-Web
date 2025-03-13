const search = document.querySelector('#search');
const list = document.querySelector('#list');

search.addEventListener('input', () => {
  const value = search.value.toLowerCase();
  const items = list.getElementsByTagName('li');
  Array.from(items).forEach((item) => {
    const text = item.textContent.toLowerCase();
    if (text.indexOf(value) !== -1) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
});
