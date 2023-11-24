let array = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola']

array.push('pesca');
console.log(array);

let cocomero = 'cocomero';
let flag = false

for (i=0; i<array.length; i++){
    if (array[i] == cocomero) {
        flag  = true
    }
 }

 if(flag == true){
        console.log("Trovato! Devo solo preparare il cocktail.");
    }
    else{
        console.log("Oh no, devo uscire a comprare il cocomero!");
    }