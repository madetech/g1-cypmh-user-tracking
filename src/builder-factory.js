const loadBuilder = require('./load-builder.js');


function builderFactory(reqBody) {
  console.log("reqBody: ", reqBody)
  switch (reqBody.eventType){
    case "load":
      return (loadBuilder.buildLoadEvent(reqBody));
    default:
      throw new Error('unhandled event type')
  }
}

module.exports = {builderFactory}