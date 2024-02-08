package com.project.springBootbackend.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.springBootbackend.exception.ResourceNotFoundException;
import com.project.springBootbackend.model.Grocery_Info;
import com.project.springBootbackend.repository.grocery_repository;

@RestController
@RequestMapping("/api/v1")
public class grocery_controller {
	
//	Lets inject employee repository over here.t
	
	@Autowired
	private grocery_repository groceryRepository;

//	Get all groceries
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/groceries")
	public List<Grocery_Info> getAllGroceries(){
		return groceryRepository.findAll();
	}

//	create grocery rest api.
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/groceries")
	public Grocery_Info createGrocery(@RequestBody Grocery_Info grocery) {
		return groceryRepository.save(grocery);
	} 

//	get element by id rest api.
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/groceries/{grocery_id}")
	public ResponseEntity<Grocery_Info>getGrocery_InfoById(@PathVariable Long grocery_id){
		Grocery_Info grocery = groceryRepository.findById(grocery_id).orElseThrow(()->new ResourceNotFoundException("Employee not exist with id:"+grocery_id));
		
		return ResponseEntity.ok(grocery);
	}
		
	
//	update grocery rest api.
	@CrossOrigin(origins = "http://localhost:4200")
	@PutMapping("/groceries/{grocery_id}")
	public ResponseEntity<Grocery_Info> updateGrocery(@PathVariable Long grocery_id,@RequestBody Grocery_Info groceriesDetails)
	{
			Grocery_Info grocery = groceryRepository.findById(grocery_id)
					.orElseThrow(()->new ResourceNotFoundException("Employee not exist with id:"+grocery_id));
			
			grocery.setGrocery_name(groceriesDetails.getGrocery_name());
			grocery.setCost_per_item(groceriesDetails.getCost_per_item());
			grocery.setQuantity(groceriesDetails.getQuantity());
			
			Grocery_Info updatedGrocery=groceryRepository.saveAndFlush(grocery);
			return ResponseEntity.ok(updatedGrocery);
	}
	
//	delete grocery rest api
	@CrossOrigin(origins = "http://localhost:4200")
	@DeleteMapping("/groceries/{grocery_id}")
	public ResponseEntity<Map<String, Boolean>> deleteGrocery(@PathVariable Long grocery_id){
		
		Grocery_Info grocery = groceryRepository.findById(grocery_id)
				.orElseThrow(()->new ResourceNotFoundException("Employee not exist with id:"+grocery_id));
		
		groceryRepository.delete(grocery);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted",Boolean.TRUE);
		return ResponseEntity.ok(response);
		
	}
	
	
}

