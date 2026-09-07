// AboutUsPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const AboutUsPage = () => {
    return (
        <div className="about-us-page">
            {/* 1. HERO SECTION (Về chúng tôi) */}
            <section className="hero-section hero-about-us">
                <div className="hero-content container">
                    <h1 className="hero-title">Vườn ươm Thừa Vân</h1>
                    <p className="hero-subtitle">Gần một thập kỷ gắn bó với dịch vụ cung cấp cây giống</p>
                </div>
            </section>

            <div className="section-divider"></div>
            <hr />
            <section className="cta-section section-padding text-center">
                <div className="container">
                    <h2 className="cta-title">Sẵn Sàng Bắt Đầu Dự Án Xanh Của Bạn?</h2>
                    <p className="cta-subtitle">Liên hệ với chúng tôi để nhận tư vấn và báo giá tốt nhất cho cây giống.</p>
                    <div className="cta-buttons">
                        <Link to="/lien-he" className="btn btn-primary btn-lg mx-2">
                            LIÊN HỆ NGAY
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUsPage;