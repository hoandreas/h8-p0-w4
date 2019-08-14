function checkAB(str) {
    for(var i = 0; i < str.length; i++) {
        if(str[i] === 'a' && (str[i+4] === 'b' || str[i-4] === 'b')) {
            return true;
        }
    }   
    return false;
}
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false