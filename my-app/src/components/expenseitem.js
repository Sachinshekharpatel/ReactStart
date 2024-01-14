import './expenseitem.css';

function ExpenseItem(props){

    // let date1 = new Date(2024, 0, 10); 
    // let name = "Food";
    // let price = 509;
    // let LocationOfExpenditure = "Random-location"
    return (
        <div className="expense-item"> 
                 {/* {props.date.toDateString()}   */}
            <div>{props.date.toDateString()}</div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <h2>{props.location}</h2>
                <div className="expense-item__price">Rs {props.amount}</div>
            </div>
        </div>
    )
}

export default ExpenseItem