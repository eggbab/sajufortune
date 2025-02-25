import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/LegalPage.css';

function PrivacyPage() {
  return (
    <div className="legal-page-container">
      <Header />
      
      <main className="legal-content">
        <div className="container">
          <h1 className="legal-title gradient-text">개인정보처리방침</h1>
          <div className="oriental-divider"></div>
          
          <div className="legal-section glass-card">
            <h2>1. 개인정보의 수집 및 이용 목적</h2>
            <p>
              사주포춘(이하 "회사")은 다음의 목적을 위해 개인정보를 수집 및 이용합니다:
            </p>
            <ul>
              <li>사주 해석 및 운세 분석 서비스 제공</li>
              <li>부적 제작 및 배송</li>
              <li>서비스 이용 관련 안내 및 문의 응대</li>
              <li>서비스 개선 및 개발을 위한 통계 및 분석</li>
            </ul>
          </div>
          
          <div className="legal-section glass-card">
            <h2>2. 수집하는 개인정보 항목</h2>
            <p>회사는 서비스 제공을 위해 다음과 같은 개인정보를 수집합니다:</p>
            <ul>
              <li>필수항목: 이름, 생년월일, 성별</li>
              <li>선택항목: 이메일 주소, 관심사</li>
              <li>부적 구매 시 추가 수집 항목: 배송지 주소, 연락처, 결제 정보</li>
            </ul>
          </div>
          
          <div className="legal-section glass-card">
            <h2>3. 개인정보의 보유 및 이용 기간</h2>
            <p>
              회사는 원칙적으로 개인정보 수집 및 이용 목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 
              단, 관계 법령에 의해 보존할 필요가 있는 경우 법령에서 정한 일정 기간 동안 개인정보를 보관합니다.
            </p>
            <ul>
              <li>계약 또는 청약철회 등에 관한 기록: 5년</li>
              <li>대금결제 및 재화 등의 공급에 관한 기록: 5년</li>
              <li>소비자의 불만 또는 분쟁처리에 관한 기록: 3년</li>
            </ul>
          </div>
          
          <div className="legal-section glass-card">
            <h2>4. 개인정보의 파기 절차 및 방법</h2>
            <p>
              회사는 개인정보 보유기간이 경과하거나 처리목적이 달성된 경우에는 지체없이 해당 개인정보를 파기합니다.
              파기 절차 및 방법은 다음과 같습니다:
            </p>
            <ul>
              <li>파기절차: 이용자가 입력한 정보는 목적 달성 후 별도의 DB에 옮겨져 내부 방침 및 기타 관련 법령에 따라 일정기간 저장된 후 혹은 즉시 파기됩니다.</li>
              <li>파기방법: 전자적 파일 형태의 정보는 기술적 방법을 사용하여 삭제하며, 출력물 등은 분쇄하거나 소각하여 파기합니다.</li>
            </ul>
          </div>
          
          <div className="legal-section glass-card">
            <h2>5. 개인정보의 제3자 제공</h2>
            <p>
              회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만, 아래의 경우에는 예외로 합니다:
            </p>
            <ul>
              <li>이용자가 사전에 동의한 경우</li>
              <li>법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</li>
            </ul>
          </div>
          
          <div className="legal-section glass-card">
            <h2>6. 이용자 및 법정대리인의 권리와 그 행사방법</h2>
            <p>
              이용자 및 법정대리인은 언제든지 등록되어 있는 자신의 개인정보를 조회하거나 수정할 수 있으며, 
              회사의 개인정보 처리에 동의하지 않는 경우 동의를 철회할 수 있습니다. 
              개인정보 조회, 수정, 삭제, 처리정지 요구는 고객센터를 통해 요청하실 수 있습니다.
            </p>
          </div>
          
          <div className="legal-section glass-card">
            <h2>7. 개인정보 보호책임자</h2>
            <p>
              회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 이용자의 불만처리 및 
              피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다:
            </p>
            <ul>
              <li>개인정보 보호책임자: 김정보</li>
              <li>직위: 개인정보보호팀장</li>
              <li>연락처: privacy@sajufortune.com, 02-123-4567</li>
            </ul>
          </div>
          
          <div className="legal-section glass-card">
            <h2>8. 개인정보 처리방침 변경</h2>
            <p>
              이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 
              변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.
            </p>
          </div>
          
          <div className="legal-update-info">
            <p>시행일자: 2024년 1월 1일</p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default PrivacyPage; 