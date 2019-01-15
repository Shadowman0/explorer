import {Component, OnInit} from '@angular/core';
import {BackendData} from '../../backend/backendData';
import {ActivatedRoute} from '@angular/router';
import {BackendClientService} from '../../backend/backend-client.service';

@Component({
  selector: 'app-filedetail',
  templateUrl: './filedetail.component.html',
  styleUrls: ['./filedetail.component.css']
})
export class FiledetailComponent implements OnInit {
  selected: BackendData;

  constructor(private route: ActivatedRoute, private dataService: BackendClientService
  ) {
  }

  ngOnInit() {
    this.dataService.loadData(this.route.snapshot.params['fullname']).subscribe(data => {
      this.selected = data;
    });
  }

}
