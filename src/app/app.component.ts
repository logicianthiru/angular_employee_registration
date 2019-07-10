import { Component } from '@angular/core';
import { Employee } from '../employee';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  employee: Employee = new Employee();
  employeeList: Array<Employee> = [];

  constructor(private httpClient: HttpClient) {

  }

  ngOnInit() {
    this.httpClient.get<Array<Employee>>("http://localhost:3000/employees").subscribe(
      data => {
        this.employeeList = data;
      }
    )
  }

  addEmployee() {
    this.httpClient.post<Employee>("http://localhost:3000/employees", this.employee).subscribe(
      data => {
        this.employeeList.push(data);
      }
    )
    this.employee = new Employee();
  }

  deleteEmployee() {
    alert("Deleted")
  }
}
