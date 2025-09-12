import './hourlyitem.scss'

export default function HourlyItem(){
    return(
        <article>
            <img src={hourlyImage} alt="" />
            <p>{hour}</p>
            <p>{hourlyTemp}</p>
        </article>
    )
}