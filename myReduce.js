// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce for more details
// Don't worry about initialValue at first. You can always add it in later.

function myReduce(arr, callback) {

// first pass is special because it uses initialValue rather than the result
  //    from the last run.
  var i=0;  // setting this here so we can increment it +1 when no initialValue
  var previousValue;

  // if an initialValue is not passed in we'll use the first two elements on the
  //   first pass
  if(typeof(initialValue) == "undefined") {
    i++;
    previousValue = arr[0];
  } else {
    previousValue = initialValue;
  }

  // loop of the array calling the callback each time
  for (; i<arr.length; i++) {
    previousValue = callback(previousValue, arr[i], i, arr);
  }
  return previousValue;


}

/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/







// export this function (you can ignore this for now)
module.exports = myReduce;
