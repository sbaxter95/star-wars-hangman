$(function () {
//Game Logic

var robotWords = ['ai', 'interaction', 'automation', 'planning', 'nano', 'learning'];
var robotTypes = ['industrial', 'domestic', 'space', 'military', 'service', 'medical'];
var robotCharacters = ['hal', 'bender', 'robocop', 'data', 'optimus prime', 'r2d2'];

var badGuesses = 0;

var score = 0;

var difficulty = '';

var difficulty = '';
var category = '';


function game() {
var chosenWord = getRandomWord();

drawDashes(chosenWord);
}


function drawDashes(chosenWord) {
	for (var i = 0; i < chosenWord.length; i++) {
		$('.word-container').append('<div class="blank"> _ </div>')
	}
}

function drawHangman (badGuesses) {
	if (badGuesses === 1) {
	        $('#gallows-1').addClass('show');
    	}
    if (badGuesses === 2) {
    	$('#gallows-2').addClass('show');
    } 
    if (badGuesses === 3) {
    	$('#gallows-3').addClass('show');
    } 
    if (badGuesses === 4) {
    	$('#head').addClass('show');
    }
    if (badGuesses === 5) {
    	$('#torso').addClass('show');
    }
    if (badGuesses === 6) {
    	$('#left-arm').addClass('show');
    }
    if (badGuesses === 7) {
    	$('#right-arm').addClass('show');
    } if (badGuesses === 8) {
    	$('#left-leg').addClass('show');
    } if (badGuesses === 9) {
    	$('#right-leg').addClass('show');
    	$('.result-container').html('You lost ' + score);
    	$('.letter').off('click');
    }
}

function checkWinner() {
	console.log($('.match').length);
	if ($('.match').length === chosenWord.length) {
		score++;
		$('.result-container').html('You won! ' + score);
		$('.letter').off('click');
	}
}

function wrongLetter() {
	badGuesses++;
	drawHangman(badGuesses);
}

function getRandomWord() {
	var randomIndex = Math.floor(Math.random() * 6) + 1;
	var chosenWord = robotWords[randomIndex].split('');
	return chosenWord;  
}

$('.letter').hover(function(){
      var r = Math.floor(Math.random() * 255);
      var g = Math.floor(Math.random() * 255);
      var b = Math.floor(Math.random() * 255);
      var color = "rgb("+r+","+g+","+b+")"
      $(this).css("background-color", color);
  });

$('.letter').on('click', function (event) {
	var $this = $(this)
	$('p').unbind('mouseout');
	if (chosenWord.includes(($this).attr('id'))) {
		for (var i = 0; i < chosenWord.length; i++) {
			var content = $this.attr('id');
			if (content === chosenWord[i]) {
				$('.blank').eq(i).html(content);
				$('.blank').eq(i).addClass('match');
				$this.addClass('right-letter');
				$this.fadeOut(1000);
			}
		}
		checkWinner();
		// $('p').off('click');
	} else {
		$(this).addClass('wrong-letter');
		$(this).fadeOut(1000);
		wrongLetter();
		// $('.letter').off('click');
	}
});

$('button').click(function (event){
	location.reload();
});

// $('.play-button').click(function (event){
// 	document.location.href = '../index.html';
// });

if ($('#difficulty').hasClass('easy')) {
	console.log('easy');
}

//Title Logic

function title() {
	$('#easy').click(function (event){
	difficulty = 'easy';
	$('#header').html('Choose category');
	$('#easy').addClass('hide');
	$('#medium').addClass('hide');
	$('#hard').addClass('hide');
	$('#rw').removeClass('hide');
	$('#rt').removeClass('hide');
	$('#rc').removeClass('hide');
});

$('#medium').click(function (event){
	difficulty = 'medium';
	$('#header').html('Choose category');
	$('#easy').addClass('hide');
	$('#medium').addClass('hide');
	$('#hard').addClass('hide');
	$('#rw').removeClass('hide');
	$('#rt').removeClass('hide');
	$('#rc').removeClass('hide');
});

$('#hard').click(function (event){
	difficulty = 'hard';
	$('#header').html('Choose category');
	$('#easy').addClass('hide');
	$('#medium').addClass('hide');
	$('#hard').addClass('hide');
	$('#rw').removeClass('hide');
	$('#rt').removeClass('hide');
	$('#rc').removeClass('hide');
});

$('#rw').click(function (event){
	category = 'rw';
	$('#title').addClass('hide');
	$('.game').removeClass('hide');
	$('.game').addClass('show');
});

$('#rt').click(function (event){
	category = 'rt';
	$('#title').addClass('hide');
	$('#game').removeClass('hide');
	$('#game').addClass('show');
});

$('#rc').click(function (event){
	category = 'rc';
	$('#title').addClass('hide');
	$('.game').removeClass('hide');
	$('.game').addClass('show');
});
}



});
// document.addEventListener('keydown', function(event) {
// 	if (event.keyCode === 65) {

// 	}
// });