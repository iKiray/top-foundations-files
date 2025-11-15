function camelize(str) {
    const splitArray = str.split("-"); 
    //split string into multiple words seperated by "-"
    
    const firstWord = splitArray[0].toLowerCase(); 
    //first word index 0 all to lowercase
    
    const restWords = splitArray.slice(1);
    //split the rest of the array starting at index 1
    const restWordsCap = restWords.map(
        word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    );
    //every word first letter capitalized and the rest lower cased
    
    const joinWords = firstWord + restWordsCap.join("");
    //join the words together to finally camelize
    console.log(joinWords);
}

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';

/* solution from the site
function camelize(str) {
  return str
    .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
    .map(
      // capitalizes first letters of all array items except the first one
      // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
}
*/