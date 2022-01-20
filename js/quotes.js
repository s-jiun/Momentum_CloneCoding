const quotes = [
    {
        quote: "Lay a firm foundation with the bricks that others throw at you",
        author: "David Brinkley"
    },
    {
        quote: "Change the way you look at things and the things you look at change",
        author: "Wayne Dyer"
    },
    {
        quote: "If you have always done it that way, it is probably wrong",
        author: "Charles Kettering"
    },
    {
        quote: "Only I can change my life. No one can do it for me",
        author: "Carol Burnett"
    },
    {
        quote: "When in doubt, choose change",
        author: "Lily Leung"
    },
    {
        quote: "All great changes are preceded by chaos",
        author: "Deepak Chopra"
    },
    {
        quote: "You must learn a new way to think before you can master a new way to be",
        author: "Marianne Williamson"
    },
    {
        quote: "Sonetimes good things fall apart so better things can fall together",
        author: "Marilyn Monroe"
    },
    {
        quote: "We know what we are, but know not what we may be",
        author: "William Shakespeare"
    },
    {
        quote: "To improve is to change; to be perfect is to change often",
        author: "Winston Churchill"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;