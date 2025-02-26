import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Policy.css';

function Terms() {
  return (
    <div className="policy-page">
      <header className="policy-header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <Link to="/">사주포춘</Link>
            </div>
            <Link to="/" className="back-button">
              <i className="fas fa-home"></i> 홈으로
            </Link>
          </div>
        </div>
      </header>
      
      <main className="policy-content">
        <div className="container">
          <h1>이용약관</h1>
          
          <section className="policy-section">
            <h2>제1조 (목적)</h2>
            <p>이 약관은 사주포춘이 제공하는 사주 분석 서비스의 이용조건 및 절차, 회사와 회원 간의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.</p>
          </section>
          
          <section className="policy-section">
            <h2>제2조 (정의)</h2>
            <p>이 약관에서 사용하는 용어의 정의는 다음과 같습니다.</p>
            <ol>
              <li>"서비스"라 함은 회사가 제공하는 사주 분석 관련 제반 서비스를 의미합니다.</li>
              <li>"회원"이라 함은 회사와 서비스 이용계약을 체결하고 회사가 제공하는 서비스를 이용하는 자를 말합니다.</li>
              <li>"이용계약"이라 함은 이 약관을 포함하여 서비스 이용과 관련하여 회사와 회원 간에 체결하는 모든 계약을 말합니다.</li>
            </ol>
          </section>
          
          <section className="policy-section">
            <h2>제3조 (약관의 효력 및 변경)</h2>
            <p>회사는 필요한 경우 약관을 변경할 수 있으며, 변경된 약관은 서비스 내 공지사항에 게시하거나 기타의 방법으로 회원에게 공지함으로써 효력이 발생합니다.</p>
          </section>
          
          <section className="policy-section">
            <h2>제4조 (서비스의 제공 및 변경)</h2>
            <p>회사는 사주 분석 서비스를 제공하며, 운영상, 기술상의 필요에 따라 제공하고 있는 서비스를 변경할 수 있습니다.</p>
          </section>
          
          <section className="policy-section">
            <h2>제5조 (서비스 이용 제한)</h2>
            <p>회사는 다음 각 호에 해당하는 경우 서비스 이용을 제한할 수 있습니다.</p>
            <ol>
              <li>서비스 설비의 보수 등 공사로 인한 부득이한 경우</li>
              <li>전기통신사업법에 규정된 기간통신사업자가 전기통신서비스를 중지했을 경우</li>
              <li>기타 불가항력적 사유가 있는 경우</li>
            </ol>
          </section>
          
          <section className="policy-section">
            <h2>제6조 (면책조항)</h2>
            <p>회사는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.</p>
          </section>
        </div>
      </main>
      
      <footer className="policy-footer">
        <div className="container">
          <p>&copy; 2025 사주포춘. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Terms; 