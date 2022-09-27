import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
function Expenses({ expenses }) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (year) => {
    setFilteredYear(year);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
        filteredYear={filteredYear}
        onFilterChange={filterChangeHandler}
      />
      {expenses.map((item, index) => {
        return (
          <ExpenseItem
            key={index}
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
