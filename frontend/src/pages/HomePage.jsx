import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

// Dữ liệu giả định: ĐÃ BỔ SUNG THÊM CÂY
const allProducts = [
  // --- CÂY ĂN QUẢ ---
  { id: 1, name: "Cây Sa Pô Chê", category: "Cây ăn quả", price: "3Giá sỉ", image: "assets/images/products/product_sapoche.jpg" },
  { id: 5, name: "Ổi Ruby", category: "Cây ăn quả", price: "Giá sỉ", image: "assets/images/products/product_oi.jpg" },
  { id: 9, name: "Cây Xoài Cát Hòa Lộc", category: "Cây ăn quả", price: "Giá sỉ", image: "assets/images/products/product_xoai.jpg" },
  { id: 10, name: "Cây Mít Tố Nữ", category: "Cây ăn quả", price: "Giá sỉ", image: "assets/images/products/product_mit.jpg" },

  // --- CÂY CẢNH ---
  { id: 2, name: "Cây Vạn Tuế", category: "Cây cảnh", price: "Giá sỉ", image: "assets/images/products/product_vantu.jpg" },
  { id: 4, name: "Cây Cọ Mỹ", category: "Cây cảnh", price: "Giá sỉ", image: "assets/images/products/product_comy.jpg" },
  { id: 11, name: "Cây Kim Tiền", category: "Cây cảnh", price: "Giá sỉ", image: "assets/images/products/product_kimtien.jpg" },
  { id: 12, name: "Cây Lưỡi Hổ", category: "Cây cảnh", price: "Giá sỉ", image: "assets/images/products/product_luoiho.jpg" },

  // --- CÂY CÔNG TRÌNH ---
  { id: 3, name: "Cây Dầu", category: "Cây công trình", price: "Giá liên hệ", image: "assets/images/products/product_dau.jpg" },
  { id: 6, name: "Bàng Đài Loan", category: "Cây công trình", price: "Giá liên hệ", image: "assets/images/products/product_bang.jpg" },
  { id: 13, name: "Cây Phượng Vĩ", category: "Cây công trình", price: "Giá liên hệ", image: "assets/images/products/product_phuongvi.jpg" },
  { id: 14, name: "Cây Sà Cừ", category: "Cây công trình", price: "Giá liên hệ", image: "assets/images/products/product_sacu.jpg" },

  // --- CÂY TRỒNG RỪNG ---
  { id: 7, name: "Cây Keo Lai", category: "Cây trồng rừng", price: "Giá sỉ", image: "assets/images/products/product_keo_lai.jpg" },
  { id: 8, name: "Cây Keo Lá Tràm", category: "Cây trồng rừng", price: "Giá sỉ", image: "assets/images/products/product_keo_tram.jpg" },
  { id: 15, name: "Cây Bạch Đàn", category: "Cây trồng rừng", price: "Giá sỉ", image: "assets/images/products/product_bachdan.jpg" },
  { id: 16, name: "Cây Thông", category: "Cây trồng rừng", price: "Giá sỉ", image: "assets/images/products/product_thong.jpg" },
];

const services = [
  { icon: '🌿', title: "Thiết Kế Cảnh Quan", description: "Tạo nên không gian xanh ấn tượng cho dự án của bạn.", link: "/dich-vu/thiet-ke" },
  { icon: '💚', title: "Chăm Sóc Cây", description: "Dịch vụ bảo dưỡng và chăm sóc cây chuyên nghiệp.", link: "/dich-vu/cham-soc" },
  { icon: '💡', title: "Tư Vấn Trồng Trọt", description: "Hỗ trợ kỹ thuật từ A-Z cho mọi loại cây trồng.", link: "/dich-vu/tu-van" },
];

// --- CẬP NHẬT THỨ TỰ TAB: "Cây trồng rừng" lên đầu tiên ---
const tabCategories = ["Cây trồng rừng", "Cây ăn quả", "Cây cảnh", "Cây công trình"];

