import { useState } from 'react';
import './ExpenseForm.css'


export default function ExpenseForm(props) {

    const [newTitle, setNewTitle] = useState('');
    const [newAmount, setNewAmount] = useState('');
    const [newDate, setNewDate] = useState('');

    const titleChangedHandler = (event) => {
        setNewTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setNewAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setNewDate(event.target.value);
    };

    const formSubmitHandler = (event) => { 
        event.preventDefault();
        
        const expenseData = {
            title: newTitle,
            amount: +newAmount,
            date: new Date(newDate)
        };
        console.log(expenseData);
        props.onSaveExpenseData(expenseData);
        setNewTitle('');
        setNewAmount('');
        setNewDate('');
    };

    
    

    return (
        <form onSubmit={formSubmitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Expense Title</label>
                    <input type='text' value={newTitle} onChange={titleChangedHandler}/>
                    
                </div>
                <div className='new-expense__control'>
                    <label>Expense Amount</label>
                    <input type='number' min='0.00' value={newAmount} onChange={amountChangeHandler} />
                    
                </div>
                <div className='new-expense__control'>
                    <label>Expense Date</label>
                    <input type='date' min='2019-01-01' max='2022-12-31' value={newDate} onChange={dateChangeHandler}/>
                </div>
                
            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Add expense</button>
            </div>
        </form>
    );
}