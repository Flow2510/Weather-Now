import './dailycard.scss'

export default function DailyCard({ date, imageCard, tempMax, tempMin }) {
    return(
        <article className='daily-card'>
            <p className='daily-card__title'>{date}</p>
            <img className='daily-card__image' src={imageCard} alt="" />
            <div className='daily-card__temperature'>
                <span className='daily-card__temperature-result'>{tempMax}°</span>
                <span className='daily-card__temperature-result'>{tempMin}°</span>
            </div>
        </article>
    )
}