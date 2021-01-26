// ES6 or Vanilla JavaScript
// ES6 or Vanilla JavaScript
window.onload = window.onunload = function analytics(event) {
    if (!navigator.sendBeacon) return;

    let url = "/tracking";
    // Create the data to send
    let sessionId = document.cookie.split("=")[1]
    // Send the beacon
    let status = navigator.sendBeacon(url, JSON.stringify({sessionId: sessionId, type: event.type, location: location.href, time: Date()}));
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

    if (clickObject.href !== undefined) {
        console.log(event);
        console.log(event.path[0].href);
        let url = "/tracking";
        // Create the data to send
        let clickData = {linkTo: clickObject.href, linkText: clickObject.innerText}
        let sessionId = document.cookie.split("=")[1]
        let beaconData = {sessionId:sessionId, type: event.type, location: location.href, eventData:clickData, time: Date()}
        // Send the beacon
        let status = navigator.sendBeacon(url, JSON.stringify(beaconData));
    }
};

if(!document.cookie){
    document.cookie = `id=${Math.floor(Math.random() * 900000) + 100000}`;
}


