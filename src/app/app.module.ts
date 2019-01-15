import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {FileListComponent} from './files/list/file-list.component';
import {ListitemComponent} from './files/listitem/listitem.component';
import {FiledetailComponent} from './files/filedetail/filedetail.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {NgxEditorModule} from 'ngx-editor';
import { DependencyGraphComponent } from './files/dependency-graph/dependency-graph.component';

@NgModule({
  declarations: [
    AppComponent,
    FileListComponent,
    ListitemComponent,
    FiledetailComponent,
    DependencyGraphComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    NgxEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
