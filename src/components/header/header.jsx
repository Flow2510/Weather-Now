import { useState } from 'react';
import './header.scss';

export default function Header({changeTemperature, changeWind, changePrecipitation}) {
    const [showMenu, setShowMenu] = useState(false);

    return(
        <header className='header'>
            <img className='header__logo' src="/images/logo.svg" alt="Weather now Logo" />
            <button className='header__button' type='button' onClick={() => setShowMenu(prev => !prev)}><i className="fa-solid fa-gear"></i>Units<i className="fa-solid fa-angle-down"></i></button>
            {showMenu && 
                <div className='menu'>
                    <button type='button'>Switch to UNITS</button>
                    <fieldset className='menu__fieldset'>
                        <legend>Temperature</legend>    
                        <label className='menu__label'>
                            <p>celsius (°C)</p>
                            <input type="radio" name='temperature' value="celsius" onChange={(e) => changeTemperature(e.target.value)}/>
                        </label>
                        <label className='menu__label'>
                            <p>Fahrenheit (°F)</p>
                            <input type="radio" name='temperature' value="fahrenheit" onChange={(e) => changeTemperature(e.target.value)}/>                            
                        </label>
                    </fieldset> 
                    <fieldset className='menu__fieldset'>
                        <legend>Wind Speed</legend>    
                        <label className='menu__label'>
                            <p>km/h</p>
                            <input type="radio" name='wind' value="meter" onChange={(e) => changeWind(e.target.value)}/>                            
                        </label>
                        <label className='menu__label'>
                            <p>mph</p>
                            <input type="radio" name='wind' value="miles" onChange={(e) => changeWind(e.target.value)}/>                            
                        </label>
                    </fieldset>   
                    <fieldset className='menu__fieldset'>
                        <legend>Precipitation</legend>    
                        <label className='menu__label'>
                            <p>Millimeters (mm)</p>
                            <input type="radio" name='precipitation' value="millimeter" onChange={(e) => changePrecipitation(e.target.value)}/>                            
                        </label>
                        <label className='menu__label'>
                            <p>Inches (in)</p>
                            <input type="radio" name='precipitation' value="inche" onChange={(e) => changePrecipitation(e.target.value)}/>                      
                        </label>
                    </fieldset> 
                </div>
            }
        </header>
    )
}