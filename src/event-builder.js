const loadBuilder = require('./load-builder.js');
const unloadBuilder = require('./unload-builder.js');
const clickBuilder = require('./click-builder.js');
const scrollBuilder = require('./scroll-builder.js');


function eventBuilder(reqBody) {
  switch (reqBody.eventType){
    case "load":
      return (loadBuilder.buildLoadEvent(reqBody));
    case "unload":
      return (unloadBuilder.buildUnloadEvent(reqBody));
    case "click":
      return (clickBuilder.buildClickEvent(reqBody));
    case "scroll":
      return (scrollBuilder.buildScrollEvent(reqBody));
    default:
      throw new Error('unhandled event type')
  }
}

module.exports = {eventBuilder}