jQuery(document).ready(function ($) {
  // Fixed Header
  window.onscroll = function () {
    if (window.pageYOffset > 140) {
      $("#header").addClass("sticky-top");
    } else {
      $("#header").removeClass("sticky-top");
    }
  };
});