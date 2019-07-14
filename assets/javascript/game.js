// on page start I need to generate a random number for people to guess and insert it into our random number div
$(document).ready(function() {
  var randomNum = Math.floor(Math.random() * 102) + 19;
  $(".randomNum").text(randomNum);
});
