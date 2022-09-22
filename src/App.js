import "./App.css";
import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    { title: "Car Insurance", amount: 296.67, date: new Date(2021, 2, 12) },
    { title: "Car Insurance", amount: 296.67, date: new Date(2021, 2, 12) },
    { title: "Car Insurance", amount: 296.67, date: new Date(2021, 2, 12) },
    { title: "Car Insurance", amount: 296.67, date: new Date(2021, 2, 12) },
    { title: "Car Insurance", amount: 296.67, date: new Date(2021, 2, 12) },
  ];
  return (
    <div className="App">
      <h2>Let's get started!</h2>
      <p>This is also visible!</p>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
