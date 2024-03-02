function bubbleSort(arr) {
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++) {
            let current = arr[i];
            if(current > arr[j]) {
                arr[i] = arr[j];
                arr[j] = current;
            }
        }
    }

    return arr;
}

console.log(bubbleSort([1,3,7,4,2]));