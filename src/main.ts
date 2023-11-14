// type;

const myName = "Hoang";
console.log(typeof myName);
const myAge: number = 20;
const isLoggin: boolean = true;
function sum(a: number, b: number): void {
  // return a + b;
  console.log(a + b);
}

const myInfor: {
  name: string;
  age: number;
} = {
  name: "Hoang",
  age: 20,
};

const myStudents: String[] = ["hoang", "dung", "chuc"];
const myStudents2: Array<string> = ["hoang", "dung", "chuc"];
const myTuple: [string, number] = ["hoang", 20];
let myUnion: string | number | boolean; // Dữ liệu kiểu liên hiệp
myUnion = "hoang";
myUnion = 20;
myUnion = true;

enum ROLE {
  USER,
  ADMIN = 0,
  MANAGER,
}

console.log(ROLE.MANAGER);

interface IProduct {
  name: string;
  price: number;
  desc: string;
  checkStatus?: void;
}

const product: IProduct = {
  name: "Iphone 15 pro max",
  price: 200,
  desc: "Mo ta san pham",
};

const products: Array<IProduct> = [
  {
    name: "Iphone 15 pro max",
    price: 200,
    desc: "Mo ta san pham",
  },
  {
    name: "Iphone 16 pro max",
    price: 400,
    desc: "Mo ta san pham",
  },
];

const products1: IProduct[] = [
  {
    name: "Iphone 15 pro max",
    price: 200,
    desc: "Mo ta san pham",
  },
  {
    name: "Iphone 16 pro max",
    price: 400,
    desc: "Mo ta san pham",
  },
];
