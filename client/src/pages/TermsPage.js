import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TermsPage = () => {
  return (
    <div className="terms-page">
      <Header />
      
      <main className="terms-main">
        <div className="container">
          <div className="policy-header">
            <h1>이용약관</h1>
            <p>사주포춘 서비스 이용에 관한 약관입니다.</p>
          </div>
          
          <div className="policy-content">
            <p className="last-updated">최종 업데이트: 2023년 9월 1일</p>
            
            <div className="terms-intro">
              <p>
                이 약관은 주식회사 사주포춘(이하 "회사")이 제공하는 사주포춘 서비스(이하 "서비스")의 
                이용 조건을 규정합니다. 이 약관에 동의하시면 회사의 서비스를 이용하실 수 있습니다.
              </p>
            </div>
            
            <section className="policy-section">
              <h2>제1조 (목적)</h2>
              <p>
                이 약관은 회사가 운영하는 사주포춘 웹사이트 및 모바일 애플리케이션(이하 "사이트")에서 
                제공하는 서비스의 이용과 관련하여 회사와 이용자의 권리, 의무 및 책임사항을 규정함을 
                목적으로 합니다.
              </p>
            </section>
            
            <section className="policy-section">
              <h2>제2조 (용어의 정의)</h2>
              <ol>
                <li>
                  "서비스"란 회사가 제공하는 사주 분석, 운세 정보, 궁합 분석 등의 콘텐츠 및 
                  관련 부가 서비스를 의미합니다.
                </li>
                <li>
                  "이용자"란 사이트에 접속하여 이 약관에 따라 회사가 제공하는 서비스를 
                  이용하는 회원 및 비회원을 말합니다.
                </li>
                <li>
                  "회원"이란 회사에 개인정보를 제공하여 회원등록을 한 자로서, 회사의 정보를 
                  지속적으로 제공받으며 서비스를 이용할 수 있는 자를 말합니다.
                </li>
                <li>
                  "비회원"이란 회원가입 없이 서비스를 이용하는 자를 말합니다.
                </li>
                <li>
                  "콘텐츠"란 회사가 제공하는 사주 분석 결과, 운세 정보, 개운법 등의 정보를 말합니다.
                </li>
              </ol>
            </section>
            
            <section className="policy-section">
              <h2>제3조 (약관의 효력 및 변경)</h2>
              <ol>
                <li>
                  이 약관은 사이트에 게시하거나 기타의 방법으로, 이용자에게 공지함으로써 효력이 발생합니다.
                </li>
                <li>
                  회사는 필요한 경우 이 약관을 변경할 수 있으며, 변경된 약관은 사이트에 공지함으로써 
                  효력이 발생합니다.
                </li>
                <li>
                  이용자는 변경된 약관에 동의하지 않을 경우 서비스 이용을 중단하고 회원 탈퇴를 
                  요청할 수 있습니다. 이용자가 변경된 약관이 공지된 날로부터 15일 이내에 
                  명시적으로 거부의사를 표시하지 않을 경우, 약관 변경에 동의한 것으로 간주됩니다.
                </li>
              </ol>
            </section>
            
            <section className="policy-section">
              <h2>제4조 (서비스의 내용 및 변경)</h2>
              <ol>
                <li>
                  회사는 다음과 같은 서비스를 제공합니다:
                  <ul>
                    <li>사주팔자 분석 서비스</li>
                    <li>운세 정보 제공 서비스</li>
                    <li>궁합 분석 서비스</li>
                    <li>기타 회사가 추가 개발하거나 제휴를 통해 제공하는 서비스</li>
                  </ul>
                </li>
                <li>
                  회사는 서비스의 내용을 변경할 수 있으며, 변경 내용은 사이트를 통해 공지합니다.
                </li>
              </ol>
            </section>
            
            <section className="policy-section">
              <h2>제5조 (서비스 이용료)</h2>
              <ol>
                <li>
                  회사의 기본 서비스는 무료로 제공되나, 일부 콘텐츠 및 프리미엄 서비스는 
                  유료로 제공됩니다.
                </li>
                <li>
                  유료 서비스의 이용 요금 및 결제 방법은 해당 서비스에 명시되어 있으며, 
                  이용자는 해당 내용을 확인한 후 결제해야 합니다.
                </li>
                <li>
                  회사는 유료 서비스의 이용 요금을 변경할 수 있으며, 변경된 요금은 사이트에 
                  공지한 후 적용됩니다.
                </li>
              </ol>
            </section>
            
            <section className="policy-section">
              <h2>제6조 (회원가입 및 계정)</h2>
              <ol>
                <li>
                  이용자는 회사가 정한 양식에 따라 회원정보를 기입한 후 이 약관에 동의한다는 
                  의사표시를 함으로써 회원가입을 신청합니다.
                </li>
                <li>
                  회사는 다음 각 호에 해당하는 회원가입 신청에 대해서는 승인을 거부하거나, 
                  사후에 회원자격을 박탈할 수 있습니다:
                  <ul>
                    <li>실명이 아니거나 타인의 명의를 도용한 경우</li>
                    <li>허위 정보를 기재하거나 회사가 요구하는 정보를 제공하지 않은 경우</li>
                    <li>만 14세 미만의 아동이 법정대리인의 동의 없이 가입한 경우</li>
                    <li>이전에 이용약관 위반으로 해지된 경험이 있는 경우</li>
                    <li>기타 회원으로 등록하는 것이 회사의 서비스 운영에 현저히 지장이 있다고 판단되는 경우</li>
                  </ul>
                </li>
              </ol>
            </section>
            
            <section className="policy-section">
              <h2>제7조 (개인정보 보호)</h2>
              <p>
                회사는 이용자의 개인정보 보호를 위해 최선을 다하며, 개인정보의 수집, 이용, 
                보관, 파기 등에 관한 사항은 회사의 개인정보 처리방침에 따릅니다.
              </p>
            </section>
            
            <section className="policy-section">
              <h2>제8조 (이용자의 의무)</h2>
              <ol>
                <li>
                  이용자는 다음 행위를 하여서는 안 됩니다:
                  <ul>
                    <li>서비스 신청 또는 이용 시 허위 정보 제공</li>
                    <li>타인의 정보를 도용하거나 무단으로 사용</li>
                    <li>회사가 제공하는 콘텐츠의 무단 복제, 배포, 출판</li>
                    <li>회사 및 제3자의 저작권, 상표권 등 지적재산권 침해</li>
                    <li>회사 및 제3자의 명예를 훼손하거나 업무를 방해하는 행위</li>
                    <li>외설, 폭력, 차별, 혐오 등의 부적절한 콘텐츠 게시</li>
                    <li>기타 관련 법령 또는 이 약관에 위배되는 행위</li>
                  </ul>
                </li>
              </ol>
            </section>
            
            <section className="policy-section">
              <h2>제9조 (서비스 이용의 제한)</h2>
              <p>
                회사는 이용자가 제8조의 의무를 위반하거나 서비스의 정상적인 운영을 방해한 경우, 
                서비스 이용을 제한하거나 정지할 수 있습니다.
              </p>
            </section>
            
            <section className="policy-section">
              <h2>제10조 (책임의 한계)</h2>
              <ol>
                <li>
                  회사는 천재지변, 전쟁, 기간통신사업자의 서비스 중단 등 불가항력적인 사유로 
                  서비스를 제공할 수 없는 경우에는 책임을 지지 않습니다.
                </li>
                <li>
                  회사는 이용자의 귀책사유로 인한 서비스 이용 장애에 대해서는 책임을 지지 않습니다.
                </li>
                <li>
                  회사는 사주 분석, 운세 등의 콘텐츠가 이용자에게 제공하는 정보와 예측은 참고사항일 뿐, 
                  이용자의 판단과 행동에 따른 결과에 대해 법적 책임을 지지 않습니다.
                </li>
              </ol>
            </section>
            
            <section className="policy-section">
              <h2>제11조 (분쟁 해결)</h2>
              <p>
                회사와 이용자 간에 발생한 분쟁은 먼저 원만한 합의에 의해 해결하며, 합의가 이루어지지 
                않을 경우 관련 법령에 따라 처리합니다.
              </p>
            </section>
            
            <div className="policy-note">
              <p>
                이 약관은 2023년 9월 1일부터 시행됩니다.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      
      <style jsx>{`
        .terms-page {
          min-height: 100vh;
          background-color: var(--bg-color);
          color: var(--text-color);
        }
        
        .terms-main {
          padding: 60px 0;
        }
        
        .policy-header {
          text-align: center;
          margin-bottom: 50px;
        }
        
        .policy-header h1 {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--primary-color);
          margin-bottom: 15px;
        }
        
        .policy-header p {
          font-size: 1.1rem;
          color: var(--text-secondary);
        }
        
        .policy-content {
          max-width: 800px;
          margin: 0 auto;
          background-color: var(--card-bg);
          border-radius: 15px;
          padding: 40px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
        }
        
        .last-updated {
          font-size: 0.9rem;
          color: var(--text-tertiary);
          text-align: right;
          margin-bottom: 30px;
        }
        
        .terms-intro {
          margin-bottom: 30px;
        }
        
        .terms-intro p {
          font-size: 1rem;
          line-height: 1.6;
          color: var(--text-secondary);
        }
        
        .policy-section {
          margin-bottom: 30px;
        }
        
        .policy-section h2 {
          font-size: 1.4rem;
          font-weight: 600;
          color: var(--text-color);
          margin-bottom: 15px;
        }
        
        .policy-section p {
          font-size: 1rem;
          line-height: 1.6;
          color: var(--text-secondary);
          margin-bottom: 15px;
        }
        
        .policy-section ol,
        .policy-section ul {
          margin-bottom: 15px;
          padding-left: 20px;
        }
        
        .policy-section li {
          font-size: 1rem;
          line-height: 1.6;
          color: var(--text-secondary);
          margin-bottom: 10px;
        }
        
        .policy-section ul li {
          list-style-type: disc;
        }
        
        .policy-section ol li {
          list-style-type: decimal;
        }
        
        .policy-section ol > li > ul {
          margin-top: 10px;
        }
        
        .policy-note {
          background-color: var(--bg-hover);
          padding: 15px;
          border-radius: 8px;
          margin-top: 30px;
        }
        
        .policy-note p {
          font-size: 0.9rem;
          color: var(--text-tertiary);
          margin: 0;
          text-align: center;
        }
        
        @media (max-width: 768px) {
          .policy-header h1 {
            font-size: 2rem;
          }
          
          .policy-content {
            padding: 25px;
          }
          
          .policy-section h2 {
            font-size: 1.3rem;
          }
        }
      `}</style>
    </div>
  );
};

export default TermsPage; 