
const buildClickEvent = (data) => ClickEventBuilder
    .withTrackingSession(data.trackingSession)
    .withSourceHref(data.sourceHref)
    .withDestinationHref(data.destinationHref)
    .withElementId(data.elementId)
    .withLinkText(data.linkText)
    .build()

class ClickEventBuilder {
    static withTrackingSession = (sessionId) => new ClickEventBuilder({sessionId})
    constructor(data) {
        this.data = data;
    }
    withSourceHref(sourceHref) {
        
        return new ClickEventBuilder({...this.data, sourceHref})
    }
}

export {buildClickEvent, ClickEventBuilder};
