// fortune.js - Fortunate Cow
import * as cowsay from "cowsay";

// YOUR FORTUNES: Replace these with your own!
// Pick a theme that interests you: motivational quotes, coding tips,
// jokes, song lyrics, advice to your future self — whatever you want.
const fortunes = [
  "Remember to stay hydrated!",
  "Never mine straight down",
  "I don't got time for stress, no more time for disagreements",
];

// Pick a random fortune
const randomIndex = Math.floor(Math.random() * fortunes.length);
const todaysFortune = fortunes[randomIndex];

// Display the cow (or change the creature — it's your project!)
console.log(cowsay.say({ text: todaysFortune }));
