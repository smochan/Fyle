$(".project").on("click", function () {
  $(".project").removeClass("bg-danger text-light");
  $(this).addClass("bg-danger text-light");

  for (var i = 1; i <= 3; i++) {
    if ($(this).hasClass("div" + i)) {
      $(".projectImg").addClass("d-none");
      $(".img" + i).removeClass("d-none");
      $(".img" + i).removeClass("d-none");
    }
  }
});

$(".contact").on("click", function () {
  $(".modale").removeClass("d-none");
  $(".modale").addClass("centering");
});
$(".modalBack").on("click", function () {
  $(".modale").addClass("d-none");
});
