import {Component} from '@angular/core';
import {BackendClientService} from './backend/backend-client.service';
import {BackendData} from './backend/backendData';
import {BackendDataService} from './backend/backend-data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BackendClientService]
})
export class AppComponent {
  dataFromServer: BackendData[];

  constructor(public backendDataService: BackendDataService) {
  }

  loadData() {
    this.dataFromServer = this.backendDataService.getData();
  }

  clearData() {
    this.dataFromServer = null;
  }
}
