// let colorsID = document.getElementsByTagName('div');
//
// console.log(colorsID);

$('#green,#red,#blue,#yellow').mouseenter(function(){
  var color= $(this).attr('id');
  $(text).css('color',color);
});

$('#green,#red,#blue,#yellow,#rainbow').mouseleave(function(){
  $(text).css('color','inherit');
});

$('#rainbow').mouseenter(function(){
  $(text).addClass('rainbow');
});

$('#rainbow').mouseleave(function(){
  $(text).removeClass('rainbow');
});
