import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const RefundPage = () => {
  return (
    <div className="refund-page">
      <Header />
      
      <main className="refund-main">
        <div className="container">
          <div className="policy-header">
            <h1>환불 정책</h1>
            <p>사주포춘의 환불 정책에 대한 안내입니다.</p>
          </div>
          
          <div className="policy-content">
            <section className="policy-section">
              <h2>환불 원칙</h2>
              <p>
                사주포춘은 고객 만족을 최우선으로 생각합니다. 다음과 같은 환불 정책을 통해 
                고객님의 권리를 보장해 드립니다.
              </p>
            </section>
            
            <section className="policy-section">
              <h2>환불 가능 기간</h2>
              <ul>
                <li>
                  <strong>서비스 이용 전:</strong> 결제 후 7일 이내에 서비스를 이용하지 않은 경우, 
                  100% 환불이 가능합니다.
                </li>
                <li>
                  <strong>서비스 이용 후:</strong> 디지털 콘텐츠의 특성상 서비스 이용 후에는 
                  원칙적으로 환불이 제한됩니다. 단, 서비스 품질에 명백한 하자가 있는 경우 
                  부분 환불 또는 포인트 보상이 가능합니다.
                </li>
              </ul>
            </section>
            
            <section className="policy-section">
              <h2>환불 절차</h2>
              <ol>
                <li>
                  <strong>환불 요청:</strong> 마이페이지 > 주문 내역에서 환불 요청 버튼을 클릭하거나, 
                  고객센터(02-123-4567)로 연락하여 환불을 요청합니다.
                </li>
                <li>
                  <strong>요청 검토:</strong> 환불 요청은 영업일 기준 24시간 이내에 검토됩니다.
                </li>
                <li>
                  <strong>환불 처리:</strong> 환불이 승인된 경우, 최초 결제 수단으로 
                  3-5영업일 이내에 환불이 진행됩니다.
                </li>
              </ol>
            </section>
            
            <section className="policy-section">
              <h2>환불 예외 사항</h2>
              <ul>
                <li>
                  고객의 단순 변심에 의한 환불 요청이 빈번할 경우, 서비스 이용에 제한이 있을 수 있습니다.
                </li>
                <li>
                  VIP 패키지의 경우, 전문가 1:1 상담을 이미 이용한 경우에는 상담 비용을 제외한 
                  나머지 금액에 대해서만 환불이 가능합니다.
                </li>
                <li>
                  부정한 방법으로 서비스를 이용하거나, 서비스 이용약관을 위반한 경우에는 
                  환불이 제한될 수 있습니다.
                </li>
              </ul>
            </section>
            
            <section className="policy-section">
              <h2>환불 관련 문의</h2>
              <p>
                환불 정책에 대한 추가 문의사항이 있으시면 언제든지 고객센터로 문의해 주세요.
              </p>
              <div className="contact-info">
                <p>
                  <i className="fas fa-envelope"></i> 이메일: <a href="mailto:support@sajufortune.com">support@sajufortune.com</a>
                </p>
                <p>
                  <i className="fas fa-phone-alt"></i> 전화: <a href="tel:02-123-4567">02-123-4567</a> (평일 09:00-18:00)
                </p>
              </div>
            </section>
            
            <div className="policy-note">
              <p>
                <strong>참고:</strong> 본 환불 정책은 관련 법규에 따라 변경될 수 있으며, 
                변경 시 웹사이트를 통해 공지됩니다. 
                마지막 업데이트: 2023년 8월 1일
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      
      <style jsx>{`
        .refund-page {
          min-height: 100vh;
          background-color: var(--bg-color);
          color: var(--text-color);
        }
        
        .refund-main {
          padding: 60px 0;
        }
        
        .policy-header {
          text-align: center;
          margin-bottom: 50px;
        }
        
        .policy-header h1 {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--primary-color);
          margin-bottom: 15px;
        }
        
        .policy-header p {
          font-size: 1.1rem;
          color: var(--text-secondary);
        }
        
        .policy-content {
          max-width: 800px;
          margin: 0 auto;
          background-color: var(--card-bg);
          border-radius: 15px;
          padding: 40px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
        }
        
        .policy-section {
          margin-bottom: 30px;
        }
        
        .policy-section h2 {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--text-color);
          margin-bottom: 15px;
          padding-bottom: 10px;
          border-bottom: 1px solid var(--border-color);
        }
        
        .policy-section p {
          font-size: 1rem;
          line-height: 1.6;
          color: var(--text-secondary);
          margin-bottom: 15px;
        }
        
        .policy-section ul,
        .policy-section ol {
          margin-bottom: 15px;
          padding-left: 20px;
        }
        
        .policy-section li {
          font-size: 1rem;
          line-height: 1.6;
          color: var(--text-secondary);
          margin-bottom: 10px;
        }
        
        .policy-note {
          background-color: var(--bg-hover);
          padding: 15px;
          border-radius: 8px;
          margin-top: 30px;
        }
        
        .policy-note p {
          font-size: 0.9rem;
          color: var(--text-tertiary);
          margin: 0;
        }
        
        .contact-info {
          background-color: var(--bg-hover);
          padding: 20px;
          border-radius: 8px;
          margin-top: 15px;
        }
        
        .contact-info p {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 10px;
        }
        
        .contact-info p:last-child {
          margin-bottom: 0;
        }
        
        .contact-info i {
          color: var(--primary-color);
        }
        
        .contact-info a {
          color: var(--primary-color);
          font-weight: 500;
        }
        
        .contact-info a:hover {
          text-decoration: underline;
        }
        
        @media (max-width: 768px) {
          .policy-header h1 {
            font-size: 2rem;
          }
          
          .policy-content {
            padding: 25px;
          }
          
          .policy-section h2 {
            font-size: 1.3rem;
          }
        }
      `}</style>
    </div>
  );
};

export default RefundPage; 