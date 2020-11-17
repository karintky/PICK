// 按其中一個盒子下去
$(".reason-box").fadeOut(0);
$(".reason").each(function () {
  $(this).fadeOut(0);
});
// 其他消失白色盒子出來
$(".reason-box").click(function () {
  $(".reason-box").fadeOut(300);
}).children().click(function () {
  return false;
});
// 按白色框框以外就彈出去
$(".reason-box").each(function () {
  $(this).click(function () {
    var show = $(this).attr("reason");
    $(".reason-box").fadeOut(300);
    return false;
  });
})

// 回到本來的頁面
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