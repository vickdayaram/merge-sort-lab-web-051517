
function mergeSort(array){
  let midPoint = array.length/2
  let firstHalf = array.slice(0, midPoint)
  let secondHalf = array.slice(midPoint, array.length)
  if(array.length < 2){
    return array
  } else {
    return merge(mergeSort(firstHalf), mergeSort(secondHalf))
  }
}

function merge(firstHalf, secondHalf){
 let sorted = []
 let currentMin
 while(firstHalf.length != 0 && secondHalf.length != 0){
   let currentMin = findMinAndRemove(firstHalf, secondHalf)
   sorted.push(currentMin)
 }
 return sorted.concat(firstHalf).concat(secondHalf)
}

function findMinAndRemove(firstHalf, secondHalf){
  let firstMin = firstHalf[0]
  let secondMin = secondHalf[0]
  if(firstMin > secondMin){
    return findMinAndRemoveSorted(secondHalf)
  } else {
    return findMinAndRemoveSorted(firstHalf)
  }
}

function findMinAndRemoveSorted(array){
  return array.shift()
}
