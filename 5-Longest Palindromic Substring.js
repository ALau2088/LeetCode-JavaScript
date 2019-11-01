/*
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    // min. boundary case-empty string or 1 character string
    if(s.length <= 1){
        return s
    }
    
    // max. boundary case-The whole string is a palindrome
    if ( s === s.split('').reverse().join('')){
        return s
    }
    
    // The longestPalindrome is at least one letter therefore set initial value to first letter in string.
    let longestPalindrome = s[0];
    // Nested for loop to find longestPalindrome greater than 1 char.
    for(i = 0; i < s.length ; i++){
        // search for instance equal to s[i] from right
        Loop1:
        for ( j = s.length - 1; j > i; j--){
            //console.log(s[j],s[i]);
            if ( s[i] === s[j]){
                // Possible Palindrome
                possiblePalindrome = s.slice(i,j+1);
                //console.log(possiblePalindrome);
                // Create two indices to check letters of possible Palindrome starting from middle
                let a;
                let b;
                if (possiblePalindrome.length % 2 ===0){
                    a = Math.floor((possiblePalindrome.length-1)/2);
                    b = Math.floor((possiblePalindrome.length-1)/2)+1;
                } else {
                    a = (possiblePalindrome.length-1)/2;
                    b = (possiblePalindrome.length-1)/2;
                }
                while ( a >= 0 && b <possiblePalindrome.length){
                    //console.log(possiblePalindrome[a],possiblePalindrome[b])
                    if ( possiblePalindrome[a] === possiblePalindrome[b]){
                        a--;
                        b++;
                    } else {
                        continue Loop1;
                    }
                }
                // If the length of current Palindrome is greater than length previous Palindrome, set the current Palindrome = longest Palindrome
                //console.log(possiblePalindrome);
                if(possiblePalindrome.length > longestPalindrome.length){
                    longestPalindrome = possiblePalindrome;
                }
            } 
        } 
    
    }
    return longestPalindrome
};