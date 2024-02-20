import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  constructor(private http: HttpClient) {}

  getFiles() {
    return this.http.get('http://localhost:5000/files');
  }

  getFile(id: string) {
    return this.http.get(`http://localhost:5000/files/${id}`);
  }
}
