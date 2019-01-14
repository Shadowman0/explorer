import {Injectable} from '@angular/core';
import {BackendClientService} from './backend-client.service';
import {BackendData} from './backendData';

@Injectable({
  providedIn: 'root'
})
export class BackendDataService {
  private data: BackendData[];
  public selected: BackendData = new BackendData(-1, 'test');

  constructor(private backendClientService: BackendClientService) {

  }

  getData(): BackendData[] {
    this.backendClientService.loadAllData().subscribe(
      serverdata => this.data = serverdata
    );
    return this.data;
  }

  getSingleData(nummer: number): BackendData {
    this.backendClientService.loadData(nummer).subscribe(
      serverdata => this.selected = serverdata
    );
    return this.selected;
  }

}
