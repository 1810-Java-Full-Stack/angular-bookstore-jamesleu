package com.ex.beans;

public class Author {
	
	private int id;
	private String firstname;
	private String lastname;
	
	public Author() {}
	
	public Author(String firstname, String lastname) {
		
		this.firstname = firstname;
		this.lastname = lastname;
		
	}

	public Author(int id, String firstname, String lastname) {
		
		super();
		this.id = id;
		this.firstname = firstname;
		this.lastname = lastname;
	
	}

	public int getId() {
	
		return id;
	
	}

	public void setId(int id) {
	
		this.id = id;
	
	}

	public String getFirstname() {
	
		return firstname;
	
	}

	public void setFirstname(String firstname) {
		
		this.firstname = firstname;
	
	}

	public String getLastname() {
	
		return lastname;
	
	}

	public void setLastname(String lastname) {
		
		this.lastname = lastname;
	
	}

	@Override
	public String toString() {
		
		return "Author [id=" + id + ", firstname=" + firstname + ", lastname=" + lastname + "]";
	
	}
	
	
	
	

}
