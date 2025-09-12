import { useEffect, useState } from 'react'
import './preview.scss'

export default function Preview({town, country, meteoImage, meteoAlt, temperature}) {
    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        const date= new Date();
        const options = {weekday: "long", year: "numeric", month: "short", day: "numeric" };
        const formattedDate = date.toLocaleDateString("en-us", options);
        setCurrentDate(formattedDate);
    }, [])

    return(
        <section className='preview'>
            <img className='preview__background' src="/public/images/bg-today-small.svg" alt="" />
            <h2 className='preview__title'>{town}, {country}</h2>
            <span className='preview__subtitle'>{currentDate}</span>
            <div className='preview__content'>
                <img className='preview__content-image' src={meteoImage} alt={meteoAlt} />
                <span className='preview__content-result'>{temperature}°</span>
            </div>
        </section>
    )
}