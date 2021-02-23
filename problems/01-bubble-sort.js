// Implement Bubble Sort

function swap(array, idx1, idx2) {
  let temp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = temp;
}

function bubbleSort(array) {
  // your code here
  for (let i = 0; i < array.length -1; i++) {
    
    for (let j = 0; j < array.length -1 -i; j++) {
      if(array[j]>array[j+1]){
        swap(array,j,j+1)
      }
    }
  }
}

module.exports = {
  bubbleSort,
  swap
};
