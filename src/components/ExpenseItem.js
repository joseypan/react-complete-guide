import "./ExpenseItem.css";
function ExpenseItem({ date, amount, title }) {
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.toLocaleString("en-US", { month: "2-digit" });
  const year = date.getFullYear();
  return (
    <div className="expense-item">
      {/* 这里使用日期对象居然会报错？？？不是很理解 (jsx中变量不能是对象，会直接报错）*/}
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
