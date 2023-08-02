import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card'
import './Expenses.css'
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";


export default function Expenses(props) {
    
    const [filteredYear, setSelectedYear] = useState('2020');

    function filterChangeHandler(selectedYear){
        setSelectedYear(selectedYear);
    };
    

    return (
        <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            
            {props.length === 0 ? <p> No expense was found</p>:
                props.items.map(expense => <ExpenseItem
                    title={expense.title}
                    date={expense.date}
                    amount={expense.amount}
                />)
            }
            
        </Card>
    );

}