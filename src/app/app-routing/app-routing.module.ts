import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from '../app.component';
import {FiledetailComponent} from '../files/filedetail/filedetail.component';
import {FileListComponent} from '../files/list/file-list.component';
import {DependencyGraphComponent} from '../files/dependency-graph/dependency-graph.component';

const routes: Routes = [
  {path: 'files', component: FileListComponent, pathMatch: 'full'},
  {path: 'dependency', component: DependencyGraphComponent, pathMatch: 'full'},
  {path: 'files/:fullname', component: FiledetailComponent, pathMatch: 'full'},
  {path: '', component: AppComponent, pathMatch: 'full'},
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
