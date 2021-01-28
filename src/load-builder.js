

const buildLoadEvent = (data) => LoadEventBuilder
    .newLoadEvent()
    .withSessionId(data.sessionId)
    .withSourceHref(data.location)
    .withTimeStamp(data.time)
    .build();


class LoadEventBuilder {
    static newLoadEvent = () => new LoadEventBuilder({eventType: 'load'});

    constructor(data) {
        this.data = data;
    }

    withSessionId(sessionId){
        return new LoadEventBuilder({...this.data, sessionId});
    }

    withSourceHref(location){
        return new LoadEventBuilder({...this.data, location});
    }

    withTimeStamp(time){
        return new LoadEventBuilder({...this.data, time});
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