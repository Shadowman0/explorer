import {Component, EventEmitter, OnInit} from '@angular/core';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import {BackendClientService} from '../backend/backend-client.service';
import {BackendData} from '../backend/backendData';

@Component({
  selector: 'app-own-search',
  templateUrl: './own-search.component.html',
  styles: []
})
export class OwnSearchComponent implements OnInit {
  keyup = new EventEmitter<string>();
  private foundFiles: BackendData[];

  constructor(private backendClientService: BackendClientService) {
  }

  ngOnInit() {
    this.keyup
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        switchMap(term => this.backendClientService.searchFile(term))
      )
      .subscribe(files => {
        this.foundFiles = files;
      });
  }

}
