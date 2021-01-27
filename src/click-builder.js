
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
        if(sourceHref === null || sourceHref === undefined) {
            throw 'error'
        }
        return new ClickEventBuilder({...this.data, sourceHref})
    }

    build() {
        return new ClickEvent(this.data.sessionId)
    }
}

class ClickEvent{
    constructor (sessionId) {
        this.sessionId;
    }
}

export {buildClickEvent, ClickEventBuilder};
