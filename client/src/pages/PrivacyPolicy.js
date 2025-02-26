import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Policy.css';

function PrivacyPolicy() {
  return (
    <div className="policy-page">
      <header className="policy-header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <Link to="/">사주포춘</Link>
            </div>
            <Link to="/" className="back-button">
              <i className="fas fa-home"></i> 홈으로
            </Link>
          </div>
        </div>
      </header>
      
      <main className="policy-content">
        <div className="container">
          <h1>개인정보처리방침</h1>
          
          <section className="policy-section">
            <h2>1. 개인정보의 처리 목적</h2>
            <p>사주포춘은 다음의 목적을 위하여 개인정보를 처리하고 있으며, 다음의 목적 이외의 용도로는 이용하지 않습니다.</p>
            <ul>
              <li>사주 분석 서비스 제공</li>
              <li>맞춤형 콘텐츠 제공</li>
              <li>서비스 개선 및 개발</li>
            </ul>
          </section>
          
          <section className="policy-section">
            <h2>2. 개인정보의 처리 및 보유 기간</h2>
            <p>사주포춘은 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.</p>
          </section>
          
          <section className="policy-section">
            <h2>3. 개인정보의 제3자 제공</h2>
            <p>사주포춘은 정보주체의 별도 동의 없이 개인정보를 제3자에게 제공하지 않습니다.</p>
          </section>
          
          <section className="policy-section">
            <h2>4. 정보주체의 권리·의무 및 행사방법</h2>
            <p>정보주체는 사주포춘에 대해 언제든지 개인정보 열람·정정·삭제·처리정지 요구 등의 권리를 행사할 수 있습니다.</p>
          </section>
          
          <section className="policy-section">
            <h2>5. 개인정보의 안전성 확보조치</h2>
            <p>사주포춘은 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.</p>
            <ul>
              <li>관리적 조치: 내부관리계획 수립·시행, 정기적 직원 교육</li>
              <li>기술적 조치: 개인정보처리시스템 등의 접근권한 관리, 접근통제시스템 설치, 고유식별정보 등의 암호화, 보안프로그램 설치</li>
              <li>물리적 조치: 전산실, 자료보관실 등의 접근통제</li>
            </ul>
          </section>
          
          <section className="policy-section">
            <h2>6. 개인정보 보호책임자</h2>
            <p>사주포춘은 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.</p>
            <div className="contact-info">
              <p><strong>개인정보 보호책임자</strong></p>
              <p>이메일: vmeandbeme@gmail.com</p>
            </div>
          </section>
        </div>
      </main>
      
      <footer className="policy-footer">
        <div className="container">
          <p>&copy; 2025 사주포춘. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default PrivacyPolicy; 