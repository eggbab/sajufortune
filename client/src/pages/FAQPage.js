import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/FAQ.css';

const FAQPage = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [activeFaq, setActiveFaq] = useState(null);
  
  // FAQ 카테고리 및 질문 데이터
  const faqData = {
    general: [
      {
        question: '사주 분석은 어떤 원리로 이루어지나요?',
        answer: '사주 분석은 태어난 연, 월, 일, 시를 기준으로 형성된 에너지의 구성과 흐름을 분석하여 개인의 타고난 기질과 잠재력, 인생의 방향성을 읽어내는 동양철학의 지혜입니다. 음양오행의 원리를 기반으로 하여 사람의 운명과 성격, 적성 등을 분석합니다.'
      },
      {
        question: '사주 분석 결과는 얼마나 정확한가요?',
        answer: '사주 분석은 동양철학의 오랜 지혜를 기반으로 하며, 개인의 타고난 기질과 잠재력, 인생의 흐름을 상당히 정확하게 예측합니다. 그러나 모든 미래를 절대적으로 예측하는 것은 아니며, 선택과 노력에 따라 운명은 바뀔 수 있습니다. 일반적으로 70-80%의 정확도를 보인다고 할 수 있습니다.'
      },
      {
        question: '태어난 시간을 모르는 경우에도 분석이 가능한가요?',
        answer: '네, 가능합니다. 태어난 시간을 모르는 경우 시간을 제외한 연월일 데이터만으로 분석을 진행합니다. 다만, 시간을 알 수 없는 경우 일부 세부적인 분석(사주의 시주 분석 등)이 제한될 수 있으며, 약 90%의 정보를 제공받으실 수 있습니다.'
      },
      {
        question: '사주 분석을 받기 위해 어떤 정보가 필요한가요?',
        answer: '기본적으로 생년월일과 태어난 시간이 필요합니다. 정확한 분석을 위해서는 음력이 아닌 양력 생년월일과 정확한 출생 시간을 알고 계시는 것이 좋습니다. 시간을 모르시는 경우에도 연월일만으로 분석이 가능합니다.'
      },
      {
        question: '사주 분석과 별자리 운세의 차이점은 무엇인가요?',
        answer: '사주 분석은 동양의 음양오행 철학을 바탕으로 하는 운명학으로, 태어난 연, 월, 일, 시의 에너지 구성을 분석합니다. 반면 별자리 운세는 서양의 점성술에 기반하여 태양이 지나는 황도대의 별자리를 중심으로 분석합니다. 사주는 더 복합적인 요소들을 고려하여 보다 깊이 있는 분석을 제공하는 경향이 있습니다.'
      }
    ],
    service: [
      {
        question: '결제 후 분석 결과를 받기까지 얼마나 걸리나요?',
        answer: '기본 및 프리미엄 사주 분석은 자동화된 시스템을 통해 분석되어 결제 완료 후 10분에서 30분 이내에 결과를 받아보실 수 있습니다. VIP 패키지의 경우, 전문가 분석이 포함되어 있어 최대 48시간이 소요될 수 있습니다. 자세한 내용은 결제 시 안내됩니다.'
      },
      {
        question: '패키지 간의 주요 차이점은 무엇인가요?',
        answer: '기본 패키지는 간단한 사주 정보와 올해의 운세를 제공합니다. 프리미엄 패키지는 더 상세한 분석과 10년 운세, 다양한 영역별 분석이 포함됩니다. VIP 패키지는 전문가의 1:1 상담과 평생 사주 정보, 맞춤형 개운법 등이 추가됩니다. 패키지 비교표를 통해 더 자세한 차이점을 확인하실 수 있습니다.'
      },
      {
        question: '결과를 받아본 후 추가 질문이 있으면 어떻게 하나요?',
        answer: '기본 패키지는 추가 질문 서비스가 포함되어 있지 않습니다. 프리미엄 패키지는 이메일로 2회의 추가 질문이 가능하며, VIP 패키지는 전문가와의 1:1 상담(30분)이 포함되어 있어 더 자세한 질문과 답변을 받으실 수 있습니다. 추가 상담은 별도 요금으로 제공됩니다.'
      },
      {
        question: '분석 결과가 마음에 들지 않을 경우 환불이 가능한가요?',
        answer: '결제 후 7일 이내, 서비스를 이용하기 전이라면 100% 환불이 가능합니다. 서비스 이용 후에는 콘텐츠의 특성상 환불이 제한될 수 있으며, 부분 환불 또는 포인트 적립으로 보상해 드립니다. 자세한 내용은 환불 정책 페이지에서 확인하실 수 있습니다.'
      },
      {
        question: '결과는 어떤 형태로 받아볼 수 있나요?',
        answer: '기본 패키지는 텍스트 형태의 리포트로 제공됩니다. 프리미엄 패키지는 PDF 형식의 상세 리포트와 음성 해설이 함께 제공됩니다. VIP 패키지는 고품질 PDF 리포트, 음성 해설, 그리고 전문가의 맞춤형 조언이 함께 제공됩니다. 모든 결과는 이메일로 발송되며 마이페이지에서도 확인 가능합니다.'
      }
    ],
    technical: [
      {
        question: '개인정보는 어떻게 보호되나요?',
        answer: '당사는 고객의 개인정보 보호를 최우선으로 합니다. 모든 개인정보는 암호화되어 저장되며, 분석 목적으로만 사용됩니다. 제3자에게 정보를 제공하거나 판매하지 않으며, 개인정보 보호법을 철저히 준수합니다. 자세한 내용은 개인정보 처리방침 페이지에서 확인하실 수 있습니다.'
      },
      {
        question: '웹사이트에 회원가입을 해야만 서비스를 이용할 수 있나요?',
        answer: '회원가입 없이도 기본적인 서비스 이용은 가능합니다. 그러나 회원으로 가입하시면 분석 결과 저장, 할인 혜택, 정기 운세 업데이트 등 더 많은 혜택을 누리실 수 있습니다. 회원가입은 무료이며 간단한 이메일 인증만으로 완료됩니다.'
      },
      {
        question: '모바일 앱도 있나요?',
        answer: '네, iOS와 Android 모두에서 사용 가능한 모바일 앱을 제공하고 있습니다. 앱을 통해 더 편리하게 사주 분석 서비스를 이용하실 수 있으며, 실시간 알림을 통해 중요한 날짜와 운세 정보를 받아보실 수 있습니다.'
      },
      {
        question: '결제는 어떤 방식으로 할 수 있나요?',
        answer: '신용카드, 체크카드, 카카오페이, 네이버페이, 페이팔 등 다양한 결제 수단을 지원합니다. 모든 결제는 안전한 결제 게이트웨이를 통해 처리되며, SSL 암호화를 사용하여 개인 금융 정보를 보호합니다.'
      },
      {
        question: '계정 정보를 변경하고 싶을 때는 어떻게 해야 하나요?',
        answer: '로그인 후 마이페이지의 \'계정 설정\'에서 이메일, 비밀번호, 연락처 등의 계정 정보를 변경하실 수 있습니다. 변경 시 보안을 위해 추가 인증 절차가 필요할 수 있습니다.'
      }
    ]
  };
  
  // FAQ 아이템 토글
  const toggleFaq = (index) => {
    if (activeFaq === index) {
      setActiveFaq(null);
    } else {
      setActiveFaq(index);
    }
  };
  
  return (
    <div className="faq-page">
      <Header />
      
      <main>
        <section className="faq-hero">
          <div className="container">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              자주 묻는 질문
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              사주포춘 서비스 이용에 대한 궁금증을 해결해 드립니다
            </motion.p>
          </div>
          <div className="hero-bg-overlay"></div>
        </section>
        
        <section className="faq-content">
          <div className="container">
            <div className="faq-categories">
              <button 
                className={`category-btn ${activeCategory === 'general' ? 'active' : ''}`}
                onClick={() => setActiveCategory('general')}
              >
                <i className="fas fa-question-circle"></i> 일반 질문
              </button>
              <button 
                className={`category-btn ${activeCategory === 'service' ? 'active' : ''}`}
                onClick={() => setActiveCategory('service')}
              >
                <i className="fas fa-concierge-bell"></i> 서비스 안내
              </button>
              <button 
                className={`category-btn ${activeCategory === 'technical' ? 'active' : ''}`}
                onClick={() => setActiveCategory('technical')}
              >
                <i className="fas fa-cogs"></i> 기술 지원
              </button>
            </div>
            
            <div className="faq-list">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {faqData[activeCategory].map((faq, index) => (
                    <div 
                      key={index}
                      className={`faq-item ${activeFaq === index ? 'active' : ''}`}
                    >
                      <div 
                        className="faq-question"
                        onClick={() => toggleFaq(index)}
                      >
                        <h3>{faq.question}</h3>
                        <div className="faq-toggle">
                          <i className={`fas fa-chevron-${activeFaq === index ? 'up' : 'down'}`}></i>
                        </div>
                      </div>
                      {activeFaq === index && (
                        <motion.div 
                          className="faq-answer"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          transition={{ duration: 0.3 }}
                        >
                          <p>{faq.answer}</p>
                        </motion.div>
                      )}
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>
        
        <section className="contact-section">
          <div className="container">
            <div className="contact-content">
              <h2>원하는 답변을 찾지 못하셨나요?</h2>
              <p>고객센터에 문의하시면 24시간 이내에 답변해 드립니다.</p>
              <div className="contact-buttons">
                <a href="mailto:support@sajufortune.com" className="btn-email">
                  <i className="fas fa-envelope"></i> 이메일 문의
                </a>
                <a href="tel:02-123-4567" className="btn-call">
                  <i className="fas fa-phone-alt"></i> 전화 문의
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      
      <style jsx>{`
        .faq-page {
          min-height: 100vh;
          background-color: var(--bg-color);
          color: var(--text-color);
        }
        
        .faq-hero {
          position: relative;
          padding: 80px 0;
          text-align: center;
          background-color: var(--primary-color);
          color: white;
          margin-bottom: 60px;
          overflow: hidden;
        }
        
        .faq-hero h1 {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 20px;
          position: relative;
          z-index: 1;
        }
        
        .faq-hero p {
          font-size: 1.2rem;
          max-width: 600px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        
        .hero-bg-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(142, 68, 173, 0.8), rgba(41, 128, 185, 0.8));
          z-index: 0;
        }
        
        .faq-content {
          padding: 40px 0 80px;
        }
        
        .faq-categories {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }
        
        .category-btn {
          padding: 12px 25px;
          background-color: var(--card-bg);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 500;
          color: var(--text-color);
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .category-btn:hover {
          background-color: var(--bg-hover);
        }
        
        .category-btn.active {
          background-color: var(--primary-color);
          color: white;
          border-color: var(--primary-color);
        }
        
        .category-btn i {
          font-size: 1.1rem;
        }
        
        .faq-list {
          max-width: 800px;
          margin: 0 auto;
        }
        
        .faq-item {
          background-color: var(--card-bg);
          border-radius: 10px;
          overflow: hidden;
          margin-bottom: 20px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
        }
        
        .faq-item:hover {
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
        }
        
        .faq-item.active {
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        }
        
        .faq-question {
          padding: 20px 25px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
        }
        
        .faq-question h3 {
          font-size: 1.1rem;
          font-weight: 600;
          margin: 0;
          color: var(--text-color);
        }
        
        .faq-toggle {
          font-size: 1rem;
          color: var(--text-tertiary);
          transition: transform 0.3s ease;
        }
        
        .faq-item.active .faq-toggle {
          transform: rotate(180deg);
        }
        
        .faq-answer {
          padding: 0 25px 20px;
          overflow: hidden;
        }
        
        .faq-answer p {
          margin: 0;
          font-size: 1rem;
          line-height: 1.6;
          color: var(--text-secondary);
        }
        
        .contact-section {
          padding: 60px 0;
          background-color: var(--bg-hover);
          text-align: center;
        }
        
        .contact-content {
          max-width: 600px;
          margin: 0 auto;
        }
        
        .contact-content h2 {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 15px;
          color: var(--text-color);
        }
        
        .contact-content p {
          font-size: 1.1rem;
          color: var(--text-secondary);
          margin-bottom: 30px;
        }
        
        .contact-buttons {
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
        }
        
        .btn-email,
        .btn-call {
          padding: 15px 30px;
          display: flex;
          align-items: center;
          gap: 10px;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        
        .btn-email {
          background-color: var(--primary-color);
          color: white;
        }
        
        .btn-call {
          background-color: transparent;
          color: var(--primary-color);
          border: 1px solid var(--primary-color);
        }
        
        .btn-email:hover {
          background-color: #7d3c98;
          transform: translateY(-3px);
        }
        
        .btn-call:hover {
          background-color: var(--primary-light);
          transform: translateY(-3px);
        }
        
        @media (max-width: 768px) {
          .faq-hero h1 {
            font-size: 2.5rem;
          }
          
          .faq-hero p {
            font-size: 1.1rem;
          }
          
          .faq-question h3 {
            font-size: 1rem;
          }
          
          .contact-content h2 {
            font-size: 1.8rem;
          }
        }
        
        @media (max-width: 576px) {
          .faq-hero {
            padding: 60px 0;
          }
          
          .faq-hero h1 {
            font-size: 2rem;
          }
          
          .category-btn {
            padding: 10px 15px;
            font-size: 0.9rem;
          }
          
          .contact-buttons {
            flex-direction: column;
          }
          
          .btn-email,
          .btn-call {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};

export default FAQPage; 