import { Component, OnInit } from '@angular/core';

export class Employee{
  EmployeeID: number;
  Code: string;
  Name: string;
}

const EmployeeArray : Employee[] = [
  { EmployeeID:1, Code: "NS", Name: "Nitish Srivastava" },
  { EmployeeID:2, Code:"GP", Name: "Gaurav Pandey" },
  { EmployeeID:3, Code:"As", Name: "Alok Srivastava" }
]

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})

export class EmployeeDetailsComponent implements OnInit {

  employeeCollection = EmployeeArray;

  selectedEmployee: Employee = {EmployeeID:0, Code:"", Name:""};

  OpenForEdit(employee: Employee) : void{
    this.selectedEmployee = employee;
  }

  AddOrEdit() : void{
    if(this.selectedEmployee.EmployeeID == 0){
      this.selectedEmployee.EmployeeID = Math.max.apply(Math, this.employeeCollection.map(function(x){return x.EmployeeID})) + 1;
      this.employeeCollection.push(this.selectedEmployee);
    }
    this.selectedEmployee = {EmployeeID:0, Code:"", Name:""};
  }

  Delete() : void{
    this.employeeCollection = this.employeeCollection.filter(x => x != this.selectedEmployee);
    //This will return all the slected employee expected the employee which is not equal to the selected employee object.
    this.selectedEmployee = {EmployeeID:0, Code:"", Name:""};
  }
  
  constructor() { }

  ngOnInit() {
  }

}
