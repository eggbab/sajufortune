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
          <p>마지막 업데이트: 2023년 10월 15일</p>
        </div>
        
        <div className="policy-content">
          <section className="policy-section">
            <h2>1. 환불 원칙</h2>
            <p>사주풀이는 고객 만족을 최우선으로 생각합니다. 디지털 콘텐츠의 특성을 고려하여 다음과
            같은 환불 정책을 운영하고 있습니다.</p>
          </section>
          
          <section className="policy-section">
            <h2>2. 환불 절차 및 기준</h2>
            <div className="highlight-box">
              <h3>환불 가능 기간 및 비율</h3>
              <ul className="refund-list">
                <li><span className="refund-condition">결제 후 24시간 이내, 서비스가 제공되기 전:</span> <span className="refund-rate">100% 환불</span></li>
                <li><span className="refund-condition">서비스 결과 제공 전 취소 요청 시:</span> <span className="refund-rate">결제 금액의 80% 환불</span></li>
                <li><span className="refund-condition">서비스 결과 확인 후:</span> <span className="refund-rate">환불 불가</span></li>
                <li><span className="refund-condition">서비스 오류 또는 부실한 콘텐츠 제공의 경우:</span> <span className="refund-rate">검토 후 전액 환불 가능</span></li>
              </ul>
            </div>
            
            <p>환불 요청은 <a href="mailto:vmeandbeme@gmail.com">vmeandbeme@gmail.com</a>으로 보내주시거나, 마이페이지 &gt; 주문 내역 &gt; 환불 요청 버튼을 통해 진행할 수 있습니다.</p>
          </section>
          
          <section className="policy-section">
            <h2>3. 환불 처리 기간</h2>
            <p>환불 요청이 접수된 후 영업일 기준 3-5일 이내에 처리됩니다. 신용카드 결제의 경우, 카드사 정책에 따라 환불금이 실제 카드에 반영되기까지 추가 시간이 소요될 수 있습니다.</p>
          </section>
          
          <section className="policy-section">
            <h2>4. 환불 제외 사항</h2>
            <ul>
              <li>사용자의 정보 입력 오류로 인한 분석 결과 오차가 발생한 경우</li>
              <li>서비스 결과를 이미 열람한 경우 (디지털 콘텐츠의 특성상)</li>
              <li>무료 서비스 및 프로모션 코드로 결제한 서비스</li>
              <li>서비스 이용약관을 위반한 경우</li>
            </ul>
          </section>
          
          <section className="policy-section">
            <h2>5. 부분 환불</h2>
            <p>종합 사주 패키지 상품의 경우, 일부 서비스만 이용한 후 나머지에 대한 부분 환불을 요청할 수 있습니다. 이 경우 이미 제공된 서비스 가치를 제외한 금액에 대해 환불이 진행됩니다.</p>
          </section>
          
          <section className="policy-section">
            <h2>6. 문의 및 이의제기</h2>
            <div className="contact-box">
              <p>환불 정책과 관련하여 추가 문의사항이나 이의제기가 있으신 경우 아래 연락처로 문의해주세요:</p>
              <p><i className="fas fa-envelope"></i> 이메일: <a href="mailto:vmeandbeme@gmail.com">vmeandbeme@gmail.com</a></p>
              <p><i className="fas fa-phone-alt"></i> 고객센터: 070-1234-5678 (평일 10:00-18:00)</p>
              <p><i className="fas fa-comment"></i> 1:1 문의: 마이페이지 &gt; 1:1 문의하기</p>
            </div>
          </section>
          
          <div className="policy-footer">
            <p>본 환불 정책은 2023년 10월 15일부터 적용됩니다. 정책 변경 시 웹사이트를 통해 공지하며, 변경된 정책은 공지일로부터 7일 후 적용됩니다.</p>
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