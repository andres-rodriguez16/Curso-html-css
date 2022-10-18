
const persona = {
  name : "manuel",
}

Object.freeze(persona)
persona.name = "luís";
console.log(persona);
