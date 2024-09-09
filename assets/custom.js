$(document).ready(function () {
  // START: check radio levels js
  function checkRadioButtons() {
    if ($('.first-level-block input[name="brandInput"]:checked').length > 0) {
      $(".nextlevel").removeClass("disabled");
      var $_dataUrl = $('input[name="brandInput"]:checked').data("url");
      var $brand_name = $('input[name="brandInput"]:checked').data("value");
      $(".nextpagelink").attr("href", $_dataUrl);
      if ($brand_name === "apple") {
        $(".nextpagelink").addClass("apple_brand_active");
        $(".nextlevel").addClass("apple_brand_active");
      } else {
        $(".nextpagelink").removeClass("apple_brand_active");
        $(".nextlevel").removeClass("apple_brand_active");
      }
    } else {
      $(".nextlevel").addClass("disabled");
    }
  }

  function checkDeviceName() {
    if ($('input[name="iphoneDeviceInput"]:checked').length > 0) {
      $(".nextlevel").removeClass("disabled");
      var $_dataUrl = $('input[name="iphoneDeviceInput"]:checked').data("url");
      $(".nextpagelink").attr("href", $_dataUrl);
    } else {
      $(".nextlevel").addClass("disabled");
    }
  }

  checkRadioButtons();
  checkDeviceName();
  // END: check radio levels js

  
  $(document).on("click", ".nextlevel.first-level-active", function (e) {
    e.preventDefault();
    var $this = $(this);
    $this.addClass("second-level-active");
    $this.removeClass("first-level-active");
    $this.removeClass("selected");
    $(".first-level-block").addClass("second-level-active");
    $(".backlevel").addClass("second-level-active");
    $(".second-level-block").addClass("second-level-active");
    $(".progress-bar").addClass("second-level-active");
    $(".third-level-block").addClass("second-level-active");
  });

  $(document).on("click", ".nextlevel.second-level-active", function (e) {
    if ($(this).hasClass("apple_brand_active")) {
      e.preventDefault();
      $(this).removeClass("second-level-active");
      $(".nextlevel").addClass("third-level-active");
      $(".backlevel").removeClass("first-level-active");
      $(".backlevel").removeClass("second-level-active");
      $(".backlevel").addClass("third-level-active");
      $(".first-level-block").addClass("third-level-active");
      $(".third-level-block").addClass("third-level-active");
      $(".second-level-block").removeClass("second-level-active");
      $(".second-level-block").addClass("third-level-active");
      $(".progress-bar").addClass("third-level-active");
      $(".progress-bar").removeClass("second-level-active");
      $(".third-level-block").removeClass("second-level-active");
    }
  });

  $(document).on("click", ".backlevel.second-level-active", function () {
    $(this).removeClass("second-level-active");
    $(".backlevel").addClass("first-level-active");
    $(".backlevel").removeClass("third-level-active");
    $(".progress-bar").removeClass("second-level-active");
    $(".progress-bar").addClass("first-level-active");
    $(".first-level-block").addClass("first-level-active");
    $(".first-level-block").removeClass("second-level-active");
    $(".second-level-block").removeClass("second-level-active");
    $(".iphone-devices__name-wrap").removeClass("third-level-active");
    $(".nextlevel").addClass("first-level-active");
    $(".nextlevel").removeClass("second-level-active");
    $(".nextlevel").removeClass("third-level-active");
  });

  $(document).on("click", ".backlevel.third-level-active", function () {
    $(".backlevel").removeClass("third-level-active");
    $(".backlevel").removeClass("first-level-active");
    $(".backlevel").addClass("second-level-active");
    $(".third-level-block").removeClass("third-level-active");
    $(".second-level-block").addClass("second-level-active");
    $(".progress-bar").removeClass("third-level-active");
    $(".progress-bar").addClass("second-level-active");
    $(".nextlevel").addClass("second-level-active");
    $(".nextlevel").removeClass("third-level-active");
    $(".second-level-block").removeClass("third-level-active");
  });

  // START: check radio levels js
  $('input[name="brandInput"]').on("change", function () {
    checkRadioButtons();
    var $this = $(this),
      $_closest = $this.closest(".js-brand-selector"),
      $_find = $_closest.find(".radio-input"),
      $_dataUrl = $_find.data("url"),
      $brand_name = $_find.data("value");
    if ($('input[name="brandInput"]:checked').length > 0) {
      $(".nextlevel").addClass("selected");
      $(".nextpagelink").attr("href", $_dataUrl);
      if ($brand_name === "apple") {
        $(".nextpagelink").addClass("apple_brand_active");
        $(".nextlevel").addClass("apple_brand_active");
      }
    } else {
      $(".nextlevel").addClass("disabled");
    }
  });

  $('input[name="iphoneDeviceInput"]').on("change", function () {
    checkDeviceName();
    var $this = $(this),
      $_closest = $this.closest(".js-name-selector"),
      $_find = $_closest.find(".radio-input"),
      $_dataUrl = $_find.data("url");
    if ($('input[name="iphoneDeviceInput"]:checked').length > 0) {
      $(".nextpagelink").attr("href", $_dataUrl);
    } else {
      $(".nextlevel.first-level-active ").addClass("disabled");
    }
  });
  // END: check radio levels js

$('.custom-checkbox-container input[type=checkbox]').click(function() {
        if ($(this).is(':checked')) {
            $('.nextlevel.second-level-active').removeClass('disabled');
        } else {
            $('.nextlevel.second-level-active').addClass('disabled');
        }
    });
  
  $(document).on("click",".selected-element", function () {
    var target = $(this).data("target"),
      fixedHeaderHeight = $(".header-wrapper").outerHeight(),
      maindiv = $(target).offset().top - fixedHeaderHeight - 30;
    $("html, body").animate(
      {
        scrollTop: maindiv,
      },
      1000
    );
  });

  // START:- macbook selection
  $(document).on("click", ".faq-heading-wrapp", function () {
    $(this).next(".faq-content-wrapp").slideToggle();
    $(this).toggleClass("active");
  });
  // END:- macbook selection

  // START:- customizer collection tab
  $(document).on("click", ".tab-heading", function (e) {
    e.preventDefault();
    var currentAttrValue = $(this).data("target");
    $(currentAttrValue).addClass("active").siblings().removeClass("active");
    $(this).addClass("active").siblings().removeClass("active");
  });

  $(document).on("click", ".slide-content .heading", function () {
    var $_this = $(this),
      $_closest = $_this.closest(".slide-content"),
      $_find = $_closest.find(".content");
    $_find.slideToggle();
    if ($_closest.hasClass("active")) {
      $_closest.removeClass("active");
      $_find.removeClass("active");
    } else {
      $_find.addClass("active");
      $_closest.addClass("active");
    }
  });

  // check div length andadd class

  $(".tab").each(function () {
    var contentCount = $(this).find(".tab-allcontent-wrapp").length;
    if (contentCount === 1) {
      $(this)
        .find(".tab-allcontent-wrapp")
        .css("width", "100%")
        .addClass("tab-allcontent-wrappfull");
    } else if (contentCount === 2) {
      $(this)
        .find(".tab-allcontent-wrapp")
        .css("width", "50%")
        .addClass("tab-allcontent-wrapphalf");
    } else {
      $(this)
        .find(".tab-allcontent-wrapp")
        .css("width", "33%")
        .addClass("tab-allcontent-wrappthird");
    }
  });

  $(".main-tab-wrapp").each(function () {
    var contentCount = $(this).children().length;

    $(this).css("display", "flex");

    if (contentCount === 1) {
      $(this).children().css("width", "100%");
    } else if (contentCount === 2) {
      $(this).children().css("width", "50%");
    } else if (contentCount === 3) {
      $(this).children().css("width", "33.33%");
    }
  });
  // END:-  customizer collection tab

  //START:- custoizer collection visitUs popup

  $(document).on("click", ".choose-visit-services", function (e) {
    e.preventDefault();
    $(".email-wrapper").show();
    $(this).addClass("active-service");
    $(".choose-mail-services").removeClass("active-service");
  });
  $(document).on("click",".choose-mail-services", function (e) {
    e.preventDefault();
    var main_product_price = $(this).attr("prod-price");
    $(".email-wrapper").hide();
    $(".visit-method--wrapper").hide();
    $(".delivery-method-wrapper").show();
    $(this).addClass("active-service");
    $(".choose-visit-services").removeClass("active-service");
    $(".booking-progress-wrap.second-step").addClass("active");
    $(".booking-progress-wrap.first-step").removeClass("active");
    $(".booking-progress-wrap.first-step").addClass("active-next-step");

    $(".mail-continue-button").attr("main-product-price", main_product_price);
  });

  $(document).on("click", ".pro-button-wrap", function (e) {
    e.preventDefault();
    ($_this = $(this)),
      ($_closest = $_this.closest(".product--wrapper")),
      ($find_img = $_closest.find(".product_image")),
      ($find_price = $_closest.find(".product-price")),
      (product_price = $find_price.attr("prod-price")),
      (prod_title = $_closest.find(".product-title")),
      (prod_id = $_this.children(".product-variant-id").val()),
      (prod_title_val = prod_title.attr("prod-title")),
      ($src = $find_img.attr("src"));

    $(".add-product-fields").attr("main-product-id", prod_id);

    $(".visitUs-popup-wrapper").show();
    $("body").addClass("active-popup");
    $(".bookingimage img").attr("src", $src);
    $(".product-title").text(prod_title_val);
    $(".repair-product-price").text("£" + product_price);
    $(".repair-type-image img").attr("src", $src);
    $(".choose-mail-services").attr("prod-price", product_price);
  });

 

  $(document).on("click", ".second-step.active .previous_link", function () {
    ($_this = $(this)),
      (closest = $_this.closest(".booking-progress-wrap.second-step"));
    closest.removeClass("active");
    $(".booking-progress-wrap.first-step").addClass("active");
    $(".booking-progress-wrap.first-step").removeClass("active-next-step");
    $(".delivery-method-wrapper").hide();
    $(".visit-method--wrapper").show();
    $(".store-locator-wrapper").hide();
  });
  $(document).on("click", ".fourth-step.active .previous_link", function () {
    ($_this = $(this)),
      (closest = $_this.closest(".booking-progress-wrap.fourth-step"));
    $_this.addClass("active-back-step");
    closest.removeClass("active");
    $(".booking-progress-wrap.second-step").removeClass("active-next-step");
    $(".booking-progress-wrap.third-step").removeClass("active-next-step");
    $(".booking-progress-wrap.second-step").addClass("active");
    $(".form-wrapper").hide();
    $(".delivery-method-wrapper").show();
  });

  $(document).on("click", ".booking-progress-wrap.first-step", function () {
    var $_this = $(this);

    if ($_this.hasClass("active-next-step")) {
      $_this.removeClass("active-next-step");
      $_this.addClass("active");
      $(".booking-progress-wrap.second-step").removeClass("active");
      $(".booking-progress-wrap.third-step").removeClass("active");
      $(".booking-progress-wrap.fourth-step").removeClass("active");
      $(".booking-progress-wrap.fifth-step").removeClass("active");
      $(".visit-method--wrapper").show();
      $(".delivery-method-wrapper").hide();
      $(".form-wrapper").hide();
    } else {
      $(".visitUs-popup-wrapper").hide();
    }
  });

  $(document).on("click", ".mail-continue-button", function () {
    var active_prod_wrap = $(".tab.active").find(".product--wrapper"),
      mail_prod_wrap = $(".mail-product-details"),
      mail_prod_description = mail_prod_wrap.attr("data-description"),
      mail_prod_image = mail_prod_wrap.attr("data-image"),
      mail_prod_price = mail_prod_wrap.attr("data-price"),
      main_product_price = $(this).attr("main-product-price"),
      total_price =
        parseFloat(main_product_price) + parseFloat(mail_prod_price);

    $(".total--price").text("£" + total_price);
    $(".booking-progress-wrap.fourth-step").addClass("active");
    $(".booking-progress-wrap.second-step").addClass("active-next-step");
    $(".booking-progress-wrap.third-step").addClass("active-next-step");
    $(".booking-progress-wrap.second-step").removeClass("active");
    $(".form-wrapper").show();
    $(".delivery-method-wrapper").hide();

    $(".mail-product-description").text(mail_prod_description);
    $(".mail-product-description").text(mail_prod_description);
    $(".mail-product-price").text("£" + mail_prod_price);
    $(".mail_image").attr("src", mail_prod_image);
  });

  /** START:- form agrement input **/

  $(".js-appoint-button").addClass("disabled");
  $(document).on("change", ".agreecontent, .termcontent", function () {
    aggrement();
  });

  aggrement();

  $(document).on("click", ".js-appoint-button", function (e) {
    e.preventDefault();

    var $_this = $(this),
      closest = $_this.closest(".js-add-product"),
      find = closest.find(".add-product-fields"),
      main_prod_id = find.attr("main-product-id"),
      additional_prod_id = find.attr("additional-product-id"),
      device_passcode = $(
        ".form-main-wrapper input[name='contact[device_passcode]']"
      ).val();
    if ($(".agreecontent").is(":checked") && $(".termcontent").is(":checked")) {
      $(".js-appoint-button").removeClass("disabled");
      $(".error-msg").hide();
      var term_accept = true;
    } else {
      $(".js-appoint-button").addClass("disabled");
      $(".error-msg").show();
      var term_accept = false;
    }
    var data = [
      {
        id: main_prod_id,
        quantity: 1,
        properties: {},
      },
      {
        id: additional_prod_id,
        quantity: 1,
        properties: {
          productPack: "Post In Pack Product",
        },
      },
    ];

    var cartAttributes = {
      Device_Passcode: device_passcode,
      Terms_Accepted: term_accept,
    };

    var items = [];
    console.log("data>>", data);
    data.forEach(function (item) {
      items.push({
        id: item.id,
        quantity: item.quantity,
        properties: item.properties,
      });
    });

    let formData = {
      items: items,
      attributes: cartAttributes,
    };

    fetch("/cart/add.js", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to add items to the cart");
        }
      })
      .then((data) => {
        console.log("Items added to cart:", data);
        window.location.href = "/cart?view=customize-product-cart";
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
  /** END:- form agrement input **/

  /** START:- proceed to choose a store **/

  //chek email valid or have content in input field
  $(".email-wrapper .btn_label").addClass("disabled");
  $(".customer-email-id").on("input", function () {
    var email = $(this).val();
    var isValidEmail = validateEmail(email);
    if (isValidEmail && email.trim() !== "") {
      $(".email-wrapper .btn_label").removeClass("disabled");
    } else {
      $(".email-wrapper .btn_label").addClass("disabled");
    }
  });

  $(document).on("click", ".email-wrapper .btn_label", function (e) {
    e.preventDefault();
    $(".store-locator-wrapper").show();
    $(".visit-method--wrapper").hide();
    $(".booking-progress-wrap.first-step").removeClass("active");
    $(".booking-progress-wrap.second-step").addClass("active");
    $(".booking-progress-wrap.first-step").addClass("active-next-step");
  });
  /** END:- proceed to choose a store **/

  //END:- custoizer collection visitUs popup

  /** START:- store locator map**/
  var map;
  var markers = [];
  var userMarker;

  function initMap() {
    var defaultLatLng = { lat: 51.4536968, lng: -0.9707661 };
    map = new google.maps.Map(document.getElementById("map"), {
      center: defaultLatLng,
      zoom: 10,
    });
    if (userMarker) {
      userMarker.setMap(null);
    }
    userMarker = new google.maps.Marker({
      position: { lat: 51.4536968, lng: -0.9707661 },
      map: map,
      zoom: 12,
    });
  }

  // Add current location marker when the button is clicked
  $("#get-location-btn").on("click", function () {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          var lat = position.coords.latitude;
          var lng = position.coords.longitude;

          // Center the map on the user's location
          map.setCenter({ lat: lat, lng: lng });

          // Add a marker for the user's location
          if (userMarker) {
            userMarker.setMap(null);
          }
          userMarker = new google.maps.Marker({
            position: { lat: lat, lng: lng },
            map: map,
            zoom: 25,
          });

          console.log("User Latitude:", lat);
          console.log("User Longitude:", lng);
        },
        function (error) {
          console.error("Geolocation error:", error);
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  });

  // Initialize the map when the page is loaded
  google.maps.event.addDomListener(window, "load", initMap);

  $("#location-form").on("submit", function (e) {
    e.preventDefault();
    var pincode = $("#pincode").val();
    $.get(
      "https://maps.googleapis.com/maps/api/geocode/json",
      {
        address: pincode,
        key: "AIzaSyBa2bxAi5-ZjZ30Pxp9PPl94Dgin8Sottw",
      },
      function (data) {
        if (data.status === "OK") {
          var latLng = data.results[0].geometry.location;
         
          map.setCenter({ lat: latLng.lat, lng: latLng.lng });
          if (userMarker) {
            userMarker.setMap(null);
          }
          userMarker = new google.maps.Marker({
            position: { lat: latLng.lat, lng: latLng.lng },
            map: map,
            zoom: 25,
          });
           
        } else {
          console.error("Geocoding failed: " + data.status);
        }
      }
    );
  });

  /** END:- store locator map**/
});

function aggrement() {
  
  if ($(".agreecontent").is(":checked") && $(".termcontent").is(":checked")) {
    $(".js-appoint-button").removeClass("disabled");
    $(".error-msg").hide();
    var term_accept = true;
  } else {
    $(".js-appoint-button").addClass("disabled");
    $(".error-msg").show();
    var term_accept = false;
  }
}

function validateEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
