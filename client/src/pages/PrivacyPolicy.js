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
          <p>마지막 업데이트: 2023년 10월 15일</p>
        </div>
        
        <div className="policy-content">
          <section className="policy-section">
            <h2>1. 개인정보의 수집 및 이용 목적</h2>
            <p>사주포춘은 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보 보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.</p>
            
            <ul>
              <li>회원 가입 및 관리</li>
              <li>서비스 제공 및 맞춤형 콘텐츠 추천</li>
              <li>이벤트, 마케팅 및 광고에의 활용</li>
              <li>서비스 개선 및 개발</li>
            </ul>
          </section>
          
          <section className="policy-section">
            <h2>2. 수집하는 개인정보 항목</h2>
            <p>사주포춘은 서비스 제공을 위해 아래와 같은 개인정보를 수집하고 있습니다.</p>
            
            <div className="highlight-box">
              <h3>필수 수집 항목</h3>
              <ul>
                <li>이메일 주소</li>
                <li>비밀번호</li>
                <li>닉네임(서비스 내 표시되는 이름)</li>
                <li>서비스 이용 기록 및 접속 로그</li>
              </ul>
              
              <h3>선택 수집 항목</h3>
              <ul>
                <li>실명</li>
                <li>생년월일 및 태어난 시간</li>
                <li>성별</li>
                <li>프로필 이미지</li>
                <li>마케팅 수신 동의 여부</li>
              </ul>
            </div>
            
            <p>선택 항목은 입력하지 않아도 서비스 이용이 가능하나, 사주 분석과 같은 일부 서비스는 생년월일, 성별 등의 정보가 필요할 수 있습니다.</p>
          </section>
          
          <section className="policy-section">
            <h2>3. 개인정보의 처리 및 보유 기간</h2>
            <p>사주포춘은 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.</p>
            
            <ul>
              <li>회원 가입 및 관리: 회원 탈퇴 시까지</li>
              <li>서비스 이용 기록: 서비스 제공에 관한 계약 이행 및 서비스 개선을 위해 3년간 보관</li>
              <li>결제 정보: 전자상거래 등에서의 소비자 보호에 관한 법률에 따라 5년간 보관</li>
            </ul>
          </section>
          
          <section className="policy-section">
            <h2>4. 개인정보의 제3자 제공</h2>
            <p>사주포춘은 정보주체의 별도 동의 없이 개인정보를 외부에 제공하지 않습니다. 다만, 아래의 경우에는 예외로 합니다.</p>
            
            <ul>
              <li>이용자가 사전에 동의한 경우</li>
              <li>법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</li>
            </ul>
          </section>
          
          <section className="policy-section">
            <h2>5. 이용자 권리 및 그 행사 방법</h2>
            <p>이용자는 개인정보주체로서 다음과 같은 권리를 행사할 수 있습니다.</p>
            
            <ul>
              <li>개인정보 열람 요구</li>
              <li>오류 등이 있을 경우 정정 요구</li>
              <li>삭제 요구</li>
              <li>처리정지 요구</li>
            </ul>
            
            <p>위 권리 행사는 사주포춘에 대해 서면, 전화, 전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며 사주포춘은 이에 대해 지체 없이 조치하겠습니다.</p>
          </section>
          
          <section className="policy-section">
            <h2>6. 개인정보 보호책임자</h2>
            <div className="contact-box">
              <p>사주포춘은 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제를 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.</p>
              <p><i className="fas fa-user"></i> 개인정보 보호책임자: 김우진</p>
              <p><i className="fas fa-envelope"></i> 이메일: <a href="mailto:vmeandbeme@gmail.com">vmeandbeme@gmail.com</a></p>
              <p><i className="fas fa-phone-alt"></i> 연락처: 070-1234-5678</p>
            </div>
          </section>
          
          <div className="policy-footer">
            <p>본 개인정보처리방침은 2023년 10월 15일부터 적용됩니다. 이 개인정보처리방침이 변경되는 경우에는 변경 사항을 게시하며, 변경된 개인정보처리방침은 게시한 날로부터 7일 후부터 효력이 발생합니다.</p>
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