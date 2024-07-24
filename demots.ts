interface Person {
  name: String;
  age: number;
  greet(): String;
}

export function greet(person: Person): String {
  return "Hello mr" + person.name + "glad that you are" + person.age;
}



// console.log(
//   greet({
//     name: "Ankan",
//     age: 21,
//   })
// );

class P implements Person {
  name: String;
  age: number;

  constructor(name: String, age: number) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return "hi mr " + this.name;
  }
}

const pObj = new P("Ankan", 21);
console.log(pObj.greet());
