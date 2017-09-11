import { Injectable } from '@angular/core';
declare let ga: Function;

@Injectable()
export class GoogleAnalyticsService {

  constructor() { }

  // this method will be called anytime we want to record user event, and the event meta data e.g event name, will be passed as parameters
  registerEvent(eventCategory: string, eventAction: string, eventLabel: string = null, eventValue = null ){
    ga('send', 'event', {
      eventCategory: eventCategory,
      eventLabel: eventLabel,
      eventAction: eventAction,
      eventValue: eventValue
    });
  }

}
