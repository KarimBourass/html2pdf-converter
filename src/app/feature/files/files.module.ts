import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilesComponent } from './files.component';
import { RouterModule, Routes } from '@angular/router';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { FilePreviewComponent } from './components/file-preview/file-preview.component';
import { NzCodeEditorModule } from 'ng-zorro-antd/code-editor';
import { FormsModule } from '@angular/forms';
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';

const routes: Routes = [
  {
    path: '',
    component: FilesComponent,
  },
  {
    path: ':id',
    component: FilePreviewComponent,
  },
];

@NgModule({
  declarations: [FilesComponent, FilePreviewComponent],
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    CommonModule,
    NzTableModule,
    NzDividerModule,
    NzPageHeaderModule,
    NzTagModule,
    NzCodeEditorModule,
    MonacoEditorModule,
  ],
})
export class FilesModule {}
