import { FileService } from './file.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
})
export class FilesComponent implements OnInit {
  files: any[] = [];
  constructor(private fileService: FileService) {}

  ngOnInit() {
    this.fileService.getFiles().subscribe((res: any) => {
      this.files = res;
    });
  }
}
