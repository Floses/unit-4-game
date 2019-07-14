// on page start I need to generate a random number for people to guess and insert it into our random number div
$(document).ready(function() {
  var randomNum = Math.floor(Math.random() * 102) + 19;
  $(".randomNum").text(randomNum);

  // setting random numbers for each of our gems and storing them in variables
  var gem1 = Math.floor(Math.random() * 12) + 1;
  var gem2 = Math.floor(Math.random() * 12) + 1;
  var gem3 = Math.floor(Math.random() * 12) + 1;
  var gem4 = Math.floor(Math.random() * 12) + 1;

  var wins = 0;
  var losses = 0;
  var totalScore = 0;
});
