import {Component, Input, OnInit} from '@angular/core';
import {BackendData} from '../../backend/backendData';
import {BackendDataService} from '../../backend/backend-data.service';
import {Router} from '@angular/router';
import {BackendClientService} from '../../backend/backend-client.service';

@Component({
  selector: 'app-filelist',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.css']
})
export class FileListComponent implements OnInit {
  @Input() public allData: BackendData[];

  constructor(private backendDataService: BackendDataService, private backendClient: BackendClientService, private router: Router) {
  }

  ngOnInit() {
    this.backendClient.loadAllData().subscribe(data => {
        this.allData = data;
      }
    );
  }

}
