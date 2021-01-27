// ES6 or Vanilla JavaScript

// Define page props
if(!document.cookie){
  document.cookie = `id=${Math.floor(Math.random() * 900000) + 100000}`;
}
// Define global variables 
const sessionId = document.cookie.split("=")[1]


const createOnScreenArray = (className) => {
  let elements = document.getElementsByClassName(className);

  let isOnscreen = []
  Array.from(elements).forEach((item) => {
      isOnscreen = [...isOnscreen, {onscreen: isInViewport(item), element: item}]
  });
  return isOnscreen
}

let isOnscreen = createOnScreenArray("track-me")

// Global Functions
const sendToTracking = (data) => {
  if (!navigator.sendBeacon) return;

  let url = "/tracking";

  let status = navigator.sendBeacon(url, JSON.stringify(data));
};

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Event functions
window.onunload = function (event) {
  let data = {sessionId: sessionId, type: event.type, location: location.href, time: Date()};
  sendToTracking(data)
}

window.onload = function (event) {
  let data = {sessionId: sessionId, type: event.type, location: location.href, time: Date()};
  sendToTracking(data)


  isOnscreen.forEach(item => {
    let result = item.onscreen
    let visibility;
    if (result === true) {
        visibility = "on screen";
    } else {
        visibility = "off screen";
    }
    if (!navigator.sendBeacon) return;
    let url = "/tracking";
    // Create the data to send
    let sessionId = document.cookie.split("=")[1];
    // Send the beacon
    let visibilityData = {visibility: visibility, objectInnerText: item.element.innerText}
    let status = navigator.sendBeacon(url, JSON.stringify({sessionId: sessionId, type: "scroll", location: location.href, eventData:visibilityData,  time: Date()}));
  });
};






window.onscroll = function scroll_two(event) {
    isOnscreen.forEach(item => {
        let result = isInViewport(item.element)
        let visibility;
        if (item.onscreen !== result) {
            
            if (result === true) {
                visibility = "on screen";
            } else {
                visibility = "off screen";
            }
            if (!navigator.sendBeacon) return;
            let url = "/tracking";
            // Create the data to send
            let sessionId = document.cookie.split("=")[1];
            // Send the beacon
            let visibilityData = {visibility: visibility, objectInnerText: item.element.innerText}
            let status = navigator.sendBeacon(url, JSON.stringify({sessionId: sessionId, type: event.type, location: location.href, eventData:visibilityData,  time: Date()}));
            item.onscreen = result;
        }
    });
}

// window.onload = function scroll_three(event) {
    // isOnscreen.forEach(item => {
    //     let result = item.onscreen
    //     let visibility;
    //     if (result === true) {
    //         visibility = "on screen";
    //     } else {
    //         visibility = "off screen";
    //     }
    //     if (!navigator.sendBeacon) return;
    //     let url = "/tracking";
    //     // Create the data to send
    //     let sessionId = document.cookie.split("=")[1];
    //     // Send the beacon
    //     let visibilityData = {visibility: visibility, objectInnerText: item.element.innerText}
    //     let status = navigator.sendBeacon(url, JSON.stringify({sessionId: sessionId, type: "scroll", location: location.href, eventData:visibilityData,  time: Date()}));
    // });
// }

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




