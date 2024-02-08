package com.project.springBootbackend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="groceries")
public class Grocery_Info {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long grocery_id;
	
	@Column(name="grocery_name")
	private String grocery_name;
	
	@Column(name="cost_per_item")
	private long cost_per_item;
	
	@Column(name="itemsAvailable")
	private long items_available;

	@Column(name="Source")
	private String source;
	
	@Column(name="Quantity")
	private long quantity;
	
	public Grocery_Info() {}
	
	public Grocery_Info(long grocery_id, String grocery_name, long cost_per_item, long items_available,
			long total_cost_of_items, String source) {
		super();
		this.grocery_id = grocery_id;
		this.grocery_name = grocery_name;
		this.cost_per_item = cost_per_item;
		this.items_available = items_available;
		this.source=source;
	}
	
	public String getSource() {
		return source;
	}

	public void setSource(String source) {
		this.source = source;
	}

	public Grocery_Info(long quantity) {
		super();
		this.quantity = quantity;
	}

	public long getItems_available() {
		return items_available;
	}

	public long getQuantity() {
		return quantity;
	}

	public void setQuantity(long quantity) {
		this.quantity = quantity;
	}

	public void setItems_available(long items_available) {
		this.items_available = items_available;
	}


	public Grocery_Info(String grocery_name, long cost_per_item) {
		super();
		this.grocery_name = grocery_name;
		this.cost_per_item = cost_per_item;
	}

	public long getGrocery_id() {
		return grocery_id;
	}

	public void setGrocery_id(long grocery_id) {
		this.grocery_id = grocery_id;
	}

	public String getGrocery_name() {
		return grocery_name;
	}

	public void setGrocery_name(String grocery_name) {
		this.grocery_name = grocery_name;
	}

	public long getCost_per_item() {
		return cost_per_item;
	}

	public void setCost_per_item(long cost_per_item) {
		this.cost_per_item = cost_per_item;
	}

	@Override
	public String toString() {
		return "Grocery_Info [grocery_id=" + grocery_id + ", grocery_name=" + grocery_name + ", cost_per_item="
				+ cost_per_item + ", items_available=" + items_available + ", source=" + source + ", quantity="
				+ quantity + "]";
	}
	
	
}
