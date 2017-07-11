/*function validateForm(){
	 Escribe tú código aquí */
	$(document).ready(function(){
		/*var mail = /^[A-Z_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;*/
		$("#registrar").click(function(){
			var nombre = $("#name").val();
			var apellido = $("#lastname").val();
			var email = $("#input-email").val();
			var password = $("#input-password").val();

			if(nombre === ""){
				alert("ingrese nombre");
				return false;				
			}
			if(nombre != nombre.upperCase(A-Z_)){
				alert("ingrese solo nombre con mayúscula");
				return false;				
			}
			if(apellido === ""){
				alert("ingrese nombre");
				return false;				
			}
			if(apelido != apellido.upperCase(A-Z_)){
				alert("ingrese solo apellido con mayúscula");
				return false;				
			}
			if(email === ""){
				alert("ingrese nombre");
				return false;				
			}
			if(email != /^[A-Z_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/){
				alert("ingrese email válido");
				return false;				
			}
			if(password === ""){
				alert("ingrese contraseña");
				return false;				
			}
			if(password.lenght < 6){
				alert("ingrese password mayor a 6 letras y números");
				return false;				
			}
			if(password === "123456" || password === "098765" || password === "password"){
				alert("ingrese password con letras y números distintos a 123456, 098765 y password");
				return false;				
			}
		})
	});
/*}*/