import { useState } from 'react';
import logo from '../../assets/images/logo.svg'
import './header.scss';

export default function Header({changeUnit, imperialUnit}) {
    const [showMenu, setShowMenu] = useState(false);

    return(
        <header className='header'>
            <img className='header__logo' src={logo} alt="Weather now Logo" />
            <button className='header__button' type='button' onClick={() => setShowMenu(prev => !prev)}><i className="fa-solid fa-gear"></i>Units<i className="fa-solid fa-angle-down"></i></button>
            {showMenu && 
                <div className='menu__wrapper' onClick={() => setShowMenu(prev => !prev)}>
                    <div className='menu' onClick={(e) => e.stopPropagation()}>
                        <button type='button' className='menu__button' onClick={changeUnit}>Switch to {imperialUnit ? "Metric" : "Imperial"}</button>
                        <div className='menu__content'>
                            <span className='menu__content-title'>Temperature</span>
                            <p className={imperialUnit ? 'menu__content-item' : 'menu__content-item--active'}>Celsius (°C){!imperialUnit && <i className="fa-solid fa-check"></i>}</p>
                            <p className={imperialUnit ? 'menu__content-item--active' : 'menu__content-item'}>Fahrenheit (°F){imperialUnit && <i className="fa-solid fa-check"></i>}</p>
                        </div>
                        <div className='menu__content'>
                            <span className='menu__content-title'>Wind Speed</span>
                            <p className={imperialUnit ? 'menu__content-item' : 'menu__content-item--active'}>km/h{!imperialUnit && <i className="fa-solid fa-check"></i>}</p>
                            <p className={imperialUnit ? 'menu__content-item--active' : 'menu__content-item'}>mph{imperialUnit && <i className="fa-solid fa-check"></i>}</p>
                        </div>
                        <div className='menu__content'>
                            <span className='menu__content-title'>Precipitation</span>
                            <p className={imperialUnit ? 'menu__content-item' : 'menu__content-item--active'}>Millimeters (mm){!imperialUnit && <i className="fa-solid fa-check"></i>}</p>
                            <p className={imperialUnit ? 'menu__content-item--active' : 'menu__content-item'}>Inches (in){imperialUnit && <i className="fa-solid fa-check"></i>}</p>
                        </div>
                    </div>
                </div>
            }
        </header>
    )
}