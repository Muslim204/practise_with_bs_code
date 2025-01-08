$(".bannerpart").slick({
  // centerMode: true,
  // centerPadding: "0",
  slidesToScroll: 1,
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  fade: true,
  responsive: [
    {
      breakpoint: 4000,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
  prevArrow:
    '<div class="navigation_arrow prevarrow"><span><i class="fa-solid fa-chevron-left"></i></span></div>',
  nextArrow:
    '<div class="navigation_arrow rightarrow"><span><i class="fa-solid fa-chevron-right"></i></span></div>',
});
// DYNAMIC TIME PART GOES HERE
function dynamic_time() {
  let today = new Date();
  let date = today.getDate();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();
  let day = today.getDay();
  let day_list = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let hours = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();
  let prepand = hours >= 12 ? "PM" : "AM";
  let timeformate = hours >= 12 ? hours - 12 : hours;
  let current_date_time =
    day_list[day] +
    ", " +
    date +
    "/" +
    month +
    "/" +
    year +
    ".        " +
    timeformate +
    ":" +
    minute +
    ":" +
    second +
    " " +
    prepand;
  document.getElementById("current_date_time").innerHTML = current_date_time;
}
setInterval(dynamic_time);
// backtop button
//=====BACK TOP BUTTON GOES HERE==========================//
$(function ($) {
  $(window).scroll(function () {
    let scrol_TOP = $(window).scrollTop();
    if (scrol_TOP > 400) {
      $(".back_top_button").fadeIn(1000);
    } else {
      $(".back_top_button").fadeOut(1000);
    }
  });

  $(".back_top_button").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
  });
});

// FORM CLOSE
$(".quoteform button i ").click(function () {
  $(".quoteform").hide();
});
// FORM SHOW
$(".quotebtn").click(function () {
  $(".quoteform").show();
});

// Manu Fixed
$(function ($) {
  $manu_top = $(".mynav").offset().top;
  $(window).scroll(function () {
    $scrolTop = $(this).scrollTop();
    if ($scrolTop > $manu_top) {
      $(".mynav").addClass("manu_fixed");
    } else {
      $(".mynav").removeClass("manu_fixed");
    }
  });
});

// SERVICE PART GOES HERE
// Manu Fixed
$(function ($) {
  $ourservices_top = $(".ourservices").offset().top;
  $(window).scroll(function () {
    $scrolTop = $(this).scrollTop();
    if ($scrolTop > $ourservices_top - 300) {
      $(".ourservices").addClass("ourservicesanimation");
    }
  });
});

// CHOICE PART GOES HERE
$(function ($) {
  $choiceus_top = $(".choiceus").offset().top;
  $(window).scroll(function () {
    $scrolTop = $(this).scrollTop();
    if ($scrolTop > $choiceus_top - 300) {
      $(".choiceus").addClass("choiceusanimation");
    }
  });
});
// DROPDOWN ICON
$("#dropdownicon").click(function () {
  $("header .translationpart .language .drowpdown").toggle();
});

$("nav .searchbtn .content").click(function () {
  $("nav .searchbtn .form ").toggle();
});

// COUNTING NUMBER
$(function ($) {
  $projecttop = $(".project").offset().top;
  $(window).scroll(function () {
    let scrol_TOP = $(window).scrollTop();
    if (scrol_TOP > $projecttop - 500) {
      // PROJECT PART GOES HERE =================
      let projectnumber = document.querySelector(".countingproject");
      let projectnewnumber = projectnumber.innerHTML;
      let counter = 0;
      setInterval(() => {
        if (counter == projectnewnumber) {
          clearInterval();
        } else {
          counter += 1;
          projectnumber.innerHTML = counter;
        }
      }, 15);
      // });

      // CLIENTS PART GOES HERE =================
      let clientnumber = document.querySelector(".countingclients");
      let clientnewnumber = clientnumber.innerHTML;
      let clientcounter = 0;
      setInterval(() => {
        if (clientcounter == clientnewnumber) {
          clearInterval();
        } else {
          clientcounter += 1;
          clientnumber.innerHTML = clientcounter;
        }
      }, 15);

      // ========vehicle parts goes here
      let vehiclenumber = document.querySelector(".countingvehicle");
      let vehiclenewnumber = vehiclenumber.innerHTML;
      let vehiclecounter = 0;
      setInterval(() => {
        if (vehiclecounter == vehiclenewnumber) {
          clearInterval();
        } else {
          vehiclecounter += 1;
          vehiclenumber.innerHTML = vehiclecounter;
        }
      }, 15);

      // member part goes here
      let membernumber = document.querySelector(".countingmember");
      let membernewnumber = membernumber.innerHTML;
      let membercounter = 0;
      setInterval(() => {
        if (membercounter == membernewnumber) {
          clearInterval();
        } else {
          membercounter += 1;
          membernumber.innerHTML = membercounter;
        }
      }, 15);
    }
  });
});

// =================differentspart PARTS GOES HERE
$(function ($) {
  $differentspart = $(".differentspart").offset().top;
  $(window).scroll(function () {
    let scrol_TOP = $(window).scrollTop();
    if (scrol_TOP > $differentspart - 500) {
      $(".differentspart").addClass("overlayanimation");
    }
  });
});

// SELLING PRODUCTS

$(document).ready(function () {
  $(".zoom").magnify();
});

// =================LATEST NEWS PARTS GOES HERE
$(function ($) {
  $latestnewsTOP = $(".latestnews").offset().top;
  $(window).scroll(function () {
    let scrol_TOP = $(window).scrollTop();
    if (scrol_TOP > $latestnewsTOP - 500) {
      $(".latestnews").addClass("latestnewsanimation");
    }
  });
});

// SELLING PRODUCT ANIMATION============
$(function ($) {
  $sellingTOP = $(".sellingproduct").offset().top;
  $(window).scroll(function () {
    let scrol_TOP = $(window).scrollTop();
    if (scrol_TOP > $sellingTOP - 500) {
      $(".sellingproduct").addClass("sellinganimation");
    }
  });
});

// DELIVERY PROCESS ANIMATION============
$(function ($) {
  $deliveryTOP = $(".deliveryprocess").offset().top;
  $(window).scroll(function () {
    let scrol_TOP = $(window).scrollTop();
    if (scrol_TOP > $deliveryTOP - 500) {
      $(".deliveryprocess").addClass("deliveryanimation");
    }
  });
});
// valueable clients ANIMATION============
$(function ($) {
  $clientTOP = $(".valueableclients").offset().top;
  $(window).scroll(function () {
    let scrol_TOP = $(window).scrollTop();
    if (scrol_TOP > $clientTOP - 500) {
      $(".valueableclients").addClass("clientsanimation");
    }
  });
});
