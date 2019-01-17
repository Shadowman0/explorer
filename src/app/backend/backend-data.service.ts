import {Injectable} from '@angular/core';
import {BackendClientService} from './backend-client.service';
import {BackendData} from './backendData';

@Injectable({
  providedIn: 'root'
})
export class BackendDataService {
  private data: BackendData[];
  public selected: BackendData;

  constructor(private backendClientService: BackendClientService) {

  }

  getData(): BackendData[] {
    this.backendClientService.loadAllData().subscribe(
      serverdata => this.data = serverdata
    );
    return this.data;
  }

  getSingleData(fullName: string): BackendData {
    this.backendClientService.loadData(fullName).subscribe(
      serverdata => this.selected = serverdata
    );
    return this.selected;
  }

}
