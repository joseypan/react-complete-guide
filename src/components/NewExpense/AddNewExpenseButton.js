import React from "react";
const AddNewExpenseButton = (props) => {
  const clickAddNewExpense = () => {
    props.onClickButton();
  };
  return <button onClick={clickAddNewExpense}>Add New Expense</button>;
};
export default AddNewExpenseButton;
