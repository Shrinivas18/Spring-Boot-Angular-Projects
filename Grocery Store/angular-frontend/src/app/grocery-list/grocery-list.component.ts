import { Component, OnInit } from '@angular/core';
import { Groceries } from '../groceries';
import { Router } from '@angular/router';
import { GroceryServiceService } from '../grocery-service.service';


@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrl: './grocery-list.component.css'
})
export class GroceryListComponent implements OnInit{
  
  groceries!: Groceries[];
  totalCost: number = 0;


  constructor(private GroceryService:GroceryServiceService, private router:Router ){}
  
  ngOnInit(): void {
      this.getGroceries();
  }
  private getGroceries()
  {
    this.GroceryService.getGroceryList().subscribe(data =>{
      this.groceries=data;
      this.calculateTotalCost();
    })
  }

  updateGrocery(id:number){
    this.router.navigate(['update-grocery',id]);
  }

  deleteGrocery(id:number){
    this.GroceryService.deleteGrocery(id).subscribe(data=>{
      console.log(data);
      this.getGroceries();
    })
  }

  groceryDetails(id:number){
    this.router.navigate(['groceryDetails',id]);
  }

  calculateTotalCost(): void {
    this.totalCost = this.groceries.reduce((total, grocery) => total + grocery.cost_per_item, 0);
  }

  
  
}
