/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
  const newArr = [];
    for(let i = 0; i < arr.length; i++){

      if(fn(arr[i],i) >= 1 || fn(arr[i],i) != 0){
        newArr.push(arr[i]);
      }
    }

  return newArr;

};
