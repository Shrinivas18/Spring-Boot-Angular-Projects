package com.project.springBootbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.springBootbackend.model.Grocery_Info;

@Repository
public interface grocery_repository extends JpaRepository<Grocery_Info,Long> {

}
