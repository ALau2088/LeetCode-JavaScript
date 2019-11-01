/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
    partition = function(arr, min, max){
        let p = arr[min];
        let i = min - 1;
        let j = max + 1;
        while ( true){
            do {
            i++} while (arr[i] < p);
            do {
            j--} while (arr[j] > p);
            if ( i < j){
                let a = arr[i];
                arr[i] = arr[j];
                arr[j] = a;
            } else {
            return j;
            }
        }  
    }
    
    quickSort = function(arr, min, max){
        if (min != max){
        quickSort(arr, min, partition(arr, min, max));
        quickSort(arr, partition(arr, min, max)+1, max);
        }  
        return arr;
    } 
    
    let sortedA =[];
    for (i = 0; i < A.length; i++){
        sortedA[i] = Math.pow(A[i], 2)
    }
    
    if (sortedA.length > 1){
    sortedA = quickSort(sortedA, 0, sortedA.length-1)
    };
    return sortedA;
};

sortedSquares([-4,-1,0,3,10])