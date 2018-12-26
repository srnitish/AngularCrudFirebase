import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private firebase: AngularFireDatabase) { }
  customerList: AngularFireList<any>;

  //declare of the variable type formGroup as from
  //Inside FormGroup Instance, we have to provide objects, containing properties of customers.
  form = new FormGroup({
    //here we use $key to uniquely identify each record.
    //Default value will be null.
    $key: new FormControl(null),
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    mobile: new FormControl('', [Validators.required, Validators.minLength(8)]),
    location: new FormControl('', Validators.required)
  });

  getCustomers(){
    this.customerList = this.firebase.list('customers');
    return this.customerList.snapshotChanges();
  }

  insertCustomer(customer:any){
    this.customerList.push({
      fullName: customer.fullName,
      email: customer.email,
      mobile: customer.mobile,
      location: customer.location
    });
  }

  populateForm(customer:any){
    this.form.setValue(customer);
  }

  updateCustomer(customer:any){
    this.customerList.update(customer.$key,
    {
      fullName: customer.fullName,
      email: customer.email,
      mobile: customer.mobile,
      location: customer.location
    }
    );
  }

  deleteCustomer($key:string){
    this.customerList.remove($key);
  }

}
