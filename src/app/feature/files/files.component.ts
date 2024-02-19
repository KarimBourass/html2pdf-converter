import { Component } from "@angular/core";

@Component({
  selector: "app-files",
  templateUrl: "./files.component.html",
  styleUrls: ["./files.component.scss"],
})
export class FilesComponent {
  code = "const a = 1;";

  listOfData: any[] = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      file_id: "dsakbc7821HH",
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      file_id: "dsakbc7821HH",
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      file_id: "dsakbc7821HH",
    },
  ];
}
