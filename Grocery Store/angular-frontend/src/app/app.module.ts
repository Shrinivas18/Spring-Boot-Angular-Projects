import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { GroceryListComponent } from './grocery-list/grocery-list.component';

import { HttpClientModule } from '@angular/common/http';
import { CreateGroceryComponent } from './create-grocery/create-grocery.component';
import { FormsModule } from '@angular/forms';
import { UpdateGroceryComponent } from './update-grocery/update-grocery.component';
import { GroceryDetailsComponent } from './grocery-details/grocery-details.component';

@NgModule({
  declarations: [
    AppComponent,
    GroceryListComponent,
    CreateGroceryComponent,
    UpdateGroceryComponent,
    GroceryDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
