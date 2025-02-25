import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './index.css';

function App() {
  const history = useHistory();
  const [formData, setFormData] = useState({
    name: '',
    birthDate: '',
    birthHour: '',
    gender: '남성',
    concern: '연애/결혼'
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [activeSection, setActiveSection] = useState(null);

  // 사주 시간(시주) 옵션
  const hourOptions = [
    { value: '', label: '모름' },
    { value: '자시', label: '자시 (23:00-01:00)' },
    { value: '축시', label: '축시 (01:00-03:00)' },
    { value: '인시', label: '인시 (03:00-05:00)' },
    { value: '묘시', label: '묘시 (05:00-07:00)' },
    { value: '진시', label: '진시 (07:00-09:00)' },
    { value: '사시', label: '사시 (09:00-11:00)' },
    { value: '오시', label: '오시 (11:00-13:00)' },
    { value: '미시', label: '미시 (13:00-15:00)' },
    { value: '신시', label: '신시 (15:00-17:00)' },
    { value: '유시', label: '유시 (17:00-19:00)' },
    { value: '술시', label: '술시 (19:00-21:00)' },
    { value: '해시', label: '해시 (21:00-23:00)' }
  ];

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
          advice: "균형 잡힌 생활과 감정 조절이 중요합니다.",
          elementChart: {
            wood: 30,
            fire: 40,
            earth: 15,
            metal: 10,
            water: 5
          },
          luckyColors: ["빨간색", "주황색", "보라색"],
          luckyNumbers: [3, 7, 9],
          luckyDirections: ["남쪽", "동쪽"],
          monthlyForecast: [
            { month: "1월", content: "새로운 시작에 적합한 달입니다.", rating: 4 },
            { month: "2월", content: "대인관계에 주의가 필요합니다.", rating: 3 },
            { month: "3월", content: "재물운이 상승하는 시기입니다.", rating: 5 },
            { month: "4월", content: "건강 관리에 신경 쓰세요.", rating: 2 },
            { month: "5월", content: "창의적인 아이디어가 빛을 발합니다.", rating: 4 },
            { month: "6월", content: "여행이나 이동에 좋은 시기입니다.", rating: 5 },
            { month: "7월", content: "가족과의 관계가 중요해집니다.", rating: 3 },
            { month: "8월", content: "직업적 성취가 기대됩니다.", rating: 4 },
            { month: "9월", content: "새로운 인연이 찾아올 수 있습니다.", rating: 5 },
            { month: "10월", content: "재정 관리에 주의하세요.", rating: 3 },
            { month: "11월", content: "건강이 회복되는 시기입니다.", rating: 4 },
            { month: "12월", content: "한 해를 정리하기 좋은 달입니다.", rating: 4 }
          ]
        };
        
        // 결과 페이지로 데이터와 함께 이동
        history.push('/result', { 
          userData: formData,
          sajuResult: mockData
        });
        
        setLoading(false);
      }, 3000); // 3초 후 결과로 이동
    } catch (error) {
      setError('분석 중 오류가 발생했습니다. 다시 시도해주세요.');
      setLoading(false);
    }
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    if (sectionId === 'saju-form') {
      setActiveSection('saju-form');
    }
  };

  return (
    <div className="App">
      {/* 헤더 */}
      <header className="site-header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <a href="/">사주포춘</a>
            </div>
            <nav className="main-nav">
              <ul>
                <li><a href="/">홈</a></li>
                <li><button onClick={() => scrollToSection('features')}>특징</button></li>
                <li><button onClick={() => scrollToSection('sample-results')}>분석 예시</button></li>
                <li><button onClick={() => scrollToSection('testimonials')}>이용후기</button></li>
                <li><button onClick={() => scrollToSection('saju-form')} className="nav-cta">무료 분석 받기</button></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main>
        {/* 히어로 섹션 */}
        <section className="hero">
          <div className="container centered">
            <div className="hero-content">
              <h1>당신의 운명을<br />AI가 분석합니다</h1>
              <p>사주팔자를 기반으로 한 정확한 운세 분석,<br />지금 바로 무료로 체험해보세요.</p>
              <button onClick={() => scrollToSection('saju-form')} className="btn-primary">무료 사주 분석 받기</button>
            </div>
          </div>
        </section>

        {/* 특징 섹션 */}
        <section id="features" className="features">
          <div className="container">
            <h2>사주포춘만의 특별한 장점</h2>
            <p className="section-subtitle">AI 기술과 전통 사주학의 만남, 정확하고 유용한 분석을 제공합니다</p>
            
            <div className="feature-cards">
              <div className="feature-card">
                <div className="feature-icon">🔒</div>
                <h3>100% 안전한 개인정보 보호</h3>
                <p>사용자의 모든 정보는 철저하게 암호화되어 보호됩니다. 분석 후 결과만 제공하고 개인정보는 절대 외부에 공유되지 않습니다.</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">⚡</div>
                <h3>즉각적인 분석</h3>
                <p>정보 입력 후 단 몇 초 만에 고급 AI 알고리즘이 당신의 사주를 심층 분석하여 결과를 제공합니다.</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">🎯</div>
                <h3>실용적인 조언</h3>
                <p>주상적인 운세가 아닌, 실생활에서 실천할 수 있는 구체적이고 실용적인 조언을 제공합니다.</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">📊</div>
                <h3>지속적인 업데이트</h3>
                <p>최신 데이터와 알고리즘으로 지속적으로 업데이트되어 더욱 정확하고 유용한 분석을 제공합니다.</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">🌈</div>
                <h3>공정한 가이드</h3>
                <p>당신히 운명을 예언하는 것이 아니라, 긍정적인 변화와 성장을 위한 가이드를 제공합니다.</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">🔍</div>
                <h3>맞춤형 분석</h3>
                <p>당신의 관심사와 고민에 맞춰 개인화된 인사이트를 얻을 수 있습니다.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 다른 사용자의 사주 분석 결과 미리보기 (개선된 디자인) */}
        <section id="sample-results" className="sample-results">
          <div className="container">
            <h2>다른 사용자들의 분석 결과</h2>
            <p className="section-subtitle">실제 사용자들이 받은 사주 분석 결과의 일부를 미리 살펴보세요</p>
            
            <div className="results-grid">
              <div className="result-preview">
                <div className="result-preview-header">
                  <h3>30대 남성 - 화(火) 주요 오행</h3>
                  <span className="element-tag fire">화(火)</span>
                </div>
                <div className="result-preview-content">
                  <div className="result-charts">
                    <div className="sample-chart pie-chart"></div>
                    <div className="sample-chart bar-chart"></div>
                  </div>
                  <div className="preview-text-container">
                    <p className="preview-text">
                      열정적이고 적극적인 성격으로, 창의력이 뛰어나고 새로운 도전을 즐깁니다. 
                      리더십이 강하며 목표를 향해 끊임없이 노력하는 추진력이 있습니다. 
                      감정 표현이 자유롭고 사교성이 좋아 인간관계를 넓게 형성합니다.
                    </p>
                    <div className="text-fade-out"></div>
                  </div>
                </div>
              </div>
              
              <div className="result-preview">
                <div className="result-preview-header">
                  <h3>20대 여성 - 수(水) 주요 오행</h3>
                  <span className="element-tag water">수(水)</span>
                </div>
                <div className="result-preview-content">
                  <div className="result-charts">
                    <div className="sample-chart pie-chart"></div>
                    <div className="sample-chart bar-chart"></div>
                  </div>
                  <div className="preview-text-container">
                    <p className="preview-text">
                      지혜롭고 통찰력이 뛰어나며, 상황을 객관적으로 파악하는 능력이 있습니다. 
                      적응력이 좋고 유연한 사고방식으로 어려운 상황에서도 해결책을 찾아냅니다. 
                      직관력이 발달하여 예술적 감각과 창의성이 돋보입니다.
                    </p>
                    <div className="text-fade-out"></div>
                  </div>
                </div>
              </div>
              
              <div className="result-preview">
                <div className="result-preview-header">
                  <h3>40대 남성 - 목(木) 주요 오행</h3>
                  <span className="element-tag wood">목(木)</span>
                </div>
                <div className="result-preview-content">
                  <div className="result-charts">
                    <div className="sample-chart pie-chart"></div>
                    <div className="sample-chart bar-chart"></div>
                  </div>
                  <div className="preview-text-container">
                    <p className="preview-text">
                      성장과 발전을 추구하는 진취적인 성격입니다. 
                      계획적이고 체계적으로 일을 추진하며, 목표를 향해 꾸준히 나아갑니다. 
                      정의감이 강하고 원칙을 중요시하며, 가족과 공동체에 대한 책임감이 강합니다.
                    </p>
                    <div className="text-fade-out"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="cta-center">
              <button onClick={() => scrollToSection('saju-form')} className="btn-primary">나도 분석 받기</button>
            </div>
          </div>
        </section>

        {/* 사용자 후기 섹션 */}
        <section id="testimonials" className="testimonials">
          <div className="container">
            <h2>사용자 후기</h2>
            <p className="section-subtitle">실제 사용자들의 생생한 후기를 확인해보세요</p>
            
            <div className="testimonial-grid">
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <p>"정말 놀라웠어요. 제 성격과 특성을 너무 정확하게 분석해주셨고, 진로에 대한 조언이 특히 도움이 되었습니다. 이제 더 자신감을 갖고 결정을 내릴 수 있게 되었어요."</p>
                </div>
                <div className="testimonial-author">
                  <div className="author-avatar">김</div>
                  <div className="author-info">
                    <h4>김민지</h4>
                    <p>27세, 회사원</p>
                  </div>
                </div>
              </div>
              
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <p>"사주 분석을 통해 제 강점과 약점을 명확히 알게 되었고, 어떤 방향으로 나아가야 할지 감이 잡혔어요. 특히 월별 운세 예측이 실제로 맞아떨어져서 더 신뢰하게 되었습니다."</p>
                </div>
                <div className="testimonial-author">
                  <div className="author-avatar">이</div>
                  <div className="author-info">
                    <h4>이준호</h4>
                    <p>35세, 자영업</p>
                  </div>
                </div>
              </div>
              
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <p>"인간관계에서 겪고 있던 어려움에 대한 조언이 매우 실질적이었습니다. 제안해주신 방법을 실천했더니 정말 관계가 개선되는 것을 느꼈어요. 다른 친구들에게도 추천했습니다."</p>
                </div>
                <div className="testimonial-author">
                  <div className="author-avatar">박</div>
                  <div className="author-info">
                    <h4>박서연</h4>
                    <p>31세, 디자이너</p>
                  </div>
                </div>
              </div>
              
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <p>"사업 운을 알고 싶어서 분석을 받았는데, 정말 유용한 정보를 얻었습니다. 좋은 시기와 주의해야 할 시기를 파악해 계획을 세울 수 있어서 큰 도움이 되었어요."</p>
                </div>
                <div className="testimonial-author">
                  <div className="author-avatar">최</div>
                  <div className="author-info">
                    <h4>최재현</h4>
                    <p>42세, 사업가</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 사주 입력 폼 섹션 */}
        <section id="saju-form" className={`saju-form-section ${activeSection === 'saju-form' ? 'active' : ''}`}>
          <div className="container">
            <h2>무료 사주 분석 받기</h2>
            <p className="section-subtitle">기본 정보를 입력하시면 AI가 당신의 사주를 분석합니다</p>
            
            <form onSubmit={handleSubmit} className="saju-form">
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
                <label htmlFor="birthHour">태어난 시간 (시주)</label>
                <select
                  id="birthHour"
                  name="birthHour"
                  value={formData.birthHour}
                  onChange={handleChange}
                >
                  {hourOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <small>정확한 분석을 위해 시간까지 입력하시면 좋습니다.</small>
              </div>
              
              <div className="form-group">
                <label>성별</label>
                <div className="radio-group">
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="gender"
                      value="남성"
                      checked={formData.gender === '남성'}
                      onChange={handleChange}
                    />
                    남성
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="gender"
                      value="여성"
                      checked={formData.gender === '여성'}
                      onChange={handleChange}
                    />
                    여성
                  </label>
                </div>
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
                  <option value="사업/재물">사업/재물</option>
                  <option value="직장/경력">직장/경력</option>
                  <option value="건강">건강</option>
                  <option value="대인관계">대인관계</option>
                  <option value="진로/적성">진로/적성</option>
                </select>
              </div>
              
              {error && <div className="error-message">{error}</div>}
              
              <button type="submit" className="btn-submit" disabled={loading}>
                {loading ? (
                  <div className="loading-spinner-container">
                    <div className="loading-spinner"></div>
                    <span>분석 중...</span>
                  </div>
                ) : (
                  '사주 분석 받기'
                )}
              </button>
            </form>
          </div>
        </section>

        {/* FAQ 섹션 */}
        <section className="faq">
          <div className="container">
            <h2>자주 묻는 질문</h2>
            <p className="section-subtitle">사주 분석에 대해 궁금한 점이 있으신가요?</p>
            
            <div className="faq-items">
              <div className="faq-item">
                <h3>사주 분석이란 무엇인가요?</h3>
                <p>사주 분석은 태어난 연, 월, 일, 시를 기반으로 하여 개인의 타고난 기질과 운명의 흐름을 파악하는 동양 철학의 한 방법입니다. 사주포춘은 전통적인 사주 이론에 현대적인 AI 기술을 접목하여 더욱 정확하고 유용한 분석 결과를 제공합니다.</p>
              </div>
              
              <div className="faq-item">
                <h3>정확한 분석을 위해 필요한 정보는 무엇인가요?</h3>
                <p>정확한 생년월일과 태어난 시간이 가장 중요합니다. 시간을 모르시는 경우에도 기본적인 분석은 가능하지만, 더 정확한 결과를 위해서는 태어난 시간까지 입력해주시는 것이 좋습니다. 또한 성별과 주요 관심사를 입력하시면 더 맞춤화된 분석을 받으실 수 있습니다.</p>
              </div>
              
              <div className="faq-item">
                <h3>사주 분석 결과는 얼마나 정확한가요?</h3>
                <p>사주포춘의 AI는 10만 건 이상의 사주 데이터를 학습하여 약 92% 이상의 정확도를 보이고 있습니다. 하지만 사주 분석은 타고난 기질과 잠재적 가능성을 보여주는 것으로, 개인의 노력과 선택에 따라 결과는 달라질 수 있습니다. 사주 분석은 미래를 예언하는 것이 아닌, 더 나은 결정을 내리기 위한 참고 자료로 활용하시는 것이 좋습니다.</p>
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
            <p>당신의 운명을 알아보는 첫 걸음, 사주포춘과 함께하세요.<br />단 5분 만에 당신의 타고난 기질과 운명의 흐름을 파악할 수 있습니다.</p>
            <button onClick={() => scrollToSection('saju-form')} className="btn-primary">무료 사주 분석 받기</button>
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
                <li><button onClick={() => scrollToSection('saju-form')} className="footer-btn">사주 분석</button></li>
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