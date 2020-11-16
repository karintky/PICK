$(".reason-box").fadeOut(0);
$(".reason").each(function () {
  $(this).fadeOut(0);
});

$(".reason-box").click(function () {
  $(".reason-box").fadeOut(300);
}).children().click(function () {
  return false;
});

$(".reason-box").each(function () {
  $(this).click(function () {
    var show = $(this).attr("reason");
    $(".reason-box").fadeOut(300);
    return false;
  });
})


$(".button").each(function () {
  $(this).click(function () {
    var show = $(this).attr("data-show");
    $(".reason").each(function() {
      $(this).fadeOut(0);
    });
    $(".reason-box").fadeIn(600);
    $(show).fadeIn(600);
  })
})




// index//

$('.carousel').carousel();