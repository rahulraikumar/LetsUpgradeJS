const newQuote = () => {
  fetch("https://type.fit/api/quotes")
    .then((response) => response.json())
    .then((data) => {
      let num = Math.floor(Math.random() * data.length);
      let quote = data[num].text;
      let author = `- ${data[num].author}`;
      if (author == "- null") {
        author = "- Anonymous";
      }
      let elem = document.getElementById("quoteDisplay");
      elem.innerText = `${quote} \n ${author}`;
    })
    .catch((err) => console.log("Error while generating quote: ", err));
};
