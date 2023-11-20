function gridWidth() {
  const userInput = prompt('Enter the grid width (max = 100):');
  let numColumns = parseInt(userInput) || 50; 
  numColumns = Math.min(numColumns, 100); 

  // Create the grid dynamically using JavaScript
  const gridContainer = document.getElementById('gridContainer');
  gridContainer.innerHTML = ''; // Clear existing grid

  for (let i = 0; i < numColumns * numColumns; i++) {
    const gridItem = document.createElement('div');
    gridItem.className = 'grid-item';

    gridItem.onmouseover = function() {
      const currentColor = gridItem.style.backgroundColor || window.getComputedStyle(gridItem).backgroundColor;
      const darkenedColor = darkenColor(currentColor, 10);
      gridItem.style.backgroundColor = darkenedColor;
    };

    gridContainer.appendChild(gridItem);
  }

  // Set the variable for the number of columns in the root element
  document.documentElement.style.setProperty('--numColumns', numColumns);
}

function darkenColor(color, percentage) {
  const rgb = color.match(/\d+/g);
  const darkenedRgb = rgb.map(value => Math.max(0, value - (value * percentage) / 100));
  return `rgb(${darkenedRgb.join(',')})`;
}
