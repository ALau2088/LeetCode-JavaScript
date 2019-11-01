/**
 * @param {number[]} prices
 * @return {number}
 */
// Quicksort function and return last element
var maxProfit = function(prices) {
 
    let i; // buy price
    let j; // sell price
    let sort = []; // array for quicksort
    let maxP = 0; // max profit
    
    // Find the maximum sell price for each potential buy price
    for (i = 0; i < prices.length -1; i++){
        for (j = i + 1; j < prices.length; j++){
            if (prices[j] > prices[i]){
                sort.push(prices[j])
            }
        }
        if (quickSort(sort,0, sort.length-1)[sort.length-1] - prices[i] > maxP) {
            maxP = quickSort(sort, 0, sort.length-1)[sort.length-1] - prices[i];
        };
        sort = []; // reset array
    }
    return maxP
};

function quickSort(sort,start,end){
    if (start < end){
        dividerIndex = partition(sort, start, end);
        quickSort(sort, start, dividerIndex);
        quickSort(sort, dividerIndex + 1, end);
    }
    return sort

}

function partition(sort, start, end){
    let x = sort[start];
    let i = start -1;
    let j = end +1;
    while (true){
        do {
            j--
        } while ( sort[j] > x);
        do {
            i++
        } while ( sort[i] < x);
        if (i < j){
            //temp variable for swapping
            var a = sort[i];
            sort[i] = sort[j];
            sort[j] = a;
        } else {
            return j;
        }
    }
}