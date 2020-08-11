/*
1)De 5  personas que ingresan al hospital se deben tomar y 
validar los siguientes datos.
nombre ,peso, sexo y edad.
a)informar la cantidad de mujeres.
b)la edad promedio en total.
c)el hombre mas pesado.
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
	let nombre; 
	let peso;
	let sexo;
	let edad; 
	let masPesado; 
	let contmujeres = 0; 
	let acumuladorEdad = 0; 
	let maxPeso = 0; 
	let promedioEdad;

	

	
	for (let i = 0; i<5;i++){

		nombre = prompt("Ingrese nombre: ");

		peso = parseInt(prompt("Ingrese peso: "));
		while (peso<0){
			peso = prompt("Invalido, Ingrese peso: ");
		}

		sexo = prompt('Ingrese sexo "f" o "m": ');
		while (sexo !=  "f" && sexo != "m" ){
			sexo = prompt('Invalido, Ingrese sexo "f" o "m": ');
		}
		edad = parseInt(prompt("Ingrese edad: "));
		while(isNaN(edad)||edad<1){
			edad = parseInt(prompt("Invalido, Ingrese edad:")); 
		}
		acumuladorEdad = acumuladorEdad + edad; 
		if (sexo =="f"){
			contmujeres++; 
		}
		if (sexo == "m" && peso > maxPeso){
		masPesado = nombre; 
		maxpeso = peso;  

		}
		promedio = acumuladorEdad / 5;

	}
	console.log("A. Hay "+contmujeres+" mujeres.");
	console.log("B. La edad promedio es: "+promedio);
	console.log("C. El hombre mas pesado es: "+masPesado); 
	
}
