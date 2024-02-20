import { Component } from '@angular/core';
import { Groceries } from '../groceries';
import { ActivatedRoute, Router } from '@angular/router';
import { GroceryServiceService } from '../grocery-service.service';
import { FormGroup } from '@angular/forms';
import { error } from 'console';


@Component({
  selector: 'app-update-grocery',
  templateUrl: './update-grocery.component.html',
  styleUrl: './update-grocery.component.css'
})
export class UpdateGroceryComponent {
  
  groceries:Groceries=new Groceries();
  id:number=0;
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
  
  constructor(private GroceryService:GroceryServiceService, private router:Router, private route:ActivatedRoute){}
  
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    console.log(this.id=this.route.snapshot.params['id']);
    this.GroceryService.getGroceryById(this.id).subscribe(data =>{
      this.groceries=data;
    },error=>console.log(error));
  }

  onSubmit(){
    this.GroceryService.updateGrocery(this.id,this.groceries).subscribe(data =>{
    this.goToGroceryList()
    },
    error=>console.log(error));
  }
  
  goToGroceryList(){
    this.router.navigate(['/groceries']);
  }
  

}
