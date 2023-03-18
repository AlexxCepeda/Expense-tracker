import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import './Expenses.css';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2019');

    const yearSelected = selectedYear => {
        console.log("In expenses.js");
        console.log(selectedYear);
        setFilteredYear(selectedYear);
    }
    return (
        <Card className="expenses">
            <ExpensesFilter selectedYear={filteredYear} onYearSelected={yearSelected} />
            <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date} />
            <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date} />
            <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date} />
        </Card>
    )
}

export default Expenses;