const HomePage = () => {
  // Mặc định, activeTab sẽ là "Cây trồng rừng"
  const [activeTab, setActiveTab] = useState(tabCategories[0]);

  // 1. Dùng useState để lưu trữ tin tức được tải về
  const [news, setNews] = useState([]);
  // 2. Dùng useState để quản lý trạng thái tải (loading) và lỗi (error)
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  // 3. Dùng useEffect để tải dữ liệu khi component được mount (tải lần đầu)
  useEffect(() => {
    const fetchNews = async () => {
      try {
        // Thay thế URL này bằng API endpoint thực tế của bạn
        const response = await fetch('https://api.yourwebsite.com/news/latest?limit=3');

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // Giả định API trả về một mảng các đối tượng tin tức
        setNews(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNews();
  }, []); // Mảng rỗng đảm bảo hook chỉ chạy một lần sau khi render ban đầu.
  const handleTabClick = (category) => {
    setActiveTab(category);
  };

  // Lọc sản phẩm theo tab đang hoạt động và giới hạn 4 sản phẩm
  const filteredProducts = allProducts.filter(product => product.category === activeTab);
  const displayProducts = filteredProducts.slice(0, 4);

  return (
    <div className="homepage">

      {/* 1. HERO SECTION */}
      <section className="hero-section">
        <div className="hero-content container">
          <h1 className="hero-title">Vườn ươm Thừa Vân – Nâng tầm không gian xanh của bạn</h1>
          <p className="hero-subtitle">Cung cấp cây giống chất lượng, đa dạng chủng loại, dịch vụ tận tâm.</p>
          <Link to="/cay-giong" className="btn btn-primary hero-cta">
            XEM SẢN PHẨM NGAY
          </Link>
        </div>
      </section>

      {/* 2. ABOUT US (Giới thiệu ngắn) */}
      <section className="about-section section-padding">
        <div className="container about-inner">
          <div className="about-text">
            <h2 className="section-heading">Giới thiệu ngắn</h2>
            <p>Chào mừng bạn đến với Vườn ươm Thừa Vân, nơi ươm mầm sự sống xanh. Chúng tôi chuyên cung cấp cây giống đa dạng, từ cây ăn quả, cây cảnh đến cây công trình, cam kết chất lượng và dịch vụ hậu mãi chu đáo.</p>
            <Link to="/ve-chung-toi" className="btn btn-secondary about-cta">
              Tìm hiểu về chúng tôi
            </Link>
          </div>
          <div className="about-image-wrapper">
            <img src="/assets/images/home/team_thua_van.jpg" alt="Đội ngũ Vườn ươm Thừa Vân" className="about-image" />
          </div>
        </div>
      </section>

      {/* 3. FEATURED PRODUCTS (Sản phẩm nổi bật) */}
      <section className="products-section section-padding section-bg-light">
        <div className="container">
          <h2 className="section-heading">Sản phẩm nổi bật</h2>

          {/* HIỂN THỊ CÁC TAB DANH MỤC */}
          <div className="product-category-tabs">
            {tabCategories.map((category) => (
              <span
                key={category}
                className={`tab ${activeTab === category ? "active" : ""}`}
                onClick={() => handleTabClick(category)}
              >
                {category}
              </span>
            ))}
          </div>
          {/* KẾT THÚC KHU VỰC TAB */}

          {/* HIỂN THỊ SẢN PHẨM ĐÃ LỌC */}
          <div className="product-list">
            {displayProducts.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image-container">
                  <img src={product.image} alt={product.name} className="product-image" />
                </div>
                <h3 className="product-name">{product.name}</h3>
                <p className="product-category">{product.category}</p>
                <p className="product-price">{product.price}</p>
                <Link to={`/cay-giong/${product.id}`} className="btn btn-sm btn-outline">
                  XEM CHI TIẾT
                </Link>
              </div>
            ))}
            {displayProducts.length === 0 && (
              <p className="no-products-message">Hiện chưa có sản phẩm {activeTab} nổi bật.</p>
            )}
          </div>

          <div className="text-center mt-4">
            <Link to="/cay-giong" className="btn btn-primary-outline">
              XEM TẤT CẢ CÂY GIỐNG
            </Link>
          </div>
        </div>
      </section>

      {/* 4. SERVICES (Dịch vụ) */}
      <section className="services-section section-padding">
        <div className="container">
          <h2 className="section-heading">Dịch vụ của chúng tôi</h2>
          <div className="service-list">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon-box">
                  <span className="service-icon">{service.icon}</span>
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <Link to={service.link} className="service-link-btn">
                  Tìm hiểu ngay
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. NEWS & TESTIMONIALS (Tin tức & Khách hàng) */}
      <section className="extra-content-section section-padding section-bg-light">
        <div className="container extra-content-inner">

          {/* Liên hệ & Bản đồ */}
          <div className="contact-map">
            <h2 className="section-sub-heading">Địa chỉ & Liên hệ</h2>
            <div className="map-placeholder">
              <iframe
                title="Vị trí Vườn ươm Thừa Vân"
                src="https://www.google.co.jp/maps/place/V%C6%B0%E1%BB%9Dn+%C6%B0%C6%A1m+Th%E1%BB%ABa+V%C3%A2n/@13.7355699,109.0872533,249m/data=!3m2!1e3!4b1!4m6!3m5!1s0x316f11001dd72e85:0x2ee0e09532d720e1!8m2!3d13.7355686!4d109.087897!16s%2Fg%2F11yr_ll6q5?entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Ý kiến khách hàng */}
          <div className="testimonials">
            <h2 className="section-sub-heading">Khách hàng nói gì về chúng tôi</h2>
            <div className="testimonial-slider">
              <blockquote className="testimonial-card active">
                <p className="testimonial-quote">"Cây khỏe, dịch vụ tốt. Rất hài lòng!"</p>
                <footer className="testimonial-author">— Anh Lâm, Chủ dự án Cảnh quan.</footer>
              </blockquote>
            </div>

            <form className="quick-contact-form">
              <h3 className="form-heading">Gửi yêu cầu tư vấn</h3>
              <input type="text" placeholder="Tên của bạn" required />
              <input type="email" placeholder="Email" required />
              <textarea placeholder="Nội dung tư vấn" rows="3"></textarea>
              <button type="submit" className="btn btn-primary">GỬI YÊU CẦU</button>
            </form>
          </div>
        </div>
      </section>

      {/* 6. LATEST NEWS (Tin tức) */}
      <section className="news-section section-padding">
        <div className="container">
          <h2 className="section-heading">Tin tức và Khuyến mãi</h2>
          <div className="news-list">

            {isLoading && <p className="loading-message">Đang tải tin tức...</p>}

            {error && <p className="error-message">Lỗi khi tải tin tức: {error}</p>}

            {!isLoading && !error && news.map((item) => (
              <article key={item.id} className="news-card">
                {/* Đảm bảo API trả về các thuộc tính: id, image, title, date, link/slug */}
                <img src={item.image} alt={item.title} className="news-image" />
                <div className="news-content">
                  <h3 className="news-title">
                    <Link to={`/tin-tuc/${item.id}`}>{item.title}</Link>
                  </h3>
                  <p className="news-date">Ngày đăng: {item.date}</p>
                </div>
              </article>
            ))}

            {!isLoading && news.length === 0 && !error && (
              <p className="no-products-message">Hiện chưa có tin tức nào được đăng tải.</p>
            )}
          </div>

          <div className="text-center mt-4">
            <Link to="/tin-tuc" className="btn btn-primary-outline">
              XEM TẤT CẢ TIN TỨC
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;