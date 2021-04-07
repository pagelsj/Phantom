import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/overview-page/overview-page.module').then(m => m.OverviewPageModule)
  },
  // {
  //   path: '',
  //   loadChildren: () => import('./pages/list-page/list-page.module').then(m => m.ListPageModule)
  // },

  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
