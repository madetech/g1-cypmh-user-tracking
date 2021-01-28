
const buildUnloadEvent = (data) => UnloadEventBuilder
    .newUnloadEvent()
    .withSessionId(data.sessionId)
    .withSourceHref(data.location)
    .withTimeStamp(data.time)
    .build();


class UnloadEventBuilder {
    static newUnloadEvent = () => new UnloadEventBuilder({eventType: 'unload'});

    constructor(data) {
        this.data = data;
    }

    withSessionId(sessionId){
        return new UnloadEventBuilder({...this.data, sessionId});
    }

    withSourceHref(location){
        return new UnloadEventBuilder({...this.data, location});
    }

    withTimeStamp(time){
        return new UnloadEventBuilder({...this.data, time});
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