import './ExpenseDate.css';
import React, {useState} from 'react';

let ExpenseDetail = (props) =>{
    let title = props.title ;
    let [expense,setExpense] = useState(props.amount)
    let amount =  props.amount;
    let location = props.location;

    let deletebtnhandler = (e) => {
           console.log("Deleted")
          //  title = "updated";
          // console.log(title)
         
           let parent = e.target.parentNode;
           let parentElement = parent.parentNode;
           let main = parentElement.parentNode;
           main.removeChild(parentElement);
    }
    
    let expenseUpdated = () => {
      setExpense('100.00');
      // console.log(expense)
    }

    return (
        <div className="expense-item__description">
          <h2>{title}</h2>
          <h2>{location}</h2>
          <h2 className='expense-item__price'>Rs {expense}</h2>
          <button onClick={deletebtnhandler}>Delete Button</button>
          <button onClick={expenseUpdated}>Expense Updated</button>
        </div>

    )
}

export default ExpenseDetail