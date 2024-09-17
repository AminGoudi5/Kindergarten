import React from 'react'
import './blog.css'
import assets from '../../assets/assets'

const Blog = () => {
    return (
        <div className='blog-container' id='blog'>
            <p className="blog-title">آخرین نوشته ها</p>
            <p className="blog-titr">مطالب خواندنی وبلاگ</p>
            <div className="blog-carts">
                <div className="blog-carts-cart">
                    <img src={assets.blog1} alt="" />
                    <p className="blog-cart-title">احساس خجالت در کودکان</p>
                    <p className="blog-cart-text">خجالت در کودکان، احساسی است که با واکنش‌های فیزیکی مانند چهره‌ی قرمز و خم شدن سر، همراه می‌شود. این احساس ممکن است به دلیل ترس از تحلیل دیگران یا نگرانی از عملکرد در ...</p>
                    <p className="blog-cart-link">مطالعه مطلب &gt; </p>
                </div>
                <div className="blog-carts-cart">
                    <img src={assets.blog2} alt="" />
                    <p className="blog-cart-title">رفتار جلب توجه در کودکان</p>
                    <p className="blog-cart-text">جلب توجه در کودکان ممکن است با کمک رفتارهای هیجانی مانند عصبانیت یا برخوردهای نامتعارف انجام شود. همچنین، استفاده از موقعیت‌های خاص، خنده‌های پراکنده و تمثیل‌های جالب نیز ...</p>
                    <p className="blog-cart-link">مطالعه مطلب &gt;</p>
                </div>
                <div className="blog-carts-cart">
                    <img src={assets.blog3} alt="" />
                    <p className="blog-cart-title">خواص پرتقال و لیمو برای کودکان</p>
                    <p className="blog-cart-text">پرتقال و لیمو، علاوه بر ویتامین C، فیبر غذایی دارند که هضم بهتر و تنظیم قند خون را تسهیل می‌کند. همچنین، آنتی‌اکسیدان‌های موجود در آن‌ها به سلامت قلب و پایین آوردن التهاب‌ها کمک ...</p>
                    <p className="blog-cart-link">مطالعه مطلب &gt;</p>
                </div>


            </div>
        </div>
    )
}

export default Blog
