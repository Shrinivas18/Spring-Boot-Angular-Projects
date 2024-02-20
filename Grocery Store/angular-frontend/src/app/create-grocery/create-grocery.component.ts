import { Component, OnInit } from '@angular/core';
import { Groceries } from '../groceries';
import { GroceryServiceService } from '../grocery-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-grocery',
  templateUrl: './create-grocery.component.html',
  styleUrl: './create-grocery.component.css'
})
export class CreateGroceryComponent {

  groceries:Groceries=new Groceries();

  options = [ 
    { name: 'Chhattisgarh' },
    { name: 'Maharashtra' },
    { name: 'Uttar Pradesh' },
    { name: 'Madhya Pradesh' },
    { name: 'Rajasthan' },
    { name: 'Gujrat' },
    { name: 'Sikkim' },
    { name: 'Karnataka' },
    { name: 'Andhra Pradesh' },
    { name: 'Kerela' },
  ];
  selectedOption:string='';
  selectOption(option: string) {
    this.selectedOption = option;
    this.groceries.source=this.selectedOption;
  }

  constructor(private GroceryService:GroceryServiceService, private router:Router){}
  
  ngOnInit(): void {
  }

  saveGrocery(){
    this.GroceryService.createGrocery(this.groceries).subscribe(data=>{
      console.log(data)
      this.goToGroceryList();
    }, error=>console.log(error));

  }

  goToGroceryList(){
    this.router.navigate(['/groceries']);
  }

  onSubmit(){
    this.saveGrocery()
    console.log(this.groceries);
    console.log("so",this.selectedOption);
   }

}
