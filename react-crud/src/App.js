import "./App.css";

function clickMe() {
  console.log("Hello!");
}

function Button() {
  return (
    <button
      className={"btn"}
      style={{ backgroundColor: "red" }}
      onClick={() => clickMe()}
    >
      Bam vao day!
    </button>
  );
}

const products = [
  { id: "1", name: "san pham A", price: 200 },
  { id: "2", name: "san pham B", price: 200 },
  { id: "3", name: "san pham C", price: 200 },
];

function App() {
  return (
    <div className="App">
      <h1>React CRUD</h1>

      <Button />
      <ul>
        {products.map((item) => (
          <li key={item.id}>
            {item.name} - {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
