import './expenseitem.css';

function ExpenseItem(){

    let date1 = new Date(2024, 0, 10); 
    let name = "Food";
    let price = 509;
    let LocationOfExpenditure = "Random-location"
    return (
        <div className="expense-item"> 
                   
            <div>{date1.toDateString()}</div>
            <div className="expense-item__description">
                <h2>{name}</h2>
                <h2>{LocationOfExpenditure}</h2>
                <div className="expense-item__price">Rs {price}</div>
            </div>
        </div>
    )
}

export default ExpenseItem