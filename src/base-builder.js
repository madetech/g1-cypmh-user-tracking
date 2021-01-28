
const buildBaseEvent = (data) => BaseEventBuilder
    .newBaseEvent()
    .withSessionId(data.sessionId)
    .withSourceHref(data.location)
    .withTimeStamp(data.time)
    .build();

class BaseEventBuilder {

    static newBaseEvent = () => new BaseEventBuilder({});

    constructor(data) {
        this.data = data;
    }

    withSessionId(sessionId){
        return new BaseEventBuilder({...this.data, sessionId});
    }

    withSourceHref(location){
        return new BaseEventBuilder({...this.data, location});
    }

    withTimeStamp(time){
        return new BaseEventBuilder({...this.data, time});
    }

    build(){
        return new BaseEvent(
            this.data.sessionId,
            this.data.location,
            this.data.time
        );
    }
}

class BaseEvent{
    constructor(sessionId, location, time) {
        this.sessionId = sessionId;
        this.location = location;
        this.time = time;
    }
}

module.exports = {buildBaseEvent, BaseEventBuilder, BaseEvent};