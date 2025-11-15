let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

function copySorted(arr) {
    const copyArr = arr.slice();
    const sortArr = copyArr.sort();
    return sortArr;
}

console.log( sorted ); // CSS, HTML, JavaScript
console.log( arr ); // HTML, JavaScript, CSS (no changes)