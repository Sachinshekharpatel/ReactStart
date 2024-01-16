import './expenseitem.css'
import React, { useState} from 'react';

function ExpenseForm(){
     const [title,setTitle] = useState('');
     const [amount,setAmount] = useState('');
     const [date,setDate] = useState('');


    let changetitle = (e) =>{
       e.preventDefault();
       setTitle(e.target.value);
    }
    
     
    let changeamount = (e) =>{
         e.preventDefault();
         setAmount(e.target.value);
    }

    
     
    let changedate = (e) =>{
         e.preventDefault();
         setDate(e.target.value);
    }

    return (
    <div className="Formdiv">
        <form className="myform">
            <label>Title : </label>
            <input type='text' className='mytitle' onChange={changetitle}></input>
            <label>Amount : </label>
            <input type='number' className='myamount' onChange={changeamount}></input>
            <label>Date : </label>
            <input type='date' className='mydate' onChange={changedate}></input>
            <input type="submit" value="Submit"/>
        </form>
    </div>

    )
}

export default ExpenseForm