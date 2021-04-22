import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



import { CrudComponent } from './crud/crud.component';
import { AppComponent } from './app.component';
import { NgbdModalBasic } from '.crud/modal';

@NgModule({
  imports: [BrowserModule, NgbModule],
  declarations: [NgbdModalBasic,AppComponent, CrudComponent ],
  exports: [NgbdModalBasic],
  bootstrap: [AppComponent, NgbdModalBasic]
})
export class AppModule { }
