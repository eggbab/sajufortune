import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Policy.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TermsOfService = () => {
  return (
    <div className="policy-page">
      <Header />
      
      <div className="policy-container">
        <div className="policy-header">
          <h1>이용약관</h1>
          <p>사주포춘 서비스 이용 약관에 대한 안내입니다.</p>
        </div>
        
        <div className="policy-section">
          <h2>1. 서비스 개요</h2>
          <p>
            본 약관은 사주포춘이 제공하는 사주 분석 서비스의 이용조건과 절차에 관한 사항과 기타 필요한 사항을 규정함을 목적으로 합니다.
          </p>
        </div>
        
        <div className="policy-section">
          <h2>2. 용어의 정의</h2>
          <ul className="policy-list">
            <li>
              <strong>서비스</strong>: 사주포춘이 제공하는 사주 분석 및 운세 서비스를 의미합니다.
            </li>
            <li>
              <strong>회원</strong>: 사주포춘에 개인정보를 제공하고 회원등록을 한 자로서, 사주포춘이 제공하는 서비스를 이용할 수 있는 자를 의미합니다.
            </li>
            <li>
              <strong>비회원</strong>: 회원가입 없이 사주포춘이 제공하는 서비스를 이용하는 자를 의미합니다.
            </li>
          </ul>
        </div>
        
        <div className="policy-section">
          <h2>3. 서비스 이용</h2>
          <p>
            사주포춘은 다음과 같은 서비스를 제공합니다:
          </p>
          <ul className="policy-list">
            <li>무료 기본 사주 분석</li>
            <li>프리미엄 심층 사주 분석</li>
            <li>월별/연간 운세</li>
            <li>상성 분석</li>
          </ul>
        </div>
        
        <div className="policy-section">
          <h2>4. 서비스 이용료 및 결제</h2>
          <p>
            무료 서비스를 제외한 나머지 서비스는 유료로 제공됩니다. 이용료는 서비스 페이지에 명시되어 있으며, 결제는 신용카드, 계좌이체 등 사주포춘이 지정한 방법으로 이루어집니다.
          </p>
        </div>
        
        <div className="policy-section">
          <h2>5. 서비스 변경 및 중단</h2>
          <p>
            사주포춘은 서비스 내용을 변경하거나, 기술적 필요에 따라 서비스를 일시적으로 중단할 수 있습니다. 이러한 경우 사전에 공지하도록 노력하겠습니다.
          </p>
        </div>
        
        <div className="policy-section">
          <h2>6. 이용자의 의무</h2>
          <p>
            이용자는 다음 각 호의 행위를 하여서는 안 됩니다:
          </p>
          <ul className="policy-list">
            <li>타인의 정보를 도용하는 행위</li>
            <li>사주포춘의 서비스를 이용하여 얻은 정보를 상업적으로 이용하는 행위</li>
            <li>사주포춘의 저작권, 제3자의 저작권 등 기타 권리를 침해하는 행위</li>
            <li>사주포춘의 서비스를 이용하여 법령과 본 약관이 금지하는 행위를 하는 경우</li>
          </ul>
        </div>
        
        <div className="policy-nav">
          <Link to="/privacy" className="policy-link">개인정보처리방침</Link>
          <Link to="/refund" className="policy-link">환불 정책</Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default TermsOfService; 