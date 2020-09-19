/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/*
I: arr nums
O: index of two elements that sum to target
C: there is exactly one solution, may not use the same element twice
E: if hm[complement] = 0 will evaluate to falsy in if statement
*/

/*
approach 1
iterate thru each elem then iterate thru rest of elements: O(n^2)time

var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++){
        for ( let j = i+1; j < nums.length; j++){
            if(nums[i]+nums[j] === target) return [i,j]
        }
    }
}
*/

/*
approach 2
sort + slider technique: nlogn + n ~ O(nlogn)time, O(n) space for arr that stores ind and val

var twoSum = function(nums, target) {
    let nums2 = []
    for (let i = 0; i < nums.length; i++){
        nums2.push({idx:i, val: nums[i]})
    }
    

    // sort by key
    nums2.sort((a,b) => a.val-b.val)           
               
    let a = 0, b = nums2.length - 1
    
    //skip any number larger than target
    while (nums[b].val >= target){
        b--
    }

    while(a !==b){
     if(nums2[a].val + nums2[b].val === target) return [nums2[a].idx,nums2[b].idx]
     if(nums2[a].val + nums2[b].val > target) b--
     if(nums2[a].val + nums2[b].val < target) a++
    }
};
*/
/*
approach 3
hashmap, iterate thru elements to look for complement: n for iterate to create hashmap + n iterate to look up complement = 2n ~ O(n)time, O(n)space to store hashmap 

var twoSum = function(nums, target) {
    let hm = {};
    for(let i = 0; i < nums.length; i++){
        hm[nums[i]] = i;
    }
    for(let i = 0; i < nums.length;i++){
        let complement = target - nums[i];
        if(hm[complement] && hm[complement] !== i) return [i, hm[complement]]
    }
}
*/

/*
approach 4
single pass-iterate thru elements if complement is stored return sol else store in hashmap: O(n)time, O(n)space

var twoSum = function(nums, target) {
    let hm = {};
    for(let i = 0; i < nums.length; i++){
        let complement = target - nums[i];
        if(hm[complement] || hm[complement] === 0 && hm[complement] !== i){ // when hm[complement] = 0 will evaluate to falsy therefore need to add "...|| hm[complement] === 0"
            return [i, hm[complement]]
        } else {
            hm[nums[i]] = i;
        }
    }
}
*/
