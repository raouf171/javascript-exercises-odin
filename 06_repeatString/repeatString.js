const repeatString = function(string , num) {
if (num <0) {
  return "ERROR" ;  
} else {
  let result ='' ; 
  for (let i=0 ; i<num ; i++ ) {
    result = result.concat(string) ; 
  }
  return result ; 

}};

// Do not edit below this line
module.exports = repeatString;
