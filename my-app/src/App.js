import logo from './logo.svg';
import './App.css';
import NewExpense from './components/NewExpense';
import ExpenseItem from './components/expenseitem';
// import ExpenseForm from './components/ExpenseForm';
import React, {useState} from 'react';
let App = () => {

  const [expenses, setExpenses] = useState([
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
      location: "one",
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2022, 2, 2), location: "two", },
    
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
      location: "three",
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
      location: "four",
    },
    {
      id: 'e5',
      title: 'New Laptop',
      amount: 45009,
      date: new Date(2023, 9, 10),
      location: "Five",
    },
  ]);


    
 const addExpense = (expense) => {
   let y = [...expenses, expense]
    setExpenses(y);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with Sachin
        </a>
        <NewExpense  onaddexpense = {addExpense}></NewExpense>
        <h3>Expense Tracker</h3>
          
        {expenses.map((expense, index) => (
          <ExpenseItem title={expense.title} amount={expense.amount} location={expense.location} date={expense.date}/>
        ))}

      </header>
    </div>
  );
} 

export default App;
