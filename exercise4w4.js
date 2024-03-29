function cariModus(arr) {
    var count = 0;
    var mode;

    for(var i = 0; i < arr.length; i++) {
        var newCount = 0;
        for(var j = 0; j < arr.length; j++) {
            if(arr[i] === arr[j] && i !== j) {
                newCount++;
                if(newCount > count) {
                    count = newCount;
                    mode = arr[i];
                }
            }
        }
    }
    if(mode === undefined) {
        return -1;
    } else if(newCount === arr.length-1) {
        return -1
    } else {
        return mode;
    }
}
  
//   // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5, 5, 10])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1