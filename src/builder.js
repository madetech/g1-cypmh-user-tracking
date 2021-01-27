
function buildTrackingEvent(reqBody) {
  switch (reqBody.type){
    case "click":
      return (new clickObjectBuilder);
    case "load":
      return (new loadObjectBuilder);
    case "unload":
      return (new unloadObjectBuilder);
    default:
      throw new Error('unhandled event type')
  }
}


class clickObjectBuilder {
  constructor () {
    this.clickObject = {};
  }
  build(data){
    return this.withLinkTo(data.linkto).withLinkTest(data.linkText)
    
  }
  withLinkTo(linkTo){

  }
  withLinkTest(linkText){

  }

}