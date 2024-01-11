import logo from './logo.svg';
import './App.css';

import ExpenseItem from './components/expenseitem';

function App() {
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
        <h3>Expense Tracker</h3>

        <ExpenseItem></ExpenseItem>
      </header>
    </div>
  );
}

export default App;
