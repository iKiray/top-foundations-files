function camelize(str) {
    const splitWords = str.split("-");
    console.log(splitWords);
}

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';