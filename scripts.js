// import quote from "..FavoriteQuotes/quoteApi.json";

const quoteText = document.querySelector(".quote");
// const authorName =document.querySelector("author");
quoteBtn = document.getElementById("btn");
// console.log(quoteBtn)

function randomQuoteSelect() {
    quoteText.innerText = 'Loading....'

    const quotes = fetch("./quoteApi.json")
        .then(res => res.json())
        .then(result =>  { //fetch return  a promiseresorces from the api
        console.log(result)
        // quoteText.innerText = JSON.stringify(result, null, 2)
       
        });
         
          if(quoteText > 0 ){
        let arrayIndex = Math.floor(Math.random() * quotes.length);
         console.log(Object.keys(quoteText.innerText = quotes[0].quote.quote))
          quoteText.innerText = quotes[0].quote
          }
        // console.log(quoteText.textContent = quotes[arrayIndex]);
        // quoteText.textContent = quotes.quote

        // quoteText.textContent = dataApi;
   
    // quoteBtn.addEventListener("click", randomQuoteSelect)
}
// randomQuoteSelect();
//  document.getElementById("btn").addEventListener("click", randomQuoteSelect)
quoteBtn.addEventListener("click", randomQuoteSelect)

// 

// function randomQuoteSelect() { //reference the value in the array
//     const  randomQuoteNum = Math.floor(Math.random() * (randomQuote.length));//return math floor to round number doward to nearst interger

// document.getElementById("quoteDisplay").innerHTML = randomQuote[randomQuoteNum];

// }


// function generateQuote() {//created function

//     const randomQuoteNum = randomQuoteSelect(randomQuote.length);
//     document.getElementById("quotesAutors").innerHTML = '"' + randomQuote(randomQuoteNum).autor,
//         +'"'; //
//     document.getElementById("quotes").innerHTML = "_", randomQuote(randomQuoteNum).quote;

// }