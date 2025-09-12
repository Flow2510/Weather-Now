import DailyCard from '../dailycard/dailycard'
import './daily.scss'

export default function Daily({week, tempMax, tempMin, weatherCodes,getWeatherIcon}){
    return(
        <section className='daily'>
            <h3>Daily forecast</h3>
            <div className='daily__gallery'>
                {week.time?.map((day, index) => {
                const dayName = new Date(day).toLocaleDateString("en-US", {
                    weekday: "short",
                });

                return (
                    <DailyCard
                    key={day}
                    imageCard={getWeatherIcon(weatherCodes[index])}
                    tempMax={Math.floor(tempMax[index])}
                    tempMin={Math.floor(tempMin[index])}
                    date={dayName}
                    />
                );
                })}
            </div>
        </section>
    )
}