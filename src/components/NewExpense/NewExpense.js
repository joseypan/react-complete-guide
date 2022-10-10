import NewExpenseForm from "./NewExpenseForm";
import "./NewExpense.css";
import React, { useState } from "react";
import AddNewExpenseButton from "./AddNewExpenseButton";
const NewExpense = (props) => {
  const [formStatus, setFormStatus] = useState(false);
  const saveExpenseFormHandler = (expenseForm) => {
    const expenseData = {
      ...expenseForm,
      id: Math.random().toString(),
    };
    props.onNewExpense(expenseData);
    setFormStatus(false);
  };
  const cancelExpenseFormHandler = () => {
    setFormStatus(false);
  };
  const clickAddNewExpenseHandler = () => {
    setFormStatus(true);
  };
  return (
    <div className="new-expense">
      {!formStatus ? (
        <AddNewExpenseButton onClickButton={clickAddNewExpenseHandler} />
      ) : (
        <NewExpenseForm
          onSaveExpenseForm={saveExpenseFormHandler}
          onCancelExpenseForm={cancelExpenseFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
