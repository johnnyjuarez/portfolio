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

// function to change add or remove "small" class depending on window size on project page
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
// function to remove fa-9x
$(function() {
  var $window = $(window),
    $toggle = $(".contact-toggle");

  $window.resize(function resize() {
    if ($window.width() > 460) {
      return $toggle.removeClass("fa-9x");
    } else {
      return $toggle.addClass("fa-9x");
    }
  });
});
