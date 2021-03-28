import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  rootURL = '/api';

  getDate() {
    return this.http.get(this.rootURL + '/date');
  }

  addDate(date: any) {
    return this.http.post(this.rootURL + '/date', {date});
  }


}
