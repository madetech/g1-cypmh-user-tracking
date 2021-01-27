// serverside
const buildClickEvent = (data) => ClickEventBuilder
    .newClickEvent()
    .withTrackingSession(data.trackingSession)
    .withSourceHref(data.sourceHref)
    .withDestinationHref(data.destinationHref)
    .withElementId(data.elementId)
    .withLinkText(data.linkText)
    .build()

// let builder = ClickEventBuilder
// .withTrackingSession(data.trackingSession);
//
// let event = builder.build();
//
// let b2 = builder.withSourceHref('foo');
// let b3 = builder.withSourceHref('bar');


// client side
class ClickEventBuilder {
    
    static newClickEvent = () => new ClickEventBuilder({type: 'click'})
    constructor(data) {
        this.data = data;
    }
    withTrackingSession(sessionId) {
        //verify is not null etc
        // verify is valid uuid
        // etc
        return new ClickEventBuilder({sessionId})
    }
    withSourceHref(sourceHref) {
        if(sourceHref === null || sourceHref === undefined) {
            throw 'error'
        }
        // check is valid URL
        return new ClickEventBuilder({...this.data, sourceHref})
    }

    build() {
        //assert all members of data exist
        if(this.data.sessionId === undefined) {
            throw 'error'
        }
        return new ClickEvent(this.data)
    }
}

class ClickEvent{
    constructor (data) {
        this.sessionId = data.sessionId;
    }
}

export {buildClickEvent, ClickEventBuilder, ClickEvent};
