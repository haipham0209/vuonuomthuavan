import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

// Dữ liệu giả định: ĐÃ BỔ SUNG THÊM CÂY
const allProducts = [
  // --- CÂY TRỒNG RỪNG ---
  { id: 7, name: "Cây Keo Lai", category: "Cây trồng rừng", price: "Giá sỉ", image: "assets/images/products/product_keo_lai.jpg" },
  { id: 8, name: "Cây Keo Lá Tràm", category: "Cây trồng rừng", price: "Giá sỉ", image: "assets/images/products/product_keo_tram.jpg" },
];

const services = [
  { icon: '🌿', title: "Cung cấp cây giống lâm nghiệp", description: "", link: "/dich-vu/thiet-ke" },
  { icon: '🌿', title: "Cây giống keo trồng rừng", description: "", link: "/dich-vu/cham-soc" },
  { icon: '🌿', title: "Cây giống keo lai", description: "", link: "/dich-vu/tu-van" },

];

// --- CẬP NHẬT THỨ TỰ TAB: "Cây trồng rừng" lên đầu tiên ---
// const tabCategories = ["Cây trồng rừng", "Cây ăn quả", "Cây cảnh", "Cây công trình"];
const tabCategories = ["Cây trồng rừng"];

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
          <h1 className="hero-title">Vườn ươm Thừa Vân</h1>
          <p className="hero-subtitle">Cung cấp cây giống chất lượng, dịch vụ tận tâm.</p>
          {/* <Link to="/cay-giong" className="btn btn-primary hero-cta">
            XEM SẢN PHẨM NGAY
          </Link> */}
        </div>
      </section>

      {/* 2. ABOUT US (Giới thiệu ngắn) */}
      <section className="about-section section-padding">
        <div className="container about-inner">
          <div className="about-text">
            <h2 className="section-heading">Giới thiệu ngắn</h2>
            <p>Vườn ươm cây giống Thừa Vân, tọa độ tại QL 19c, cách thành phố Quy Nhơn( tỉnh Gia Lai) 20km về phía Tây Nam, nơi ươm mầm sự sống xanh. Chúng tôi chuyên cung cấp cây giống chất lượng.</p>
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
                className={`tab my-1 ${activeTab === category ? "active" : ""}`}
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
                {/* <Link to={`/cay-giong/${product.id}`} className="btn btn-sm btn-outline">
                  XEM CHI TIẾT
                </Link> */}
              </div>
            ))}
            {displayProducts.length === 0 && (
              <p className="no-products-message">Hiện chưa có sản phẩm {activeTab} nổi bật.</p>
            )}
          </div>

          {/* <div className="text-center mt-4">
            <Link to="/cay-giong" className="btn btn-primary-outline">
              XEM TẤT CẢ CÂY GIỐNG
            </Link>
          </div> */}
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
                // Thay thế URL giả định bằng URL mã nhúng thực tế của Google Maps
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1514.2902684295082!2d109.08744286739405!3d13.735383058181808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x316f11001dd72e85%3A0x2ee0e09532d720e1!2zVsaw4budbiDGsMahbSBUaOG7q2EgVsOibg!5e1!3m2!1svi!2sjp!4v1764996472370!5m2!1svi!2sjp"

                // SỬA LỖI 1: Thay thế style="border:0;" bằng style={{ border: 0 }}
                style={{ border: 0 }}

                // SỬA LỖI 2: Sử dụng cú pháp camelCase và giá trị số/chuỗi cho width/height
                width="100%"
                height="100%"

                // SỬA LỖI 3: Thuộc tính HTML allowfullscreen phải là allowFullScreen trong JSX
                allowFullScreen={true} // hoặc chỉ allowFullScreen="" nếu không muốn dùng boolean

                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Ý kiến khách hàng */}
          {/* <div className="testimonials">
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
          </div> */}
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