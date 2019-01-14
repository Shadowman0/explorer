import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BackendData} from './backendData';

@Injectable({
  providedIn: 'root'
})
export class BackendClientService {

  constructor(private httpClient: HttpClient) {
  }

  loadData(id: number) {
    return this.httpClient.get<BackendData>('http://localhost:8080/backendData/' + id);
  }

  loadAllData() {
    return this.httpClient.get<BackendData[]>('http://localhost:8080/backendData/allData');
  }
}
