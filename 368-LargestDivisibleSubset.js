/**
 * @param {number[]} nums
 * @return {number[]}
 */

/*


[1,2,3]
[1]
[1][2][1,2] dont need [2] anymore
[1][1,2][1,3][2,3][1,2,3] can eliminate [2,3] and [1,2,3] because does not satisfy Si % Sj = 0 or Sj % Si = 0

[1][1,2][1,3]

check[1,2,3]
1 % 2 ||2 % 1 
true
2 % 3 || 3 % 2
false

check [2,3]
false

check [1,3]
yes return

numbers need to be sorted so that all divisors for that number is before it and can create all subsets before eliminate singular number
[3,2,1]

[3]

[3], [3,2] ,[2] remove[3,2]

[3][2]
[3,1][2,1]

[4,1,3,2]

[4]
[4][4,1]
[4][4,1][4,3][4,1,3] eliminate [4],[4,3][4,1,3]
[4,1]
[4,1,2][2]

[105,6,72,96,315,21,945,12,24,3,192,576]
[105]
[105][6][105,6] eliminate [105,6]
[105][6]
[105][6][96][105,96],[6,96] remove [96] and [105,96]
[105][6][6,96]
[105][6][6,96][315][105,315][6,315][6,96,315]
[105][6][6,96][105,315]
[105][6][6,96][105,315][21][105,21][6,21][6,96,21][105,315,21]
[105][6][6,96][105,315][105,21][105,315,21]
[105][6][6,96][105,315][105,21][105,315,21][945][105,945][6,945][6,96,945][105,315,945][105,21,945][105,315,21,945]
[105][6][6,96][105,315][105,21][105,315,21][105,945][105,315,945][105,21,945][105,315,21,945]


I: int arr
O: int arr
C: none
E: []

psuedocode
----------------------
keep track of subsets

make a copy of nums and sort so that when creating subsets 
all previous numbers satisfy Si % Sj = 0 or Sj % Si = 0

generate all subsets
    for length of num times
        copy current subsets
        add current num as subset
        for length of current subsets
            // check and eliminate subsets at every num to prevent heap out of memory
            create new subset with current num
            if new subset checks    
                add new subset
                if length of current subset greater than current largest subset
                    set current largest subset to current subset
        
            helper function check(current subset, current num)
                for every elem in current subset
                    if si%sj not equal zero and sj % si not equal zero 0 // si is current el in subset and sj is current num
                        return false
                return true

            
*/
var largestDivisibleSubset = function (nums) {
  if (nums.length === 0) return nums;
  let lar = [];
  let subsets = [];

  const check = (subset, curr) => {
    for (let i = 0; i < subset.length; i++) {
      if (subset[i] % curr !== 0 && curr % subset[i] !== 0) return false;
    }
    return true;
  };

  // sort numbers
  let sNums = nums.slice(0).sort((a, b) => a - b);
  //let sNums = nums.slice(0)

  for (let i = 0; i < sNums.length; i++) {
    let curr = subsets.slice(0);
    subsets.push([sNums[i]]);
    if (lar.length === 0) lar = [sNums[i]]; // set lar to single element if lar is empty arr
    // keep track of index of [sNums[i]] in subsets in case delete
    let index = subsets.length - 1;
    for (let j = 0; j < curr.length; j++) {
      if (check(curr[j], sNums[i])) {
        subsets.push([...curr[j].slice(0), sNums[i]]);
        if (sNums[i] !== 1) subsets.splice(index, 1);

        if ([...curr[j].slice(0), sNums[i]].length > lar.length)
          lar = [...curr[j].slice(0), sNums[i]];
      }
    }

    /*
      const check = (subset) =>{
          for(let k = 0; k < subset.length - 1; k++){
              for (let j = k+1; j < subset.length; j++){
                  if(subset[j] % subset[k] !== 0 && subset[k] % subset[j] !==0) return false
              }
          }
          return true
      } 
  
      //console.log(subsets)

      for (let i = subsets.length - 1; i>=0; i--){
           if(check(subsets[i])){
               if(subsets[i].length > lar.length) lar = subsets[i]
           } else {
               subsets.splice(i,1)
           } 
      }
      */
  }

  /*
  {
      1:2,3
      2:1
      3:1
  }
  
  {
    1:2,4,8
    2:1,4,8
    4:1,2,8
    8:1,2,4
  }
  
  0:[[1,2],[1,3]]
  */

  return lar;
};
