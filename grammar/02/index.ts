import { v4 } from "uuid";

enum Color {
  Red,
  Blue,
  Green,
}

Color.Red;

type UniqObject = {
  id: string;
  [key: string]: string | number | boolean;
};

const makeObject = (): UniqObject => ({
  id: v4(),
});

console.log(makeObject());
console.log(makeObject());
