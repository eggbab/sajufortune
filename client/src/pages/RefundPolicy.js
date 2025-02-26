import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Policy.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const RefundPolicy = () => {
  return (
    <div className="policy-page">
      <Header />
      
      <div className="policy-container">
        <div className="policy-header">
          <h1>환불 정책</h1>
          <p>사주포춘 서비스 환불 정책에 대한 안내입니다. 서비스 이용 전 꼭 확인해주세요.</p>
        </div>
        
        <div className="policy-section">
          <h2><i className="fas fa-exclamation-circle"></i> 환불 불가 안내</h2>
          
          <div className="important-notice">
            <h4><i className="fas fa-info-circle"></i> 중요 안내사항</h4>
            <p>
              사주포춘의 사주 분석 서비스는 <strong>디지털 컨텐츠의 특성상 결제 후 환불이 불가능</strong>합니다. 
              서비스 이용 전 반드시 아래 내용을 확인해 주세요.
            </p>
          </div>
          
          <h3><i className="fas fa-times-circle"></i> 환불 불가 사유</h3>
          <ul className="policy-list">
            <li>
              <strong>즉시 소비되는 디지털 콘텐츠:</strong> 사주 분석 결과는 고객의 개인 정보를 바탕으로 AI가 
              즉시 생성하는 디지털 콘텐츠로, 결제 즉시 분석 작업이 시작되고 결과가 생성됩니다.
            </li>
            <li>
              <strong>맞춤형 개인화 서비스:</strong> 각 고객의 생년월일시를 기반으로 제공되는 고유한 맞춤형 분석으로, 
              다른 사용자에게 재판매하거나 재사용이 불가능합니다.
            </li>
            <li>
              <strong>서버 및 AI 자원 사용:</strong> 결제 즉시 고객의 정보를 분석하기 위한 서버 자원과 AI 시스템이 
              가동되며, 이미 사용된 컴퓨팅 자원은 회수가 불가능합니다.
            </li>
            <li>
              <strong>분석 결과 열람:</strong> 사주 분석 결과를 한 번 열람한 후에는 이미 서비스가 제공된 것으로 
              간주되어 환불이 불가능합니다.
            </li>
          </ul>
          
          <h3><i className="fas fa-exclamation-triangle"></i> 이용 전 주의사항</h3>
          <p>
            서비스 결제 전 다음 사항을 반드시 확인해 주세요:
          </p>
          <ul className="policy-list">
            <li>무료 기본 분석을 통해 서비스의 품질을 미리 확인하실 수 있습니다.</li>
            <li>결제 전 서비스 내용과 가격을 충분히 검토하신 후 구매를 결정해 주세요.</li>
            <li>정확한 생년월일시 정보를 입력했는지 다시 한번 확인해 주세요.</li>
            <li>결제 직후부터 분석 작업이 시작되므로 신중한 결제를 부탁드립니다.</li>
          </ul>
          
          <h3><i className="fas fa-check-circle"></i> 서비스 품질 보장</h3>
          <p>
            사주포춘은 환불은 불가능하지만, 최고 품질의 분석 결과를 제공하기 위해 다음과 같은 노력을 기울이고 있습니다:
          </p>
          <ul className="policy-list">
            <li>최신 AI 기술과 전통 사주 이론을 결합한 정확한 분석</li>
            <li>개인 맞춤형 상세 해설 제공</li>
            <li>직관적이고 이해하기 쉬운 시각화 자료</li>
            <li>분석 결과에 대한 궁금증은 고객센터를 통해 언제든지 문의 가능</li>
          </ul>
          
          <h3><i className="fas fa-envelope"></i> 문의하기</h3>
          <p>
            서비스 이용에 관한 문의사항이 있으신 경우 아래 연락처로 문의해 주세요:
          </p>
          <div className="contact-info">
            <p><strong><i className="fas fa-envelope"></i> 이메일:</strong> vmeandbeme@gmail.com</p>
            <p><strong><i className="fas fa-id-card"></i> 사업자등록번호:</strong> 426-62-00632</p>
            <p><strong><i className="fas fa-user"></i> 대표자:</strong> 김우진</p>
          </div>
        </div>
        
        <div className="policy-nav">
          <Link to="/terms" className="policy-link">이용약관</Link>
          <Link to="/privacy" className="policy-link">개인정보처리방침</Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default RefundPolicy; 