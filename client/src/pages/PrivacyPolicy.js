import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Policy.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="policy-page">
      <Header />
      
      <div className="policy-container">
        <div className="policy-header">
          <h1>개인정보처리방침</h1>
          <p>사주포춘의 개인정보 보호 정책에 대한 안내입니다.</p>
        </div>
        
        <div className="policy-section">
          <h2>1. 개인정보의 처리 목적</h2>
          <p>사주포춘은 다음의 목적을 위하여 개인정보를 처리하고 있으며, 다음의 목적 이외의 용도로는 이용하지 않습니다.</p>
          <ul className="policy-list">
            <li>사주 분석 서비스 제공</li>
            <li>맞춤형 콘텐츠 제공</li>
            <li>서비스 개선 및 개발</li>
          </ul>
        </div>
        
        <div className="policy-section">
          <h2>2. 개인정보의 처리 및 보유 기간</h2>
          <p>사주포춘은 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.</p>
        </div>
        
        <div className="policy-section">
          <h2>3. 개인정보의 제3자 제공</h2>
          <p>사주포춘은 정보주체의 별도 동의 없이 개인정보를 제3자에게 제공하지 않습니다.</p>
        </div>
        
        <div className="policy-section">
          <h2>4. 정보주체의 권리·의무 및 행사방법</h2>
          <p>정보주체는 사주포춘에 대해 언제든지 개인정보 열람·정정·삭제·처리정지 요구 등의 권리를 행사할 수 있습니다.</p>
        </div>
        
        <div className="policy-section">
          <h2>5. 개인정보의 안전성 확보조치</h2>
          <p>사주포춘은 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.</p>
          <ul className="policy-list">
            <li>관리적 조치: 내부관리계획 수립·시행, 정기적 직원 교육</li>
            <li>기술적 조치: 개인정보처리시스템 등의 접근권한 관리, 접근통제시스템 설치, 고유식별정보 등의 암호화, 보안프로그램 설치</li>
            <li>물리적 조치: 전산실, 자료보관실 등의 접근통제</li>
          </ul>
        </div>
        
        <div className="policy-section">
          <h2>6. 개인정보 보호책임자</h2>
          <p>사주포춘은 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.</p>
          <div className="contact-info">
            <p><strong>개인정보 보호책임자</strong></p>
            <p>이메일: vmeandbeme@gmail.com</p>
            <p>사업자등록번호: 426-62-00632</p>
            <p>대표자: 김우진</p>
          </div>
        </div>
        
        <div className="policy-nav">
          <Link to="/terms" className="policy-link">이용약관</Link>
          <Link to="/refund" className="policy-link">환불 정책</Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy; 