import './expenseitem.css'
import React, { useState} from 'react';

function ExpenseForm(){
     
    let change = (e) =>{
       e.preventDefault();
       console.log(e.target.value);
    //    setTimeout(()=>{
    //     console.log(e)
    //    },1000)
    }

    return (
    <div className="Formdiv">
        <form className="myform">
            <label>Title : </label>
            <input type='text' className='mytitle' onChange={change}></input>
            <label>Amount : </label>
            <input type='number' className='myamount' onChange={change}></input>
            <label>Date : </label>
            <input type='date' className='mydate' onChange={change}></input>
            <input type="submit" value="Submit"/>
        </form>
    </div>

    )
}

export default ExpenseForm