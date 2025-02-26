import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
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
      // 실제 구현에서는 이 부분을 백엔드 API 호출로 대체
      setTimeout(() => {
        const mockData = {
          dominantElement: "화",
          personalityTraits: ["열정적", "창의적", "활동적", "직관적", "낙관적"],
          elementChart: {
            wood: 20,
            fire: 42,
            earth: 15,
            metal: 13,
            water: 10
          },
          pillars: {
            year: "경오",
            month: "정미",
            day: "병인",
            hour: "갑자"
          },
          radarData: [
            { trait: "창의성", value: 85 },
            { trait: "리더십", value: 75 },
            { trait: "감수성", value: 90 },
            { trait: "인내력", value: 65 },
            { trait: "협동성", value: 70 },
            { trait: "결단력", value: 80 }
          ],
          monthlyForecast: [
            { month: "1월", content: "새로운 시작에 적합한 달입니다.", rating: 4 },
            { month: "2월", content: "대인관계에 주의가 필요합니다.", rating: 3 },
            { month: "3월", content: "재물운이 상승하는 시기입니다.", rating: 5 },
            { month: "4월", content: "건강관리에 신경쓰세요.", rating: 4 },
            { month: "5월", content: "중요한 결정을 내리기 좋은 시기입니다.", rating: 3 },
            { month: "6월", content: "여행이나 이동에 좋은 기운이 있습니다.", rating: 4 },
            { month: "7월", content: "집중력이 높아지는 시기입니다.", rating: 5 },
            { month: "8월", content: "가족 관계가 중요해지는 달입니다.", rating: 4 },
            { month: "9월", content: "학습과 성장에 좋은 시기입니다.", rating: 5 },
            { month: "10월", content: "창의적인 활동에 유리합니다.", rating: 4 },
            { month: "11월", content: "차분히 계획을 세우세요.", rating: 3 },
            { month: "12월", content: "한 해를 정리하고 휴식하기 좋은 시기입니다.", rating: 4 }
          ],
          luckyColors: ["파란색", "보라색", "금색"],
          luckyNumbers: [3, 7, 9],
          luckyDirections: ["동쪽", "남쪽"],
          compatibility: {
            best: ["쥐띠", "뱀띠"],
            good: ["원숭이띠", "닭띠"],
            neutral: ["토끼띠", "말띠", "개띠"],
            challenging: ["호랑이띠", "양띠"]
          },
          personality: "열정적이고 활동적인 성격입니다. 창의력이 뛰어나며 새로운 아이디어를 내는 것을 좋아합니다.",
          career: "창의적인 분야나 리더십을 발휘할 수 있는 직업이 적합합니다.",
          relationship: "열정적인 연애 스타일을 가지고 있으며, 파트너에게 헌신적입니다.",
          wealth: "재물운은 양호하나 충동적인 소비에 주의해야 합니다.",
          health: "활동적인 성향으로 건강한 편이나 과로에 주의하세요.",
          yearlyForecast: [
            { year: "2025", content: "새로운 시작과 성장의 해입니다. 특히 3~5월이 중요한 기회의 시기가 될 것입니다.", rating: 8 },
            { year: "2026", content: "안정을 찾고 기반을 다지는 해입니다. 꾸준한 노력이 결실을 맺을 것입니다.", rating: 7 },
            { year: "2027", content: "도약과 확장의 해로, 새로운 도전을 시도하기 좋은 시기입니다.", rating: 9 }
          ]
        };
        
        // 로컬 스토리지에 데이터 저장
        localStorage.setItem('userData', JSON.stringify(formData));
        localStorage.setItem('sajuResult', JSON.stringify(mockData));
        
        // 결과 페이지로 이동
        history.push('/result');
        
        setLoading(false);
      }, 3000); // 로딩 효과를 위한 지연
    } catch (error) {
      console.error('분석 중 오류 발생:', error);
      setError('분석 중 오류가 발생했습니다. 다시 시도해 주세요.');
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

  const handleSampleAnalyzeClick = () => {
    scrollToSection('saju-form');
  };

  return (
    <div className="App">
      {/* 헤더 - 개선된 디자인 */}
      <header className="site-header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <a href="/">사주포춘</a>
            </div>
            <nav className="main-nav">
              <ul>
                <li><a href="/">홈</a></li>
                <li><button onClick={() => scrollToSection('about')}>소개</button></li>
                <li><button onClick={() => scrollToSection('features')}>서비스</button></li>
                <li><button onClick={() => scrollToSection('testimonials')}>후기</button></li>
                <li><button onClick={() => scrollToSection('saju-form')} className="nav-cta">무료 분석 받기</button></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main>
        {/* 히어로 섹션 - 완전 개선 */}
        <section className="hero">
          <div className="hero-bg-wrapper">
            <div className="hero-particles"></div>
            <div className="hero-stars"></div>
          </div>
          <div className="container">
            <div className="hero-content">
              <div className="hero-text">
                <h1>당신의 운명을<br />AI로 <span className="text-highlight">해석</span>합니다</h1>
                <p>사주팔자를 기반으로 한 정확한 운세 분석<br />지금 바로 무료로 체험해보세요</p>
                <div className="hero-buttons">
                  <button onClick={() => scrollToSection('saju-form')} className="btn-primary">
                    <span>무료 사주 분석 받기</span>
                    <i className="fas fa-angle-right"></i>
                  </button>
                </div>
              </div>
              <div className="hero-image">
                <div className="fortune-wheel">
                  <div className="wheel-outer"></div>
                  <div className="wheel-inner"></div>
                  <div className="wheel-center"></div>
                  <div className="wheel-symbol wood">木</div>
                  <div className="wheel-symbol fire">火</div>
                  <div className="wheel-symbol earth">土</div>
                  <div className="wheel-symbol metal">金</div>
                  <div className="wheel-symbol water">水</div>
                </div>
              </div>
            </div>
            
            {/* 스크롤 유도 애니메이션 */}
            <div className="scroll-indicator">
              <div className="scroll-icon">
                <i className="fas fa-angle-down"></i>
              </div>
              <p>아래로 스크롤하여 더 알아보기</p>
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

        {/* 다른 사용자 분석 결과 섹션 - 완전 개선 */}
        <section id="sample-results" className="sample-results">
          <div className="container">
            <h2>다른 사용자들의 분석 결과</h2>
            <p className="section-subtitle">실제 사용자들이 받은 사주 분석의 일부입니다</p>
            
            <div className="sample-result-card">
              <div className="sample-header">
                <div className="user-brief">
                  <span className="user-icon"><i className="fas fa-user-circle"></i></span>
                  <div className="user-info">
                    <h3>김** (30대 남성)</h3>
                    <p>1990년 7월 생</p>
                  </div>
                </div>
              </div>
              
              <div className="sample-content">
                <div className="sample-charts">
                  <div className="chart-container">
                    <h4>오행 분석</h4>
                    <div className="element-chart-sample"></div>
                  </div>
                  <div className="chart-container">
                    <h4>2025년 운세 흐름</h4>
                    <div className="monthly-chart-sample"></div>
                  </div>
                </div>
                
                <div className="sample-text fade-bottom">
                  <h4>종합 분석</h4>
                  <p>열정적이고 적극적인 성격으로, 리더십이 뛰어나며 새로운 도전을 즐기는 편입니다. 창의적인 분야나 리더십을 발휘할 수 있는 직업이 적합하며, 대인관계에서는 솔직하고 직설적인 성향이 있습니다. 2025년에는 특히 3~4월과 9월에 중요한 기회가 있을 것으로 예상됩니다...</p>
                </div>
              </div>
              
              <div className="sample-cta-container">
                <button className="sample-cta-button" onClick={() => scrollToSection('saju-form')}>
                  나도 분석 받기 <i className="fas fa-arrow-right"></i>
                </button>
              </div>
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
                  <p className="testimonial-text">"정말 놀라웠어요. 제 성격과 특성을 너무 정확하게 분석해주셨고, 진로에 대한 조언이 특히 도움이 되었습니다. 이제 더 자신감을 갖고 결정을 내릴 수 있게 되었어요."</p>
                  <div className="testimonial-author">
                    <div className="author-avatar">김</div>
                    <div className="author-info">
                      <h4>김민지</h4>
                      <p>27세, 회사원</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <p className="testimonial-text">"사주 분석을 통해 제 강점과 약점을 명확히 알게 되었고, 어떤 방향으로 나아가야 할지 깨닫게 되었어요. 특히 월별 운세 예측이 실제로 맞아떨어져서 더 신뢰하게 되었습니다."</p>
                  <div className="testimonial-author">
                    <div className="author-avatar">이</div>
                    <div className="author-info">
                      <h4>이준호</h4>
                      <p>35세, 자영업</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <p className="testimonial-text">"인간관계에서 겪고 있던 어려움에 대한 조언이 매우 실질적이었습니다. 제안해주신 방법을 실천했더니 정말 관계가 개선되는 것을 느껴요. 다른 친구들에게도 추천했습니다."</p>
                  <div className="testimonial-author">
                    <div className="author-avatar">박</div>
                    <div className="author-info">
                      <h4>박서연</h4>
                      <p>31세, 디자이너</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 사주 분석 폼 섹션 - 고품질 개선 */}
        <section id="saju-form" className="saju-form-section">
          <div className="container">
            <div className="form-container">
              <div className="form-header">
                <h2>무료 사주 분석</h2>
                <p>아래 정보를 입력하시면 AI가 당신의 사주를 분석해 드립니다</p>
              </div>
              
              <form onSubmit={handleSubmit} className="saju-form">
                <div className="form-inner">
                  <div className="form-group">
                    <label htmlFor="name">
                      <i className="fas fa-user"></i> 이름
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="홍길동"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="birthDate">
                      <i className="fas fa-calendar-alt"></i> 생년월일
                    </label>
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
                    <label htmlFor="birthHour">
                      <i className="fas fa-clock"></i> 태어난 시간 (시주)
                    </label>
                    <select
                      id="birthHour"
                      name="birthHour"
                      value={formData.birthHour}
                      onChange={handleChange}
                      className="custom-select"
                    >
                      {hourOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    <small>정확한 분석을 위해 시간까지 입력하시면 좋습니다</small>
                  </div>
                  
                  <div className="form-group">
                    <label><i className="fas fa-venus-mars"></i> 성별</label>
                    <div className="radio-group">
                      <label className="radio-label">
                        <input
                          type="radio"
                          name="gender"
                          value="남성"
                          checked={formData.gender === '남성'}
                          onChange={handleChange}
                        />
                        <span className="radio-custom"></span>
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
                        <span className="radio-custom"></span>
                        여성
                      </label>
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="concern">
                      <i className="fas fa-search"></i> 주요 관심사
                    </label>
                    <select
                      id="concern"
                      name="concern"
                      value={formData.concern}
                      onChange={handleChange}
                      className="custom-select"
                    >
                      <option value="연애/결혼">연애/결혼</option>
                      <option value="사업/재물">사업/재물</option>
                      <option value="직장/경력">직장/경력</option>
                      <option value="건강">건강</option>
                      <option value="대인관계">대인관계</option>
                      <option value="진로/적성">진로/적성</option>
                    </select>
                  </div>
                
                  {error && <div className="error-message"><i className="fas fa-exclamation-circle"></i> {error}</div>}
                  
                  <button type="submit" className="btn-submit" disabled={loading}>
                    {loading ? (
                      <div className="loading-spinner-container">
                        <div className="loading-spinner"></div>
                        <span>분석 중...</span>
                      </div>
                    ) : (
                      <>사주 분석 받기 <i className="fas fa-chart-pie"></i></>
                    )}
                  </button>
                </div>
              </form>
              
              <div className="form-decoration">
                <div className="decoration-element"></div>
              </div>
            </div>
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

      {/* 푸터 - 개선 */}
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
                <li><button onClick={() => scrollToSection('features')}>서비스</button></li>
                <li><button onClick={() => scrollToSection('saju-form')}>사주 분석</button></li>
                <li><button onClick={() => scrollToSection('testimonials')}>후기</button></li>
              </ul>
            </div>
            
            <div className="footer-contact">
              <h4>문의하기</h4>
              <p><i className="far fa-envelope"></i> 이메일: vmeandbeme@gmail.com</p>
              <p><i className="fas fa-map-marker-alt"></i> 주소: 인천 광역시 연수구 청룡로 50번길 2</p>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2025 사주포춘. All rights reserved.</p>
            <div className="policy-links">
              <Link to="/privacy">개인정보처리방침</Link>
              <Link to="/terms">이용약관</Link>
              <Link to="/refund">환불정책</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App; 