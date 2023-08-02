import './Chart.css'
import ChartBar from './ChartBar';
export default function Chart(props) {

    const datavalues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaxExpense = Math.max(...datavalues);
    
    return (
        <div className='chart'>
            {props.dataPoints.map(dataPoint => (
                <ChartBar
                    key = {dataPoint.label}
                    value={dataPoint.value}
                    label={dataPoint.label}
                    maxValue ={totalMaxExpense}
                />
            ))}
        </div>
        
    );
}