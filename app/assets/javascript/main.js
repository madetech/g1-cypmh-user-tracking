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

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

var elements = document.getElementsByClassName("track-me");
console.log(elements);
for (var i = 0; i < elements.length; i++) {
  elements[i].onclick = function(event) {
    console.log("clicked");
    console.log(event)
  };
};

// window.onscroll = function analytics_scroll(event) {
//   console.log(isInViewport(elements[0]));
// }

console.log(elements);
let isOnscreen = []
for (var i = 0; i < elements.length; i++) {
  isOnscreen = [...isOnscreen, {onscreen: null, element: elements[i]}]
};
// isOnscreen = elements.map(element_obj => ({onscreen: false, element: element_obj}))//[{id:1, onscreen:false, element:element}]
window.onscroll = function scroll_two(event) {
  isOnscreen.forEach(item => {
    let result = isInViewport(item.element)
    if (item.onscreen == result) {
      return
    }
    else {
      console.log("view changed")
      item.onscreen = result
    }

  });
}


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


