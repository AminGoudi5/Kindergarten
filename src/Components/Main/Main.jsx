import { useState, useRef, useEffect } from 'react';
import './Main.css';
import assets from '../../assets/assets';
import Registration from '../Registration/Registration';
import { toast } from 'react-toastify';

const Main = () => {
    const [showSignup, setShowSignup] = useState(false);

    const popupRef = useRef(null);

    const handleFormSubmit = () => {
        setShowSignup(false);
        toast.success('اطلاعات شما با موفقیت ثبت شد. برای ادامه مراحل ثبت نام با شما تماس خواهیم گرفت.');
    };

    const handleSignupClick = () => {
        setShowSignup(true);
    };

    const handleClosePopup = () => {
        setShowSignup(false);
    };


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                handleClosePopup();
            }
        };

        if (showSignup) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showSignup]);

    return (
        <>
            <div className='main' id='main' style={showSignup ? { overflow: "auto" } : { overflow: "hidden" }}>
                <div className='main-info'>
                    <h1>ثبت نام پیش دبستانی <br /> سال تحصیلی 1402-1403 </h1>
                    <p>پیش دبستانی و مهد کودک ما با بهره مندی از امکانات و شیوه های روز دنیا در تهران <br /> آماده خدمت رسانی به فرزندان ایران زمین است</p>
                    <button onClick={handleSignupClick}>ثبت نام</button>
                </div>
                <div className="main-img">
                    <img src={assets.header_img} alt="" />
                </div>
            </div>
            {showSignup && (
                <div className="popup-overlay">
                    <div className="popup-content" ref={popupRef}>
                        <Registration onFormSubmit={handleFormSubmit} onClose={handleClosePopup} />
                    </div>
                </div>
            )}
        </>
    );
};

export default Main;
