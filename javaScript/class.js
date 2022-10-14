// ? class

class calculator {
  constructor(){
    this.valueA = 0;
    this.valueB = 0;
  }

  sum (valueA, valueB) {
    return valueA + valueB;
  }
  rest ()
}

let calcular = new calculator()
console.log(calcular.sum(20, 30))

//? Async Await

const helloWorl = () => {
  return new Promise((resolve, reject) => {
    if (true)  {
     return setTimeout (() => resolve("se resolvio"),2000)
    }else{
      reject(new Error("error"))
    }
  })
}


const helloAsync = async () => {
  try {
    const hello = await helloWorl();
    console.log(hello)
    console.log("hola")
  } catch (error) {
    console.log({error})
  }
}
console.log(helloAsync())

let obj = {
  name: "Andrés",
  lastname: "Rodríguez",
  age: 20
}

let obj2 = {
  ...obj,
  country : "mx"
}
console.log(obj)
console.log(obj2)

let hola = "      hola mundo"
console.log(hola.trimStart())

let hola2 = "hola    "
console.log(hola2.trimEnd());

let arr = [["nombre", "andres"], ["lastname" , "rodriguez"]]

console.log(Object.fromEntries(arr)); 