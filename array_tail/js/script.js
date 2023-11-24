let lunghezza_array = parseInt(prompt("Quanto deve essere lunga la tua lista di numeri?"));

let casual_number;
console.log(casual_number);

let array = [];

for (let i=1; i<=lunghezza_array; i++){
    casual_number = Math.trunc(Math.random() * 100);
    array.push(casual_number);
}

let num_print_array = parseInt(prompt("Quanti numeri partendo dalla fine stampare in console?"));

if(num_print_array > lunghezza_array){
    alert("I numeri da stampare sono maggiori dei numeri dell'array, inserire un valore inferiore o uguale al numero degli array")
    num_print_array = parseInt(prompt("Quanti numeri partendo dalla fine stampare in console?"));
}

console.log(array.slice(-(num_print_array)));