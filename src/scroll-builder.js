
const buildScrollEvent = (data) => ScrollEventBuilder
.newScrollEvent()
.withSessionId(data.sessionId)
.withSourceHref(data.location)
.withVisible(data.eventData.visible)
.withObjectInnerText(data.eventData.objectInnerText)
.withTimeStamp(data.time)
.build();


class ScrollEventBuilder {
static newScrollEvent = () => new ScrollEventBuilder({eventType: 'scroll'});

constructor(data) {
    this.data = data;
}

withSessionId(sessionId){
    return new ScrollEventBuilder({...this.data, sessionId});
}

withSourceHref(location){
    return new ScrollEventBuilder({...this.data, location});
}

withVisible(visible){
    return new ScrollEventBuilder({...this.data, visible});
}

withObjectInnerText(objectInnerText){
    return new ScrollEventBuilder({...this.data, objectInnerText});
}

withTimeStamp(time){
    return new ScrollEventBuilder({...this.data, time});
}

build(){
    return new ScrollEvent(
        this.data.eventType, 
        this.data.sessionId, 
        this.data.location, 
        this.data.visible, 
        this.data.objectInnerText, 
        this.data.time
        );
    }
}

class ScrollEvent{
    constructor(eventType, sessionId, location, visible, objectInnerText, time) {
        this.eventType = eventType;
        this.sessionId = sessionId;
        this.location = location;
        this.visible = visible;
        this.objectInnerText = objectInnerText;
        this.time = time;
    }
}

module.exports = {buildScrollEvent, ScrollEventBuilder, ScrollEvent};