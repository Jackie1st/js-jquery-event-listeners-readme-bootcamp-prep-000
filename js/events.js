//define functions here
function getIt() {
  $('p').on('click', function() {
    alert("Hey!");
    return;
    });
}

function frameIt() {
  $('img').on('load', function() {
    $('img').append('.tasty');
    return;
  });
}

function pressIt() {
  $(document).on('keydown', function() {
    if (key.which == ) {
      alert('You have pressed a G.');
    }
  });
}

$(document).ready(function(){

// call functions here

});
