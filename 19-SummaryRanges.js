/**
 * @param {number[]} nums
 * @return {string[]}
 */

/*
I: sorted array of integers
O: array of ranges, string values
C: none
E. empty array, 1 element array
*/
/*
// edge 
// emtpy array or 1 element array return self

// create array of ranges
// interate through values 
    // current range beginning value
    // current range ending value
    // while the next value is incremental to current range ending value
        // set current range ending value to next value
    // Push to array of ranges
    // set iteration on line 14 to index of current range ending value +1 
// return array of ranges
*/
var summaryRanges = function(nums) {
    // Edge case 
    if (nums.length === 0){
        return nums
    }
    
    let arrayOfRanges = [];
    for ( let i = 0; i < nums.length; i++){
        let currentRangeBegVal = nums[i];
        if ( currentRangeBegVal + 1 === nums[i + 1]){
            let currentRangeEndVal = nums[i + 1];
            let j = i + 2
            while ( currentRangeEndVal + 1 === nums[j]){
                currentRangeEndVal = nums[j]
                j++
            }
            arrayOfRanges.push(`${currentRangeBegVal}->${currentRangeEndVal}`)
            i = j - 1
        } else {
            arrayOfRanges.push(`${currentRangeBegVal}`)
        }
    }
    return arrayOfRanges
};