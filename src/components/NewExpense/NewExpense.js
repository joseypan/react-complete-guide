import NewExpenseForm from "./NewExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseFormHandler = (expenseForm) => {
    const expenseData = {
      ...expenseForm,
      id: Math.random().toString(),
    };
    props.onNewExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <NewExpenseForm onSaveExpenseForm={saveExpenseFormHandler} />
    </div>
  );
};

export default NewExpense;
