import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroceryListComponent } from './grocery-list/grocery-list.component';
import { CreateGroceryComponent } from './create-grocery/create-grocery.component';
import { UpdateGroceryComponent } from './update-grocery/update-grocery.component';
import { GroceryDetailsComponent } from './grocery-details/grocery-details.component';

const routes: Routes = [
  {path:"groceries",component:GroceryListComponent},
  {path:"add-grocery",component:CreateGroceryComponent},
  {path:'',redirectTo:'groceries',pathMatch:'full'},
  {path:'update-grocery/:id',component:UpdateGroceryComponent},
  {path:'groceryDetails/:id',component:GroceryDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
