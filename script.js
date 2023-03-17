let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

document.addEventListener("DOMContentLoaded", function (event) {
  // Random quote of the day generator
  const randomQuote = function () {
    document.querySelector("#quote-of-the-day").textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();

  // Do all of your work inside the document.addEventListener

  // Part 1
  let mainTitle = document.getElementById("main-title");
  mainTitle.innerHTML = "<h1>Welcome to DOM's homepage</h1>";

  // Part 2
  const body = document.querySelector("body");
  body.style.backgroundColor = "blue";

  // Part 3
  let favThings = document.getElementById("favorite-things");
  favThings.removeChild(favThings.lastElementChild);
  // Part 4
  let divEl = document.querySelector(".special-title");
  divEl.style.fontsize = "2rem";

  // Part 5
  let pastRaces = document.getElementById("past-races");
  pastRaces.removeChild(pastRaces.children[3]);
  // Part 6
  pastRaces.innerHTML += "<li>Milwaukee</li>";

  // Part 7
  let main = document.querySelector(".main");
  const newDiv = document.createElement("div");
  newDiv.classList.add("blog-post", "purple");
  const h2 = document.createElement("h1");
  h2.textContent = "Milwaukee";
  newDiv.appendChild(h2);
  const p = document.createElement("p");
  p.textContent = "this is a blog post";
  newDiv.appendChild(p);
  main.appendChild(newDiv);
  h2.style.color = "white";
  // Part 8
  const quoteTitle = document.getElementById("quote-title");
  quoteTitle.addEventListener("click", randomQuote);
  // Part 9
  const blogPosts = document.querySelectorAll(".blog-post");
  for (let i of blogPosts) {
    i.addEventListener("mouseout", function (el){
      if(i !== el.target){
        return
      }
      el.target.classList.toggle("purple");
    });
    i.addEventListener("mouseenter", function (el){
      if(i !== el.target){
        return
      }
      el.target.classList.toggle("red");
    });
    
  }  
  
  });
