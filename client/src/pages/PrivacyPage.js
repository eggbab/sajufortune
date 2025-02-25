import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/PrivacyPage.css';

function PrivacyPage() {
  return (
    <div className="privacy-page">
      <Header />
      
      <div className="privacy-container">
        <div className="privacy-header">
          <h1 className="privacy-title">개인정보처리방침</h1>
          <p className="privacy-subtitle">
            사주포춘은 회원의 개인정보를 소중히 여기며 관련 법규를 준수합니다.
          </p>
        </div>
        
        <div className="privacy-content glass-card">
          <div className="privacy-section">
            <h2>1. 수집하는 개인정보 항목</h2>
            <p>
              사주포춘은 서비스 제공을 위해 다음과 같은 개인정보를 수집합니다:
            </p>
            <ul>
              <li>필수항목: 이름, 생년월일, 성별</li>
              <li>선택항목: 이메일 주소, 태어난 시간</li>
              <li>서비스 이용 과정에서 자동으로 생성되는 정보: IP 주소, 쿠키, 방문 일시, 서비스 이용 기록</li>
            </ul>
          </div>
          
          <div className="privacy-section">
            <h2>2. 개인정보의 수집 및 이용목적</h2>
            <p>
              수집한 개인정보는 다음의 목적을 위해 이용됩니다:
            </p>
            <ul>
              <li>서비스 제공: 사주 분석, 운세 정보 제공, 맞춤형 부적 제작 등</li>
              <li>회원 관리: 회원제 서비스 이용에 따른 본인확인, 개인식별, 불량회원의 부정이용 방지와 비인가 사용 방지</li>
              <li>마케팅 및 광고에 활용: 이벤트 등 광고성 정보 전달, 접속 빈도 파악, 서비스 이용에 대한 통계</li>
            </ul>
          </div>
          
          <div className="privacy-section">
            <h2>3. 개인정보의 보유 및 이용기간</h2>
            <p>
              회원의 개인정보는 원칙적으로 개인정보의 수집 및 이용목적이 달성되면 지체 없이 파기합니다. 
              단, 관련 법령에 의해 보존할 필요가 있는 경우 해당 법령에서 정한 기간 동안 보관합니다.
            </p>
            <ul>
              <li>계약 또는 청약철회 등에 관한 기록: 5년 (전자상거래 등에서의 소비자보호에 관한 법률)</li>
              <li>대금결제 및 재화 등의 공급에 관한 기록: 5년 (전자상거래 등에서의 소비자보호에 관한 법률)</li>
              <li>소비자의 불만 또는 분쟁처리에 관한 기록: 3년 (전자상거래 등에서의 소비자보호에 관한 법률)</li>
              <li>웹사이트 방문기록: 3개월 (통신비밀보호법)</li>
            </ul>
          </div>
          
          <div className="privacy-section">
            <h2>4. 개인정보의 파기절차 및 방법</h2>
            <p>
              회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 
              지체 없이 해당 개인정보를 파기합니다. 파기절차 및 방법은 다음과 같습니다:
            </p>
            <ul>
              <li>
                <strong>파기절차:</strong> 회원이 입력한 정보는 목적 달성 후 별도의 DB에 옮겨져 내부 방침 및 
                관련 법령에 따라 일정기간 저장된 후 혹은 즉시 파기됩니다.
              </li>
              <li>
                <strong>파기방법:</strong> 전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제하며, 
                종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다.
              </li>
            </ul>
          </div>
          
          <div className="privacy-section">
            <h2>5. 개인정보 보호책임자</h2>
            <p>
              회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 
              피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
            </p>
            <ul>
              <li><strong>개인정보 보호책임자:</strong> 김우진</li>
              <li><strong>직위:</strong> 대표</li>
              <li><strong>연락처:</strong> privacy@sajufortune.com, 1588-1234</li>
            </ul>
          </div>
          
          <div className="privacy-date">
            시행일자: 2023년 10월 1일
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default PrivacyPage; 