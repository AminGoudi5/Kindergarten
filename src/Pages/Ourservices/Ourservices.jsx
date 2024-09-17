import React from 'react'
import './Ourservices.css'
import assets from '../../assets/assets'


const Ourservices = () => {
    return (
        <div className='our-services-container' id='our-services'>
            <div className="our-services-img">
                <img src={assets.triangle} alt="" />
                <img src={assets.layer_3} alt="" />
            </div>
            <div className="our-services">
                <p className="our-services-title">برای مدیریت عالی</p>
                <p className="our-services-titr">اصول کاری مهد کودک چیست؟</p>
                <p className="our-services-text">آموزش یک پایه اساسی برای پیشرفت و توسعه هر فرد و جامعه است. اهمیت امر آموزش نه تنها به افزایش دانش و مهارت‌ها محدود نمی‌شود، بلکه تأثیرات گسترده‌تری بر جوانب مختلف زندگی دارد. امر آموزش ابزاری برای تجربه‌ی جهان، تفکر انتقادی، توسعه‌ی شخصیت و ایجاد تغییر در جامعه فراهم می‌کند.</p>
                <ul>
                    <li>آموزش و استعدادیابی</li>
                    <li>پرورش خلاقیت</li>
                    <li>تغذیه و بهداشت</li>
                    <li>بازی و سرگرمی</li>
                </ul>
            </div>

        </div>
    )
}

export default Ourservices
