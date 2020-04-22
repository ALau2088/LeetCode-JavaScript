/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
  // var t = process.hrtime();
  console.time('sort');
  partition = function(arr, min, max) {
    let p = arr[min];
    let i = min - 1;
    let j = max + 1;
    while (true) {
      do {
        i++;
      } while (arr[i] < p);
      do {
        j--;
      } while (arr[j] > p);
      if (i < j) {
        let a = arr[i];
        arr[i] = arr[j];
        arr[j] = a;
      } else {
        return j;
      }
    }
  };

  quickSort = function(arr, min, max) {
    if (min != max) {
      quickSort(arr, min, partition(arr, min, max));
      quickSort(arr, partition(arr, min, max) + 1, max);
    }
    return arr;
  };

  let sortedA = [];
  for (i = 0; i < A.length; i++) {
    sortedA[i] = Math.pow(A[i], 2);
  }

  if (sortedA.length > 1) {
    sortedA = quickSort(sortedA, 0, sortedA.length - 1);
  }

  // t = process.hrtime(t);
  // console.log('benchmark took %d seconds and %d nanoseconds', t[0], t[1]);
  console.timeEnd('sort');
  return sortedA;
};

sortedSquares([-4, -1, 0, 3, 10]);

// const { performance, PerformanceObserver } = require('perf_hooks');

// const wrapped = performance.timerify(sortedSquares);

// const obs = new PerformanceObserver(list => {
//   console.log(list.getEntries()[0].duration);
//   obs.disconnect();
// });
// obs.observe({ entryTypes: ['function'] });

// // A performance timeline entry will be created
// wrapped([-4, -1, 0, 3, 10]);
