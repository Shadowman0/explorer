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
  backenddaten: BackendData = new BackendData('nicht geladen');
  datenId = 0;
  ids: number[];

  constructor(private backendDataService: BackendDataService) {
  }

  loadData() {
    this.ids = this.backendDataService.getData();
  }

  clearData() {
    this.backenddaten = new BackendData('');
  }
}
