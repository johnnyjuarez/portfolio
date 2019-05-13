$(".navbar-nav>li>a").on("click", function() {
  $(".navbar-collapse").collapse("hide");
});
$(function() {
  $(document).scroll(function() {
    var $nav = $("#mainNavbar");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});
