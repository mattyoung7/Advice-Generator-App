const advice = document.querySelector('#advice');
const quote = document.querySelector('#quote');
const button = document.querySelector('.btn');

async function getQuote() {
    const res = await axios.get('https://api.adviceslip.com/advice');
    console.log(res);

    const quoteNumber = res.data.slip.id;
    console.log(quoteNumber);
    
    const quoteText = res.data.slip.advice;
    console.log(quoteText);

    advice.innerHTML = quoteNumber;
    quote.innerHTML = quoteText;

};

getQuote();

button.addEventListener('click', getQuote);
