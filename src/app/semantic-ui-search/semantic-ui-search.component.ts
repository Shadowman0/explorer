import {Component, OnInit} from '@angular/core';
import {BackendData} from '../backend/backendData';
import {BackendClientService} from '../backend/backend-client.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-semantic-ui-search',
  templateUrl: './semantic-ui-search.component.html',
  styles: []
})
export class SemanticUiSearchComponent implements OnInit {

  data: BackendData[];

  constructor(private backendClient: BackendClientService, private router: Router) {
  }

  ngOnInit() {
    this.getFiles().subscribe(remoteData => this.data = remoteData);
  }


  getFiles() {
    return this.backendClient.loadAllData();
  }

  alertSelected($event: BackendData) {
    this.router.navigate(['files', $event.fullName]);
  }

}
