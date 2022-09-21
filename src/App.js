import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

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
      {expenses.map((item, index) => {
        return (
          <ExpenseItem
            key={index}
            title={item.title}
            date={item.date}
            amount={item.amount}
          ></ExpenseItem>
        );
      })}
    </div>
  );
}

export default App;
