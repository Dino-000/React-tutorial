import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

export default function Expenses(props) {
  const expense_list = props.list.map((expenses) => {
    return (
      <ExpenseItem
        title={expenses.title}
        amount={expenses.amount}
        date={expenses.date}
      />
    );
  });

  return <Card className="expenses">{expense_list}</Card>;
}
