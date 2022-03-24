interface Person {
  name: string;
  age: number;
  gender: string;
}

const name = "yjglab",
  age = 100,
  gender = "male";

const obj = {
  name: "yjg",
  age: 100,
  gender: "male",
};
const say = (name: string, age: number, gender: string): boolean => {
  console.log(`say() => ${name} ddssssssssaaa ${age} ${gender}`);

  return true;
};
const sayObj = (obj: Person): string => {
  return `sayObj() => ${obj.name} ${obj.age} ${obj.gender}`;
};

console.log(say(name, age, gender));
console.log(sayObj(obj));
export {};
