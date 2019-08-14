function checkAB(str) {
    for(var i = 0; i < str.length; i++) {
        var count = 0;
        if(str[i] === 'a') {
            for(var j = 0; j < str.length; j++) {
                if(str[j] === 'b') {
                    count++;
                }

            }
        }
        if(count >= 1) {
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