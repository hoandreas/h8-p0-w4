function naikAngkot(arrPenumpang) {
    var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var result = [];
    for(var i = 0; i < arrPenumpang.length; i++) {
        var object = {} 
        object.penumpang = arrPenumpang[i][0];
        object.naikDari = arrPenumpang[i][1];
        object.tujuan = arrPenumpang[i][2];
        result.push(object);
        var naik;
        var tujuan;
        var harga;
        for(var j = 0; j < rute.length; j++) {
            if(object.naikDari === rute[j]) {
                naik = j;
            } else if (object.tujuan === rute[j]) {
                tujuan = j;
            }
        }    
        harga = Math.abs(tujuan - naik) * 2000;
        object.bayar = harga;
    }
    return result;
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]