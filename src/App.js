import { useState } from 'react';
import Expenses from './components/Expense/Expenses'
import NewExpense from './components/NewExpense/NewExpense';

const Dummy_Expense = [
  {
    id: 'e1',
    title: 'Car Insurance',
    amount: 450,
    date: new Date(2019, 0, 1)
  },
  {
    id: 'e2',
    title: 'Travel',
    amount: 230,
    date: new Date(2019, 0, 1)
  },
  {
    id: 'e3',
    title: 'Education',
    amount: 230,
    date: new Date(2021, 0, 1)
  },
  {
    id: 'e4',
    title: 'Food',
    amount: 230,
    date: new Date(2019, 0, 1)
  }
]

function App() {
  
   const [ expenses , setExpense] = useState(Dummy_Expense);

  const ExpenseHandler = expense => {
    console.log(expense)
    setExpense(prevExpense => {
      return [
        expense,
        ...prevExpense,
      ]
    });
  };


  return (
    <div>
      <NewExpense onAddExpense={ExpenseHandler} />
      <Expenses items={expenses}/>
    </div>
    
  );
}

export default App;
