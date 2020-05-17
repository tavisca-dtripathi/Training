import { Customer } from './app.customer';
import { Order } from './app.order';

export const Products = [
  {ProductId:101, ProductName:'Laptop', Price:20000, Catgory:'ECT'},
  {ProductId:102, ProductName:'Iron', Price:2000, Catgory:'ECL'},
  {ProductId:103, ProductName:'Lays', Price:20, Catgory:'FOD'}
];

export const Categories =[
  'ECT', 'ECL', 'FOD'
];

export const Customers: Array<Customer> = new Array<Customer>();
Customers.push(new Customer(101,"Ram","Rampur","ram@gamil.com",94122222))
Customers.push(new Customer(102,"Anirudh","Dehradun","anirudh@gamil.com",94122422))
Customers.push(new Customer(103,"Ramesh","Haridwar","ramesh@gamil.com",94122222))
Customers.push(new Customer(104,"Rama","Dehradun","rama@gamil.com",94122422))
Customers.push(new Customer(105,"Ankit","Rampur","ankit@gamil.com",94122222))
Customers.push(new Customer(106,"Anuradha","Dehradun","Anuradha@gamil.com",94122422))
Customers.push(new Customer(107,"Shankar","Haridwar","shankar@gamil.com",94122222))
Customers.push(new Customer(108,"Shyam","Dehradun","shyam@gamil.com",94122422))


export const Orders: Array<Order> = new Array<Order>();
Orders.push(new Order(1,"Maggi","21-2-2019",101,10,120))
Orders.push(new Order(2,"Magi","21-2-2019",102,10,120))
Orders.push(new Order(3,"Kukure","21-2-2019",101,10,120))
Orders.push(new Order(4,"Takatak","21-2-2019",102,10,120))
Orders.push(new Order(5,"ParleG","21-2-2019",104,10,120))
Orders.push(new Order(6,"Maggi","21-2-2019",104,10,120))
Orders.push(new Order(7,"Maggi","21-2-2019",105,10,120))
Orders.push(new Order(8,"ParleG","21-2-2019",105,10,120))
Orders.push(new Order(9,"Maggi","21-2-2019",106,10,120))
Orders.push(new Order(10,"Kukure","21-2-2019",106,10,120))
Orders.push(new Order(11,"Takatak","21-2-2019",107,10,120))
Orders.push(new Order(12,"Maggi","21-2-2019",107,10,120))
Orders.push(new Order(13,"Maggi","21-2-2019",108,10,120))
Orders.push(new Order(14,"Chips","21-2-2019",108,10,120))
Orders.push(new Order(15,"Maggi","21-2-2019",103,10,120))
Orders.push(new Order(16,"Chips","21-2-2019",103,10,120))

