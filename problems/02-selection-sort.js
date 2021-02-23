// Implement Selection Sort

// Implement swap without looking at bubble sort
function swap(arr, index1, index2) {
  // your code here
  let temp = arr[index1]
  arr[index1] = arr[index2]
  arr[index2] = temp
}

function selectionSort(list) {
  // your code here
  for (let i = 0; i < list.length - 1; i++) {
    let midinx = i
    for (let j = i+1; j < list.length; j++) {
      if (list[j] < list[midinx]) {
        midinx = j
      }
    }
    swap(list,midinx,i)
  }
}

module.exports = {
  selectionSort,
  swap
};
