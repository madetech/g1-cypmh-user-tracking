const baseBuilder = require("./base-builder");

const buildScrollEvent = (data) => ScrollEventBuilder
    .newScrollEvent()
    .withBaseEvent(data, baseBuilder.buildBaseEvent)
    .withVisible(data.eventData.visible)
    .withObjectInnerText(data.eventData.objectInnerText)
    .build();


class ScrollEventBuilder {
    static newScrollEvent = () => new ScrollEventBuilder({eventType: 'scroll'});

    constructor(data) {
        this.data = data;
    }

    withBaseEvent(data, baseBuilder){
        const baseEvent = baseBuilder(data);
        return new ScrollEventBuilder({...this.data, ...baseEvent});
    }

    withVisible(visible){
        return new ScrollEventBuilder({...this.data, visible});
    }

    withObjectInnerText(objectInnerText){
        return new ScrollEventBuilder({...this.data, objectInnerText});
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