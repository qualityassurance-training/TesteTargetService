package model;

import entities.*;
import java.text.MessageFormat;
import java.util.*;

import javax.ws.rs.core.MediaType;
import com.sun.jersey.api.client.*;
import com.sun.jersey.api.client.config.*;

public class ProductRestClient {
	private String BASE_URL = "http://localhost:9000/";
	private Client client;
	private WebResource webResource;
	
	public ProductRestClient()
	{
		this.client = Client.create(new DefaultClientConfig());
		this.webResource = this.client.resource(BASE_URL).path("products");
	}
	
	public List<Product> findAll()
	{
		try
		{
			WebResource resource = this.webResource;
			GenericType<List<Product>> genericType = new GenericType<List<Product>>() { };
			ClientResponse response = resource.path("products").accept(MediaType.APPLICATION_JSON).get(ClientResponse.class);
			
			if(response.getStatus() == 200)
				return response.getEntity(genericType);
			return null;
		}
		catch(Exception e)
		{
			return null;
		}
	}
	
	public Product find(Integer id) {
		try
		{
			WebResource resource = this.webResource;
			ClientResponse response = resource.path("products/" + id).accept(MediaType.APPLICATION_JSON).get(ClientResponse.class);
			if(response.getStatus() == 200)
				return response.getEntity(Product.class);
			return null;
		}
		catch(Exception e)
		{
			return null;
		}
	}
	
	public boolean delete(Integer id)
	{
		WebResource resource = this.webResource;
		ClientResponse clientResponse = resource.path(MessageFormat.format("delete/{0}", new Object[] { id })).type(MediaType.APPLICATION_JSON).delete(ClientResponse.class);
		return clientResponse.getStatus() == 200;
	}
	
	public boolean create(Product product)
	{
		WebResource resource = this.webResource;
		ClientResponse clientResponse = resource.type(MediaType.APPLICATION_JSON).post(ClientResponse.class, product);
		return clientResponse.getStatus() == 200;
	}
	
	public boolean update(Product product)
	{
		WebResource resource = this.webResource;
		ClientResponse clientResponse = resource.type(MediaType.APPLICATION_JSON).put(ClientResponse.class, product);
		return clientResponse.getStatus() == 200;
	}
}
