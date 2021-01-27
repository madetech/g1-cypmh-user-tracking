
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
    return new ScrollEvent(this.data);
}
}

class ScrollEvent{
constructor(data) {
    this.eventType = data.eventType;
    this.sessionId = data.sessionId;
    this.location = data.location;
    this.visible = data.visible;
    this.objectInnerText = data.objectInnerText;
    this.time = data.time;
}
}

module.exports = {buildScrollEvent, ScrollEventBuilder, ScrollEvent};