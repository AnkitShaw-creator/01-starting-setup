import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

export default function NewExpense(props) {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        console.log(enteredExpenseData);
        console.log(expenseData)
        props.onAddExpense(expenseData);
    };




    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    );
}