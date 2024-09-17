import { useState ,React} from 'react'
import './Header.css'
import assets from '../../assets/assets'



const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const onClickHandler = () => {
        setIsMenuOpen(!isMenuOpen);
    }


    return (
        <div className='header'>
            <p className="title">مهد کودک ما</p>
            <div className="hamber-icon" onClick={onClickHandler}>
                <img src={isMenuOpen ? assets.close_icon : assets.hamber_icon} alt="" />
            </div>
            <div className={`navbar ${isMenuOpen ? 'open' : ''}`}>
                <ul>
                    <a href='#main'>خانه</a>
                    <a href='#blog'>مقالات</a>
                    <a href='#about-us'>درباره ما</a>
                    <a href='#our-services'>خدمات ما</a>
                    <a href='#footer'>تماس با ما</a>
                </ul>

            </div>
            <div className="search-icon">
                <img src={assets.search_icon} alt="" />
            </div>
        </div>
    )
}



export default Header
