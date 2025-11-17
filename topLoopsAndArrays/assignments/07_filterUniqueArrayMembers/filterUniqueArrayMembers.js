function unique(arr) {
  /* your code */
  const uniqueSet = new Set(arr);
  const uniqueArr = [...uniqueSet];
  return uniqueArr;

  /* could be written in function wrapper

  const getUnique = (arr) => [...newSet(arr)];
  */
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(strings) ); // Hare, Krishna, :-O

/* this would be the other method taught traditionally */
function unique2(arr) {
  const uniqueArr = arr.filter((value, index, self) => {
    return self.indexOf(value) === index;
  })
  return uniqueArr;
}

console.log(unique2(strings));