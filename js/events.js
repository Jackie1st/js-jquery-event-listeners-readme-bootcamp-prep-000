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
    if (key.which == 71) {
      alert('You have pressed a g.');
    }
  });
}



$(document).ready(function(){

// call functions here

});
