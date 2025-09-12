import DailyCard from '../dailycard/dailycard'
import './daily.scss'

export default function Daily({week, tempMax, tempMin, weatherCodes,getWeatherIcon}){
    return(
        <section className='daily'>
            <h3>Daily forecast</h3>
            <div className='daily__gallery'>
                {week.time?.map((day, index) => (
                <DailyCard
                    key={day}
                    imageCard={getWeatherIcon(weatherCodes[index])}
                    tempMax={tempMax[index]}
                    tempMin={tempMin[index]}
                    date={day}
                />
                ))}
            </div>
        </section>
    )
}