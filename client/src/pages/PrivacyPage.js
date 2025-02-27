import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPage = () => {
  return (
    <div className="privacy-page">
      <Header />
      
      <main className="privacy-main">
        <div className="container">
          <div className="policy-header">
            <h1>개인정보 처리방침</h1>
            <p>사주포춘은 고객님의 개인정보를 중요하게 생각합니다.</p>
          </div>
          
          <div className="policy-content">
            <p className="last-updated">최종 업데이트: 2023년 9월 1일</p>
            
            <section className="policy-section">
              <h2>1. 개인정보 수집 항목</h2>
              <p>
                사주포춘은 서비스 제공을 위해 다음과 같은 개인정보를 수집하고 있습니다:
              </p>
              <ul>
                <li><strong>필수항목:</strong> 이름, 이메일 주소, 생년월일, 성별</li>
                <li><strong>선택항목:</strong> 전화번호, 태어난 시간</li>
                <li><strong>자동수집항목:</strong> IP 주소, 쿠키, 접속 로그, 서비스 이용 기록</li>
              </ul>
            </section>
            
            <section className="policy-section">
              <h2>2. 개인정보 수집 및 이용 목적</h2>
              <ul>
                <li>사주 분석 및 운세 서비스 제공</li>
                <li>회원 가입 및 관리</li>
                <li>서비스 개선 및 개발</li>
                <li>마케팅 및 광고에 활용 (선택적 동의 시)</li>
                <li>고객 문의 및 불만 처리</li>
              </ul>
            </section>
            
            <section className="policy-section">
              <h2>3. 개인정보의 보유 및 이용 기간</h2>
              <p>
                사주포춘은 원칙적으로 개인정보 수집 및 이용 목적이 달성된 후에는 해당 정보를 지체 없이 
                파기합니다. 단, 관련 법령에 따라 일정 기간 동안 개인정보를 보존해야 하는 경우에는 
                해당 기간 동안 보관됩니다.
              </p>
              <ul>
                <li><strong>회원 정보:</strong> 회원 탈퇴 시까지</li>
                <li><strong>결제 정보:</strong> 전자상거래 등에서의 소비자 보호에 관한 법률에 따라 5년</li>
                <li><strong>접속 로그:</strong> 통신비밀보호법에 따라 3개월</li>
              </ul>
            </section>
            
            <section className="policy-section">
              <h2>4. 개인정보의 제3자 제공</h2>
              <p>
                사주포춘은 원칙적으로 이용자의 개인정보를 제3자에게 제공하지 않습니다. 
                다만, 아래의 경우에는 예외로 합니다:
              </p>
              <ul>
                <li>이용자가 사전에 동의한 경우</li>
                <li>법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 요청이 있는 경우</li>
              </ul>
            </section>
            
            <section className="policy-section">
              <h2>5. 이용자 및 법정대리인의 권리와 행사 방법</h2>
              <p>
                이용자는 언제든지 개인정보 조회, 수정, 삭제, 처리정지 요구 등의 권리를 행사할 수 있습니다.
              </p>
              <p>
                권리 행사는 개인정보 보호법 시행령 제41조 제1항에 따라 서면, 전자우편, 
                모사전송(FAX) 등을 통하여 하실 수 있으며, 사주포춘은 이에 대해 지체 없이 조치하겠습니다.
              </p>
            </section>
            
            <section className="policy-section">
              <h2>6. 개인정보의 안전성 확보 조치</h2>
              <p>
                사주포춘은 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다:
              </p>
              <ul>
                <li>개인정보 암호화</li>
                <li>해킹 등에 대비한 기술적 대책</li>
                <li>개인정보에 대한 접근 제한</li>
                <li>개인정보 취급 직원 교육</li>
              </ul>
            </section>
            
            <section className="policy-section">
              <h2>7. 개인정보 보호책임자</h2>
              <p>
                사주포춘은 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 
                이용자의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
              </p>
              <div className="contact-info">
                <p><strong>개인정보 보호책임자</strong></p>
                <p>이름: 김정보</p>
                <p>직위: 개인정보보호팀장</p>
                <p>연락처: 02-123-4567, privacy@sajufortune.com</p>
              </div>
            </section>
            
            <div className="policy-note">
              <p>
                이 개인정보 처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 
                삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      
      <style jsx>{`
        .privacy-page {
          min-height: 100vh;
          background-color: var(--bg-color);
          color: var(--text-color);
        }
        
        .privacy-main {
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
        
        .last-updated {
          font-size: 0.9rem;
          color: var(--text-tertiary);
          text-align: right;
          margin-bottom: 30px;
        }
        
        .policy-section {
          margin-bottom: 30px;
        }
        
        .policy-section h2 {
          font-size: 1.4rem;
          font-weight: 600;
          color: var(--text-color);
          margin-bottom: 15px;
        }
        
        .policy-section p {
          font-size: 1rem;
          line-height: 1.6;
          color: var(--text-secondary);
          margin-bottom: 15px;
        }
        
        .policy-section ul {
          margin-bottom: 15px;
          padding-left: 20px;
        }
        
        .policy-section li {
          font-size: 1rem;
          line-height: 1.6;
          color: var(--text-secondary);
          margin-bottom: 10px;
        }
        
        .contact-info {
          background-color: var(--bg-hover);
          padding: 20px;
          border-radius: 8px;
          margin-top: 15px;
        }
        
        .contact-info p {
          margin-bottom: 5px;
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

export default PrivacyPage; 