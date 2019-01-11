import {Injectable} from '@angular/core';
import {BackendClientService} from './backend-client.service';

@Injectable({
  providedIn: 'root'
})
export class BackendDataService {
  private data: number[];

  constructor(private backendClientService: BackendClientService) {

  }

  getData(): number[] {
    this.backendClientService.loadDataListIds().subscribe(
      serverdata => this.data = serverdata
    );
    return this.data;
  }
}
