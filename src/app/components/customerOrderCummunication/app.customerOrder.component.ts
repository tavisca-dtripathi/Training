import { Component, OnInit } from "@angular/core";
import { Customer } from 'src/app/models/app.customer';
import { Customers } from 'src/app/models/app.constants';
import { CommunicationService } from 'src/app/Services/app.communication.service';

@Component({
  selector: 'app-customersender-component',
  template: `
    <html>
    <style>
      table, th , td  {
        border: 1px solid grey;
        border-collapse: collapse;
        padding: 5px;
      }
      table tr:nth-child(odd) {
        background-color: #f1f1f1;
      }
      table tr:nth-child(even) {
        background-color: #ffffff;
      }
    </style>
    <body>
    <div>
    <h1><strong>Order History</strong></h1>
    <input type= "text" placeholder = "CustomerName/CityName" [(ngModel)] = "inputText" (keyup) = "onKeyUp()" >
    <h2>Customer Table</h2>
    <table class="table table-bordered table-dark">
    <thead>
      <tr>
        <th scope="col">CustomerId</th>
        <th scope="col">CustomerName</th>
        <th scope="col">City</th>
        <th scope="col">Email</th>
        <th scope="col">ContactNumber</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let d of cstmrs" (click)="getSelectedRow(d)">
        <td scope="row">{{d.CustomerId}}</td>
        <td scope="row">{{d.CustomerName}}</td>
        <td scope="row">{{d.City}}</td>
        <td scope="row">{{d.Email}}</td>
        <td scope="row">{{d.ContactNumber}}</td>
      </tr>
    </tbody>
  </table>
  </div>
  </body>
  </html>
 `
})

export class CustomerSenderComponent implements OnInit {

  cstmr: Customer;
  cstmrs: Array<Customer>;
  allCutomers = Customers;
  searchedCustomers: Array<Customer>;
  inputText: string;

  constructor(private serv: CommunicationService) {
    this.cstmr = new Customer(0, '', '', '', 0);
    this.inputText = "";
    this.cstmrs = this.allCutomers;
  }

  getSelectedRow(c: Customer): void {
    this.cstmr = c;
    this.serv.onEmitValue([c.CustomerId]);
  }

  onKeyUp() {
    if (this.inputText.length > 0) {
      
      this.searchedCustomers = new Array<Customer>();
      let customerIds = new Array<number>();

      this.allCutomers.forEach((n) => {
        if (n.CustomerName.substr(0, this.inputText.length).toLowerCase() === this.inputText.toLowerCase()) {
          this.searchedCustomers.push(n);
          customerIds.push(n.CustomerId);
        }

        if (n.City.substr(0, this.inputText.length).toLowerCase() === this.inputText.toLowerCase()) {
          if (!this.searchedCustomers.some(x => x.CustomerId == n.CustomerId)) {
            this.searchedCustomers.push(n);
            customerIds.push(n.CustomerId);
          }
        }
      });

      this.serv.onEmitValue(customerIds);
      this.cstmrs = this.searchedCustomers;
    }
    else
      this.cstmrs = this.allCutomers;
  }

  ngOnInit() {
  }
}