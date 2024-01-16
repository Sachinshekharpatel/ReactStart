import './expenseitem.css'
import React, { useState} from 'react';

function ExpenseForm(){
     const [title,setTitle] = useState('');
     const [amount,setAmount] = useState('');
     const [date,setDate] = useState('');

    //   const [Input ,setInput] = useState({
    //     title : '',
    //     amount : '',
    //     dtae : ''
    //   })
    let changetitle = (e) =>{
       e.preventDefault();
       setTitle(e.target.value);
    //    setInput((previousdata)=>{
    //     return ({
    //         ...previousdata,
    //         title : e.target.value
    //     })
    //    })
    }
    
     
    let changeamount = (e) =>{
         e.preventDefault();
         setAmount(e.target.value);
        // setInput((previousdata)=>{
        //     return ({
        //         ...previousdata,
        //         amount : e.target.value
        //     })
        //    })
    }

    
     
    let changedate = (e) =>{
         e.preventDefault();
         setDate(e.target.value);
        // setInput((previousdata)=>{
        //     return ({
        //         ...previousdata,
        //         date : e.target.value
        //     })
        //    })
    }
    let obj = {
        title : "",
        amount : "",
        date : '',
    };
    let Userdetail = (e) =>{
        e.preventDefault()
        let titlevalue  = document.querySelector('.mytitle').value;
        let datevalue  = document.querySelector('.mydate').value;
        let amountvalue  = document.querySelector('.myamount').value;
        
        obj.title = titlevalue;
        obj.date = datevalue ;
        obj.amount = amountvalue ;
        console.log(obj)

    }

    return (
    <div className="Formdiv">
        <form className="myform">
            <label>Title : </label>
            <input type='text' className='mytitle' placeholder="Enter Title" onChange={changetitle}></input>
            <label>Amount : </label>
            <input type='number' className='myamount' placeholder="Enter Amount" onChange={changeamount}></input>
            <label>Date : </label>
            <input type='date' className='mydate' min='2000-01-01' max='2024-01-15' onChange={changedate}></input>
            <input type="submit" value="Submit" onClick={Userdetail}/>
        </form>
    </div>

    )
}

export default ExpenseForm