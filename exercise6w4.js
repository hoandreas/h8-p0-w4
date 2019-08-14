function digitPerkalianMinimum(angka) {
    var divider = [];
    var multiplier = [];
    var factors = [];

    for(var i = 1; i <= angka; i++) {
        if(angka % i === 0) {
            divider.push(String(i));
        }
    }
    for(var j = 0; j < divider.length; j++) {
        multiplier.push(String(angka/divider[j]));
    }
    for(var k = 0; k < divider.length; k++) {
        factors.push([divider[k] + multiplier[k]]);
    }
    var factorsLength = factors[0][0].length;
    for(var l = 1; l < factors.length; l++) {
        if(factors[l][0].length < factorsLength) {
            factorsLength = factors[l][0].length;
        }
    }
    return factorsLength;
  }


  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2