import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../shared/customer.service';
import { Command } from 'protractor';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  //Create object of the class under constructor, customerservice.
  constructor(public customerService: CustomerService ) { }

  // Bydefault it will be false.
  submitted: boolean;
  showSuccessMessage: boolean;
  customerList:any;
  customer: any;
  email:any;

  

  formControls = this.customerService.form.controls;

  ngOnInit() { }

  onSubmit(){
    this.submitted = true;
    if(this.customerService.form.valid){

    
      if(this.customerService.form.get("$key").value == null)
      if (this.formControls.email.value == 'Pandit.Ji@gmail.com')
      alert("Username/Email Id is already submitted, Kindly register with another email id.");
     
      else
        this.customerService.insertCustomer(this.customerService.form.value);
        else
        this.customerService.updateCustomer(this.customerService.form.value);
        this.showSuccessMessage = true;
        setTimeout(() => this.showSuccessMessage = false, 3000);
      // After Insert and Update the Command, we reset the flag to false.
      this.submitted = false;
      this.customerService.form.reset();
    }
  }

 

}
