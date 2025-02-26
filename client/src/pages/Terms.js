import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Policy.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Terms = () => {
  return (
    <div className="policy-page">
      <Header />
      
      <div className="policy-container">
        <div className="policy-header">
          <h1>이용약관</h1>
          <p>마지막 업데이트: 2023년 10월 15일</p>
        </div>
        
        <div className="policy-content">
          <section className="policy-section">
            <h2>1. 서비스 개요</h2>
            <p>본 약관은 사주포춘(이하 '회사')이 제공하는 모든 서비스(이하 '서비스')의 이용 조건과 운영에 관한 제반 사항을 규정합니다. 회원은 본 약관을 읽고 동의한 것으로 간주됩니다.</p>
          </section>
          
          <section className="policy-section">
            <h2>2. 서비스 이용 계약의 성립</h2>
            <p>서비스 이용 계약은 회원이 본 약관에 동의하고, 회사가 요청하는 정보를 제공하여 회원가입을 완료한 후, 회사가 이를 승낙함으로써 성립됩니다.</p>
            
            <p>회사는 다음 각 호에 해당하는 경우 회원가입을 승낙하지 않을 수 있습니다:</p>
            <ul>
              <li>본인 실명으로 신청하지 않은 경우</li>
              <li>다른 사람의 명의를 사용하여 신청한 경우</li>
              <li>회원가입 신청서의 내용을 허위로 기재한 경우</li>
              <li>사회의 안녕과 질서, 미풍양속을 저해할 목적으로 신청한 경우</li>
              <li>기타 회사가 정한 회원가입 요건이 미비한 경우</li>
            </ul>
          </section>
          
          <section className="policy-section">
            <h2>3. 서비스 이용 범위</h2>
            <p>회원은 가입 시 부여된 ID와 비밀번호를 통해 로그인한 후 회사가 제공하는 서비스를 이용할 수 있습니다. 회사가 제공하는 서비스는 다음과 같습니다:</p>
            
            <div className="highlight-box">
              <ul>
                <li>사주 분석 및 운세 서비스</li>
                <li>타로 카드 해석 서비스</li>
                <li>별자리 운세 서비스</li>
                <li>관련 콘텐츠 및 정보 제공</li>
                <li>회원 간 소통 서비스</li>
                <li>기타 회사가 추가 개발하거나 제휴를 통해 제공하는 서비스</li>
              </ul>
            </div>
          </section>
          
          <section className="policy-section">
            <h2>4. 서비스 이용료</h2>
            <p>회사가 제공하는 서비스 중 일부는 유료로 제공될 수 있습니다. 유료 서비스 이용 시에는 해당 서비스에 명시된 요금을 지불해야 합니다.</p>
            
            <p>서비스 이용료는 다음 방법으로 결제할 수 있습니다:</p>
            <ul>
              <li>신용카드 및 체크카드</li>
              <li>계좌이체</li>
              <li>휴대폰 소액결제</li>
              <li>포인트 또는 사이버머니</li>
              <li>회사가 추가로 정의하는 결제 수단</li>
            </ul>
          </section>
          
          <section className="policy-section">
            <h2>5. 서비스 해지 및 이용 제한</h2>
            <p>회원은 언제든지 회사에 해지 의사를 통지하여 서비스 이용 계약을 해지할 수 있습니다. 회사는 다음 각 호에 해당하는 경우 서비스 이용을 제한하거나 해지할 수 있습니다:</p>
            
            <ul>
              <li>타인의 개인정보를 도용한 경우</li>
              <li>서비스 운영을 고의로 방해한 경우</li>
              <li>공공질서 및 미풍양속에 저해되는 내용을 유포한 경우</li>
              <li>범죄와 결부된다고 객관적으로 판단되는 경우</li>
              <li>타인의 명예를 손상시키거나 불이익을 주는 행위를 한 경우</li>
              <li>기타 관련법령이나 회사가 정한 이용조건을 위반한 경우</li>
            </ul>
          </section>
          
          <section className="policy-section">
            <h2>6. 면책조항</h2>
            <p>회사는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.</p>
            <p>회사는 회원의 귀책사유로 인한 서비스 이용의 장애에 대하여는 책임을 지지 않습니다.</p>
            <p>회사는 서비스에서 제공하는 정보의 신뢰도, 정확성 등에 대해 보증하지 않으며, 이로 인해 발생한 손해에 대해 책임을 지지 않습니다.</p>
          </section>
          
          <div className="policy-footer">
            <p>본 약관은 2023년 10월 15일부터 시행됩니다. 이 약관이 변경되는 경우에는 변경 사항을 게시하며, 변경된 약관은 게시한 날로부터 7일 후부터 효력이 발생합니다.</p>
          </div>
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

export default Terms; 