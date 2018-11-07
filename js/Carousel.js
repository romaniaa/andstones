$('.carousel').children(":first").addClass('isActive');

function rotateClass() {
  $('.carousel > *.isActive').appendTo('.carousel').removeClass('isActive');
  $('.carousel').children(":first").addClass('isActive');
}

// Set the Delay Time
setInterval(function () {
  rotateClass();
}, 5000);
