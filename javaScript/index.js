//?Desestructuración

let obj = {
  name: "Andrés",
  lastname: "Rodríguez",
  age: 20
}
//let { name, lastname, age } = obj
let { name,...all} = obj
console.log(name,all)

//?Spread Operator

let team1 = ["oscar", "manuel", "ele"]
let team2 = ["jorge", "yesica", "luis"]

let education = ["david", ...team1, ...team2]

let obj2 = {
  nombre: "Andrés",
  lastname: "Rodríguez",
  age: 20
}

let aux = { coutry: "col", ...obj2 }
console.log(education)

//? multilínea

let tex = `hola mundo  
que tal mundo
`;
console.log(tex)

//? Arrow Functions
const names = [
  { "name": "Andrés", age: 28 },
  { "name": "luís", age: 30 }
];

let amigos = names.map(p => console.log(`${p.name} ${p.age}`))

let scuare = (num, num2) => { return num + num2 };

console.log(scuare(10, 20))

//? Promesas 

const Promesas = () => {
  return new Promise((resolve, reject) => {
    if (true) resolve("se resolvio")
    else {
      reject("error")
    }
  })
}

Promesas()
.then(value => value + " 2")
.then(value => console.log(value, "2"))
.catch(e => console.log(e))