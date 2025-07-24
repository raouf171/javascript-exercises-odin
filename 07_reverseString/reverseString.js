const reverseString = function(str) {
  let long = str.length ;
  let result = '' ; 
  for (i=long- 1  ; i>=0 ; i--) {
    result = result.concat(str[i]) ;
  }
  return result ; 
  



};

// Do not edit below this line
module.exports = reverseString;
