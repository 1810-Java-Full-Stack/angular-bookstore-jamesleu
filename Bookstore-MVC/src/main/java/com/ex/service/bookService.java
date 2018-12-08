package com.ex.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.ex.beans.Book;

@Service("bookService")
public class bookService {
	
	static ArrayList<Book> books = new ArrayList<Book>();
	static int seq = 3;
	
	static {
		
		books.add(new Book(1, "Harry Potter and the Sorcerers Stone"));
		books.add(new Book(2, "Harry Potter and the Order of the Phoenix"));
	
	}
	
	public List<Book> getAll() {
		
		return books;
		
	}
	
	public Book getById(int id) {
		
		return books.stream().filter(t -> t.getId()==id).findFirst()
				.orElse(null);
		
	}
	
	public Book findByTitle(String title) {
		return books.stream().filter(t -> t.getTitle().
				equalsIgnoreCase(title)).findFirst().orElse(null);
	}

	public Book addBook(Book b) {
		
		Book test = findByTitle(b.getTitle());
		
		if(test==null) {
			
			b.setId(seq++);
			books.add(b);
			return b;
		
		}
		
		else {
		
			return null;
		
		}
	}
	
	public Book updateBook(int id, Book b) {
		
		Book old = getById(id);
		
		if(old == null) {
		
			return addBook(b);
		
		}
		
		else {
			
			for(Book nb : books) {
			
				if(nb.getId() == id) {
				
					nb.setTitle(b.getTitle());

					return nb;
					
				}
			}
		}
		return null;
	}

}
