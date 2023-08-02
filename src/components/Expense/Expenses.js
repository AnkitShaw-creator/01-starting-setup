import Card from '../UI/Card'
import './Expenses.css'
import ExpensesFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import { useState } from "react";
import ExpenseChart from './ExpenseChart';


export default function Expenses(props) {
    
    const [filteredYear, setSelectedYear] = useState('2020');

    function filterChangeHandler(selectedYear){
        setSelectedYear(selectedYear);
    };
    
    const fiteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            <ExpenseChart expenses={fiteredExpenses} />
            <ExpenseList items={fiteredExpenses} />
            
            
        </Card>
    );

}