import React from 'react'
import './Gallery.css'
import assets from '../../assets/assets'

const Gallery = () => {
    return (
        <div className='gallery-container'>
            <div className="gallery-sort">
                <p className="gallery-title">گالری تصاویر</p>
                <p className="gallery-sort-text " >کلاس ها</p>
                <p className="gallery-sort-text">غذاخوری</p>
                <p className="gallery-sort-text active">حیاط</p>
                <p className="gallery-sort-text">اتاق بازی</p>
                <p className="gallery-sort-text">اتاق استراحت</p>
            </div>
            <div className="gallery-img">
                <img src={assets.gallery1} alt="" />
                <img src={assets.gallery2} alt="" />
                <img src={assets.gallery3} alt="" />
                <img src={assets.gallery4} alt="" />
                <img src={assets.gallery5} alt="" />
                <img src={assets.gallery6} alt="" />
                
                
            </div>
        </div>
    )
}

export default Gallery
