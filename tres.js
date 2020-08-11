/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones, 
validando los datos ingresados. 
sexo del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el sexo de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar()
{
	 
	let lugar; 
	let sexo; 
	let temporada; 
	let cantidad; 
	let masElegido; 
	let acuBariloche = 0;
	let acuSalta = 0;
	let acuCataratas = 0; 
	let maxCantidad = 0;
	let sexoMasViajes;
	let conInvierno = 0; 
	let acumPasajeros = 0;
	let promedio; 
	

	do{

		sexo = prompt('Ingrese sexo del titular, "f" o "m": ');
		while (sexo !=  "f" && sexo != "m" ){
			sexo = prompt('Invalido, Ingrese sexo "f" o "m": ');
		}
		lugar = prompt('Ingrese lugar, “bariloche”, “cataratas” o “salta”');
			while(lugar != "bariloche" && lugar != "cataratas" && lugar != "salta" ){
			prompt('Destino no disponible, Ingrese lugar, “bariloche”, “cataratas” o “salta” ');
			}
		temporada = prompt('Elija la temporada: “otoño”,”invierno, “verano,”primavera”: ');
		while(temporada != "otoño" && temporada != "invierno" && temporada != "verano" && temporada != "primavera"){
			temporada = prompt('Invalido, ingrese nuevamente la temporada: “otoño”,”invierno, “verano,”primavera”');
		}
		cantidad = parseInt(prompt("Ingrese la cantidad de personas que viajan: "));
		while (isNaN(cantidad)||cantidad<1){
			cantidad = parseInt(prompt("Invalido, ingrese nuevamente la cantidad: ")); 
		}
		switch(lugar){
			case "bariloche":
				acuBariloche++; 
				break;
			case "cataratas":
				acuCataratas++;
				break;
			case "salta": 
			    acuSalta++; 
			    break; 
		}
		if (cantidad > maxCantidad){
			maxCantidad = cantidad; 
			sexoMasViajes = sexo; 
		}
		if (acuBariloche > acuSalta && acuBariloche > acuCataratas){
			masElegido = acuBariloche;
			masElegido = "Bariloche";
		}
		else if (acuSalta > acuCataratas && acuSalta >= acuBariloche){
			masElegido = acuSalta;
			masElegido = "Salta";
		}
		else {
			masElegido = acuCataratas; 
			masElegido = "Cataratas"; 
		}
		if (temporada == "invierno"){
			conInvierno++;
			acumPasajeros+=cantidad; 
		}

	seguir = (prompt('Quiere ingresar otro titular? "s" o "n": ')); 
	}while (seguir == "s" || seguir == "S");

	promedio = acumPasajeros / conInvierno; 

	console.log ("El destino mas elegido es: "+masElegido);
	console.log ("El sexo del titular que lleva mas pasajeros es: "+sexoMasViajes);
	console.log("El promedio de personas por viaje que viajan en invierno es: "+promedio); 
}
