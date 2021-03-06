import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DotViewModel} from '../../main-page/main-page.component';
import {Observable} from 'rxjs';
import {User} from '../../main-page/model/User';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly BASE_URL = window["cfgApiBaseUrl"] + "/api";
  private readonly DOT_URL = this.BASE_URL + "/dot";
  private readonly SEND_USER_URL = this.BASE_URL + "/login";


  constructor(private http: HttpClient) {}


  postDot(dot: DotViewModel): Observable<any>{
    return this.http.post(this.DOT_URL, dot);
  }

  postUser(user: User): Observable<any> {
    return this.http.post(this.SEND_USER_URL, user);
  }

  getDot():Observable<any>{
    return this.http.get(this.DOT_URL);
  }

}
