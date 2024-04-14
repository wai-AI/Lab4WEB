document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var formData = new FormData(event.target);

    var data = {};

    formData.forEach(function(value, key){

      if (data[key]) {
        if (!Array.isArray(data[key])) {
          data[key] = [data[key]];
        }
        data[key].push(value);
      } else {
        data[key] = value;
      }
    });
    var outStr = "";
    for (var key in data) {
      outStr += "<strong>" + key + ":</strong> " + data[key]  + "<p>";
    }

    document.getElementById("output").innerHTML = outStr;
  });
  