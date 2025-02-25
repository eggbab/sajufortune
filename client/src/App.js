import React, { useState } from 'react';
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
          compatibleSigns: ["토끼", "말", "양"],
          monthlyForecast: [
            { month: "1월", rating: 4, description: "긍정적인 시작, 새로운 기회가 찾아옵니다." },
            { month: "2월", rating: 3, description: "도전이 있으나 극복 가능한 시기입니다." },
            { month: "3월", rating: 5, description: "최고의 운세, 모든 일이 순조롭게 진행됩니다." }
          ],
          talisman: {
            image: "https://example.com/talisman.jpg",
            name: "행운의 부적",
            description: "금전운과 건강운을 높여주는 맞춤형 부적입니다."
          }
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

  // 샘플 사주 분석 결과 (더 상세하게 변경)
  const sampleResults = [
    {
      name: "30대 여성",
      previewText: "물의 기운이 강한 당신은 타고난 직관력과 감수성을 가지고 있습니다. 특히 대인관계에서 뛰어난 공감 능력을 발휘하며, 주변 사람들에게 정서적 안정감을 제공합니다. 2024년에는 특히 학습과 커뮤니케이션 분야에서 좋은 기회가 올 것으로 보입니다. 3월과 9월에 중요한 결정을 내릴 일이 있을 수 있으니 신중하게 접근하세요. 올해는 물의 기운이 더욱 강해지는 해로, 창의적인 활동이나 예술적 취미를 통해 내면의 에너지를 표현하는 것이 도움이 됩니다.",
      dominantElement: "수(水)",
      stats: {
        personality: 90,
        career: 85,
        relationship: 75,
        wealth: 70
      }
    },
    {
      name: "40대 남성",
      previewText: "금의 기운이 두드러지는 당신은 논리적 사고와 분석력이 뛰어납니다. 정확하고 체계적인 일 처리 방식으로 주변의 신뢰를 얻고 있습니다. 2024년에는 재물운이 상승할 조짐이 보이며, 특히 투자나 자산 관리에 좋은 시기입니다. 다만 5월과 11월에는 건강에 특별한 주의가 필요하니, 무리한 활동은 피하고 충분한 휴식을 취하세요. 인간관계에서는 평소보다 더 많은 소통이 필요한 시기이며, 특히 가족과의 관계에서 깊은 유대감을 형성할 수 있는 기회가 있습니다.",
      dominantElement: "금(金)",
      stats: {
        personality: 80,
        career: 92,
        relationship: 65,
        wealth: 88
      }
    },
    {
      name: "20대 남성",
      previewText: "불의 기운이 넘치는 당신은 열정과 창의력이 풍부합니다. 새로운 도전에 두려움 없이 나아가는 용기가 있으며, 리더십 자질을 타고났습니다. 2024년은 인간관계에서 큰 발전이 있을 해로, 특히 4월과 8월에 중요한 인연을 만날 가능성이 높습니다. 다만 감정적으로 불안정해질 수 있는 7월에는 마음의 균형을 유지하는 데 집중하세요. 직업적으로는 변화를 고려할 수 있는 좋은 시기이며, 새로운 분야에 도전하거나 자신의 재능을 발휘할 수 있는 기회가 생길 것입니다.",
      dominantElement: "화(火)",
      stats: {
        personality: 88,
        career: 78,
        relationship: 90,
        wealth: 72
      }
    }
  ];

  // 사용자 리뷰 데이터
  const userReviews = [
    {
      name: "김태영",
      age: 28,
      content: "정확도에 깜짝 놀랐어요! 제 성격과 진로에 대한 분석이 너무 정확해서 친구들에게도 추천했습니다. 프리미엄 분석까지 받아봤는데, 월별 운세가 정말 도움이 많이 됐어요.",
      rating: 5
    },
    {
      name: "이지현",
      age: 34,
      content: "연애운에 대한 분석이 매우 도움되었어요. 실제로 분석 결과대로 좋은 인연을 만났습니다. 맞춤형 부적 덕분인지 정말 좋은 일들이 계속 생기네요!",
      rating: 4.5
    },
    {
      name: "박민수",
      age: 42,
      content: "직업 변경을 고민하던 중에 사주포춘의 분석을 참고했어요. 지금은 분석 결과에서 추천해준 분야에서 만족스럽게 일하고 있습니다. 프리미엄 서비스의 상담까지 받으니 확신이 생겼어요.",
      rating: 5
    }
  ];

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
      setTimeout(() => setActiveSection(sectionId), 500);
    }
  };

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
                <li><a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('saju-form'); }}>무료분석</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('premium'); }}>프리미엄</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main>
        {/* 히어로 섹션 (중앙 정렬로 변경) */}
        <section className="hero">
          <div className="container centered">
            <div className="hero-content">
              <h1>당신의 운명을<br />AI가 분석합니다</h1>
              <p>사주팔자를 기반으로 한 정확한 운세 분석,<br />지금 바로 무료로 체험해보세요.</p>
              <button onClick={() => scrollToSection('saju-form')} className="btn-primary">무료 사주 분석 받기</button>
            </div>
          </div>
        </section>

        {/* AI 설명 섹션 */}
        <section className="ai-explanation">
          <div className="container">
            <h2>AI 사주 분석이란?</h2>
            <p className="section-subtitle">인공지능이 당신의 사주를 정확하게 분석합니다</p>
            
            <div className="ai-intro">
              <p className="ai-description">
                사주포춘은 전통적인 사주팔자 체계와 최신 인공지능 기술을 결합하여 
                더욱 정확하고 개인화된 운세 분석을 제공합니다. 수천 년간 이어져온 
                동양 철학의 지혜와 현대 기술의 정확성이 만나 당신의 타고난 기질과 운명의 
                흐름을 더 깊이 있게 이해할 수 있도록 도와드립니다.
              </p>
              <p className="ai-advantage">
                사주포춘의 AI는 10만 건 이상의 사주 데이터를 학습하여 90% 이상의 
                정확도를 자랑합니다. 단순한 예측이 아닌, 당신의 고유한 사주 패턴을 
                분석하여 성격, 적성, 대인관계, 재물운, 건강 등 다양한 영역에 대한 
                통찰력 있는 분석 결과를 제공합니다.
              </p>
            </div>
            
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">🔒</div>
                <h3>100% 안전한 개인정보</h3>
                <p>사용자의 모든 정보는 철저하게 암호화되어 보호됩니다. 분석 후 결과만 제공하고 개인정보는 절대 외부에 공유되지 않습니다.</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">⚡</div>
                <h3>즉각적인 분석</h3>
                <p>정보 입력 후 단 몇 초 만에 고급 AI 알고리즘이 당신의 사주를 심층 분석하여 결과를 제공합니다.</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">💡</div>
                <h3>실용적인 조언</h3>
                <p>추상적인 운세가 아닌, 실생활에서 실천할 수 있는 구체적이고 실용적인 조언을 제공합니다.</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">📊</div>
                <h3>지속적인 업데이트</h3>
                <p>최신 데이터와 알고리즘으로 지속적으로 업데이트되어 더욱 정확하고 유용한 분석을 제공합니다.</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">🌈</div>
                <h3>긍정적 가이드</h3>
                <p>단순히 운명을 예언하는 것이 아닌, 긍정적인 변화와 성장을 위한 가이드를 제공합니다.</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">🔄</div>
                <h3>맞춤형 분석</h3>
                <p>당신의 관심사와 고민에 맞춘 개인화된 분석 결과로, 필요한 영역에 집중된 인사이트를 얻을 수 있습니다.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 다른 사용자 결과 미리보기 섹션 (업그레이드) */}
        <section className="sample-results">
          <div className="container">
            <h2>다른 사용자들의 분석 결과</h2>
            <p className="section-subtitle">실제 사용자들의 사주 분석 결과를 일부 확인해보세요</p>
            
            <div className="results-container">
              {sampleResults.map((result, index) => (
                <div key={index} className="result-preview-card">
                  <div className="result-preview-header">
                    <h3>{result.name}</h3>
                    <span className="element-badge">{result.dominantElement}</span>
                  </div>
                  <div className="result-preview-content">
                    <p>{result.previewText}</p>
                    
                    <div className="result-stats">
                      <div className="stat-item">
                        <span className="stat-label">성격</span>
                        <div className="stat-bar-container">
                          <div className="stat-bar" style={{ width: `${result.stats.personality}%` }}></div>
                        </div>
                        <span className="stat-value">{result.stats.personality}%</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-label">직업</span>
                        <div className="stat-bar-container">
                          <div className="stat-bar" style={{ width: `${result.stats.career}%` }}></div>
                        </div>
                        <span className="stat-value">{result.stats.career}%</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-label">연애</span>
                        <div className="stat-bar-container">
                          <div className="stat-bar" style={{ width: `${result.stats.relationship}%` }}></div>
                        </div>
                        <span className="stat-value">{result.stats.relationship}%</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-label">재물</span>
                        <div className="stat-bar-container">
                          <div className="stat-bar" style={{ width: `${result.stats.wealth}%` }}></div>
                        </div>
                        <span className="stat-value">{result.stats.wealth}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="results-cta">
              <button onClick={() => scrollToSection('saju-form')} className="btn-primary">나도 사주 분석 받기</button>
            </div>
          </div>
        </section>

        {/* 서비스 장점 섹션 */}
        <section className="service-benefits">
          <div className="container">
            <h2>사주포춘만의 특별한 장점</h2>
            <p className="section-subtitle">왜 사주포춘이 다른 사주 분석 서비스와 다른지 확인해보세요</p>
            
            <div className="benefits-grid">
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
                <div className="benefit-icon">📊</div>
                <h3>지속적인 업데이트</h3>
                <p>최신 데이터와 알고리즘으로 지속적으로 업데이트되어 더욱 정확하고 유용한 분석을 제공합니다.</p>
              </div>
              
              <div className="benefit-item">
                <div className="benefit-icon">🌈</div>
                <h3>긍정적 가이드</h3>
                <p>단순히 운명을 예언하는 것이 아닌, 긍정적인 변화와 성장을 위한 가이드를 제공합니다.</p>
              </div>
              
              <div className="benefit-item">
                <div className="benefit-icon">🔄</div>
                <h3>맞춤형 분석</h3>
                <p>당신의 관심사와 고민에 맞춘 개인화된 분석 결과로, 필요한 영역에 집중된 인사이트를 얻을 수 있습니다.</p>
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

        {/* 사주 입력 폼 섹션 (업그레이드) */}
        <section id="saju-form" className={`saju-form ${activeSection === 'saju-form' ? 'active' : ''}`}>
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
                    className="input-field"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="birthDate">생년월일 (양력)</label>
                  <input
                    type="date"
                    id="birthDate"
                    name="birthDate"
                    value={formData.birthDate}
                    onChange={handleChange}
                    required
                    className="input-field"
                  />
                  <small className="form-help">사주 분석을 위해 양력 생년월일을 입력해주세요</small>
                </div>
                
                <div className="form-group">
                  <label htmlFor="birthHour">시주(時柱)</label>
                  <select
                    id="birthHour"
                    name="birthHour"
                    value={formData.birthHour}
                    onChange={handleChange}
                    className="select-field"
                  >
                    {hourOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <small className="form-help">태어난 시간대를 선택하면 더 정확한 분석이 가능합니다</small>
                </div>
                
                <div className="form-group">
                  <label htmlFor="gender">성별</label>
                  <div className="radio-group">
                    <div className="radio-item">
                      <input
                        type="radio"
                        id="male"
                        name="gender"
                        value="남성"
                        checked={formData.gender === '남성'}
                        onChange={handleChange}
                      />
                      <label htmlFor="male">남성</label>
                    </div>
                    <div className="radio-item">
                      <input
                        type="radio"
                        id="female"
                        name="gender"
                        value="여성"
                        checked={formData.gender === '여성'}
                        onChange={handleChange}
                      />
                      <label htmlFor="female">여성</label>
                    </div>
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="concern">주요 관심사</label>
                  <select
                    id="concern"
                    name="concern"
                    value={formData.concern}
                    onChange={handleChange}
                    className="select-field"
                  >
                    <option value="연애/결혼">연애/결혼</option>
                    <option value="직업/진로">직업/진로</option>
                    <option value="재물/투자">재물/투자</option>
                    <option value="건강">건강</option>
                    <option value="대인관계">대인관계</option>
                  </select>
                </div>
                
                {error && <div className="error-message">{error}</div>}
                
                <button type="submit" className="btn-primary btn-submit" disabled={loading}>
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

        {/* 프리미엄 서비스 소개 섹션 (추가) */}
        <section id="premium" className="premium-section">
          <div className="container">
            <h2>프리미엄 사주 분석 서비스</h2>
            <p className="section-subtitle">더 자세하고 심층적인 사주 분석을 경험해보세요</p>
            
            <div className="premium-container">
              <div className="premium-content">
                <div className="premium-features">
                  <h3>프리미엄 서비스만의 특별한 혜택</h3>
                  <ul className="feature-list">
                    <li>
                      <span className="feature-icon">🔮</span>
                      <div className="feature-text">
                        <h4>12개월 상세 운세</h4>
                        <p>매월 변화하는 운세의 흐름을 상세하게 분석하여 제공합니다.</p>
                      </div>
                    </li>
                    <li>
                      <span className="feature-icon">📈</span>
                      <div className="feature-text">
                        <h4>5년 대운 분석</h4>
                        <p>향후 5년간의 대운 흐름을 분석하여 장기적인 계획을 세울 수 있도록 도와줍니다.</p>
                      </div>
                    </li>
                    <li>
                      <span className="feature-icon">💑</span>
                      <div className="feature-text">
                        <h4>인간관계 상성 분석</h4>
                        <p>가족, 연인, 동료와의 상성을 분석하여 더 나은 관계를 위한 통찰을 제공합니다.</p>
                      </div>
                    </li>
                    <li>
                      <span className="feature-icon">💰</span>
                      <div className="feature-text">
                        <h4>재물운 심층 분석</h4>
                        <p>수입, 지출, 투자 등에 관한 자세한 분석과 조언을 제공합니다.</p>
                      </div>
                    </li>
                    <li>
                      <span className="feature-icon">💬</span>
                      <div className="feature-text">
                        <h4>전문가 1:1 상담</h4>
                        <p>전문 사주 상담사와의 1회 화상 상담 기회를 제공합니다.</p>
                      </div>
                    </li>
                    <li>
                      <span className="feature-icon">🔯</span>
                      <div className="feature-text">
                        <h4>맞춤형 부적 제공</h4>
                        <p>당신의 사주에 맞는 맞춤형 부적 이미지를 고해상도로 제공합니다.</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="premium-pricing">
                  <div className="price-card">
                    <div className="price-header">
                      <h3>프리미엄 패키지</h3>
                      <div className="price">
                        <span className="original-price">59,000원</span>
                        <span className="current-price">29,000원</span>
                      </div>
                      <span className="discount-badge">50% 할인</span>
                    </div>
                    <ul className="price-features">
                      <li>✅ 기본 사주 분석 포함</li>
                      <li>✅ 12개월 상세 운세 분석</li>
                      <li>✅ 5년 대운 분석</li>
                      <li>✅ 인간관계 상성 분석</li>
                      <li>✅ 재물운 심층 분석</li>
                      <li>✅ 전문가 1:1 화상 상담(30분)</li>
                      <li>✅ 맞춤형 디지털 부적 제공</li>
                    </ul>
                    <button className="btn-premium">프리미엄 분석 받기</button>
                    <p className="guarantee">30일 만족도 보장 - 불만족 시 100% 환불</p>
                  </div>
                </div>
              </div>
              
              {/* 부적 프리뷰 섹션 */}
              <div className="talisman-preview">
                <h3>맞춤형 디지털 부적</h3>
                <p>당신의 사주에 맞춘 특별한 부적으로 행운을 끌어당기세요</p>
                
                <div className="talisman-container">
                  <div className="talisman-image-container">
                    <div className="talisman-image blurred"></div>
                    <div className="talisman-blur-overlay">
                      <span>프리미엄 서비스 구매 시 제공</span>
                    </div>
                  </div>
                  <div className="talisman-description">
                    <h4>부적의 효과</h4>
                    <p>
                      부적은 수천 년간 동양에서 행운을 불러오고 액운을 물리치는 힘으로 인정받아 왔습니다. 
                      사주포춘의 맞춤형 디지털 부적은 당신의 사주 분석을 기반으로 제작되어, 
                      가장 필요한 기운을 강화하고 부족한 기운을 보충해줍니다.
                    </p>
                    <div className="talisman-benefits">
                      <div className="benefit-item">
                        <span className="benefit-icon">⚡</span>
                        <span>약한 기운 보강</span>
                      </div>
                      <div className="benefit-item">
                        <span className="benefit-icon">🛡️</span>
                        <span>액운 방어</span>
                      </div>
                      <div className="benefit-item">
                        <span className="benefit-icon">✨</span>
                        <span>행운 강화</span>
                      </div>
                      <div className="benefit-item">
                        <span className="benefit-icon">🔄</span>
                        <span>기운 조화</span>
                      </div>
                    </div>
                    <p className="talisman-usage">
                      고해상도 이미지로 제공되는 디지털 부적은 휴대폰 배경화면, 
                      인쇄하여 지갑에 보관, 또는 PC 배경화면 등으로 활용 가능합니다.
                    </p>
                  </div>
                </div>
              </div>
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
                <p>무료 분석은 기본적인 성격 특성과 주요 운세 흐름에 대한 개요를 제공합니다. 프리미엄 분석은 더 자세한 사주 해석과 함께 월별 운세, 대인관계 상성 분석, 재물운과 건강운에 대한 심층 분석, 그리고 맞춤형 조언을 포함합니다. 또한 프리미엄 사용자에게는 개인 맞춤형 부적 이미지가 제공되며, 전문 상담사와의 1:1 상담 기회도 주어집니다.</p>
              </div>
              
              <div className="faq-item">
                <h3>사주 분석 결과는 얼마나 정확한가요?</h3>
                <p>사주포춘의 AI는 10만 건 이상의 사주 데이터를 학습하여 약 92% 이상의 정확도를 보이고 있습니다. 하지만 사주 분석은 타고난 기질과 잠재적 가능성을 보여주는 것으로, 개인의 노력과 선택에 따라 결과는 달라질 수 있습니다. 사주 분석은 미래를 예언하는 것이 아닌, 더 나은 결정을 내리기 위한 참고 자료로 활용하시는 것이 좋습니다.</p>
              </div>
              
              <div className="faq-item">
                <h3>맞춤형 부적은 어떤 효과가 있나요?</h3>
                <p>맞춤형 부적은 사주 분석을 통해 파악된 당신의 부족한 기운을 보충하고, 과한 기운을 조절하는 역할을 합니다. 전통적으로 부적은 행운을 불러오고 액운을 물리치는 역할을 해왔으며, 사주포춘의 디지털 부적은 현대적인 방식으로 이러한 전통을 이어갑니다. 부적 이미지를 휴대폰 배경화면이나 인쇄하여 지갑에 보관하는 등 다양한 방식으로 활용할 수 있습니다.</p>
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
                <li><button onClick={() => scrollToSection('premium')} className="footer-btn">프리미엄 서비스</button></li>
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