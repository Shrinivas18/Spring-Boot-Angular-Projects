import { Component } from '@angular/core';
import { Groceries } from '../groceries';
import { ActivatedRoute } from '@angular/router';
import { GroceryServiceService } from '../grocery-service.service';

@Component({
  selector: 'app-grocery-details',
  templateUrl: './grocery-details.component.html',
  styleUrl: './grocery-details.component.css'
})
export class GroceryDetailsComponent {

  id:number=0;
  groceries:Groceries=new Groceries();

  constructor(private route:ActivatedRoute, private groceryService:GroceryServiceService){}

  ngOnInit() {
  this.id = this.route.snapshot.params['id'];

  this.groceryService.getGroceryById(this.id).subscribe( data=> {
    this.groceries=data;
  });
  }


}
