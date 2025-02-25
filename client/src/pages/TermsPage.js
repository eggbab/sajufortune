import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/TermsPage.css';

function TermsPage() {
  return (
    <div className="terms-page">
      <Header />
      
      <div className="terms-container">
        <div className="terms-header">
          <h1 className="terms-title">이용약관</h1>
          <p className="terms-subtitle">
            사주포춘 서비스 이용에 관한 약관입니다.
          </p>
        </div>
        
        <div className="terms-content glass-card">
          <div className="terms-section">
            <h2>제1조 (목적)</h2>
            <p>
              이 약관은 사주포춘(이하 "회사")이 제공하는 사주 분석 서비스(이하 "서비스")의 이용조건 및 절차, 
              회사와 회원 간의 권리, 의무 및 책임사항 등을 규정함을 목적으로 합니다.
            </p>
          </div>
          
          <div className="terms-section">
            <h2>제2조 (용어의 정의)</h2>
            <p>이 약관에서 사용하는 용어의 정의는 다음과 같습니다:</p>
            <ul>
              <li>
                <strong>서비스:</strong> 회사가 제공하는 사주 분석 및 관련 서비스를 의미합니다.
              </li>
              <li>
                <strong>회원:</strong> 회사와 서비스 이용계약을 체결하고 회원 아이디를 부여받은 자를 의미합니다.
              </li>
              <li>
                <strong>아이디(ID):</strong> 회원의 식별과 서비스 이용을 위하여 회원이 설정하고 회사가 승인한 문자와 숫자의 조합을 의미합니다.
              </li>
              <li>
                <strong>비밀번호:</strong> 회원이 부여받은 아이디와 일치된 회원임을 확인하고 회원의 개인정보를 보호하기 위해 회원 자신이 설정한 문자와 숫자의 조합을 의미합니다.
              </li>
            </ul>
          </div>
          
          <div className="terms-section">
            <h2>제3조 (약관의 효력 및 변경)</h2>
            <p>
              이 약관은 서비스를 이용하고자 하는 모든 회원에게 적용됩니다. 회사는 필요한 경우 약관을 변경할 수 있으며, 
              변경된 약관은 회사 웹사이트에 공지함으로써 효력이 발생합니다.
            </p>
          </div>
          
          <div className="terms-section">
            <h2>제4조 (서비스의 제공 및 변경)</h2>
            <p>
              회사는 다음과 같은 서비스를 제공합니다:
            </p>
            <ul>
              <li>사주 분석 서비스</li>
              <li>운세 정보 제공</li>
              <li>맞춤형 부적 제작 및 판매</li>
              <li>기타 회사가 추가 개발하거나 다른 회사와의 제휴를 통해 회원에게 제공하는 일체의 서비스</li>
            </ul>
            <p>
              회사는 서비스의 내용, 이용방법, 이용시간에 대하여 변경이 있는 경우에는 변경사유, 변경될 서비스의 내용 및 
              제공일자 등을 그 변경 전에 해당 서비스 초기화면에 게시합니다.
            </p>
          </div>
          
          <div className="terms-section">
            <h2>제5조 (서비스 이용료)</h2>
            <p>
              기본적인 사주 분석 서비스는 무료로 제공됩니다. 다만, 맞춤형 부적 제작 등 일부 서비스는 유료로 제공될 수 있으며, 
              이 경우 회사는 해당 서비스의 이용료를 사전에 고지합니다.
            </p>
          </div>
          
          <div className="terms-section">
            <h2>제6조 (개인정보 보호)</h2>
            <p>
              회사는 관련법령이 정하는 바에 따라 회원의 개인정보를 보호하기 위해 노력합니다. 
              개인정보의 보호 및 사용에 대해서는 관련법령 및 회사의 개인정보처리방침이 적용됩니다.
            </p>
          </div>
          
          <div className="terms-date">
            시행일자: 2023년 10월 1일
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default TermsPage; 