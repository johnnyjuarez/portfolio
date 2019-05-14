$(".navbar-nav>li>a").on("click", function() {
  $(".navbar-collapse").collapse("hide");
});
// fade navbar when scrolled
$(function() {
  $(document).scroll(function() {
    var $nav = $("#mainNavbar");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});

// function to change add or remove "small" class depending on window size
$(function() {
  var $window = $(window),
    $toggle = $(".project-toggle");

  $window.resize(function resize() {
    if ($window.width() > 460) {
      return $toggle.removeClass("small");
    } else {
      return $toggle.addClass("small");
    }
  });
});
