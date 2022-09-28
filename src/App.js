import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React, { useState } from "react";

const DUMMY_DATA = [
  {
    id: 1,
    title: "Car Insurance",
    amount: 296.67,
    date: new Date(2021, 4, 12),
  },
  {
    id: 2,
    title: "Car Insurance",
    amount: 296.67,
    date: new Date(2021, 5, 12),
  },
  {
    id: 3,
    title: "Car Insurance",
    amount: 296.67,
    date: new Date(2020, 9, 12),
  },
  {
    id: 4,
    title: "Car Insurance",
    amount: 296.67,
    date: new Date(2022, 1, 12),
  },
  {
    id: 5,
    title: "Car Insurance",
    amount: 296.67,
    date: new Date(2020, 2, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_DATA);
  const newExpenseHandler = (newExpense) => {
    setExpenses((prevData) => [newExpense, ...prevData]);
  };
  return (
    <div className="App">
      <NewExpense onNewExpense={newExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
