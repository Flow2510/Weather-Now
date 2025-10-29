import { useState } from 'react'
import './hourly.scss'

export default function Hourly({weatherCode, getWeatherIcon, hourlyTemp, hourlyTime}) {
    const [day, setDay] = useState(0)

    return(
        <section className='hourly'>
            <div className='hourly__header'>
                <h3>Hourly forecast</h3>
                <select name="" id="" onChange={(e) => setDay(Number(e.target.value))} className='hourly__select'>
                    <option value="0" className='hourly__select-option'>
                        {new Date(hourlyTime[0] + ':00Z').toLocaleDateString('en-US', {
                            timeZone: 'Europe/Paris',
                            weekday: 'long'
                        })}
                    </option>
                    <option value="24" className='hourly__select-option'>
                        {new Date(hourlyTime[24] + ':00Z').toLocaleDateString('en-US', {
                            timeZone: 'Europe/Paris',
                            weekday: 'long'
                        })}
                    </option>
                    <option value="48" className='hourly__select-option'>
                        {new Date(hourlyTime[48] + ':00Z').toLocaleDateString('en-US', {
                            timeZone: 'Europe/Paris',
                            weekday: 'long'
                        })}
                    </option>
                    <option value="72" className='hourly__select-option'>
                        {new Date(hourlyTime[72] + ':00Z').toLocaleDateString('en-US', {
                            timeZone: 'Europe/Paris',
                            weekday: 'long'
                        })}
                    </option>
                    <option value="96" className='hourly__select-option'>
                        {new Date(hourlyTime[96] + ':00Z').toLocaleDateString('en-US', {
                            timeZone: 'Europe/Paris',
                            weekday: 'long'
                        })}
                    </option>
                    <option value="120" className='hourly__select-option'>
                        {new Date(hourlyTime[120] + ':00Z').toLocaleDateString('en-US', {
                            timeZone: 'Europe/Paris',
                            weekday: 'long'
                        })}
                    </option>
                    <option value="144" className='hourly__select-option'>
                        {new Date(hourlyTime[144] + ':00Z').toLocaleDateString('en-US', {
                            timeZone: 'Europe/Paris',
                            weekday: 'long'
                        })}
                    </option>
                </select>
            </div>
            <div className='hourly__list'>
                {hourlyTime.slice(day, day + 8).map((id, index) => {
                    const code = weatherCode?.[index + day] || 0;
                    const hourlyImage = getWeatherIcon(code);

                    return (
                        <article key={id} className='hourly__article'>
                            <img className='hourly__article-image' src={hourlyImage} alt="" />
                            <div className='hourly__article-content'>
                                <p className='hourly__article-time'>
                                    {new Date(hourlyTime[index + day] + ':00Z').toLocaleTimeString('en-US', {
                                        timeZone: 'Europe/Paris',
                                        hour: 'numeric',
                                        hour12: true,
                                    })}
                                </p>
                                <p className='hourly__article-temp'>{hourlyTemp[index + day].toFixed(0)}°</p>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    )
}