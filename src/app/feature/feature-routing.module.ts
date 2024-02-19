import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutContainerComponent } from '../core/components/layout-container/layout-container.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutContainerComponent,
    children: [
      {
        path: 'files',
        loadChildren: () =>
          import('./files/files.module').then((m) => m.FilesModule),
      },
      {
        path: '',
        redirectTo: '/files',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureRoutingModule {}
