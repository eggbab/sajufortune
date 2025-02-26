import React, { useState } from 'react';
import '../styles/HomePage.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  
  const faqItems = [
    {
      question: '사주 분석이란 무엇인가요?',
      answer: '사주 분석은 태어난 연, 월, 일, 시를 기반으로 하여 개인의 타고난 기질과 운명의 흐름을 파악하는 동양 철학의 한 방법입니다. 사주포춘은 전통적인 사주 이론에 현대적인 AI 기술을 접목하여 더욱 정확하고 유용한 분석 결과를 제공합니다.'
    },
    {
      question: '정확한 분석을 위해 필요한 정보는 무엇인가요?',
      answer: '정확한 생년월일과 태어난 시간이 가장 중요합니다. 시간을 모르시는 경우에도 기본적인 분석은 가능하지만, 더 정확한 결과를 위해서는 태어난 시간까지 입력해주시는 것이 좋습니다. 또한 성별과 주요 관심사를 입력하시면 더 맞춤화된 분석을 받으실 수 있습니다.'
    },
    {
      question: '사주 분석 결과는 얼마나 정확한가요?',
      answer: '사주포춘의 AI는 10만 건 이상의 사주 데이터를 학습하여 약 92% 이상의 정확도를 보이고 있습니다. 하지만 사주 분석은 타고난 기질과 잠재적 가능성을 보여주는 것으로, 개인의 노력과 선택에 따라 결과는 달라질 수 있습니다. 사주 분석은 미래를 예언하는 것이 아닌, 더 나은 결정을 내리기 위한 참고 자료로 활용하시는 것이 좋습니다.'
    },
    {
      question: '개인정보는 안전하게 보호되나요?',
      answer: '네, 사주포춘은 사용자의 개인정보 보호를 최우선으로 생각합니다. 모든 데이터는 암호화되어 저장되며, 분석 목적으로만 사용됩니다. 입력하신 정보는 제3자와 절대 공유하지 않으며, 원하시면 언제든지 데이터 삭제를 요청하실 수 있습니다.'
    }
  ];
  
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  
  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">자주 묻는 질문</h2>
        <div className="faq-list">
          {faqItems.map((item, index) => (
            <div className="faq-item" key={index}>
              <div 
                className="faq-question"
                onClick={() => toggleAccordion(index)}
              >
                {item.question}
                <i className={`fas fa-chevron-${activeIndex === index ? 'up' : 'down'}`}></i>
              </div>
              <div 
                className="faq-answer" 
                style={{ 
                  display: activeIndex === index ? 'block' : 'none'
                }}
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ; 