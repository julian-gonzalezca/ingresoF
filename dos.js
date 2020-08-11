/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
 validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más barato de los sólidos
*/function mostrar()
{
 let producto; 
 let marca; 
 let precio; 
 let pesoProducto; 
 let tipo; 
 let masCaro;
 let masBarato; 
 let seguir; 
 let acumPeso = 0; 
 let maxPrecio = 0; 
 let minPrecio = 0;
 let flagMinPrecio = 0; 

 do{
   producto = prompt("Ingrese producto: ");
   marca = prompt("Ingrese marca: "); 
   precio = parseInt(prompt("Ingrese precio: "));
   while(isNaN(precio)||precio<1){
     precio = parseInt(prompt("Precio invalido, Ingrese precio: "));
   }
   pesoProducto = parseInt(prompt("Ingrese peso en kilogramos: "));
   while(isNaN(pesoProducto)||pesoProducto<1){
     pesoProducto = parseInt(prompt("Peso invalido, Ingrese peso en kilogramos: "));
   }
   tipo = prompt('Ingrese tipo, "s" o "l": '); 
   while(tipo != "s" && tipo != "l"){
     tipo = prompt('Tipo invalido, Ingrese tipo, "s" o "l": ');
   }
   acumPeso = acumPeso + pesoProducto; 
   if (tipo == "l" && precio > maxPrecio){
     masCaro = marca; 
     maxPrecio = precio; 
   }
   if ( flagMinPrecio == 0 || precio < minPrecio){
     minPrecio = precio;
     flagMinPrecio = 1; 
     masBarato = marca; 
   }
   

  seguir = (prompt('Quiere ingresar otro producto? "s" o "n": ')); 
 }while (seguir == "s" || seguir == "S");

 console.log("A. El peso total de la compra es: "+acumPeso);
 console.log("B. La marca del mas caro de los liquidos es: "+masCaro);
 console.log("C. La Marca del mas barato de los solidos es: "+masBarato); 
}
