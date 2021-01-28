const buildClickEvent = (data) => ClickEventBuilder
    .newClickEvent()
    .withSessionId(data.sessionId)
    .withSourceHref(data.location)
    .withTargetHref(data.eventData.linkTo)
    .withLinkText(data.eventData.linkText)
    .withTimeStamp(data.time)
    .build();


class ClickEventBuilder {
    static newClickEvent = () => new ClickEventBuilder({eventType: 'click'});

    constructor(data) {
        this.data = data;
    }

    withSessionId(sessionId){
        return new ClickEventBuilder({...this.data, sessionId});
    }

    withSourceHref(location){
        return new ClickEventBuilder({...this.data, location});
    }

    withTargetHref(targetHref){
        return new ClickEventBuilder({...this.data, targetHref});
    }

    withLinkText(linkText){
        return new ClickEventBuilder({...this.data, linkText});
    }

    withTimeStamp(time){
        return new ClickEventBuilder({...this.data, time});
    }

    build(){
        return new ClickEvent(this.data);
    }
}

class ClickEvent{
    constructor(eventType, sessionId, location, targetHref, linkText, time) {
        this.eventType = eventType;
        this.sessionId = sessionId;
        this.location = location;
        this.targetHref = targetHref;
        this.linkText = linkText;
        this.time = time;
    }
}

module.exports = {buildClickEvent, ClickEventBuilder, ClickEvent};

