
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
        if (sessionId.match(/^\d{6}$/)) {
            return new BaseEventBuilder({...this.data, sessionId});
        } else {
            throw new Error("invalid session Id")
        }
    }

    withSourceHref(location){
        if (location.match(/^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/i)){
            return new BaseEventBuilder({...this.data, location});
        } else {
            throw new Error("invalid source URL")
        }
    }

    withTimeStamp(time){
        if ((new Date(time)).getTime() > 0){
            return new BaseEventBuilder({...this.data, time});
        } else {
            throw new Error('invalid timestamp')
        }        
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