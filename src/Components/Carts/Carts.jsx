import React from 'react'
import './Carts.css'
import assets from '../../assets/assets'
const Carts = () => {
    return (
        <div className='carts-container'>
            <div className="carts-info">
                <div style={{ backgroundColor: "#f29f05" }}>
                    <img src={assets.abc} alt="" />
                </div>
                <p>آموزش زبان انگلیسی</p>
                <p>کودکان می توانند زبان دوم را در <br /> مهد کودک ما با شیوه‌های صحیص به <br /> راحتی زبان مادری یاد بگیرند.</p>
            </div>
            <div className="carts-info">
                <div style={{ backgroundColor: "#d93735" }}>
                    <img src={assets.balloon} alt="" />
                </div>
                <p>بازی و سرگرمی</p>
                <p>هر چه امکان پرداختن به بازیهای سالم و <br /> سازنده بیشتر باشد، فکر و ذهن و جسم <br /> بهتر پرورش می یابد.</p>

            </div>
            <div className="carts-info">
                <div style={{ backgroundColor: "#eee" }}>
                    <img src={assets.star} alt="" />
                </div>
                <p>آموزش و استعداد یابی</p>
                <p>کودک زیر ۷ سال را نباید به طور مستقیم <br /> آموزش داد و باید از روش‌های تخصصی <br /> کمک بگیریم.</p>

            </div>
            <div className="carts-info">
                <div style={{ backgroundColor: "#735ba5" }}>
                    <img src={assets.chess} alt="" />
                </div>
                <p>کلاس شطرنج</p>
                <p>آموزش شطرنج باعث افزایش تمرکز و دقت <br /> در کودکان میشود. کودک یاد میگیرد <br /> هرکاری را اول ارزیابی کند.</p>

            </div>

        </div>
    )
}

export default Carts
