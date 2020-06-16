// global

$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

//
$(".nav-link").on("click", function (e) {
  $(this).parent().addClass("active").siblings().removeClass("active");
  e.preventDefault();
});

$(".love-icon-card").click(function (e) {
  $(this).toggleClass("active");
});
// copy share link
// var clipboard = new ClipboardJS("#copy-share-link");
// $("#copy-share-link").click(function (e) {
//   shearlink
//   $('shearlink').
// });

// clipboard.on("success", function (e) {
//   $('#shearlink').prop('title ','تم نسخ الرابط بنجاح');
//   e.clearSelection();
//   $('[data-toggle="tooltip"]').tooltip()

//   $('#shearlink').tooltip();
//   let shareTooltipId = $("#shearlink").attr("aria-describedby");
//   $(`#${shareTooltipId} .tooltip-inner`).html("تم نسخ الرابط بنجاح");
//   toastr.info('Are you the 6 fingered man?')
// });

// toggole-shear-btn
$("#toggole-shear-btn").click(function (e) {
  $(".shared-wrapper").toggleClass("active");
});

//google map
$("#pickup_country").PlacePicker({
  key: "AIzaSyAPceSsErOlOqRVJ7qIb2ZnbKTPnXb4uP0",
  title: "اختيار الموقع",
  btnClass: "btn btn-transparent btn-sm",
  center: { lat: 24.7245049, lng: 46.6960525 },
  zoom: 14,
  success: function (data, address) {
    $("#pickup_country").val(data.formatted_address);
    console.log(address, data);
  },
});
