// AboutUsPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
// Giả định bạn có AboutUsPage.css hoặc dùng chung HomePage.css/Global.css

// Dữ liệu giả định cho Đội ngũ
const teamMembers = [
    { name: "Nguyễn Văn A", title: "Giám đốc Vườn ươm", specialty: "Quản lý & Chiến lược", image: "/assets/images/team/team_a.jpg" },
    { name: "Trần Thị B", title: "Trưởng phòng Kỹ thuật", specialty: "Kỹ thuật nuôi cấy mô", image: "/assets/images/team/team_b.jpg" },
    { name: "Lê Văn C", title: "Chuyên viên Tư vấn", specialty: "Cây công trình & Cảnh quan", image: "/assets/images/team/team_c.jpg" },
];

const coreValues = [
    { icon: '🌱', title: 'Chất Lượng Cây Giống', description: 'Cây được ươm mầm từ nguồn giống sạch, đảm bảo sức sống và khả năng thích nghi cao.' },
    { icon: '🤝', title: 'Dịch Vụ Tận Tâm', description: 'Tư vấn chuyên sâu, hỗ trợ kỹ thuật trọn đời, giao hàng nhanh chóng.' },
    { icon: '🌍', title: 'Phát Triển Bền Vững', description: 'Áp dụng phương pháp canh tác thân thiện với môi trường, hướng đến giá trị xanh lâu dài.' },
];

const AboutUsPage = () => {
    return (
        <div className="about-us-page">
            
            {/* 1. HERO SECTION (Về chúng tôi) */}
            <section className="hero-section hero-about-us">
                <div className="hero-content container">
                    <h1 className="hero-title">Câu Chuyện Của Vườn ươm Thừa Vân</h1>
                    <p className="hero-subtitle">Hơn một thập kỷ gắn bó với cây xanh và mang lại không gian sống trong lành.</p>
                </div>
            </section>

            <div className="section-divider"></div> 
            
            {/* 2. CÂU CHUYỆN & SỨ MỆNH */}
            <section className="story-mission-section section-padding">
                <div className="container story-inner">
                    <div className="story-image-wrapper">
                        {/* Thay bằng hình ảnh đẹp về vườn ươm hoặc cây trồng */}
                        <img src="/assets/images/about/story_thua_van.jpg" alt="Câu chuyện Vườn ươm" className="story-image" /> 
                    </div>
                    <div className="story-content">
                        <h2 className="section-heading">Sứ Mệnh Của Chúng Tôi</h2>
                        <p>Khởi nguồn từ niềm đam mê cây trồng và khao khát phủ xanh Việt Nam, **Vườn ươm Thừa Vân** ra đời với sứ mệnh cung cấp nguồn cây giống chất lượng, đa dạng chủng loại, là đối tác tin cậy cho mọi dự án nông nghiệp, cảnh quan và trồng rừng.</p>
                        
                        <h3 className="section-sub-heading">Tầm Nhìn</h3>
                        <p>Trở thành vườn ươm hàng đầu tại miền Trung, được công nhận về uy tín, chất lượng và sự đóng góp tích cực vào việc bảo tồn và phát triển tài nguyên cây xanh.</p>
                    </div>
                </div>
            </section>
            
            <hr/>

            {/* 3. GIÁ TRỊ CỐT LÕI */}
            <section className="values-section section-padding section-bg-light">
                <div className="container">
                    <h2 className="section-heading text-center">Giá Trị Cốt Lõi</h2>
                    <div className="values-list">
                        {coreValues.map((value, index) => (
                            <div key={index} className="value-card">
                                <span className="value-icon">{value.icon}</span>
                                <h3>{value.title}</h3>
                                <p>{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <hr/>

            {/* 4. ĐỘI NGŨ */}
            <section className="team-section section-padding">
                <div className="container">
                    <h2 className="section-heading text-center">Gặp Gỡ Đội Ngũ Chuyên Gia</h2>
                    <div className="team-list">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="team-member-card">
                                {/*  */}
                                <img src={member.image} alt={member.name} className="team-member-image" />
                                <h3 className="member-name">{member.name}</h3>
                                <p className="member-title">{member.title}</p>
                                <p className="member-specialty">{member.specialty}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            <hr/>

            {/* 5. KÊU GỌI HÀNH ĐỘNG (CTA) */}
            <section className="cta-section section-padding text-center">
                <div className="container">
                    <h2 className="cta-title">Sẵn Sàng Bắt Đầu Dự Án Xanh Của Bạn?</h2>
                    <p className="cta-subtitle">Liên hệ với chúng tôi để nhận tư vấn miễn phí và báo giá tốt nhất cho cây giống.</p>
                    <div className="cta-buttons">
                        <Link to="/lien-he" className="btn btn-primary btn-lg mx-2">
                            LIÊN HỆ NGAY
                        </Link>
                        <Link to="/cay-giong" className="btn btn-secondary-outline btn-lg mx-2">
                            XEM DANH MỤC CÂY
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUsPage;