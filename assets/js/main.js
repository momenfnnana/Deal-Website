// global

$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

$(".love-icon-card").click(function (e) {
  $(this).toggleClass("active");
});

// copy share link
var clipboard = new ClipboardJS("#copy-share-link");
// $("#copy-share-link").click(function (e) {
//   shearlink
//   $('shearlink').
// });

clipboard.on("success", function (e) {
  $('#shearlink').prop('title ','تم نسخ الرابط بنجاح');
  let shareTooltipId = $("#shearlink").attr("aria-describedby");
  $(`#${shareTooltipId} .tooltip-inner`).html("تم نسخ الرابط بنجاح");
  
  toastr.info('Are you the 6 fingered man?')
});

// toggole-shear-btn
$("#toggole-shear-btn").click(function (e) {
  $(".shared-wrapper").toggleClass("active");
});


// // initialize with defaults
// $("#input-id").fileinput();
 
// // with plugin options
// $("#input-id").fileinput({'showUpload':false, 'previewFileType':'any'});
