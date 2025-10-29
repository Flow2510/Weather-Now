import "./previewgallery.scss"

export default function PreviewGallery({tempFeel, humidity, wind, precipitation, imperialUnit}){
    return(
        <div className='preview-gallery'>
            <article className='preview-gallery__card'>
                <p className='preview-gallery__card-title'>Feels Like</p>
                <span className='preview-gallery__card-result'>{tempFeel}°</span>
            </article>
            <article className='preview-gallery__card'>
                <p className='preview-gallery__card-title'>Humidity</p>
                <span className='preview-gallery__card-result'>{humidity} %</span>
            </article>
            <article className='preview-gallery__card'>
                <p className='preview-gallery__card-title'>Wind</p>
                <span className='preview-gallery__card-result'>{wind} {imperialUnit? "mph" : "km/h"}</span>
            </article>
            <article className='preview-gallery__card'>
                <p className='preview-gallery__card-title'>Precipitation</p>
                <span className='preview-gallery__card-result'>{precipitation} {imperialUnit? "in" : "mm"}</span>
            </article>
        </div>
    )
}