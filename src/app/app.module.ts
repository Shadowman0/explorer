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
import {DependencyGraphComponent} from './files/dependency-graph/dependency-graph.component';
import {HomeComponent} from './home/home.component';
import {SuiModule} from 'ng2-semantic-ui';
import {SemanticUiSearchComponent} from './semantic-ui-search/semantic-ui-search.component';
import {OwnSearchComponent} from './own-search/own-search.component';

@NgModule({
  declarations: [
    AppComponent,
    FileListComponent,
    ListitemComponent,
    FiledetailComponent,
    DependencyGraphComponent,
    HomeComponent,
    SemanticUiSearchComponent,
    OwnSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    NgxEditorModule,
    SuiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
