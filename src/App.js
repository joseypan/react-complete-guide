import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    { title: "Car Insurance", amount: 296.67, date: new Date(2021, 2, 12) },
    { title: "Car Insurance", amount: 296.67, date: new Date(2021, 2, 12) },
    { title: "Car Insurance", amount: 296.67, date: new Date(2021, 2, 12) },
    { title: "Car Insurance", amount: 296.67, date: new Date(2021, 2, 12) },
    { title: "Car Insurance", amount: 296.67, date: new Date(2021, 2, 12) },
  ];
  const newExpenseHandler = (newExpense) => {
    console.log("newExpense in Appjs", newExpense);
  };
  return (
    <div className="App">
      <NewExpense onNewExpense={newExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
