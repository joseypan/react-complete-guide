import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
function Expenses({ expenses }) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (year) => {
    setFilteredYear(year);
  };
  const filteredExpenses = expenses.filter((expense) => {
    const year = expense.date.getFullYear();
    return year.toString() === filteredYear;
  });
  return (
    <Card className="expenses">
      <ExpensesFilter
        filteredYear={filteredYear}
        onFilterChange={filterChangeHandler}
      />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}
export default Expenses;
