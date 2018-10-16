function getData(obj) {

  obj = obj || {};
  var type = obj.type || "get";
  var url = obj.url;
  var data = obj.data || "";
  var success = obj.success;

  $(function () {
    $.ajax({
      type: type,
      url: url,
      data: data,
      dataType: "json",
      success: success
    });
  });
}
