import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/FAQ.css';

const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  const faqData = [
    {
      question: "사주 분석이란 무엇인가요?",
      answer: `사주 분석은 태어난 연, 월, 일, 시를 기반으로 하여 개인의 타고난 기질과 운명의 흐름을 파악하는 동양 철학의 한 방법입니다. 사주포춘은 전통적인 사주 이론에 현대적인 AI 기술을 접목하여 더욱 정확하고 유용한 분석 결과를 제공합니다.`
    },
    {
      question: "정확한 분석을 위해 필요한 정보는 무엇인가요?",
      answer: `정확한 생년월일과 태어난 시간이 가장 중요합니다. 시간을 모르시는 경우에도 기본적인 분석은 가능하지만, 더 정확한 결과를 위해서는 태어난 시간까지 입력해주시는 것이 좋습니다. 또한 성별과 주요 관심사를 입력하시면 더 맞춤화된 분석을 받으실 수 있습니다.`
    },
    {
      question: "사주 분석 결과는 얼마나 정확한가요?",
      answer: `사주포춘의 AI는 10만 건 이상의 사주 데이터를 학습하여 약 92% 이상의 정확도를 보이고 있습니다. 하지만 사주 분석은 타고난 기질과 잠재적 가능성을 보여주는 것으로, 개인의 노력과 선택에 따라 결과는 달라질 수 있습니다. 사주 분석은 미래를 예언하는 것이 아닌, 더 나은 결정을 내리기 위한 참고 자료로 활용하시는 것이 좋습니다.`
    },
    {
      question: "개인정보는 안전하게 보호되나요?",
      answer: `네, 사주포춘은 사용자의 개인정보 보호를 최우선으로 생각합니다. 모든 데이터는 암호화되어 저장되며, 분석 목적으로만 사용됩니다. 입력하신 정보는 제3자와 절대 공유하지 않으며, 원하시면 언제든지 데이터 삭제를 요청하실 수 있습니다.`
    },
    {
      question: "무료 분석과 유료 분석의 차이점은 무엇인가요?",
      answer: `무료 분석은 기본적인 사주 정보와 간략한 운세 요약을 제공합니다. 유료 서비스는 더 자세한 성격 분석, 직업 적합도, 대인관계 분석, 월별 상세 운세, 인생의 주요 전환점 예측 등 심층적인 정보를 포함합니다. 또한 유료 회원은 정기적인 운세 업데이트와 개인 맞춤형 조언을 받아보실 수 있습니다.`
    },
    {
      question: "결제 후 환불이 가능한가요?",
      answer: `디지털 콘텐츠의 특성상 결제 후 제공된 분석 서비스는 환불이 불가능합니다. 자세한 환불 정책은 '환불 정책' 페이지에서 확인하실 수 있습니다. 서비스에 대한 궁금한 점은 결제 전에 고객센터로 문의해 주시기 바랍니다.`
    }
  ];

  return (
    <div className="faq-page">
      <Header />
      
      <div className="faq-container">
        <div className="faq-header">
          <h1>자주 묻는 질문</h1>
          <p>사주 분석에 대해 궁금한 점이 있으신가요?</p>
        </div>
        
        <div className="faq-search">
          <div className="search-container">
            <i className="fas fa-search search-icon"></i>
            <input type="text" placeholder="질문 검색하기" className="search-input" />
          </div>
        </div>
        
        <div className="faq-categories">
          <button className="category-button active">전체</button>
          <button className="category-button">서비스 이용</button>
          <button className="category-button">결제 및 환불</button>
          <button className="category-button">계정 관리</button>
        </div>
        
        <div className="faq-questions">
          {faqData.map((faq, index) => (
            <div 
              className={`faq-item ${activeQuestion === index ? 'active' : ''}`} 
              key={index}
              onClick={() => toggleQuestion(index)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <div className="question-icon">
                  <i className={`fas fa-chevron-${activeQuestion === index ? 'up' : 'down'}`}></i>
                </div>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="faq-cta">
          <div className="cta-container">
            <div className="cta-content">
              <h2>지금 바로 무료로 사주 분석을 받아보세요</h2>
              <p>단 5분 안에 당신의 타고난 기질과 운명의 흐름을 파악할 수 있습니다.</p>
              <Link to="/analysis" className="cta-button">
                무료 사주 분석 받기
                <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
            <div className="cta-image">
              <img src="/images/fortune-illustration.png" alt="사주 분석 일러스트" />
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default FAQ; 