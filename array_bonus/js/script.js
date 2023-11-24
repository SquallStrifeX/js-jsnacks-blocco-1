let array1 = [2, 4, 6, 8, 10, 12];

let array2 = [1, 3, 5, 7, 9, 11, 13, 15, 17]

if (array1.length < array2.length){

    let array_difference = array2.length - array1.length;
    console.log(array_difference);

    for (i=1; i<=array_difference; i++){
        let number_push = Math.floor(Math.random() * 10) + 1;
        array1.push(number_push);
        console.log(array1)
        }
    }

else if (array2.length > array1.length){

    let array_difference = array1.length - array2.length;
    console.log(array_difference);

    for (i=1; i<=array_difference; i++){
        let number_push = Math.floor(Math.random() * 10) + 1;
        array2.push(number_push);
        console.log(array2)
        }
    } 