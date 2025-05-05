
function precio (){
  let precio = 200;
  let IVA = 21
  let Total = precio + (precio * (IVA/100));
  console.log(Total) 
}
precio ()

function cuadrado(l){
  let area = l**2
  let perimetro = 4*l
  console.log("El area del cuadrado es: " +area)
  console.log("El perimetro del cuadrado es: " +perimetro)
}
cuadrado(-0.5)

function saludo(nombre){
  console.log("Hola " + nombre.at(0).toUpperCase() + nombre.slice(1));
}

saludo("sergio")

function promedio(arreglo){
  cantidad = arreglo.length
  suma = 0
  for (let i = 0; i < cantidad; i++){
    suma += arreglo[i]
  }
  console.log("promedio " +suma/cantidad)
}
promedio([10,17,18])