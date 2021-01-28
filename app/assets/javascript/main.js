// ES6 or Vanilla JavaScript
// const loadBuilder = require('./load-builder.js');
// import unloadBuilder from "../../../src/unload-builder.js";
// const clickBuilder = require('./click-builder.js');
// const scrollBuilder = require('./scroll-builder.js');

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

let trackMeOnScreen = createOnScreenArray("track-me")

// Global Functions
const createEventData = (eventType, eventData = {}) => {
    return {sessionId, eventType, location: location.href, eventData, time: Date()};
}

const sendToTracking = (data) => {
    //console.log("************* getting to send to tracking");
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
window.onunload = (event) => {
    let data = createEventData(event.type);
    //let unloadEvent = unloadBuilder.buildUnloadEvent(data);
    //sendToTracking(unloadEvent);
    sendToTracking(data);
}

window.onload = (event) => {
    let data = createEventData(event.type);
    sendToTracking(data);

    trackMeOnScreen.forEach(item => {
        let visible = item.onscreen
        let visibilityData = {visible, objectInnerText: item.element.innerText}
        let data = createEventData("scroll", visibilityData)
        sendToTracking(data)
    });
};

window.onscroll = (event) => {
    trackMeOnScreen.forEach(item => {
        let visible = isInViewport(item.element)
        if (item.onscreen !== visible) {
            let visibilityData = {visible, objectInnerText: item.element.innerText}
            let data = createEventData(event.type, visibilityData)
            sendToTracking(data)
            item.onscreen = visible;
        }
    });
}

document.onclick = (event) => {
    let clickedObject = event.path[0];

    if (clickedObject.href !== undefined) {
        let clickData = {linkTo: clickedObject.href, linkText: clickedObject.innerText};
        let data = createEventData(event.type, clickData)
        sendToTracking(data);
    }
}
