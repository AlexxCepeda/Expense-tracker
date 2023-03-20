import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from './ExpensesList'

import './Expenses.css';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2019');

    const yearSelected = selectedYear => setFilteredYear(selectedYear);

    const filteredExpenses = props.items.filter(expense => expense.date.getFullYear() === parseInt(filteredYear));
    return (
        <Card className="expenses">
            <ExpensesFilter selectedYear={filteredYear} onYearSelected={yearSelected} />
            <ExpensesList items={filteredExpenses} />
        </Card>
    )
}

export default Expenses;