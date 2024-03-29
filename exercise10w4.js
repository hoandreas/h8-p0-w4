function changeMe(arr) {
  if(arr.length === 0) {
    console.log('""');
  }
    var data = {};
    for(var i = 0; i < arr.length; i++) {
        console.log((i+1) + '. ' + arr[i][0] + ' ' + arr[i][1] + ':');
        data.firstName = arr[i][0];
        data.lastName = arr[i][1];
        data.gender = arr[i][2];
        if(!arr[i][3] || arr[i][3] > 2019) {
          data.age = 'Invalid Birth Year';
        } else {
          data.age = (2019 - arr[i][3]);
        }
      console.log(data);
    }
  }
  
  // TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]);
  // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
changeMe([]); // ""

// function changeMe(arr) {
//     var result = [];
//     for(var i = 0; i < arr.length; i++) {
//         result.push((i+1) + '. ' + arr[i][0] + ' ' + arr[i][1] + ':');
//         var data = {
//             firstName : arr[i][0],
//             lastName : arr[i][1],
//             gender : arr[i][2],
//             age : 2019 - arr[i][3],
//         }
//         if(!arr[i][3] || arr[i][3] > 2019) {
//             data.age = 'Invalid Birth Year';
//         }
//         result.push(data);
//     }
//     return result;
//   }

//   console.log(changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]));
//   console.log(changeMe([]));