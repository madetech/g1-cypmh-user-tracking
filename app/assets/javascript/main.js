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

