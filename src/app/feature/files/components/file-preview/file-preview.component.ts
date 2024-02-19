import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-file-preview',
  templateUrl: './file-preview.component.html',
  styleUrls: ['./file-preview.component.scss'],
})
export class FilePreviewComponent {
  editorOptions = { theme: 'vs-dark', language: 'html' };
  code: string = `
  <body>
  <h1>Hello, World!</h1>
  <p>This is a simple HTML page.</p>
  <a href="https://example.com">Visit Example.com</a>
</body>
  `;

  constructor(public sanitizer: DomSanitizer) {}
}
