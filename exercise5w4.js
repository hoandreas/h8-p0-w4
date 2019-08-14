function ubahHuruf(kata) {
    var char = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var temp = '';
    for (var i = 0; i < kata.length; i++) {
        for(var j = 0; j < char.length; j++) {
            if(kata[i] === char[j]) {
                temp += char[j+1];
            }
        }
    }
    return temp;
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu