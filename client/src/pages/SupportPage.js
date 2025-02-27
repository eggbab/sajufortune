import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SupportPage = () => {
  return (
    <div className="support-page">
      <Header />
      
      <main className="support-main">
        <div className="container">
          <h1>고객 지원</h1>
          <p>사주포춘 서비스 이용에 관한 문의사항이 있으시면 언제든지 문의해 주세요.</p>
          
          <div className="contact-methods">
            <div className="contact-card">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <h3>이메일 문의</h3>
              <p>평일 기준 24시간 이내에 답변해 드립니다.</p>
              <a href="mailto:support@sajufortune.com" className="contact-link">support@sajufortune.com</a>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon">
                <i className="fas fa-phone-alt"></i>
              </div>
              <h3>전화 상담</h3>
              <p>평일 09:00 - 18:00 (공휴일 제외)</p>
              <a href="tel:02-123-4567" className="contact-link">02-123-4567</a>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon">
                <i className="fas fa-comments"></i>
              </div>
              <h3>실시간 채팅</h3>
              <p>평일 09:00 - 21:00 / 주말 10:00 - 18:00</p>
              <button className="chat-button">채팅 시작하기</button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      
      <style jsx>{`
        .support-page {
          min-height: 100vh;
          background-color: var(--bg-color);
          color: var(--text-color);
        }
        
        .support-main {
          padding: 80px 0;
          min-height: 60vh;
        }
        
        .support-main h1 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 20px;
          color: var(--primary-color);
          text-align: center;
        }
        
        .support-main > .container > p {
          font-size: 1.1rem;
          color: var(--text-secondary);
          text-align: center;
          max-width: 600px;
          margin: 0 auto 60px;
        }
        
        .contact-methods {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
          margin-top: 40px;
        }
        
        .contact-card {
          background-color: var(--card-bg);
          border-radius: 15px;
          padding: 30px;
          text-align: center;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
        }
        
        .contact-card:hover {
          transform: translateY(-10px);
        }
        
        .contact-icon {
          width: 70px;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: var(--primary-light);
          color: var(--primary-color);
          font-size: 24px;
          border-radius: 50%;
          margin: 0 auto 20px;
        }
        
        .contact-card h3 {
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 10px;
          color: var(--text-color);
        }
        
        .contact-card p {
          font-size: 0.95rem;
          color: var(--text-secondary);
          margin-bottom: 20px;
        }
        
        .contact-link {
          display: inline-block;
          color: var(--primary-color);
          font-weight: 500;
          font-size: 1.1rem;
          transition: all 0.3s ease;
        }
        
        .contact-link:hover {
          text-decoration: underline;
        }
        
        .chat-button {
          padding: 10px 20px;
          background-color: var(--primary-color);
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .chat-button:hover {
          background-color: #7d3c98;
        }
        
        @media (max-width: 768px) {
          .support-main {
            padding: 60px 0;
          }
          
          .support-main h1 {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default SupportPage; 