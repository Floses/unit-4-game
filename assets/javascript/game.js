// on page start I need to generate a random number for people to guess and insert it into our random number div
$(document).ready(function() {
  var randomNum = Math.floor(Math.random() * 102) + 19;
  console.log(randomNum);
});

// also on page start I need to generate for seperate random numbers and assign them one to each gem for the player guesses

// need to make on click events for each gem to grab whatever number that the gem holds and add it to their guessed score

// I need to show every number for each gem clicked added to the players score

// need to add win and loss conditions

// if the player wins I need it to display "you win!"

// if the player wins I need to add the win to their win counter

// if the player loses I need it to display "you lose!"

// if the player loses I need to add the loss to their loss counter

// regardless of whether the player wins or loses, I need the game to restart upon completion, generating new numbers
// for the gems and new numbers to guess
