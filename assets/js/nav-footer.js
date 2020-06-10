function getHeader() {
  // read text from URL location
  var request = new XMLHttpRequest();
  request.open("GET", "header.html", true);
  request.send(null);
  request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
      var type = request.getResponseHeader("Content-Type");
      if (type.indexOf("text") !== 1) {
        $("body").prepend(request.responseText);
        return request.responseText;
      }
    }
  };
  return request;
}
getHeader();

function getFooter() {
  // read text from URL location
  var request = new XMLHttpRequest();
  request.open("GET", "footer.html", true);
  request.send(null);
  request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
      var type = request.getResponseHeader("Content-Type");
      if (type.indexOf("text") !== 1) {
        $("body").append(request.responseText);
        return request.responseText;
      }
    }
  };
  return request;
}
getFooter();
