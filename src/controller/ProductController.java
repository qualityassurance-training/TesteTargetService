package controller;

import java.io.IOException;
import java.math.BigDecimal;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import entities.*;
import model.*;

/**
 * Servlet implementation class ProductController
 */
@WebServlet("/product")
public class ProductController extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ProductController() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String action = request.getParameter("action");
		ProductRestClient client = new ProductRestClient();
		if(action == null)
		{
			request.setAttribute("products", client.findAll());
			request.getRequestDispatcher("product/index.jsp")
				.forward(request, response);
		}else
		{
			if(action.equalsIgnoreCase("add"))
			{
				request.getRequestDispatcher("product/add.jsp")
					.forward(request, response);
			}else if(action.equalsIgnoreCase("delete"))
			{
				int id = Integer.parseInt(request.getParameter("id"));
				client.delete(id);
				response.sendRedirect("product");
			}else if(action.equalsIgnoreCase("update"))
			{
				int id = Integer.parseInt(request.getParameter("id"));
				request.setAttribute("product", client.find(id));
				request.getRequestDispatcher("product/edit.jsp")
					.forward(request, response);
			}
		}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String action = request.getParameter("action");
		ProductRestClient client = new ProductRestClient();
		if(action.equalsIgnoreCase("add"))
		{
			Product product = new Product();
			product.setName(request.getParameter("name"));
			product.setDescription(request.getParameter("description"));
			product.setValue(BigDecimal.valueOf(Double.parseDouble(request.getParameter("value"))))	;
			request.getRequestDispatcher("product/add.jsp")
				.forward(request, response);
			
			if(client.create(product))
			{
				response.sendRedirect("product");
			}else {
				request.setAttribute("error", "Fail");
				request.getRequestDispatcher("product/add.jsp")
					.forward(request, response);
			}
		}else if(action.equalsIgnoreCase("update"))
		{
			int id = Integer.parseInt(request.getParameter("id"));
			Product product = client.find(id);
			product.setName(request.getParameter("name"));
			product.setDescription(request.getParameter("description"));
			product.setValue(BigDecimal.valueOf(Double.parseDouble(request.getParameter("value"))))	;
			if(client.update(product))
			{
				response.sendRedirect("product");
			}else {
				request.setAttribute("error", "Fail");
				request.setAttribute("product", client.find(id));
				request.getRequestDispatcher("product/edit.jsp")
					.forward(request, response);
			}
		}
	}

}
