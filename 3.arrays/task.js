function compareArrays(arr1, arr2) {
  let result;
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++){
      if (arr1[i] === arr2[i]) { result = true; }
      else{ result = false; break; }
    }
  } else {
    result = false;
  }
  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;
  filterArr = arr.filter(item => ( (item >= 0) && (item % 3 === 0) && (1/item !== Number.NEGATIVE_INFINITY) ) );
  resultArr = filterArr.map(item => item * 10);
  return resultArr; // array
}
