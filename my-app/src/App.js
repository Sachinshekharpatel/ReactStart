import logo from './logo.svg';
import './App.css';

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
         <p>Food 10 Rs</p>
         <p>Petrol 100 Rs</p>
         <p>Movies 200 Rs</p>
      </header>
    </div>
  );
}

export default App;
