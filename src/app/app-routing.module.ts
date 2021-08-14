import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignPageComponent } from './containers/assign-page/assign-page.component';

const routes: Routes = [
  {
    path: '**',
    component: AssignPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
