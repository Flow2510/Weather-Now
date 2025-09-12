import { useRef } from 'react';
import './intro.scss';

export default function Intro({setSearch}){
    const inputRef = useRef(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        const inputValue = inputRef.current.value;
        setSearch(inputValue);
    };
    
    return(
        <section className='intro'>
            <h1 className='intro__title'>How's the sky looking today?</h1>
            <form className='intro__form' onSubmit={handleSubmit}>
                <div className='intro__form-input-wrapper'>
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input ref={inputRef} className='intro__form-input' type="text" placeholder='Search for a place...'/>
                </div>
                <button className='intro__form-button' type='submit'>Search</button>
            </form>
        </section>
    )
}