const { default: axios } = require("axios");


exports.messageOfTheDay = async function () {
    console.log('access message of the day')
    const response = await axios.get("https://type.fit/api/quotes")
    const randomNumber = Math.floor(Math.random() * response.data.length) + 1 ;
	console.log('new test');
	console.log('test');
	console.log('anothertest');
    //console.log(randomNumber)
    const phrase = `${response.data[randomNumber].text} By ${response.data[randomNumber].author || 'Anonymous'}`;
    //console.log('this is the response->',phrase);
    return phrase;
    //return `Good job! You deserve a break!`;
}
