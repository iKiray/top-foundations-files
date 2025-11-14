function camelize(str) {
    const splitArray = str.split("-");
    /* pseudo code
    create new array where first word in array is lower case
    the follow words in the same array should be capitalized
    e.g charAt(0) + slice(1)
    */
    console.log(splitArray);
}

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';