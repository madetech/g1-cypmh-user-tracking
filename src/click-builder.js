const baseBuilder = require("./base-builder");

const buildClickEvent = (data) => ClickEventBuilder
    .newClickEvent()
    .withBaseEvent(data, baseBuilder.buildBaseEvent)
    .withTargetHref(data.eventData.linkTo)
    .withLinkText(data.eventData.linkText)
    .build();


class ClickEventBuilder {
    static newClickEvent = () => new ClickEventBuilder({eventType: 'click'});

    constructor(data) {
        this.data = data;
    }

    withBaseEvent(data, baseBuilder){
        const baseEvent = baseBuilder(data);
        return new ClickEventBuilder({...this.data, ...baseEvent});
    }

    withTargetHref(targetHref){
        return new ClickEventBuilder({...this.data, targetHref});
    }

    withLinkText(linkText){
        return new ClickEventBuilder({...this.data, linkText});
    }

    build(){
        return new ClickEvent(
            this.data.eventType, 
            this.data.sessionId, 
            this.data.location, 
            this.data.targetHref, 
            this.data.linkText, 
            this.data.time
        );
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

