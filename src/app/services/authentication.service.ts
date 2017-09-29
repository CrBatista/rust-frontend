import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { BehaviorSubject } from 'rxjs/Rx';

import { User } from '../pojos/User';
import { Settings } from '../utils/Settings';

@Injectable()
export class AuthenticationService {

  private static readonly LOGIN_URL = '/oauth/token';
  private static readonly LOCAL_STORAGE_KEY = 'session_details';
  // API_SECRET Generated from: https://www.blitter.se/utils/basic-authentication-header-generator/
  private static readonly API_SECRET = 'cnVzdFVzZXI6cnVzdFBhc3N3b3Jk';

  private _user: BehaviorSubject<User>;

  constructor(private _http: Http) { }

  /**
   * Logs the user in the application, and sets the user property into LocalStorage
   *
   * @memberOf AuthenticationService
   * @author Cristian Batista Herrera <cristianbatista@outlook.es>
   */
  public login(): void {

    const headers: Headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    headers.append('Authorization', 'Basic ' + AuthenticationService.API_SECRET);
    const options: RequestOptions = new RequestOptions();
    options.headers = headers;

    this._http.post(Settings.BACKEND_URL + AuthenticationService.LOGIN_URL, 'grant_type=client_credentials', options)
      .map(res => res.json())
      .subscribe(result => {
        localStorage.setItem(AuthenticationService.LOCAL_STORAGE_KEY, JSON.stringify(result));
        // this._defineLoginHandledOnce();
        // this._checkStatus();
      },
      error => {
        this.logout();
      });
  }
  public logout(): void {/*
    clearInterval(this._intervalId);
    this._intervalId = 0;
    localStorage.removeItem(AuthenticationService.LOCAL_STORAGE_KEY);
    this._user.next(null);
    window.setTimeout(() =>
      window.location.href = 'http://' + document.domain.replace(/admin\./g, '') + ':' + VisualBoardSettings.backendReadonlyPort, 1000
    */
  }

}
