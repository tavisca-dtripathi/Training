import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ProductComponent} from './components/productComponent/app.product.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import './Helper/app.dataGrid';
import { CustomerSenderComponent } from './components/customerOrderCummunication/app.customerOrder.component';
import { OrderReceiverComponent } from './components/customerOrderCummunication/app.orderReceiver.component';

@NgModule({
  declarations: [
    AppComponent,ProductComponent,CustomerSenderComponent,OrderReceiverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [CustomerSenderComponent,OrderReceiverComponent]
})
export class AppModule { }
