
$('li').on('click', function() {
    var val = $(this).text(),
      $range = $('input');
    $range.val(val);
    $range.trigger('input');
  });
  $('input').on('input', function() {
    var val = $(this).val();
    $('li').each(function(i) {
      if (i == val) {
        $(this).addClass('active');
      } else {
        $(this).removeClass('active');
      }
    });
});