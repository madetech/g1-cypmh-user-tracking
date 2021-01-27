

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
        return new LoadEvent(this.data);
    }
}

class LoadEvent{
    constructor(data) {
        this.eventType = data.eventType;
        this.sessionId = data.sessionId;
        this.location = data.location;
        this.time = data.time;
    }
}

module.exports = {buildLoadEvent, LoadEventBuilder, LoadEvent};