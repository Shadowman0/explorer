import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {BackendData} from './backendData';

@Injectable({
  providedIn: 'root'
})
export class BackendClientService {
  private api = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) {
  }

  loadData(fullName: string) {
    return this.httpClient.get<BackendData>(`${this.api}/files/${fullName}`);
  }

  loadAllData() {
    return this.httpClient.get<BackendData[]>(`${this.api}/files`);
  }

  searchFile(infix: string) {
    return this.httpClient.get<BackendData[]>(`${this.api}/files`, {params: new HttpParams().set('name', infix)});
  }

}
