import React from 'react'
import './Footer.css'
import assets from '../../assets/assets'

const Footer = () => {
    return (
        <div className='footer' >
            <div className="footer-img"><img src={assets.footer} alt="" /></div>
            <div className="footer-container" id='footer'>
                <div className="about-us" id='about-us'>
                    <p className="about-us-title">درباره مهد ما</p>
                    <p className="about-us-text">مهد کودک ما یک محیط آموزشی پویا و مهربان برای کودکان فراهم می‌کند. ما با تیمی متخصص و مهربان به ارتقاء توانایی‌های اجتماعی، انگیزشی و تحصیلی کودکان می‌پردازیم. هچنین بازی‌های آموزشی، هنر و تفریحات سازنده را به کودکان ارائه می‌دهیم.</p>
                </div>
                <div className="footer-gallery">
                    <p className="footer-gallery-title">گالری تصاویر</p>
                    <div className="footer-gallery-img">
                        <img src={assets.gallery1} alt="" />
                        <img src={assets.gallery2} alt="" />
                        <img src={assets.gallery3} alt="" />
                        <img src={assets.gallery4} alt="" />
                        <img src={assets.gallery5} alt="" />
                        <img src={assets.gallery6} alt="" />
                        <img src={assets.gallery1} alt="" />
                        <img src={assets.gallery2} alt="" />
                    </div>
                </div>
                <div className="footer-conect-us">
                    <p className="footer-conect-us-title">تماس با ما</p>
                    <div className="footer-conect-us-address">
                        <div className="footer-conect-us-info">
                            <img className="footer-icon" src={assets.instagram_icon} alt="" />
                            <p style={{direction:"ltr"}}>@Kindergarten</p>
                        </div>
                        <div className="footer-conect-us-info">
                            <img className="footer-icon" src={assets.phone_icon} alt="" />
                            <p>02122000000 - 09128888888</p>
                        </div>
                        <div className="footer-conect-us-info">
                            <img className="footer-icon" src={assets.address_icon} alt="" />
                            <p>تهران، دروس، خیابان رشت، کوچه گل‌بو، پلاک 16</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
