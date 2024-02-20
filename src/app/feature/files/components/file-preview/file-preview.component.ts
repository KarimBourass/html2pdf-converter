import { Router } from '@angular/router';
import { Component, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { FileService } from '../../file.service';

@Component({
  selector: 'app-file-preview',
  templateUrl: './file-preview.component.html',
  styleUrls: ['./file-preview.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FilePreviewComponent {
  editorOptions = { language: 'html' };
  code: string = ``;
  htmlContent!: SafeHtml;
  file: any;

  constructor(
    public sanitizer: DomSanitizer,
    private router: Router,
    private fileService: FileService
  ) {
    this.htmlContent = this.sanitizer.bypassSecurityTrustHtml(this.code);
    this.fileService.getFile('2763t7623d').subscribe((res: any) => {
      this.file = res;
      this.code = res.html_content;
      this.onCodeChanged();
    });
  }

  onCodeChanged() {
    this.htmlContent = this.sanitizer.bypassSecurityTrustHtml(this.code);
  }

  onBack() {
    this.router.navigate(['/files']);
  }
}
