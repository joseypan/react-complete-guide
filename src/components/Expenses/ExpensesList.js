import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";
import React from "react";
const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <p className="expenses-list__fallback">Not Found Expenses</p>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map((item) => {
        return (
          <ExpenseItem
            key={item.id}
            title={item.title}
            date={item.date}
            amount={item.amount}
          />
        );
      })}
    </ul>
  );
};
export default ExpensesList;
