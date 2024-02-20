import { HttpClient,withFetch } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Groceries } from './groceries';

@Injectable({
  providedIn: 'root'
})
export class GroceryServiceService {

  private baseURL="http://localhost:8080/api/v1/groceries";
  
  constructor(private httpClient:HttpClient) { }

  getGroceryList():Observable<Groceries[]>{
    return this.httpClient.get<Groceries[]>(`${this.baseURL}`);
  }

  createGrocery(groceries:Groceries):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,groceries)
  }

  getGroceryById(id:number):Observable<Groceries>{
    return this.httpClient.get<Groceries>(`${this.baseURL}/${id}`);
  }

  updateGrocery(id:number, grocery:Groceries):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,grocery);
  }

  deleteGrocery(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
 