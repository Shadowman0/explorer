import {Component, EventEmitter, OnInit} from '@angular/core';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';

@Component({
  selector: 'app-own-search',
  templateUrl: './own-search.component.html',
  styles: []
})
export class OwnSearchComponent implements OnInit {
  keyup = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
    this.keyup
      .pipe(
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe(key => console.log(key));
  }

}
