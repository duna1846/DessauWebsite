$('#sidebar').attr('data-spy', 'affix')
$('#sidebar').attr('data-offset-top', Math.round($('#navbar').offset().top + $('#navbar').height()))

$(window).scroll(function () {
  $('#sidebar').width($('#sidebar-container').width());
});

