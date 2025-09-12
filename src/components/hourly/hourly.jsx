import HourlyItem from '../hourlyitem/hourlyitem'
import './hourly.scss'

export default function Hourly() {
    return(
        <section className='hourly'>
            <div className='hourly__header'>
                <h3>Hourly forecast</h3>
                <button>Day</button>
            </div>
        </section>
    )
}