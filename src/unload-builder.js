const baseBuilder = require("./base-builder");

const buildUnloadEvent = (data) => UnloadEventBuilder
    .newUnloadEvent()
    .withBaseEvent(data, baseBuilder.buildBaseEvent)
    .build();


class UnloadEventBuilder {
    static newUnloadEvent = () => new UnloadEventBuilder({eventType: 'unload'});

    constructor(data) {
        this.data = data;
    }

    withBaseEvent(data, baseBuilder){
        const baseEvent = baseBuilder(data);
        return new UnloadEventBuilder({...this.data, ...baseEvent});
    }

    build(){
        return new UnloadEvent(
            this.data.eventType, 
            this.data.sessionId, 
            this.data.location, 
            this.data.time
        );
    }
}

class UnloadEvent{
    constructor(eventType, sessionId, location, time) {
        this.eventType = eventType;
        this.sessionId = sessionId;
        this.location = location;
        this.time = time;
    }
}

module.exports = {buildUnloadEvent, UnloadEventBuilder, UnloadEvent};