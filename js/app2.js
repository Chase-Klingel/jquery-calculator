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

  function add() {
   var total = 1;
   var arr = [];
   var arr2 = [];
   var str = $('#screen').text().split('');

   while (str.length) {
     if (str[0] !== '+' && str[0] !== '-' && str[0] !== '*' && str[0] !== '/') {
        arr.push(str[0]);
        str.shift();
     } else {
        arr.push(str[0]);
        arr2.push(str[0]);
        str.shift();
        arr.shift();
        arr.pop();
        arr = arr.join('');
        if (arr2[arr2.length - 1] === '+') {
          total += parseInt(arr) - 1;
        } else if (arr2[arr2.length - 1] === '*') {
          total *= parseInt(arr);
        } else if (arr2[arr2.length - 1] === '-') {
          total -= parseInt(arr) - 1;
        } else if (arr2[arr2.length - 1] === '/') {
          total /= parseInt(arr);
        }
        arr = [];
        arr.unshift(arr2[arr2.length - 1]);
     }
   }
   arr = arr.join('');
   if (arr2[arr2.length - 1] === '+') {
     total += parseInt(arr);
   } else if (arr2[arr2.length - 1] === '-') {
     total += parseInt(arr);
   } else if (arr2[arr2.length - 1] === '*') {
     arr = arr.substr(1);
     total *= parseInt(arr);
   } else if (arr2[arr2.length - 1] === '/') {
     arr.substr(1);
     total /= parseInt(arr);
   }
   $('#screen').empty().append(total);
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
  $('#clear').click(clearScreen);
  $('#equals').click(add);
});
