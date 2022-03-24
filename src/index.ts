console.log("compiled");
const name = "yjglab",
  age = 100,
  gender = "male";

const say = (name: string, age: number, gender: string): boolean => {
  console.log(`${name} ddssssssssaaa ${age} ${gender}`);

  return true;
};

console.log(say(name, age, gender));

export {};
