import React from 'react'
import './Registration.css'
import { useState } from 'react';
import assets from '../../assets/assets';
const Registration = ({ onFormSubmit, onClose } ) => {
    const [formData, setFormData] = useState({
        childFirstName: '',
        childLastName: '',
        fatherName: '',
        birthDate: '',
        gender: '',
        homePhone: '',
        mobilePhone: '',
        address: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onFormSubmit();
        console.log(formData);
    };
    
    return (
        <div className="signup-container">
            
                        
            <form onSubmit={handleSubmit} className="signup-form">
            <img src={assets.close_icon} className="close-btn" onClick={onClose} />
                <h2 className="signup-title">ثبت نام مهد کودک ما</h2>
                
                <div className="form-group">
                    <div className='form-group-info'>
                        <label htmlFor="childFirstName">نام کودک</label>
                        <input
                            type="text"
                            id="childFirstName"
                            name="childFirstName"
                            value={formData.childFirstName}
                            onChange={handleChange}
                            placeholder="نام کودک را وارد کنید"
                            required
                        />
                    </div>
                    <div className='form-group-info'>
                        <label htmlFor="childLastName">نام خانوادگی کودک</label>
                        <input
                            type="text"
                            id="childLastName"
                            name="childLastName"
                            value={formData.childLastName}
                            onChange={handleChange}
                            placeholder="نام خانوادگی کودک را وارد کنید"
                            required
                        />
                    </div>
                </div>



                <div className="form-group">
                    <div>
                        <label htmlFor="fatherName">نام پدر</label>
                        <input
                            type="text"
                            id="fatherName"
                            name="fatherName"
                            value={formData.fatherName}
                            onChange={handleChange}
                            placeholder="نام پدر را وارد کنید"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="birthDate">تاریخ تولد</label>
                        <input
                            type="date"
                            id="birthDate"
                            name="birthDate"
                            value={formData.birthDate}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>جنسیت</label>
                        <select name="gender" value={formData.gender} onChange={handleChange}>
                            <option value="">انتخاب کنید</option>
                            <option value="male">پسر</option>
                            <option value="female">دختر</option>
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <div className='form-group-info'>
                        <label htmlFor="homePhone">تلفن ثابت</label>
                        <input
                            type="tel"
                            id="homePhone"
                            name="homePhone"
                            value={formData.homePhone}
                            onChange={handleChange}
                            placeholder="تلفن ثابت را وارد کنید"

                        />
                    </div>
                    <div className='form-group-info'>
                        <label htmlFor="mobilePhone">تلفن همراه</label>
                        <input
                            type="tel"
                            id="mobilePhone"
                            name="mobilePhone"
                            value={formData.mobilePhone}
                            onChange={handleChange}
                            placeholder="تلفن همراه را وارد کنید"
                            required
                        />
                    </div>
                </div>



                <div >
                    <label htmlFor="address">آدرس محل سکونت</label>
                    <textarea
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="آدرس خود را وارد کنید"
                    ></textarea>
                </div>

                <button type="submit" className="submit-button">ثبت نام</button>
            </form>
        </div>
    );
}

export default Registration;

