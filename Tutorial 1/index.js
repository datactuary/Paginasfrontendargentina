let x = "Hello world"
console.log(x)

let objeto1 = {Nombre:"Matias", Apellido:"Rodriguez", Listadeamigos:["Sofia", "Marcela"]}
console.log(objeto1)

let objeto2 = {Nombre:"Federico", Apellido:"Fernandez", Listadeamigos:["Caterina", "Ariana"]}
console.log(objeto2)

let objeto3 = {Nombre:"Carlos", Apellido:"Makosta", Listadeamigos:["Pancracia", "Marina"]}
console.log(objeto3)

let listadeempleados = [objeto1, objeto2, objeto3]
console.log(listadeempleados)

console.log(listadeempleados.map(empleado => empleado.Listadeamigos[1]))

let document = {getelementbyclass:  }
let elementohtml = {styles: {color: "black", textaline: "center"}}