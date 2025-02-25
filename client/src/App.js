import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './index.css';

function App() {
  const history = useHistory();
  const [formData, setFormData] = useState({
    name: '',
    birthDate: '',
    birthTime: '',
    gender: '남성',
    concern: '연애/결혼'
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.birthDate) {
      setError('이름과 생년월일을 입력해주세요.');
      return;
    }
    
    setLoading(true);
    setError('');
    
    try {
      // 서버 API 호출 대신 임시 데이터 사용
      setTimeout(() => {
        const mockData = {
          dominantElement: "화",
          personality: "열정적이고 활동적인 성격입니다. 창의력이 뛰어나며 새로운 아이디어를 내는 것을 좋아합니다.",
          career: "창의적인 분야나 리더십을 발휘할 수 있는 직업이 적합합니다.",
          relationship: "열정적인 연애 스타일을 가지고 있으며, 파트너에게 헌신적입니다.",
          wealth: "재물운은 양호하나 충동적인 소비에 주의해야 합니다.",
          health: "심장과 혈액순환에 관련된 건강 문제에 주의가 필요합니다.",
          yearPillar: "갑진",
          monthPillar: "병오",
          dayPillar: "정해",
          hourPillar: "무자",
          advice: "균형 잡힌 생활과 감정 조절이 중요합니다."
        };
        
        // 결과 페이지로 이동
        history.push('/result', {
          userData: formData,
          sajuResult: mockData
        });
        
        setLoading(false);
      }, 3000);
      
    } catch (error) {
      console.error('사주 분석 오류:', error);
      setError('사주 분석 중 오류가 발생했습니다. 다시 시도해주세요.');
      setLoading(false);
    }
  };

  // 사용자 리뷰 데이터
  const userReviews = [
    {
      name: "김태영",
      age: 28,
      content: "정확도에 깜짝 놀랐어요! 제 성격과 진로에 대한 분석이 너무 정확해서 친구들에게도 추천했습니다.",
      rating: 5
    },
    {
      name: "이지현",
      age: 34,
      content: "연애운에 대한 분석이 매우 도움되었어요. 실제로 분석 결과대로 좋은 인연을 만났습니다.",
      rating: 4.5
    },
    {
      name: "박민수",
      age: 42,
      content: "직업 변경을 고민하던 중에 사주포춘의 분석을 참고했어요. 지금은 분석 결과에서 추천해준 분야에서 만족스럽게 일하고 있습니다.",
      rating: 5
    }
  ];

  // 다른 사용자의 사주 분석 결과 샘플
  const sampleResults = [
    {
      name: "30대 여성",
      previewText: "물의 기운이 강한 당신은 타고난 직관력과 감수성을 가지고 있습니다. 특히 대인관계에서 뛰어난 공감 능력을 발휘하며...",
      fullText: "물의 기운이 강한 당신은 타고난 직관력과 감수성을 가지고 있습니다. 특히 대인관계에서 뛰어난 공감 능력을 발휘하며, 주변 사람들에게 정서적 안정감을 제공합니다. 2024년에는 특히 학습과 커뮤니케이션 분야에서 좋은 기회가 올 것으로 보입니다. 3월과 9월에 중요한 결정을 내릴 일이 있을 수 있으니 신중하게 접근하세요.",
      dominantElement: "수(水)"
    },
    {
      name: "40대 남성",
      previewText: "금의 기운이 두드러지는 당신은 논리적 사고와 분석력이 뛰어납니다. 정확하고 체계적인 일 처리 방식으로 주변의 신뢰를...",
      fullText: "금의 기운이 두드러지는 당신은 논리적 사고와 분석력이 뛰어납니다. 정확하고 체계적인 일 처리 방식으로 주변의 신뢰를 얻고 있습니다. 2024년에는 재물운이 상승할 조짐이 보이며, 특히 투자나 자산 관리에 좋은 시기입니다. 다만 5월과 11월에는 건강에 특별한 주의가 필요하니, 무리한 활동은 피하고 충분한 휴식을 취하세요.",
      dominantElement: "금(金)"
    },
    {
      name: "20대 남성",
      previewText: "불의 기운이 넘치는 당신은 열정과 창의력이 풍부합니다. 새로운 도전에 두려움 없이 나아가는 용기가 있으며...",
      fullText: "불의 기운이 넘치는 당신은 열정과 창의력이 풍부합니다. 새로운 도전에 두려움 없이 나아가는 용기가 있으며, 리더십 자질을 타고났습니다. 2024년은 인간관계에서 큰 발전이 있을 해로, 특히 4월과 8월에 중요한 인연을 만날 가능성이 높습니다. 다만 감정적으로 불안정해질 수 있는 7월에는 마음의 균형을 유지하는 데 집중하세요.",
      dominantElement: "화(火)"
    }
  ];

  return (
    <div className="home-page">
      {/* 헤더 섹션 */}
      <header className="site-header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <a href="/">사주포춘</a>
            </div>
            <nav className="main-nav">
              <ul>
                <li><a href="/">홈</a></li>
                <li><a href="/about">소개</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main>
        {/* 히어로 섹션 */}
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <h1>당신의 운명을 AI가 분석합니다</h1>
              <p>사주팔자를 기반으로 한 정확한 운세 분석, 지금 바로 무료로 체험해보세요.</p>
              <a href="#saju-form" className="btn-primary">무료 사주 분석 받기</a>
            </div>
            <div className="hero-image">
              <div className="image-placeholder"></div>
            </div>
          </div>
        </section>

        {/* AI 사주 설명 섹션 - 확장된 버전 */}
        <section className="ai-explanation">
          <div className="container">
            <h2>AI 사주 분석이란?</h2>
            <p className="section-subtitle">수천 년의 동양 철학과 최첨단 AI 기술의 만남</p>
            
            <div className="ai-intro">
              <p className="ai-description">
                사주팔자(四柱八字)는 동양에서 수천 년 동안 이어져 온 운명 해석 체계로, 태어난 년·월·일·시의 네 기둥(四柱)에 담긴 여덟 글자(八字)를 분석하여 타고난 기질과 운명의 흐름을 파악합니다. 사주포춘은 이러한 전통적인 사주 해석 체계에 인공지능 기술을 접목하여 더욱 정확하고 객관적인 분석을 제공합니다.
              </p>
              <p className="ai-advantage">
                기존의 사주 분석은 해석자의 주관적 경험과 지식에 크게 의존하여 일관성이 부족했습니다. 사주포춘의 AI는 수만 건의 사주 데이터와 해석 사례를 학습하여, 개인의 사주를 객관적이고 체계적으로 분석합니다. 특히 현대 사회의 맥락을 반영한 실용적인 조언을 제공하여 실제 삶에 적용할 수 있는 인사이트를 얻을 수 있습니다.
              </p>
            </div>
            
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">
                  <span role="img" aria-label="accuracy">🎯</span>
                </div>
                <h3>90% 이상의 정확도</h3>
                <p>수천 년간 축적된 사주 데이터와 현대 AI 기술의 결합으로 놀라운 정확도를 제공합니다. 수만 건의 사례를 학습한 AI가 당신의 운명을 정확하게 해석합니다.</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">
                  <span role="img" aria-label="personalized">👤</span>
                </div>
                <h3>완전 맞춤형 분석</h3>
                <p>단순한 별자리나 생년월일이 아닌, 태어난 년·월·일·시를 모두 고려한 정밀한 분석으로 당신만의 고유한 사주를 해석합니다. 성별, 관심사에 따른 맞춤형 조언까지 제공합니다.</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">
                  <span role="img" aria-label="comprehensive">🔍</span>
                </div>
                <h3>다차원적 해석</h3>
                <p>성격과 기질, 적성과 재능, 사랑과 인간관계, 재물과 직업, 건강 등 삶의 모든 영역을 심층적으로 분석합니다. 현재의 상황뿐만 아니라 미래의 운세 흐름까지 파악할 수 있습니다.</p>
              </div>
            </div>
            
            <div className="ai-comparison">
              <h3>전통 사주 해석 vs AI 사주 분석</h3>
              <div className="comparison-table">
                <div className="comparison-item">
                  <h4>전통 사주 해석</h4>
                  <ul>
                    <li>해석자의 주관적 경험에 의존</li>
                    <li>해석자에 따라 결과가 크게 달라짐</li>
                    <li>높은 비용과 시간 소요</li>
                    <li>현대적 맥락 반영이 부족할 수 있음</li>
                  </ul>
                </div>
                <div className="comparison-item">
                  <h4>AI 사주 분석</h4>
                  <ul>
                    <li>객관적 데이터 기반 분석</li>
                    <li>일관된 해석 기준 적용</li>
                    <li>빠른 분석과 저렴한 비용</li>
                    <li>현대적 맥락과 실용적 조언 제공</li>
                    <li>지속적인 학습으로 정확도 향상</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* 다른 사용자의 결과 미리보기 섹션 */}
        <section className="sample-results">
          <div className="container">
            <h2>다른 사용자들의 사주 분석 결과</h2>
            <p className="section-subtitle">실제 사용자들의 사주 분석 결과를 살펴보세요</p>
            
            <div className="results-grid">
              {sampleResults.map((result, index) => (
                <div className="result-card" key={index}>
                  <div className="result-header">
                    <h3>{result.name}</h3>
                    <div className="dominant-element">{result.dominantElement}</div>
                  </div>
                  <div className="result-preview">
                    <p>{result.previewText}</p>
                    <div className="blur-overlay"></div>
                  </div>
                  <div className="result-cta">
                    <a href="#saju-form" className="btn-secondary">나도 분석받기</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 서비스 장점 소개 섹션 */}
        <section className="service-benefits">
          <div className="container">
            <h2>왜 사주포춘을 선택해야 할까요?</h2>
            <p className="section-subtitle">수많은 사용자들이 사주포춘을 선택한 이유</p>
            
            <div className="benefits-grid">
              <div className="benefit-item">
                <div className="benefit-icon">🧠</div>
                <h3>과학적 기반</h3>
                <p>단순한 점술이 아닌, 심리학과 빅데이터 분석을 결합한 과학적 접근으로 더욱 신뢰할 수 있는 결과를 제공합니다.</p>
              </div>
              
              <div className="benefit-item">
                <div className="benefit-icon">🔒</div>
                <h3>100% 안전한 개인정보</h3>
                <p>사용자의 모든 정보는 철저하게 암호화되어 보호됩니다. 분석 후 결과만 제공하고 개인정보는 절대 외부에 공유되지 않습니다.</p>
              </div>
              
              <div className="benefit-item">
                <div className="benefit-icon">⚡</div>
                <h3>즉각적인 분석</h3>
                <p>정보 입력 후 단 몇 초 만에 고급 AI 알고리즘이 당신의 사주를 심층 분석하여 결과를 제공합니다.</p>
              </div>
              
              <div className="benefit-item">
                <div className="benefit-icon">💡</div>
                <h3>실용적인 조언</h3>
                <p>추상적인 운세가 아닌, 실생활에서 실천할 수 있는 구체적이고 실용적인 조언을 제공합니다.</p>
              </div>
              
              <div className="benefit-item">
                <div className="benefit-icon">📈</div>
                <h3>지속적인 업데이트</h3>
                <p>최신 데이터와 알고리즘으로 지속적으로 업데이트되어 더욱 정확하고 유용한 분석을 제공합니다.</p>
              </div>
              
              <div className="benefit-item">
                <div className="benefit-icon">🌈</div>
                <h3>긍정적 가이드</h3>
                <p>단순히 운명을 예언하는 것이 아닌, 긍정적인 변화와 성장을 위한 가이드를 제공합니다.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 사용자 후기 섹션 */}
        <section className="testimonials">
          <div className="container">
            <h2>사용자 후기</h2>
            <p className="section-subtitle">실제 사용자들의 생생한 후기를 확인하세요</p>
            
            <div className="testimonials-slider">
              {userReviews.map((review, index) => (
                <div className="testimonial-card" key={index}>
                  <div className="testimonial-rating">
                    {"★".repeat(Math.floor(review.rating))}
                    {review.rating % 1 !== 0 && "☆"}
                  </div>
                  <p className="testimonial-content">"{review.content}"</p>
                  <div className="testimonial-author">
                    <p className="author-name">{review.name}, {review.age}세</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 사주 입력 폼 섹션 */}
        <section id="saju-form" className="saju-form">
          <div className="container">
            <h2>무료 사주 분석</h2>
            <p className="section-subtitle">아래 정보를 입력하시면 AI가 당신의 사주를 분석해드립니다</p>
            
            <div className="form-container">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">이름</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="이름을 입력하세요"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="birthDate">생년월일</label>
                  <input
                    type="date"
                    id="birthDate"
                    name="birthDate"
                    value={formData.birthDate}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="birthTime">태어난 시간 (선택사항)</label>
                  <input
                    type="time"
                    id="birthTime"
                    name="birthTime"
                    value={formData.birthTime}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="gender">성별</label>
                  <select
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                  >
                    <option value="남성">남성</option>
                    <option value="여성">여성</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="concern">주요 관심사</label>
                  <select
                    id="concern"
                    name="concern"
                    value={formData.concern}
                    onChange={handleChange}
                  >
                    <option value="연애/결혼">연애/결혼</option>
                    <option value="직업/진로">직업/진로</option>
                    <option value="재물/투자">재물/투자</option>
                    <option value="건강">건강</option>
                    <option value="대인관계">대인관계</option>
                  </select>
                </div>
                
                {error && <div className="error-message">{error}</div>}
                
                <button type="submit" className="btn-primary" disabled={loading}>
                  {loading ? (
                    <div className="loading-container">
                      <div className="loading-spinner"></div>
                      <span>분석 중...</span>
                    </div>
                  ) : (
                    '무료 사주 분석 받기'
                  )}
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* FAQ 섹션 */}
        <section className="faq">
          <div className="container">
            <h2>자주 묻는 질문</h2>
            <p className="section-subtitle">사주포춘에 대한 궁금증을 해결해드립니다</p>
            
            <div className="faq-list">
              <div className="faq-item">
                <h3>사주 분석은 어떻게 이루어지나요?</h3>
                <p>사주팔자(四柱八字)는 태어난 년, 월, 일, 시를 기준으로 분석합니다. 각 요소가 나타내는 오행(木, 火, 土, 金, 水)의 조합을 통해 개인의 성격, 적성, 운명의 흐름을 파악합니다. 사주포춘은 이 전통적인 체계에 AI 기술을 접목하여 더 정확하고 객관적인 분석 결과를 제공합니다.</p>
              </div>
              
              <div className="faq-item">
                <h3>정확한 분석을 위해 필요한 정보는 무엇인가요?</h3>
                <p>정확한 생년월일과 태어난 시간이 가장 중요합니다. 시간을 모르시는 경우에도 기본적인 분석은 가능하지만, 더 정확한 결과를 위해서는 태어난 시간까지 입력해주시는 것이 좋습니다. 또한 성별과 주요 관심사를 입력하시면 더 맞춤화된 분석을 받으실 수 있습니다.</p>
              </div>
              
              <div className="faq-item">
                <h3>무료 분석과 프리미엄 분석의 차이점은 무엇인가요?</h3>
                <p>무료 분석은 기본적인 성격 특성과 주요 운세 흐름에 대한 개요를 제공합니다. 프리미엄 분석은 더 자세한 사주 해석과 함께 월별 운세, 대인관계 상성 분석, 재물운과 건강운에 대한 심층 분석, 그리고 맞춤형 조언을 포함합니다. 또한 프리미엄 사용자에게는 개인 맞춤형 부적 이미지가 제공됩니다.</p>
              </div>
              
              <div className="faq-item">
                <h3>사주 분석 결과는 얼마나 정확한가요?</h3>
                <p>사주포춘의 AI는 수만 건의 사주 데이터를 학습하여 약 90% 이상의 정확도를 보이고 있습니다. 하지만 사주 분석은 타고난 기질과 잠재적 가능성을 보여주는 것으로, 개인의 노력과 선택에 따라 결과는 달라질 수 있습니다. 사주 분석은 미래를 예언하는 것이 아닌, 더 나은 결정을 내리기 위한 참고 자료로 활용하시는 것이 좋습니다.</p>
              </div>
              
              <div className="faq-item">
                <h3>개인정보는 안전하게 보호되나요?</h3>
                <p>네, 사주포춘은 사용자의 개인정보 보호를 최우선으로 생각합니다. 모든 데이터는 암호화되어 저장되며, 분석 목적으로만 사용됩니다. 입력하신 정보는 제3자와 절대 공유하지 않으며, 원하시면 언제든지 데이터 삭제를 요청하실 수 있습니다.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA 섹션 */}
        <section className="cta">
          <div className="container">
            <h2>지금 바로 무료로 사주 분석을 받아보세요</h2>
            <p>당신의 운명을 알아보는 첫 걸음, 사주포춘과 함께하세요. 단 5분 만에 당신의 타고난 기질과 운명의 흐름을 파악할 수 있습니다.</p>
            <a href="#saju-form" className="btn-primary">무료 사주 분석 받기</a>
          </div>
        </section>
      </main>

      {/* 푸터 */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <h3>사주포춘</h3>
              <p>AI 기반 사주 분석 서비스</p>
            </div>
            <div className="footer-links">
              <h4>바로가기</h4>
              <ul>
                <li><a href="/">홈</a></li>
                <li><a href="/about">소개</a></li>
                <li><a href="#saju-form">사주 분석</a></li>
              </ul>
            </div>
            <div className="footer-contact">
              <h4>문의하기</h4>
              <p>이메일: vmeandbeme@gmail.com</p>
            </div>
            <div className="footer-company">
              <h4>회사 정보</h4>
              <p>상호명: 사주포춘</p>
              <p>대표: 김우진</p>
              <p>사업자등록번호: 426-62-00632</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2023 사주포춘. All rights reserved.</p>
            <p><a href="/privacy">개인정보처리방침</a> | <a href="/terms">이용약관</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;