import { OnInit, Component } from '@angular/core';
import { Order } from 'src/app/models/app.order';
import { Orders } from 'src/app/models/app.constants';
import { CommunicationService } from 'src/app/Services/app.communication.service';

@Component({
  selector: 'app-orderreceiver-component',
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
    <h2>{{this.orderTableHeader}}</h2>
       <table class="table table-bordered table-dark">
         <thead>
           <tr>
            <th scope="col">OrderId</th>
            <th scope="col">OrderName</th>
            <th scope="col">Date</th>
            <th scope="col">CustomerId</th>
            <th scope="col">OrderQuantity</th>
            <th scope="col">Amount</th>
           </tr>
         </thead>
         <tbody>
           <tr *ngFor="let o of filteredOrder">
           <td scope="row">{{o.OrderId}}</td>
           <td scope="row">{{o.OrderName}}</td>
           <td scope="row">{{o.Date}}</td>
           <td scope="row">{{o.CustomerId}}</td>
           <td scope="row">{{o.OrderQuantity}}</td>
           <td scope="row">{{o.Amount}}</td>
           </tr>
         </tbody>
      </table>
    </div>
    </body>
    </html>
    `
})

export class OrderReceiverComponent implements OnInit {

  ord: Order;
  orders = Orders;
  customerIds: Array<number>;
  _filteredOrder: Array<Order>;
  orderTableHeader: string;

  constructor(private serv: CommunicationService) {
    this.ord = new Order(0, '', '', 0, 0, 0);
    this.customerIds = new Array<number>();
    this._filteredOrder = new Array<Order>();
  }

  ngOnInit(): void {
    this.serv.emitValue.subscribe((data: number[]) => {
      this.customerIds = data;
      this.orderTableHeader = ` Order History Of Above Filtered Customers `;
    });
  }

  get filteredOrder(): Array<Order> {
    this._filteredOrder = new Array<Order>();
    if (this.customerIds.length > 0) {
      this.customerIds.forEach((x) => {
        this.orders.filter((e, i) => {
          if (e.CustomerId === x) {
            this._filteredOrder.push(e);
          }
        });
      });
      return this._filteredOrder;
    } else {
      // this._filteredOrder = this.orders;
    }
    return this._filteredOrder;
  }
}