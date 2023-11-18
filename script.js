// Create the grid dynamically using JavaScript
const gridContainer = document.getElementById('gridContainer');
const numColumns = 16; // Change this to set the number of columns

for (let i = 0; i < numColumns * numColumns; i++) {
  const gridItem = document.createElement('div');
  gridItem.className = 'grid-item';
  gridContainer.appendChild(gridItem);
}

// Set the variable for the number of columns in the root element
document.documentElement.style.setProperty('--numColumns', numColumns);