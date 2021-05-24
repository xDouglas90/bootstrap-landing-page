jQuery(document).ready(function ($) {
  // Fixed Header
  window.onscroll = function () {
    if (window.pageYOffset > 140) {
      $("#header").addClass("sticky-top");
    } else {
      $("#header").removeClass("sticky-top");
    }
  };

  // Isotope
  let btns = $("#recent-services .button-group button");

  btns.click(function (e) {
    $("#recent-services .button-group button").removeClass("active");
    e.target.classList.add("active");

    let selector = $(e.target).attr("data-filter");
    $("#recent-services .grid").isotope({
      filter: selector,
    })
  });
});