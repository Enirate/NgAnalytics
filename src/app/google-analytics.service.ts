import { Injectable } from '@angular/core';
declare let ga: Function;

@Injectable()
export class GoogleAnalyticsService {

  constructor() { }

  registerEvent(eventCategory: string, eventAction: string, eventLabel: string = null, eventValue = null ){
    ga('send', 'event', {
      eventCategory: eventCategory,
      eventLabel: eventLabel,
      eventAction: eventAction,
      eventValue: eventValue
    });
  }

}
