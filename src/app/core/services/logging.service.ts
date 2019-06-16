import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }

  log(msg: string) {
    if (!environment.production) {
        console.log(msg);
    }
    else {
        // Do something a bit more sophisticated (Async API calls, MessageQueue, AppInsights, Logstash)
    }

}

logError(msg: string) {
    if (!environment.production) {
        console.error(msg);
    }
    else {
        // Do something a bit more sophisticated (Async API calls, MessageQueue, AppInsights, Logstash)
    }

}
}
