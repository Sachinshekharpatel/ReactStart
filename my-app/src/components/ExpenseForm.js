import './expenseitem.css'
import React, { useState} from 'react';

function ExpenseForm(props){
     const [title,setTitle] = useState('');
     const [amount,setAmount] = useState('');
     const [date,setDate] = useState('');
     let [addbtn,setaddbtn] = useState(false) ;
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
   
    let Userdetail = (e) =>{
        e.preventDefault()
        let obj = {
            
            title : title,
            amount : amount ,
            date : new Date(date),
        };
        // let titlevalue  = document.querySelector('.mytitle').value;
        // let datevalue  = document.querySelector('.mydate').value;
        // let amountvalue  = document.querySelector('.myamount').value;
        
    //    console.log(props)
        props.onSaveExpenseData(obj) ;
       
        setDate('');
        setAmount('');
        setTitle('');

    }

   


  let formOpen =(e)=>{
    e.preventDefault();
     setaddbtn(true);
  }


    return (
    <div className="Formdiv">
        {!addbtn && (<button type='submit' onClick={formOpen}>Click to open expense Form</button>)}
        {addbtn ? (
            <form className="myform" onSubmit={Userdetail}>
                <label>Title : </label>
                <input type='text' value={title} className='mytitle' placeholder="Enter Title" onChange={changetitle}></input>
                <label>Amount : </label>
                <input type='number' value={amount} className='myamount' placeholder="Enter Amount" onChange={changeamount}></input>
                <label>Date : </label>
                <input type='date' value={date} className='mydate' min='2020-01-01' max='2024-01-15' onChange={changedate}></input>
                <button type="button" onClick={() => setaddbtn(false)}>Cancel</button>
                <input type="submit" value="Add Expense" />
            </form>
            ) : null}
        
    </div>

    )
}

export default ExpenseForm