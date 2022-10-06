const quoteText = document.querySelector(".quote");
// const authorName =document.querySelector("author");
quoteBtn = document.getElementById("btn");
// console.log(quoteBtn)

async function randomQuoteSelect() {
  quoteText.innerText = 'Loading....'

  const quotes = await fetch("./quoteApi.json")
    .then(res => res.json())
    .then(result => { //fetch return  a promiseresorces from the api
      return result

    });

  if (quoteText > 0) {
    console.log("quoteText is greater 0")

  }
  console.log(quotes)
  let arrayIndex = Math.floor(Math.random() * quotes.length);
  console.log(arrayIndex);
  // console.log(quotes[arrayIndex].quote)
  quoteText.innerText = quotes[arrayIndex].quote
}
quoteBtn.addEventListener("click", randomQuoteSelect)


//author
async function authorQuoteSelect() {
  authorName.innerText = 'Loading....'

  const author = await fetch("./quoteApi.json")
    .then(res => res.json())
    .then(result => { //fetch return  a promiseresorces from the api
      return result

    });

  if (quoteText > 0) {
    console.log("quoteText is greater 0")

  }
  console.log(quotes)
  let arrayIndex = Math.floor(Math.random() * quotes.length);
  console.log(arrayIndex);
  // console.log(quotes[arrayIndex].quote)
  quoteText.innerText = quotes[arrayIndex].quote
}
quoteBtn.addEventListener("click", randomQuoteSelect)
