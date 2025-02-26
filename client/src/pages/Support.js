import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Support = () => {
  return (
    <div className="support-page">
      <Header />
      
      <div className="support-hero">
        <div className="container">
          <h1>고객 지원</h1>
          <p>궁금한 점이 있으신가요? 저희가 도와드리겠습니다</p>
        </div>
      </div>
      
      <div className="support-container container">
        <div className="support-grid">
          <div className="support-card">
            <div className="support-icon">
              <i className="fas fa-envelope"></i>
            </div>
            <h2>이메일 문의</h2>
            <p>24시간 이내에 답변해드립니다</p>
            <a href="mailto:vmeandbeme@gmail.com" className="support-link">vmeandbeme@gmail.com</a>
          </div>
          
          <div className="support-card">
            <div className="support-icon">
              <i className="fas fa-phone-alt"></i>
            </div>
            <h2>전화 문의</h2>
            <p>평일 10:00 - 18:00</p>
            <a href="tel:0701234567" className="support-link">070-1234-5678</a>
          </div>
          
          <div className="support-card">
            <div className="support-icon">
              <i className="fas fa-comment"></i>
            </div>
            <h2>실시간 채팅</h2>
            <p>평일 10:00 - 22:00</p>
            <button className="chat-button">채팅 시작하기</button>
          </div>
          
          <div className="support-card">
            <div className="support-icon">
              <i className="fas fa-question-circle"></i>
            </div>
            <h2>자주 묻는 질문</h2>
            <p>자주 묻는 질문과 답변을 확인하세요</p>
            <a href="/faq" className="support-link">FAQ 바로가기</a>
          </div>
        </div>
        
        <div className="contact-form-section">
          <h2>문의하기</h2>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">이름</label>
              <input type="text" id="name" placeholder="이름을 입력하세요" />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">이메일</label>
              <input type="email" id="email" placeholder="이메일을 입력하세요" />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">제목</label>
              <input type="text" id="subject" placeholder="문의 제목을 입력하세요" />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">문의 내용</label>
              <textarea id="message" rows="5" placeholder="문의 내용을 자세히 적어주세요"></textarea>
            </div>
            
            <button type="submit" className="submit-button">문의하기</button>
          </form>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Support; 