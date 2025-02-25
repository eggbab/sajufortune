import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/LegalPage.css';

function TermsPage() {
  return (
    <div className="legal-page-container">
      <Header />
      
      <main className="legal-content">
        <div className="container">
          <h1 className="legal-title gradient-text">이용약관</h1>
          <div className="oriental-divider"></div>
          
          <div className="legal-section glass-card">
            <h2>제1조 (목적)</h2>
            <p>
              이 약관은 사주포춘(이하 "회사")이 제공하는 사주 해석 및 관련 서비스(이하 "서비스")의 이용과 관련하여 
              회사와 이용자 간의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
            </p>
          </div>
          
          <div className="legal-section glass-card">
            <h2>제2조 (정의)</h2>
            <p>이 약관에서 사용하는 용어의 정의는 다음과 같습니다:</p>
            <ol>
              <li>"서비스"란 회사가 제공하는 사주 해석, 운세 분석, 부적 판매 등의 모든 서비스를 의미합니다.</li>
              <li>"이용자"란 회사의 서비스를 이용하는 모든 고객을 의미합니다.</li>
              <li>"콘텐츠"란 회사가 서비스를 통해 제공하는 모든 정보와 자료를 의미합니다.</li>
            </ol>
          </div>
          
          <div className="legal-section glass-card">
            <h2>제3조 (약관의 효력 및 변경)</h2>
            <p>
              1. 이 약관은 서비스를 이용하고자 하는 모든 이용자에게 적용됩니다.<br />
              2. 회사는 필요한 경우 약관을 변경할 수 있으며, 변경된 약관은 웹사이트에 공지함으로써 효력이 발생합니다.<br />
              3. 이용자가 변경된 약관에 동의하지 않는 경우, 서비스 이용을 중단할 수 있습니다.
            </p>
          </div>
          
          <div className="legal-section glass-card">
            <h2>제4조 (서비스의 제공 및 변경)</h2>
            <p>
              1. 회사는 이용자에게 사주 해석, 운세 분석, 부적 판매 등의 서비스를 제공합니다.<br />
              2. 회사는 서비스의 품질 향상을 위해 서비스의 내용을 변경할 수 있습니다.<br />
              3. 서비스 이용은 회사의 업무상 또는 기술상 특별한 지장이 없는 한 연중무휴, 1일 24시간을 원칙으로 합니다.
            </p>
          </div>
          
          <div className="legal-section glass-card">
            <h2>제5조 (서비스 이용료 및 결제)</h2>
            <p>
              1. 회사가 제공하는 기본 사주 해석 서비스는 무료로 제공됩니다.<br />
              2. 부적 구매 등 유료 서비스의 경우, 해당 서비스에 명시된 요금을 지불해야 합니다.<br />
              3. 결제 방법 및 환불 정책은 서비스 이용 시 별도로 안내됩니다.
            </p>
          </div>
          
          <div className="legal-section glass-card">
            <h2>제6조 (이용자의 의무)</h2>
            <p>
              1. 이용자는 서비스 이용 시 정확한 개인정보를 제공해야 합니다.<br />
              2. 이용자는 타인의 정보를 도용하거나 허위 정보를 제공해서는 안 됩니다.<br />
              3. 이용자는 서비스를 이용하여 얻은 정보를 회사의 사전 승인 없이 복제, 배포, 출판할 수 없습니다.
            </p>
          </div>
          
          <div className="legal-section glass-card">
            <h2>제7조 (면책조항)</h2>
            <p>
              1. 회사는 천재지변, 전쟁, 기간통신사업자의 서비스 중지 등 불가항력적인 사유로 서비스를 제공할 수 없는 경우 책임이 면제됩니다.<br />
              2. 회사는 이용자의 귀책사유로 인한 서비스 이용 장애에 대해 책임을 지지 않습니다.<br />
              3. 사주 해석 및 운세 분석은 참고용 정보로 제공되며, 이를 기반으로 한 이용자의 결정에 대해 회사는 법적 책임을 지지 않습니다.
            </p>
          </div>
          
          <div className="legal-section glass-card">
            <h2>제8조 (준거법 및 관할법원)</h2>
            <p>
              1. 이 약관의 해석 및 회사와 이용자 간의 분쟁에 대해서는 대한민국 법률을 적용합니다.<br />
              2. 서비스 이용으로 발생한 분쟁에 대해 소송이 제기될 경우, 회사의 본사 소재지를 관할하는 법원을 전속 관할법원으로 합니다.
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

export default TermsPage; 