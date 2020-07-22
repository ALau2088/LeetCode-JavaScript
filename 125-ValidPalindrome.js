/**
 * @param {string} s
 * @return {boolean}
 */
/*
"A man, a plan, a canal: Panama"

consider only alphanumeric characters and ignoring cases
"amanaplanacanalpanama"

create a reverse string and compare if equal

// alternatively compare ASCII codes
*/
var isPalindrome = function (s) {
  let filterS = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  /*
  for (let i = 0; i<s.length;i++){
      // if uppercase change to lowercase
      // else if lowercaseornumber push to filterS
      // else continue
      if(s[i].match(/[A-Z]/)){
          filterS+=s[i].toLowerCase()
      } else if (s[i].match(/[a-z0-9]/)){
          filterS+=s[i]                      
      } else {
          continue
      }
  }
  */
  /*
  for (let i = filterS.length-1; i >= 0;i--){
      rev+=filterS[i]
  }
  */
  let rev = new String(filterS).split('').reverse().join('');

  /*
  if(filterS === rev){
      return true
  } else {
      return false
  }
  */
  return filterS === rev ? true : false;
};
