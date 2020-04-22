/**
 * @param {string[]} strs
 * @return {string[][]}
 */
/*
*IOCE
I: array of strings
O: array of grouped anagrams
C: none
E: all inputs lower case. Order of output not matter. No duplicates.
*EXAMPLES
*PSEUDOCODE
FUNC groupedAnagrams(strs):
    obj anagramsLookUp(alu)
    arr groupedAnagrams(ga)
    FOR anagram IN strs:
        FOR key in alu:
            IF characters of anagram match key:
                PUSH value to key
        END FOR
    END FOR
    ADD anagram as key-value pair to alu
    
    FOR key in alu:
        PUSH value to ga
    END FOR
    
    RETURN ga
END FUNC
*/
var groupAnagrams = function(strs) {};
