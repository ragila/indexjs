const num =3;
const mb = function multiplyBy2 (inputNumber){
  const result = inputNumber *2};
  return result
}

const name = "Will"


=======================================================


function kopiDanKali( array ){
  let output = [];
  for(let i = 0 ; i< array.length; i++){
    output.push(array[i] *2)
  }
  return output;
}

const myArray = [1,2,3]
kopiDanKali(myArray)

function kopiDanBagi( array ){
  let output = [];
  for(let i = 0 ; i< array.length; i++){
    output.push(array[i] / 2)
  }
  return output;
}
const myArray = [1,2,3]
kopiDanBagi(myArray)

function kopiDanTambah( array ){
  let output = [];
  for(let i = 0 ; i< array.length; i++){
    output.push(array[i] + 3)
  }
  return output;
}
const myArray = [1,2,3]
kopiDanTambah(myArray)


============================
  
  
function kopiDanUbah( array, instruksi ){
  let output = [];
  for(let i = 0 ; i< array.length; i++){
    output.push(instruksi(array[i]))
  }
  return output;
}

function kali2 (inputNumber){
return inputNumber * 2
}

const myArray = [1,2,3]
kopiDanUbah(myArray, kali2)
  
  
