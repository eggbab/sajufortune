import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/HomePage.css';

function HomePage() {
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
      // 로딩 애니메이션을 보여주기 위해 setTimeout 사용
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
      }, 3000); // 3초 후에 결과 페이지로 이동
      
    } catch (error) {
      console.error('사주 분석 오류:', error);
      setError('사주 분석 중 오류가 발생했습니다. 다시 시도해주세요.');
      setLoading(false);
    }
  };

  return (
    <div className="home-page">
      <Header />
      
      <main>
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <h1>당신의 운명을 <span className="highlight">사주포춘</span>과 함께 알아보세요</h1>
              <p>AI 기반 사주 분석으로 당신의 타고난 기질과 운명의 흐름을 파악하세요</p>
              <a href="#saju-form" className="btn-primary">무료로 사주 보기</a>
            </div>
          </div>
        </section>
        
        {/* AI 사주 설명 섹션 */}
        <section className="ai-saju-intro">
          <div className="container">
            <div className="intro-content">
              <h2>AI 기술로 새롭게 해석하는 사주</h2>
              <p className="intro-lead">
                수천 년의 동양 철학과 최첨단 AI 기술의 만남, 사주포춘이 당신의 운명을 새롭게 해석합니다.
              </p>
              
              <div className="intro-grid">
                <div className="intro-item">
                  <h3>왜 AI 사주인가?</h3>
                  <p>
                    전통적인 사주 해석은 해석자의 주관적 경험과 지식에 크게 의존합니다. 
                    사주포춘은 방대한 데이터를 학습한 AI 기술을 활용하여 객관적이고 일관된 해석을 제공합니다. 
                    수만 건의 사주 데이터와 실제 삶의 패턴을 분석하여 더 정확하고 개인화된 결과를 도출합니다.
                  </p>
                </div>
                
                <div className="intro-item">
                  <h3>과학적 접근</h3>
                  <p>
                    사주포춘은 단순한 점술이 아닌 데이터 기반의 과학적 접근법을 취합니다. 
                    생년월일시에 담긴 우주의 에너지 패턴과 개인의 기질적 특성을 AI가 분석하여 
                    당신의 잠재력, 성격, 적성, 대인관계 패턴 등을 종합적으로 파악합니다.
                  </p>
                </div>
                
                <div className="intro-item">
                  <h3>지속적인 학습과 발전</h3>
                  <p>
                    사주포춘의 AI는 지속적으로 학습하고 발전합니다. 
                    더 많은 데이터와 피드백을 통해 해석의 정확도가 계속 향상되며, 
                    시대와 문화적 맥락을 반영한 현대적 해석을 제공합니다.
                  </p>
                </div>
                
                <div className="intro-item">
                  <h3>개인 맞춤형 분석</h3>
                  <p>
                    천편일률적인 운세가 아닌, 당신만의 고유한 사주를 분석합니다. 
                    AI는 사주의 모든 요소와 그 상호작용을 종합적으로 고려하여 
                    당신에게 가장 적합한 조언과 인사이트를 제공합니다.
                  </p>
                </div>
              </div>
              
              <div className="intro-quote">
                <p>"현대 기술로 재해석한 동양 철학의 지혜, 사주포춘과 함께 당신의 잠재력을 발견하세요."</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* 사용자 결과 미리보기 섹션 */}
        <section className="results-preview">
          <div className="container">
            <h2>다른 사용자들의 사주 분석 결과</h2>
            <p className="section-subtitle">실제 사용자들의 사주 분석 결과를 살짝 엿보세요</p>
            
            <div className="results-grid">
              <div className="result-card">
                <div className="result-header">
                  <div className="result-user">
                    <span className="user-initial">L</span>
                    <div className="user-info">
                      <h3>이OO님의 사주 분석</h3>
                      <p>1988년 5월 생, 여성</p>
                    </div>
                  </div>
                  <div className="result-element">
                    <span className="element-badge water">수(水)</span>
                  </div>
                </div>
                <div className="result-content">
                  <p>차분하고 지혜로운 성격의 소유자로, 깊은 통찰력과 분석력이 뛰어납니다. 감정 기복이 적고 안정적인 성향을 가지고 있어 주변 사람들에게 신뢰를 줍니다.</p>
                  <p>직업적으로는 연구, 분석, 전략 기획과 같은 분야에서 두각을 나타낼 수 있으며, 꾸준한 노력으로 성과를 이루는 스타일입니다.</p>
                  <p>대인관계에서는 신중하고 깊이 있는 관계를 선호하며, 소수의 친밀한 관계를 유지하는 경향이 있습니다. 신뢰를 바탕으로 한 관계에서 진정한 가치를 발견합니다.</p>
                  <div className="result-fade"></div>
                </div>
              </div>
              
              <div className="result-card">
                <div className="result-header">
                  <div className="result-user">
                    <span className="user-initial">K</span>
                    <div className="user-info">
                      <h3>김OO님의 사주 분석</h3>
                      <p>1992년 8월 생, 남성</p>
                    </div>
                  </div>
                  <div className="result-element">
                    <span className="element-badge fire">화(火)</span>
                  </div>
                </div>
                <div className="result-content">
                  <p>열정적이고 활동적인 성격으로, 창의력과 리더십이 돋보입니다. 새로운 도전을 두려워하지 않고 적극적으로 나아가는 추진력이 강점입니다.</p>
                  <p>대인관계에서는 사교성이 좋고 주변에 활력을 불어넣는 역할을 합니다. 다만 때로는 감정 조절에 주의가 필요합니다.</p>
                  <p>직업적으로는 창의성과 리더십을 발휘할 수 있는 분야에서 성공할 가능성이 높으며, 특히 마케팅, 기획, 예술 분야에서 두각을 나타낼 수 있습니다.</p>
                  <div className="result-fade"></div>
                </div>
              </div>
              
              <div className="result-card">
                <div className="result-header">
                  <div className="result-user">
                    <span className="user-initial">P</span>
                    <div className="user-info">
                      <h3>박OO님의 사주 분석</h3>
                      <p>1985년 11월 생, 여성</p>
                    </div>
                  </div>
                  <div className="result-element">
                    <span className="element-badge earth">토(土)</span>
                  </div>
                </div>
                <div className="result-content">
                  <p>안정적이고 신뢰감 있는 성격으로, 책임감과 인내심이 강합니다. 실용적인 사고방식을 가지고 있어 현실적인 문제 해결에 뛰어납니다.</p>
                  <p>직업적으로는 꾸준함과 성실함이 요구되는 분야에서 좋은 성과를 낼 수 있으며, 특히 재물운이 좋아 자산 관리에 탁월합니다.</p>
                  <p>대인관계에서는 신뢰와 안정을 중요시하며, 오랜 시간에 걸쳐 깊은 관계를 형성합니다. 가족과 친구들에게 든든한 지원자 역할을 합니다.</p>
                  <div className="result-fade"></div>
                </div>
              </div>
              
              <div className="result-card">
                <div className="result-header">
                  <div className="result-user">
                    <span className="user-initial">J</span>
                    <div className="user-info">
                      <h3>정OO님의 사주 분석</h3>
                      <p>1990년 3월 생, 남성</p>
                    </div>
                  </div>
                  <div className="result-element">
                    <span className="element-badge wood">목(木)</span>
                  </div>
                </div>
                <div className="result-content">
                  <p>성장과 발전을 추구하는 진취적인 성격으로, 유연하면서도 강인한 내면을 가지고 있습니다. 새로운 아이디어와 가능성을 탐색하는 것을 좋아합니다.</p>
                  <p>직업적으로는 성장 가능성이 높은 분야나 창의적인 문제 해결이 필요한 직종에서 능력을 발휘합니다. 특히 교육, 컨설팅, 환경 관련 분야가 적합합니다.</p>
                  <p>대인관계에서는 포용력이 있고 배려심이 깊어 주변 사람들에게 좋은 영향을 줍니다. 다양한 사람들과 조화롭게 지내는 능력이 뛰어납니다.</p>
                  <div className="result-fade"></div>
                </div>
              </div>
              
              <div className="result-card">
                <div className="result-header">
                  <div className="result-user">
                    <span className="user-initial">C</span>
                    <div className="user-info">
                      <h3>최OO님의 사주 분석</h3>
                      <p>1983년 9월 생, 여성</p>
                    </div>
                  </div>
                  <div className="result-element">
                    <span className="element-badge metal">금(金)</span>
                  </div>
                </div>
                <div className="result-content">
                  <p>정확하고 체계적인 성격으로, 원칙과 질서를 중요시합니다. 뛰어난 판단력과 분별력으로 복잡한 상황에서도 명확한 결정을 내릴 수 있습니다.</p>
                  <p>직업적으로는 정밀함과 체계가 요구되는 분야에서 탁월한 능력을 발휘합니다. 법률, 금융, 품질 관리 등의 분야가 적합합니다.</p>
                  <p>대인관계에서는 신뢰와 정직을 바탕으로 한 관계를 추구하며, 약속을 중요시합니다. 때로는 완벽주의적 성향으로 자신과 타인에게 높은 기준을 요구할 수 있습니다.</p>
                  <div className="result-fade"></div>
                </div>
              </div>
              
              <div className="result-card">
                <div className="result-header">
                  <div className="result-user">
                    <span className="user-initial">S</span>
                    <div className="user-info">
                      <h3>송OO님의 사주 분석</h3>
                      <p>1995년 1월 생, 남성</p>
                    </div>
                  </div>
                  <div className="result-element">
                    <span className="element-badge water">수(水)</span>
                  </div>
                </div>
                <div className="result-content">
                  <p>유연하고 적응력이 뛰어난 성격으로, 다양한 상황에 잘 대처합니다. 직관력이 발달되어 있어 흐름을 읽고 기회를 포착하는 능력이 뛰어납니다.</p>
                  <p>직업적으로는 변화가 많고 유동적인 환경에서 능력을 발휘하며, 특히 커뮤니케이션과 관련된 분야에서 성공할 가능성이 높습니다.</p>
                  <p>대인관계에서는 공감 능력이 뛰어나 다양한 사람들과 쉽게 어울리며, 갈등 상황에서도 중재자 역할을 할 수 있습니다.</p>
                  <div className="result-fade"></div>
                </div>
              </div>
            </div>
            
            <div className="results-cta">
              <a href="#saju-form" className="btn-primary">나도 무료로 사주 분석받기</a>
            </div>
          </div>
        </section>
        
        <section className="features">
          <div className="container">
            <h2>사주포춘만의 특별함</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon ai-icon"></div>
                <h3>AI 기술 활용</h3>
                <p>최신 인공지능 기술로 정확한 사주 분석을 제공합니다. 방대한 데이터를 학습한 AI가 개인의 사주를 심층 분석하여 객관적이고 일관된 결과를 도출합니다.</p>
                <ul class="feature-list">
                  <li>빅데이터 기반 분석</li>
                  <li>패턴 인식 알고리즘</li>
                  <li>지속적인 학습과 개선</li>
                </ul>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon personalized-icon"></div>
                <h3>맞춤형 분석</h3>
                <p>개인의 생년월일과 시간을 바탕으로 맞춤형 운세를 알려드립니다. 천편일률적인 해석이 아닌, 당신만의 고유한 사주 패턴을 분석합니다.</p>
                <ul class="feature-list">
                  <li>개인별 맞춤 해석</li>
                  <li>다양한 삶의 영역 분석</li>
                  <li>실용적인 조언 제공</li>
                </ul>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon secure-icon"></div>
                <h3>안전한 정보 관리</h3>
                <p>개인정보는 철저히 보호되며 분석 후 안전하게 처리됩니다. 최신 보안 기술을 적용하여 사용자의 데이터를 안전하게 보호합니다.</p>
                <ul class="feature-list">
                  <li>암호화 기술 적용</li>
                  <li>개인정보 보호 정책 준수</li>
                  <li>제3자 정보 공유 없음</li>
                </ul>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon accurate-icon"></div>
                <h3>높은 정확도</h3>
                <p>전통적인 사주 이론과 현대 심리학을 결합하여 높은 정확도의 분석 결과를 제공합니다. 사용자들의 피드백을 통해 지속적으로 정확도를 향상시킵니다.</p>
                <ul class="feature-list">
                  <li>전통 이론과 현대 기술의 결합</li>
                  <li>지속적인 알고리즘 개선</li>
                  <li>사용자 피드백 반영</li>
                </ul>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon comprehensive-icon"></div>
                <h3>종합적인 분석</h3>
                <p>성격, 적성, 대인관계, 재물운, 건강 등 삶의 다양한 측면을 종합적으로 분석합니다. 단편적인 운세가 아닌 전체적인 삶의 패턴을 파악합니다.</p>
                <ul class="feature-list">
                  <li>다양한 삶의 영역 분석</li>
                  <li>상호 연관성 파악</li>
                  <li>균형 잡힌 해석 제공</li>
                </ul>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon modern-icon"></div>
                <h3>현대적 해석</h3>
                <p>고전적인 사주 이론을 현대 사회의 맥락에 맞게 재해석합니다. 현대인의 라이프스타일과 가치관을 고려한 실용적인 조언을 제공합니다.</p>
                <ul class="feature-list">
                  <li>현대 사회 맥락 반영</li>
                  <li>실용적인 관점 제시</li>
                  <li>시대 변화에 따른 유연한 해석</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        <section className="form-section" id="saju-form">
          <div className="container">
            <div className="form-container">
              <h2>무료 사주 분석 받기</h2>
              {error && <div className="error-message">{error}</div>}
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
                  <select
                    id="birthTime"
                    name="birthTime"
                    value={formData.birthTime}
                    onChange={handleChange}
                  >
                    <option value="">모름</option>
                    <option value="23:30-01:30">자시 (23:30-01:30)</option>
                    <option value="01:30-03:30">축시 (01:30-03:30)</option>
                    <option value="03:30-05:30">인시 (03:30-05:30)</option>
                    <option value="05:30-07:30">묘시 (05:30-07:30)</option>
                    <option value="07:30-09:30">진시 (07:30-09:30)</option>
                    <option value="09:30-11:30">사시 (09:30-11:30)</option>
                    <option value="11:30-13:30">오시 (11:30-13:30)</option>
                    <option value="13:30-15:30">미시 (13:30-15:30)</option>
                    <option value="15:30-17:30">신시 (15:30-17:30)</option>
                    <option value="17:30-19:30">유시 (17:30-19:30)</option>
                    <option value="19:30-21:30">술시 (19:30-21:30)</option>
                    <option value="21:30-23:30">해시 (21:30-23:30)</option>
                  </select>
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
                      <span>남성</span>
                    </label>
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="gender"
                        value="여성"
                        checked={formData.gender === '여성'}
                        onChange={handleChange}
                      />
                      <span>여성</span>
                    </label>
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="concern">가장 알고 싶은 것</label>
                  <select
                    id="concern"
                    name="concern"
                    value={formData.concern}
                    onChange={handleChange}
                  >
                    <option value="연애/결혼">연애/결혼</option>
                    <option value="직업/진로">직업/진로</option>
                    <option value="재물/사업">재물/사업</option>
                    <option value="건강">건강</option>
                    <option value="대인관계">대인관계</option>
                    <option value="종합운세">종합운세</option>
                  </select>
                </div>
                
                <button 
                  type="submit" 
                  className="btn-submit"
                  disabled={loading}
                >
                  {loading ? (
                    <div className="loading-container">
                      <div className="loading-spinner"></div>
                      <span>사주 분석 중...</span>
                    </div>
                  ) : (
                    '무료 사주 분석 받기'
                  )}
                </button>
              </form>
            </div>
          </div>
        </section>
        
        <section className="how-it-works">
          <div className="container">
            <h2>사주 분석 과정</h2>
            <p className="section-subtitle">사주포춘의 AI가 어떻게 당신의 사주를 분석하는지 알아보세요</p>
            
            <div className="process-steps">
              <div className="process-step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3>정보 입력</h3>
                  <p>생년월일과 시간, 성별 등 기본 정보를 입력합니다. 정확한 분석을 위해 가능한 상세한 정보를 제공해주세요.</p>
                </div>
              </div>
              
              <div className="process-step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3>사주 구성</h3>
                  <p>입력된 정보를 바탕으로 사주팔자(四柱八字)를 구성합니다. 년주, 월주, 일주, 시주의 천간과 지지를 파악합니다.</p>
                </div>
              </div>
              
              <div className="process-step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3>AI 분석</h3>
                  <p>사주포춘의 AI가 사주의 오행 구성과 상호작용을 분석합니다. 수만 건의 데이터를 기반으로 패턴을 인식하고 해석합니다.</p>
                </div>
              </div>
              
              <div className="process-step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h3>결과 생성</h3>
                  <p>분석된 데이터를 바탕으로 개인화된 사주 해석 결과를 생성합니다. 성격, 적성, 대인관계, 재물운, 건강 등 다양한 측면에서의 분석 결과를 제공합니다.</p>
                </div>
              </div>
              
              <div className="process-step">
                <div className="step-number">5</div>
                <div className="step-content">
                  <h3>맞춤형 조언</h3>
                  <p>사주의 강점과 약점을 파악하여 개인에게 맞는 실질적인 조언을 제공합니다. 운명을 개선하고 잠재력을 발휘할 수 있는 방향을 제시합니다.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="testimonials">
          <div className="container">
            <h2>사용자 후기</h2>
            <p className="section-subtitle">사주포춘을 경험한 사용자들의 생생한 후기</p>
            
            <div className="testimonials-grid">
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <p>"정확한 분석에 놀랐습니다. 제 성격과 진로에 대한 조언이 매우 도움이 되었어요. 특히 제가 몰랐던 잠재력을 발견하게 해준 점이 가장 좋았습니다."</p>
                </div>
                <div className="testimonial-author">
                  <p><strong>김OO</strong> | 30대 | 회사원</p>
                </div>
              </div>
              
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <p>"무료로 이렇게 상세한 분석을 받을 수 있어서 좋았습니다. 특히 건강 관련 조언이 유용했어요. 제가 평소 주의해야 할 부분을 정확히 짚어주었습니다."</p>
                </div>
                <div className="testimonial-author">
                  <p><strong>이OO</strong> | 40대 | 자영업자</p>
                </div>
              </div>
              
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <p>"연애운에 대한 분석이 정확해서 깜짝 놀랐어요. 제 연애 패턴을 정확히 짚어주었고, 앞으로의 방향을 잡는데 큰 도움이 되었습니다."</p>
                </div>
                <div className="testimonial-author">
                  <p><strong>박OO</strong> | 20대 | 대학생</p>
                </div>
              </div>
              
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <p>"다른 사주 분석과는 차원이 달랐습니다. AI 기술을 활용한 분석이 매우 체계적이고 깊이 있었어요. 특히 직업 적성에 대한 조언이 현실적이고 도움이 되었습니다."</p>
                </div>
                <div className="testimonial-author">
                  <p><strong>최OO</strong> | 35대 | 프리랜서</p>
                </div>
              </div>
              
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <p>"재물운에 대한 분석이 놀라울 정도로 정확했습니다. 제 소비 패턴과 재물 관리 방식에 대한 조언이 실제로 도움이 되었어요."</p>
                </div>
                <div className="testimonial-author">
                  <p><strong>정OO</strong> | 45대 | 기업 임원</p>
                </div>
              </div>
              
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <p>"사주포춘을 통해 제 삶의 방향성을 새롭게 찾았습니다. 특히 대인관계에서의 패턴을 이해하게 되어 인간관계가 크게 개선되었어요."</p>
                </div>
                <div className="testimonial-author">
                  <p><strong>윤OO</strong> | 28대 | 디자이너</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="faq">
          <div className="container">
            <h2>자주 묻는 질문</h2>
            <p className="section-subtitle">사주포춘에 대한 궁금증을 해결해드립니다</p>
            
            <div className="faq-list">
              <div className="faq-item">
                <h3>사주 분석은 어떻게 이루어지나요?</h3>
                <p>사주팔자(四柱八字)는 태어난 년, 월, 일, 시를 기준으로 분석합니다. 각 요소가 나타내는 오행(木, 火, 土, 金, 水)의 조합을 통해 개인의 성격, 적성, 운명의 흐름을 파악합니다. 사주포춘은 여기에 AI 기술을 접목하여 더 정확하고 개인화된 분석을 제공합니다.</p>
              </div>
              
              <div className="faq-item">
                <h3>정확한 분석을 위해 필요한 정보는 무엇인가요?</h3>
                <p>정확한 생년월일과 태어난 시간이 가장 중요합니다. 시간을 모르시는 경우에도 기본적인 분석은 가능하지만, 더 정확한 결과를 위해서는 태어난 시간까지 입력해주시는 것이 좋습니다. 또한 성별에 따라 해석이 달라질 수 있으므로 성별 정보도 중요합니다.</p>
              </div>
              
              <div className="faq-item">
                <h3>개인정보는 안전하게 보호되나요?</h3>
                <p>네, 입력하신 모든 개인정보는 분석 목적으로만 사용되며, 분석 후에는 안전하게 처리됩니다. 저희는 개인정보보호법을 준수하며 고객님의 정보 보호를 최우선으로 생각합니다. 자세한 내용은 개인정보처리방침을 참고해주세요.</p>
              </div>
              
              <div className="faq-item">
                <h3>AI 사주 분석은 전통적인 사주 분석과 어떻게 다른가요?</h3>
                <p>전통적인 사주 분석은 해석자의 주관적 경험과 지식에 크게 의존합니다. 반면 AI 사주 분석은 방대한 데이터를 기반으로 객관적이고 일관된 해석을 제공합니다. 또한 현대적 맥락을 반영하여 실용적인 조언을 제공하며, 지속적인 학습을 통해 정확도가 계속 향상됩니다.</p>
              </div>
              
              <div className="faq-item">
                <h3>사주 분석 결과는 얼마나 정확한가요?</h3>
                <p>사주 분석은 개인의 타고난 기질과 잠재적 가능성을 파악하는 도구입니다. 사주포춘의 AI는 수만 건의 데이터를 학습하여 높은 정확도를 제공하지만, 모든 미래를 확정적으로 예측하는 것은 아닙니다. 결과는 참고 자료로 활용하시고, 최종적인 선택과 결정은 본인의 판단에 따라 이루어져야 합니다.</p>
              </div>
              
              <div className="faq-item">
                <h3>무료 분석과 유료 분석의 차이점은 무엇인가요?</h3>
                <p>무료 분석은 기본적인 사주 구성과 주요 특성에 대한 개요를 제공합니다. 유료 분석은 더 상세한 내용과 특정 영역(연애, 직업, 재물 등)에 대한 심층 분석, 시기별 운세, 맞춤형 조언 등을 포함합니다. 또한 전문 상담사와의 1:1 상담 서비스도 유료 서비스에 포함됩니다.</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="cta">
          <div className="container">
            <h2>지금 바로 무료로 사주 분석을 받아보세요</h2>
            <p>당신의 운명을 알아보는 첫 걸음, 사주포춘과 함께하세요.</p>
            <a href="#saju-form" className="btn-primary">무료 사주 분석 받기</a>
          </div>
        </section>
      </main>
      
      <Footer />
      
      {/* 로딩 오버레이 */}
      {loading && (
        <div className="loading-overlay">
          <div className="loading-content">
            <div className="loading-animation">
              <div className="loading-circle"></div>
              <div className="loading-circle"></div>
              <div className="loading-circle"></div>
            </div>
            <h3>사주 분석 중...</h3>
            <p>당신의 사주를 AI가 분석하고 있습니다.</p>
            <p className="loading-tip">잠시만 기다려주세요. 정확한 분석을 위해 시간이 소요됩니다.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default HomePage;