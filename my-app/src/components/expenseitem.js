import './expenseitem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetail from './ExpenseDetail';

function ExpenseItem(props){

    // let date1 = new Date(2024, 0, 10); 
    // let name = "Food";
    // let price = 509;
    // let LocationOfExpenditure = "Random-location"
    return (
        <div className='expense-item'>
        
        <ExpenseDate date ={props.date} />
        
        <ExpenseDetail amount={props.amount}  location={props.location}   title={props.title} />
        
        </div>
        
        
        )
}

export default ExpenseItem