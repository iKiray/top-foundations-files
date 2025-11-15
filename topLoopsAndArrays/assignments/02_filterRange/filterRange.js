let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);


function filterRange(arr, a, b) {
    const result = arr.filter(
        num => num >= a && num <= b 
    );
    return result;
}

console.log(filtered);
console.log(arr);

//solution matched the assignment's solution