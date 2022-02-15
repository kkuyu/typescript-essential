type MyObject = {
  name?: string;
  age: number;
  getFamilyName: () => string;
  getLastName: () => string;
  getBloodType: () => string;
};

const myObj = Object.create(null, {
  name: {
    value: "Kim mintae",
    writable: false,
    configurable: false,
  },
});

delete myObj.name;

class Person {
  _bloodType: string;

  constructor(bloodType: string) {
    this._bloodType = bloodType;
  }

  set bloodType(btype: string) {
    if (btype === "A" || btype === "B" || btype === "O" || btype === "AB") {
      this._bloodType = btype;
    }
  }

  get bloodType() {
    return `${this._bloodType} 형`;
  }
}

const p1 = new Person("B");

p1.bloodType;
p1.bloodType = "C";
