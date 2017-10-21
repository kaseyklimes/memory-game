/*
 * Create a list that holds all of your cards
 */
const cards = ['diamond', 'diamond', 'paper-plane-o', 'paper-plane-o', 'bicycle', 'bicycle', 'leaf', 'leaf', 'bomb', 'bomb', 'anchor', 'anchor', 'bolt', 'bolt', 'cube', 'cube'];

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// shuffle(cards);
i = 0
for (card of cards) {
  $('.deck').append(`<li class="card" id="${i}"><i class="fa fa-${card}"></i></li>`);
  i++;
};


// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 */




/*
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

let openCards = []
let idList = []

let noMatch = function(){
  $('#' + idList[0]).removeClass('show fail');
  $('#' + idList[1]).removeClass('show fail');
  idList = [];
}
let addToOpen = function() {
  $('.card').click(function() {
    //reveal symbol
    $(this).addClass('show');
    if (openCards.length < 2) {
      //append items to lists if list is shorter than 2 items
      openCards.push($(this)[0].children[0]);
      idList.push($(this).attr('id'));
      //if not a match, hide the cards again
      if (openCards.length == 2 && $(openCards)[0].classList[1] != $(openCards)[1].classList[1]) {
        //failed match
        $('#' + idList[0]).addClass('fail');
        $('#' + idList[1]).addClass('fail');
        setTimeout(function() { noMatch(); }, 1500);
      } else if (openCards.length == 2) {
        //succesful match
        $('#' + idList[0]).addClass('match');
        $('#' + idList[1]).addClass('match');
      }
    } else {
      //if starting over, empty the openCards & idList lists
      openCards = [];
      idList = [];
      //append the new clicked card to the openCards list
      openCards.push($(this)[0].children[0]);
      //append the new clicked card to idlist
      idList.push($(this).attr('id'));
    };
  });
};

addToOpen();
