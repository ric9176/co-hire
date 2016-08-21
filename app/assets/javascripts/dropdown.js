$(document).ready(function(){
  $('.category a').on('click', function(e) {
    var txt = $(e.target).text();
    var span = "<span class='tag label label-info added'>" + txt + "<span class='x' data-role='remove'></span></span>";
    $(".bootstrap-tagsinput input").before(span);

    $('.x').on('click', function() {
      $(this).closest('.tag').remove();
    });
  });
});
