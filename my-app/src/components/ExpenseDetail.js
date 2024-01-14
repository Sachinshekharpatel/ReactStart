import './ExpenseDate.css';

function ExpenseDetail(props){
    let title = props.title
    let amount =  props.amount;
    let location = props.location;
    return (
        <div className="expense-item__description">
          <h2>{title}</h2>
          <h2>{location}</h2>
          <h2 className='expense-item__price'>Rs {amount}</h2>
         
        </div>

    )
}

export default ExpenseDetail