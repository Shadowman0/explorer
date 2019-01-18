import {Component, Input, OnInit} from '@angular/core';
import {BackendData} from '../../backend/backendData';
import {BackendDataService} from '../../backend/backend-data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-listitem',
  templateUrl: './listitem.component.html',
  styleUrls: ['./listitem.component.css']
})
export class ListitemComponent implements OnInit {
  @Input() backenddata: BackendData;

  constructor(private backendDataService: BackendDataService, private router: Router) {
  }

  ngOnInit() {
  }

  onItemSelected() {
    this.router.navigate(['files', this.backenddata.fullName]);
    debugger;
  }

}
