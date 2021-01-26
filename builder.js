
function dataObjectFactory(objectType) {
  switch (objectType){
    case "click":
      return (new clickObjectBuilder)
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