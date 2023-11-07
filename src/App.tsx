import "./App.css";

const age: number = 30;
function greet(person: string): void {
  console.log(`Xin chao ${person}, anh nam nay ${age} co phai khong?`);
}

const myName = "hoangnm";
console.log(typeof myName);

// Ép kiểu:
const yourName = "Hoang";

yourName as string; // ép kiểu sử dụng as

function login(isLoggin: boolean) {
  if (isLoggin) {
    console.log("Da dang nhap thanh cong!");
  } else {
    console.log("Ban chua dang nhap!");
  }
}

function App() {
  return (
    <>
      <button onClick={() => greet("Hoang")}>An vao day</button>
      <button onClick={() => login(true)}>Login</button>
    </>
  );
}

export default App;
