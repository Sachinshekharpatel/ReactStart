import './ExpenseDate.css';

let ExpenseDetail = (props) =>{
    let title = props.title
    let amount =  props.amount;
    let location = props.location;
    let deletebtnhandler = (e) => {
           console.log("Deleted")
          //  let parent = e.target.closest('.expense-item__description');
           let parent = e.target.parentNode;
           let parentElement = parent.parentNode;
           let main = parentElement.parentNode;
           main.removeChild(parentElement);
    }

    return (
        <div className="expense-item__description">
          <h2>{title}</h2>
          <h2>{location}</h2>
          <h2 className='expense-item__price'>Rs {amount}</h2>
          <button onClick={deletebtnhandler}>Delete Button</button>
        </div>

    )
}

export default ExpenseDetail