$(function() {
  function showValue(event) {
    var val = $(event.target).text();
    if (val === '=') {
      return;
    } else if (val === 'x') {
      val = String.fromCharCode(42);
    }
    $('#screen').append(val);
  }

  function evaluate() {
    var result;
    var $divisionExpression;
    var $expression = $('#screen').text();
    if ($('#screen').text().indexOf('÷') !== -1) {
      var find = '÷';
      var re = new RegExp(find, 'g');
      var str = $('#screen').text();
      $divisionExpression = str.replace(re, '/');
      result = eval($divisionExpression);
    } else {
      result = eval($expression);
    }
    $('#screen').empty().append(result);
  }

  function showError() {
    if ($('#screen').text().slice(-2) === '÷÷' || $('#screen').text().slice(-2) === '++' || $('#screen').text().slice(-2) === '**' || $('#screen').text().slice(-2) === '--') {
      $($('#screen').empty().text('ERROR'));
    }

    if ($('#screen').text().indexOf('÷0') !== -1) {
      $($('#screen').empty().text('ERROR'));
    }
  }

  function clearScreen() {
    $('#screen').empty();
  }

  $('.buttons').children().click(showValue);
  $('.buttons').children().click(showError);
  $('#equals').click(evaluate);
  $('#clear').click(clearScreen);
});
