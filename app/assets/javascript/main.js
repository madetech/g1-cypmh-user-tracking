// ES6 or Vanilla JavaScript
// ES6 or Vanilla JavaScript
window.onload = window.onunload = function analytics(event) {
    if (!navigator.sendBeacon) return;
  
    var url = "/tracking";
    // Create the data to send
    var data = "state=" + event.type + "&location=" + location.href + "&time=" + Date();
  
    // Send the beacon
    var status = navigator.sendBeacon(url, JSON.stringify({state: event.type, location: location.href, time: Date()}));
  
    // Log the data and result
    console.log("sendBeacon: URL = ", url, "; data = ", data, "; status = ", status);
};

// var elements = document.getElementsByClassName("track-me");
// console.log(elements);
// for (var i = 0; i < elements.length; i++) {
//   elements[i].onclick = function(event) {
//     console.log("clicked");
//     console.log(event)
//   };
// };


document.onclick = function analytics_click(event) {
  if (!navigator.sendBeacon) return;
  let clickObject = event.path[0]

  if (clickObject.href != undefined) {
    console.log(event);
    console.log(event.path[0].href);
    let url = "/tracking";
    // Create the data to send
    let data = "state=" + event.type + "&location=" + location.href + "&linkTo=" + clickObject.href + "&linkText=" + clickObject.innerText + "&time=" + Date();
    let clickData = {linkTo: clickObject.href, linkText: clickObject.innerText}
    let beaconData = {state: event.type, location: location.href, eventData:clickData, time: Date()}
    // Send the beacon
    let status = navigator.sendBeacon(url, JSON.stringify(beaconData));
    // Log the data and result
    console.log("sendBeacon: URL = ", url, "; data = ", data, "; status = ", status);
  }

};