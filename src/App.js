import "./App.css";
import data from "./data";

function App() {
  return (
    <div className="App">
      <input
        onChange={(e) => {
          alert(`The value of your selected option is ${e.target.value}`);
        }}
        list="data"
      />
      <datalist id="data">
        {" "}
        {data.map((ele) => (
          <option value={ele.name}>{ele.value}</option>
        ))}
      </datalist>
    </div>
  );
}

export default App;
