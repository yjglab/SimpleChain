// interface Person {
//   name: string;
//   age: number;
//   gender: string;
// }
class Person {
  public name: string;
  public age: number;
  public gender: string;
  constructor(name: string, age: number, gender?: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}
const name = "yjglab",
  age = 100,
  gender = "male";

const obj = {
  name: "yjg",
  age: 100,
  gender: "male",
};
const yjgObj = new Person("yjg", 100, "male");

const say = (name: string, age: number, gender: string): boolean => {
  console.log(`say() => ${name} ddssssssssaaa ${age} ${gender}`);

  return true;
};
const sayObj = (obj: Person): string => {
  return `sayObj() => ${obj.name} ${obj.age} ${obj.gender}`;
};

console.log(say(name, age, gender));
console.log(sayObj(yjgObj));
export {};
