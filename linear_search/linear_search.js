function linearSearch(array, number) {
    return array.indexOf(number) !== -1 ? true : false;
}

function manualLinearSearch(array, number) {
    let numberFound = false;
    for(let i = 0; i < array.length; i++) {
        if(array[i] === number) {
            numberFound = true
        }
    }

    return numberFound;
}

let arr = [1,2,3,4,5];

console.log(linearSearch(arr, 4));
console.log(linearSearch(arr, 6));