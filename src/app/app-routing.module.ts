import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('../../projects/cco/src/lib/cco.module').then(m => m.CcoModule)
  },
  {
    path: 'csc', loadChildren: () => import('../../projects/csc/src/lib/csc.module').then(m => m.CscModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
