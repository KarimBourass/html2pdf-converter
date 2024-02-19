import { Component, Input } from "@angular/core";

@Component({
  selector: "app-file-preview",
  templateUrl: "./file-preview.component.html",
  styleUrls: ["./file-preview.component.scss"],
})
export class FilePreviewComponent {
  constructor() {}

  @Input() code = "";
}
