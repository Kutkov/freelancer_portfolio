// progress bar

$(document).ready(function(){
	$('.skillbar').each(function(){
		$(this).find('.skillbar-bar').animate({
			width:$(this).attr('data-percent')
		},2000);
	});
});

// tabs
$(document).ready(function() {

  $('ul.nav li').click(function() {
    var tab_id = $(this).attr('data-tab');

    $('ul.nav li').removeClass('current');
    $('.tab-pane').removeClass('current');

    $(this).addClass('current');
    $("#" + tab_id).addClass('current');
  })

})