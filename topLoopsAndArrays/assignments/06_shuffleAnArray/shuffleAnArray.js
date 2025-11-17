let arr = [1, 2, 3];

function shuffle(array) {
    for(let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log(shuffle(arr));
// arr = [3, 2, 1]

console.log(shuffle(arr));
// arr = [2, 1, 3]

console.log(shuffle(arr));
// arr = [3, 1, 2]
// ...