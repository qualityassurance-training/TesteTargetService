package entities;

import java.math.BigDecimal;

import javax.xml.bind.annotation.*;

import java.io.Serializable;

@XmlRootElement(name = "product")
public class Product implements Serializable {
	private static final long serialVersionUID = 1L;
	private int id;
	private String name;
	private String description;
	private BigDecimal value;
	
	@XmlElement
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	
	@XmlElement
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	@XmlElement
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
	@XmlElement
	public BigDecimal getValue() {
		return value;
	}
	public void setValue(BigDecimal value) {
		this.value = value;
	}
	
	@Override
	public String toString() {
		return "Id: " + this.id
				+ "\nName: " + this.name
				+ "\nDescription: " + this.description
				+ "\nValue: " + this.value;
	}
}
