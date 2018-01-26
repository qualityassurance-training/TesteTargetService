<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<a href="product?action=add">Add</a>
	<table cellpadding="2" cellspacing="2" border="1">
		<tr>
			<th>Id</th>
			<th>Name</th>
			<th>Description</th>
			<th>Value</th>
			<th>Option</th>
		</tr>
		<c:forEach var="product" items="${products }">
			<tr>
				<td>${product.id }</td>
				<td>${product.name }</td>
				<td>${product.description }</td>
				<td>${product.value }</td>
				<td>
					<a href="product?action=delete&id=${product.id }" onclick="return confirm(Are you sure ?)">Delete</a> | 
					<a href="product?action=update&id=${product.id }">Edit</a> 
				</td>
			</tr>
		</c:forEach>
	</table>
</body>
</html>