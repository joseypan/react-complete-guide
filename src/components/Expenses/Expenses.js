import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
function Expenses({ expenses }) {
  return (
    <Card className="expenses">
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
