window.addEventListener("load", function() {
	var boton = document.getElementById("calcular");
	boton.addEventListener("click", function() {
		var numero1 = parseFloat(document.getElementById("numero1").value);
		var numero2 = parseFloat(document.getElementById("numero2").value);

		var resultado;
		if(numero2 && numero1){
			resultado=  document.getElementById("resultado");
			resultado.innerHTML = "<p>El resultado es " + cambio(numero1,numero2) + "</p>";
		} else {
			resultado=  document.getElementById("resultado");
			resultado.innerHTML = "<p>Ingrese un valor</p>";
		}

	});

	function cambio(numero1, numero2) {
		return (numero2 / numero1).toFixed(2);
	}
});