const baseBuilder = require("./base-builder");

const buildLoadEvent = (data) => LoadEventBuilder
    .newLoadEvent()
    .withBaseEvent(data, baseBuilder.buildBaseEvent)
    .build();


class LoadEventBuilder {

    static newLoadEvent = () => new LoadEventBuilder({eventType: 'load'});

    constructor(data) {
        this.data = data;
    }

    withBaseEvent(data, baseBuilder){
        const baseEvent = baseBuilder(data);
        return new LoadEventBuilder({...this.data, ...baseEvent});
    }

    build(){
        return new LoadEvent(
            this.data.eventType, 
            this.data.sessionId, 
            this.data.location, 
            this.data.time
        );
    }
}

class LoadEvent{
    constructor(eventType, sessionId, location, time) {
        this.eventType = eventType;
        this.sessionId = sessionId;
        this.location = location;
        this.time = time;
    }
}

module.exports = {buildLoadEvent, LoadEventBuilder, LoadEvent};