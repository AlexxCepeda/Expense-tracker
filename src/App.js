import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense';

// const DUMMY_EXPENSES = [
//   {
//     id: 1, title: 'StepperMotor', amount: 219.22, date: new Date(2023, 11, 5)
//   }, {
//     id: 2, title: 'Threaded inserts', amount: 214.23, date: new Date(2021, 5, 12)
//   }, {
//     id: 3, title: 'Screws and nuts', amount: 121.32, date: new Date(2022, 8, 16)
//   }]
function App() {

  const [expenses, setExpenses] = useState([]);

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => [expense, ...prevExpenses])
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
