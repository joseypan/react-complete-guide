import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
function Expenses({ expenses }) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (year) => {
    setFilteredYear(year);
  };
  const filteredExpenses = expenses.filter((expense) => {
    const year = expense.date.getFullYear();
    return year == filteredYear;
  });
  return (
    <Card className="expenses">
      <ExpensesFilter
        filteredYear={filteredYear}
        onFilterChange={filterChangeHandler}
      />
      {filteredExpenses.map((item) => {
        return (
          <ExpenseItem
            key={item.id}
            title={item.title}
            date={item.date}
            amount={item.amount}
          />
        );
      })}
    </Card>
  );
}
export default Expenses;
