const quotes = [
  "When you eat, use your mouth - Haris",
  "When you sleep, close your eyes - Another Haris",
]

const photos = [
  "https://randomuser.me/api/portraits/men/94.jpg",
  "https://randomuser.me/api/portraits/men/84.jpg",
]

function setQuote() {
  const quote = document.getElementById('quote');
  const author = document.getElementById('author');
  const randomIndex = Math.floor(Math.random() * quotes.length)
  const randomQuote = quotes[randomIndex]
  const randomPhoto = photos[randomIndex]
  const quoteParts = randomQuote.split(' - ');
  console.log(quoteParts)
  quote.innerHTML = quoteParts[0];
  author.innerHTML = `- ${quoteParts[1]}`;
  document.getElementById("image").src = randomPhoto;
}


