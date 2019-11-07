document.querySelector("#blinds_up_button").onclick = function (event) {sendGetCall(event.target);};
document.querySelector("#blinds_stop_button").onclick = function (event) {sendGetCall(event.target);};
document.querySelector("#blinds_down_button").onclick = function (event) {sendGetCall(event.target);};
document.querySelector("#bedroom_button").onclick = function (event) {sendGetCall(event.target);};
document.querySelector("#livingroom_button").onclick = function (event) {sendGetCall(event.target);};
document.querySelector("#kitchen_button").onclick = function (event) {sendGetCall(event.target);};
document.querySelector("#dining_button").onclick = function (event) {sendGetCall(event.target);};
document.querySelector("#patio_button").onclick = function (event) {sendGetCall(event.target);};

function sendGetCall(target) {
  let parameter = target.getAttribute("destination");
  var getUrl = window.location;
  var baseUrl = getUrl.protocol + "//" + getUrl.host;
  var request = new XMLHttpRequest();
  request.open('GET', baseUrl+"/api/rest/Remote/Electronics/"+parameter+"/uart", true);
  request.send();
}
