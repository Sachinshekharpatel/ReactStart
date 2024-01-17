import React from "react";
import ExpenseForm from "./ExpenseForm";


let NewExpense = (props) =>{
   let onSaveExpenseDataHandler = (enteredExpenseData)=> {
             let expenseData = {
                ...enteredExpenseData,
                id : Math.random().toString(),
             }
            //  console.log(props)
             props.onaddexpense(expenseData)
   }

    return (
        <div>
            <ExpenseForm onSaveExpenseData = {onSaveExpenseDataHandler} ></ExpenseForm>
        </div>
        
        );
}

export default NewExpense