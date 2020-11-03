$("#reason1").slideUp(0);
$(".reason-box").fadeOut(0);

$("#illegal-1").click(function() {
  $("#reason1").slideDown(400);
  $(".reason-box").fadeIn(400);
  $(".box").fadeIn("fast");
});

// $(".reason-box").click(function() {
//  $(".reason1").slideUp(300);
// $(".reason-box").fadeOut(300);
// }).children().click(function() {
//   return false;
// });