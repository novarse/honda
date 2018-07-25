import {HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import * as moment from 'moment';
import {Constants} from '../utils/constants';

@Injectable({
  providedIn: 'root'
})
export class RequestCacheService {

  private httpResponseCache = new Map<string, [Date, HttpResponse<any>]>();

  getHttpResp(key): HttpResponse<any> {
    const tuple = this.httpResponseCache.get(key);
    if (!tuple) {
      return null;
    }

    const expires = tuple[0];
    const httpResponse = tuple[1];

    // Don't observe expired keys
    const now = new Date();
    if (expires && expires.getTime() < now.getTime()) {
      this.httpResponseCache.delete(key);
      return null;
    }

    return httpResponse;
  }

  setHttpResp(key, value, ttl = null) {
    if (ttl) {
      const expires = new Date();
      expires.setSeconds(expires.getSeconds() + ttl);
      this.httpResponseCache.set(key, [expires, value]);
    } else {
      this.httpResponseCache.set(key, [null, value]);
    }
  }

}
