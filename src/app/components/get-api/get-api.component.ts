
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-get-api',
  imports: [],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent {
  userList: any[] = [];
  userEmpi: any[] = [];
  constructor(private http: HttpClient) {

  }
  getUsers() {
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((result: any) => {
      this.userList = result

    })
  }
  getEmpi() {
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((result: any) => {
      this.userEmpi = result
    })
  }
}