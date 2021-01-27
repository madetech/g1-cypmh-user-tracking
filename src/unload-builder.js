
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
        return new UnloadEvent(this.data);
    }
}

class UnloadEvent{
    constructor(data) {
        this.eventType = data.eventType;
        this.sessionId = data.sessionId;
        this.location = data.location;
        this.time = data.time;
    }
}

module.exports = {buildUnloadEvent, UnloadEventBuilder, UnloadEvent};