import {Component, OnInit} from '@angular/core';
import {BackendClientService} from '../backend/backend-client.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private backendClient: BackendClientService) {
  }

  ngOnInit() {
  }

}
