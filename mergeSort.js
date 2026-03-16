function merge(arr1, arr2) {
  let mergedArr = [];
  let a = 0;
  let b = 0;
  while (a < arr1.length && b < arr2.length) {
    if (arr1[a] < arr2[b]) {
      mergedArr.push(arr1[a]);
      a++;
    } else {
      mergedArr.push(arr2[b]);
      b++;
    }
  }
  mergedArr.push(...arr1.slice(a));
  mergedArr.push(...arr2.slice(b));
  return mergedArr;
}

function mergeSort(arr) {
  // if only one number quit
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);

  let leftSide = arr.slice(0, mid);
  let rightSide = arr.slice(mid, arr.length);

  // sort left half of numbers
  leftSide = mergeSort(leftSide);

  //   sort right half of numbers
  rightSide = mergeSort(rightSide);

  //   merge sorted halves
  return merge(leftSide, rightSide);
}
// mergeSort([1, 2]);
// console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));

// console.log(merge([1, 3], [2, 4, 5]));
