const quoteText = document.querySelector(".quote");
const authorName =document.querySelector("author");
quoteBtn = document.getElementById("btn");
// console.log(quoteBtn)

async function randomQuoteSelect() {
  quoteText.innerText = 'Loading....'
//Get quotes from Api
  const quotes = await fetch("./quoteApi.json")//set fetch quest inside respon request
    .then(res => res.json())// get json as a reston, turn into json option 
    .then(result => { //fetch return  a promiseresorces from the api
      return result

    });

  if (quoteText && authorName > 0) {
    console.log("quoteText is greater 0")

  }
  //show new qupte
  console.log(quotes)
  let arrayIndex = Math.floor(Math.random() * quotes.length);//wrapped  math floor into math random fuction to return to whole interger. this allow o pic a random quote from quotetext
  // let arrayIndex = quoteApi[Math.floor(Math.random() * quoteApi.length)];
  console.log(arrayIndex);
  // console.log(quotes[arrayIndex].quote)
  quoteText.innerText = quotes[arrayIndex].quote
}
quoteBtn.addEventListener("click", randomQuoteSelect)


