// Implement Merge Sort

function merge(array1, array2) {
  // your code here
  let merged = []
  // let leftIndex = 0
  // let rightIndex = 0

  while(array1.length ||array2.length){
    let ele1 = array1.length ? array1[0] : Infinity
    let ele2 = array2.length ? array2[0] : Infinity

    let next;

    if(ele1<ele2){
      next = array1.shift()
    } else{
      next = array2.shift()
    }
    merged.push(next)
  }
  return merged
}

function mergeSort(array) {
  // your code here
  if(array.length <= 1){
    return array
  }
  let midIdx = Math.floor(array.length/2)
  let leftHalf = array.slice(0,midIdx)
  let rightHalf = array.slice(midIdx)

  return merge(mergeSort(leftHalf),mergeSort(rightHalf))
}

module.exports = {
  merge,
  mergeSort
};
