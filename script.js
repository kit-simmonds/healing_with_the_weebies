const quotes = [
    "The best way to predict the future is to invent it.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "The only way to do great work is to love what you do.",
    "If you can dream it, you can achieve it.",
    "The purpose of our lives is to be happy."
];

const quoteContainer = document.getElementById('quote');
const newQuoteButton = document.getElementById('new-quote');

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

function displayQuote() {
    const quote = getRandomQuote();
    quoteContainer.textContent = quote;
}

newQuoteButton.addEventListener('click', displayQuote);