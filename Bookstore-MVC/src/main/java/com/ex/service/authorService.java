package com.ex.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.ex.beans.Author;

@Service("authorService")
public class authorService {
	
	static ArrayList<Author> authors = new ArrayList<Author>();
	static int seq = 3;
	
	static {
		
		authors.add(new Author(1, "John", "Doe"));
		authors.add(new Author(2, "Jane", "Doe"));
	
	}
	
	public List<Author> getAll() {
		
		return authors;
		
	}
	
	public Author getById(int id) {
		
		return authors.stream().filter(t -> t.getId()==id).findFirst()
				.orElse(null);
		
	}
	
	public Author findByFname(String firstname) {
		return authors.stream().filter(t -> t.getFirstname().
				equalsIgnoreCase(firstname)).findFirst().orElse(null);
	}

	public Author addAuthor(Author a) {
		
		Author test = findByFname(a.getFirstname());
		
		if(test==null) {
			
			a.setId(seq++);
			authors.add(a);
			return a;
		
		}
		
		else {
		
			return null;
		
		}
	}
	
	public Author updateAuthor(int id, Author a) {
		
		Author old = getById(id);
		
		if(old == null) {
		
			return addAuthor(a);
		
		}
		
		else {
			
			for(Author na : authors) {
			
				if(na.getId() == id) {
				
					na.setFirstname(na.getFirstname());

					return na;
					
				}
			}
		}
		return null;
	}

}
