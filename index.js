const shuffleOrSort = (container, sort = false) => {
  const tile = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  for(let i = 0; i<9; i++) {
    const ele = document.createElement('div');
    ele.classList.add('tiles');
    if(sort) {
      ele.classList.add(`color-${i+1}`);
      ele.innerHTML = i+1;
    } else {
      const index = Math.floor(Math.random() * tile.length);
      ele.classList.add(`color-${tile[index]}`);
      ele.innerHTML = tile[index];
      tile.splice(index, 1);
    }
    container.appendChild(ele);
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const tileContainer = document.getElementById('tile-container');
  shuffleOrSort(tileContainer);

  document.getElementById('sort-btn').addEventListener('click', function() {
    tileContainer.innerHTML = '';
    shuffleOrSort(tileContainer, true);
  })
  document.getElementById('shuffle-btn').addEventListener('click', function() {
    tileContainer.innerHTML = '';
    shuffleOrSort(tileContainer);
  })
});