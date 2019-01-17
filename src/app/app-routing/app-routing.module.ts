import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FiledetailComponent} from '../files/filedetail/filedetail.component';
import {FileListComponent} from '../files/list/file-list.component';
import {DependencyGraphComponent} from '../files/dependency-graph/dependency-graph.component';
import {HomeComponent} from '../home/home.component';
import {SemanticUiSearchComponent} from '../semantic-ui-search/semantic-ui-search.component';
import {OwnSearchComponent} from '../own-search/own-search.component';

const routes: Routes = [
  {path: 'files', component: FileListComponent, pathMatch: 'full'},
  {path: 'dependency', component: DependencyGraphComponent, pathMatch: 'full'},
  {path: 'files-search', component: SemanticUiSearchComponent, pathMatch: 'full'},
  {path: 'files-search-own', component: OwnSearchComponent, pathMatch: 'full'},
  {path: 'files/:fullname', component: FiledetailComponent, pathMatch: 'full'},
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: '**', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
