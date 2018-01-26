<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<form method="post" action="product?action=add">
		${error }
		<table border="0" cellpadding="2" cellspacing="2">
			<tr>
				<td>Name</td>
				<td>
					<input type="text" name="name">
				</td>
			</tr>
			<tr>
				<td>Description</td>
				<td>
					<input type="text" name="description">
				</td>
			</tr>
			<tr>
				<td>Value</td>
				<td>
					<input type="text" name="value">
				</td>
			</tr>
			<tr>
				<td>&nbsp;</td>
				<td>
					<input type="submit" value="Save">
				</td>
			</tr>
		</table>
	</form>
</body>
</html>