import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Policy.css';

function RefundPolicy() {
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
          <h1>환불정책</h1>
          
          <section className="policy-section">
            <h2>1. 환불 원칙</h2>
            <p>사주포춘은 프리미엄 서비스 결제 후 다음의 기준에 따라 환불을 처리합니다.</p>
          </section>
          
          <section className="policy-section">
            <h2>2. 환불 기준</h2>
            <p>프리미엄 서비스 결제 후 서비스 이용 전:</p>
            <ul>
              <li>결제 후 24시간 이내: 100% 환불</li>
              <li>결제 후 24시간 이후 7일 이내: 70% 환불</li>
              <li>결제 후 7일 이후: 환불 불가</li>
            </ul>
            
            <p>프리미엄 서비스 이용 후:</p>
            <ul>
              <li>서비스 이용 시작 후에는 원칙적으로 환불이 불가합니다.</li>
              <li>단, 서비스 오류 등 회사의 귀책사유로 인해 서비스를 이용하지 못한 경우 전액 환불이 가능합니다.</li>
            </ul>
          </section>
          
          <section className="policy-section">
            <h2>3. 환불 절차</h2>
            <p>환불을 원하시는 경우 다음의 절차를 따라주세요:</p>
            <ol>
              <li>사주포춘 이메일(vmeandbeme@gmail.com)로 환불 요청</li>
              <li>성함, 결제일, 결제 금액 및 환불 사유 기재</li>
              <li>환불 요청 접수 후 3영업일 이내 처리</li>
              <li>결제 수단에 따라 환불 처리 기간이 추가될 수 있음</li>
            </ol>
          </section>
          
          <section className="policy-section">
            <h2>4. 환불 제외 사항</h2>
            <p>다음의 경우에는 환불이 제한될 수 있습니다:</p>
            <ul>
              <li>서비스의 일부 또는 전체를 이미 이용한 경우</li>
              <li>회원의 귀책사유로 서비스 이용이 불가능한 경우</li>
              <li>디지털 콘텐츠의 특성상 복제가 가능한 서비스에 대한 환불 요청</li>
            </ul>
          </section>
          
          <section className="policy-section">
            <h2>5. 기타 사항</h2>
            <p>본 환불정책에 명시되지 않은 사항은 전자상거래 등에서의 소비자보호에 관한 법률 및 관계법령, 그리고 일반적인 상관례에 따릅니다.</p>
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

export default RefundPolicy; 