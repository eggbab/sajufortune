import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaChevronRight, FaUserAlt, FaCalendarAlt, FaChartLine } from 'react-icons/fa';
import '../styles/HomePage.css';

function HomePage({ setResultData, setUserData }) {
  const navigate = useNavigate();
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
        
        // 상태 함수를 통해 데이터 업데이트
        setResultData(mockData);
        setUserData(formData);
        
        // 결과 페이지로 이동
        navigate('/result');
        
        setLoading(false);
      }, 3000);
      
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
        
        {/* 사용자 결과 미리보기 섹션 */}
        <section className="results-preview">
          <div className="container">
            <h2>다른 사용자들의 사주 분석 결과</h2>
            <p className="section-subtitle">실제 사용자들의 사주 분석 결과를 살짝 엿보세요</p>
            
            <div className="results-grid">
              <div className="preview-card">
                <div className="preview-header">
                  <div className="user-info">
                    <div className="user-avatar">
                      <FaUserAlt />
                    </div>
                    <div className="user-details">
                      <h3>이OO님 (여성)</h3>
                      <div className="birth-info">
                        <FaCalendarAlt /> 1988년 5월 생
                      </div>
                    </div>
                  </div>
                  <div className="element-tag water">수(水)</div>
                </div>
                
                <div className="preview-content">
                  <div className="preview-chart">
                    <div className="chart-visual water-chart">
                      <div className="chart-bar"></div>
                      <div className="chart-label">수(水) 우세</div>
                    </div>
                  </div>
                  
                  <div className="preview-text">
                    <p>차분하고 지혜로운 성격의 소유자로, 깊은 통찰력과 분석력이 뛰어납니다. 감정 기복이 적고 안정적인 성향을 가지고 있어 주변 사람들에게 신뢰를 줍니다.</p>
                    <p>직업적으로는 연구, 분석, 전략 기획과 같은 분야에서 두각을 나타낼 수 있으며, 꾸준한 노력으로 성과를 이루는 스타일입니다.</p>
                    <div className="preview-fade"></div>
                  </div>
                </div>
                
                <div className="preview-footer">
                  <div className="fortune-trend">
                    <FaChartLine /> 2024년 상승세
                  </div>
                  <a href="#saju-form" className="preview-button">나도 분석받기</a>
                </div>
              </div>
              
              <div className="preview-card">
                <div className="preview-header">
                  <div className="user-info">
                    <div className="user-avatar">
                      <FaUserAlt />
                    </div>
                    <div className="user-details">
                      <h3>김OO님 (남성)</h3>
                      <div className="birth-info">
                        <FaCalendarAlt /> 1992년 8월 생
                      </div>
                    </div>
                  </div>
                  <div className="element-tag fire">화(火)</div>
                </div>
                
                <div className="preview-content">
                  <div className="preview-chart">
                    <div className="chart-visual fire-chart">
                      <div className="chart-bar"></div>
                      <div className="chart-label">화(火) 우세</div>
                    </div>
                  </div>
                  
                  <div className="preview-text">
                    <p>열정적이고 활동적인 성격으로, 창의력과 리더십이 돋보입니다. 새로운 도전을 두려워하지 않고 적극적으로 나아가는 추진력이 강점입니다.</p>
                    <p>대인관계에서는 사교성이 좋고 주변에 활력을 불어넣는 역할을 합니다. 다만 때로는 감정 조절에 주의가 필요합니다.</p>
                    <div className="preview-fade"></div>
                  </div>
                </div>
                
                <div className="preview-footer">
                  <div className="fortune-trend">
                    <FaChartLine /> 2024년 변동성 높음
                  </div>
                  <a href="#saju-form" className="preview-button">나도 분석받기</a>
                </div>
              </div>
              
              <div className="preview-card">
                <div className="preview-header">
                  <div className="user-info">
                    <div className="user-avatar">
                      <FaUserAlt />
                    </div>
                    <div className="user-details">
                      <h3>박OO님 (여성)</h3>
                      <div className="birth-info">
                        <FaCalendarAlt /> 1985년 11월 생
                      </div>
                    </div>
                  </div>
                  <div className="element-tag earth">토(土)</div>
                </div>
                
                <div className="preview-content">
                  <div className="preview-chart">
                    <div className="chart-visual earth-chart">
                      <div className="chart-bar"></div>
                      <div className="chart-label">토(土) 우세</div>
                    </div>
                  </div>
                  
                  <div className="preview-text">
                    <p>안정적이고 신뢰감 있는 성격으로, 책임감과 인내심이 강합니다. 실용적인 사고방식을 가지고 있어 현실적인 문제 해결에 뛰어납니다.</p>
                    <p>직업적으로는 꾸준함과 성실함이 요구되는 분야에서 좋은 성과를 낼 수 있으며, 특히 재물운이 좋아 자산 관리에 탁월합니다.</p>
                    <div className="preview-fade"></div>
                  </div>
                </div>
                
                <div className="preview-footer">
                  <div className="fortune-trend">
                    <FaChartLine /> 2024년 안정세
                  </div>
                  <a href="#saju-form" className="preview-button">나도 분석받기</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="features">
          <div className="container">
            <h2>사주포춘만의 특별함</h2>
            <p className="section-subtitle">왜 사주포춘이 다른 사주 분석과 다른지 알아보세요</p>
            
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="icon-ai"></i>
                </div>
                <h3>AI 기반 정밀 분석</h3>
                <p>수만 건의 사주 데이터를 학습한 AI가 당신의 사주를 분석합니다. 주관적 해석이 아닌 데이터 기반의 객관적 분석을 제공합니다.</p>
                <ul className="feature-list">
                  <li>빅데이터 기반 패턴 인식</li>
                  <li>머신러닝 알고리즘 활용</li>
                  <li>지속적인 학습과 정확도 향상</li>
                  <li>복잡한 사주 구성 요소 간 상호작용 분석</li>
                </ul>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="icon-personalized"></i>
                </div>
                <h3>개인 맞춤형 해석</h3>
                <p>천편일률적인 운세가 아닌, 당신만의 고유한 사주를 분석합니다. 개인의 특성과 상황에 맞는 맞춤형 조언을 제공합니다.</p>
                <ul className="feature-list">
                  <li>개인별 오행 균형 분석</li>
                  <li>생년월일시 기반 정밀 계산</li>
                  <li>관심 분야별 맞춤형 조언</li>
                  <li>시기별 운세 변화 추적</li>
                </ul>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="icon-modern"></i>
                </div>
                <h3>현대적 해석과 실용적 조언</h3>
                <p>전통 사주 이론을 현대적 맥락에서 재해석하여 실생활에 적용 가능한 실용적인 조언을 제공합니다.</p>
                <ul className="feature-list">
                  <li>현대 심리학 이론 접목</li>
                  <li>직업, 관계, 건강 등 실용적 영역 분석</li>
                  <li>구체적인 행동 가이드 제시</li>
                  <li>현대 생활 패턴 반영</li>
                </ul>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="icon-visual"></i>
                </div>
                <h3>시각적 데이터 표현</h3>
                <p>복잡한 사주 정보를 직관적인 그래프와 차트로 시각화하여 이해하기 쉽게 제공합니다.</p>
                <ul className="feature-list">
                  <li>오행 균형 차트</li>
                  <li>시기별 운세 흐름 그래프</li>
                  <li>적성 및 재능 레이더 차트</li>
                  <li>상호작용 시각화</li>
                </ul>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="icon-privacy"></i>
                </div>
                <h3>개인정보 보호</h3>
                <p>모든 개인정보는 철저히 보호되며, 분석 목적으로만 사용됩니다. 안심하고 서비스를 이용하실 수 있습니다.</p>
                <ul className="feature-list">
                  <li>암호화된 데이터 저장</li>
                  <li>분석 후 개인정보 안전 처리</li>
                  <li>제3자 정보 공유 없음</li>
                  <li>개인정보보호법 준수</li>
                </ul>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="icon-talisman"></i>
                </div>
                <h3>맞춤형 행운 부적</h3>
                <p>당신의 사주에 맞춰 특별히 설계된 행운 부적으로 부족한 기운을 보충하고 운세를 개선하세요.</p>
                <ul className="feature-list">
                  <li>개인 사주 기반 맞춤 설계</li>
                  <li>전통 부적 원리와 현대 에너지 이론 결합</li>
                  <li>오행 균형 조절 효과</li>
                  <li>특정 목적별 부적 제공</li>
                </ul>
              </div>
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
        
        {/* 다른 사용자 결과 미리보기 섹션 */}
        <section className="results-preview">
          <div className="container">
            <h2>다른 사용자들의 사주 분석 결과</h2>
            <p className="section-subtitle">실제 사용자들의 사주 분석 결과를 살짝 엿보세요</p>
            
            <div className="results-grid">
              <div className="result-preview-card">
                <div className="result-preview-header">
                  <div className="user-info">
                    <div className="user-avatar">김</div>
                    <div className="user-details">
                      <h3>김OO님의 사주 분석</h3>
                      <p>1988년 5월 생, 여성</p>
                    </div>
                  </div>
                  <div className="element-tag water">수(水)</div>
                </div>
                <div className="result-preview-content">
                  <div className="preview-chart">
                    <div className="chart-placeholder">
                      <div className="chart-circle"></div>
                      <div className="chart-bars">
                        <div className="chart-bar" style={{height: '65%'}}></div>
                        <div className="chart-bar" style={{height: '40%'}}></div>
                        <div className="chart-bar" style={{height: '85%'}}></div>
                        <div className="chart-bar" style={{height: '55%'}}></div>
                        <div className="chart-bar" style={{height: '70%'}}></div>
                      </div>
                    </div>
                  </div>
                  <div className="preview-text">
                    <p>차분하고 지혜로운 성격의 소유자로, 깊은 통찰력과 분석력이 뛰어납니다. 감정 기복이 적고 안정적인 성향을 가지고 있어 주변 사람들에게 신뢰를 줍니다.</p>
                    <p>직업적으로는 연구, 분석, 전략 기획과 같은 분야에서 두각을 나타낼 수 있으며, 꾸준한 노력으로 성과를 이루는 스타일입니다.</p>
                    <p>대인관계에서는 소수의 깊은 관계를 선호하며, 신중하게 사람을 선택하는 경향이 있습니다. 한번 신뢰를 주면 오랫동안 관계를 유지하는 충성도가 높은 사람입니다.</p>
                  </div>
                  <div className="preview-fade"></div>
                </div>
                <div className="result-preview-footer">
                  <a href="#saju-form" className="btn-outline">나도 분석받기</a>
                </div>
              </div>
              
              <div className="result-preview-card">
                <div className="result-preview-header">
                  <div className="user-info">
                    <div className="user-avatar">박</div>
                    <div className="user-details">
                      <h3>박OO님의 사주 분석</h3>
                      <p>1992년 8월 생, 남성</p>
                    </div>
                  </div>
                  <div className="element-tag fire">화(火)</div>
                </div>
                <div className="result-preview-content">
                  <div className="preview-chart">
                    <div className="chart-placeholder">
                      <div className="chart-circle"></div>
                      <div className="chart-bars">
                        <div className="chart-bar" style={{height: '45%'}}></div>
                        <div className="chart-bar" style={{height: '90%'}}></div>
                        <div className="chart-bar" style={{height: '35%'}}></div>
                        <div className="chart-bar" style={{height: '60%'}}></div>
                        <div className="chart-bar" style={{height: '50%'}}></div>
                      </div>
                    </div>
                  </div>
                  <div className="preview-text">
                    <p>열정적이고 활동적인 성격으로, 창의력과 리더십이 돋보입니다. 새로운 도전을 두려워하지 않고 적극적으로 나아가는 추진력이 강점입니다.</p>
                    <p>직업적으로는 창의적인 분야나 리더십을 발휘할 수 있는 역할에 적합하며, 자신의 아이디어를 실현시키는 데 탁월한 능력을 보입니다.</p>
                    <p>대인관계에서는 사교성이 좋고 주변에 활력을 불어넣는 역할을 합니다. 다만 때로는 감정 조절에 주의가 필요하며, 인내심을 기르는 것이 중요합니다.</p>
                  </div>
                  <div className="preview-fade"></div>
                </div>
                <div className="result-preview-footer">
                  <a href="#saju-form" className="btn-outline">나도 분석받기</a>
                </div>
              </div>
              
              <div className="result-preview-card">
                <div className="result-preview-header">
                  <div className="user-info">
                    <div className="user-avatar">이</div>
                    <div className="user-details">
                      <h3>이OO님의 사주 분석</h3>
                      <p>1985년 11월 생, 여성</p>
                    </div>
                  </div>
                  <div className="element-tag earth">토(土)</div>
                </div>
                <div className="result-preview-content">
                  <div className="preview-chart">
                    <div className="chart-placeholder">
                      <div className="chart-circle"></div>
                      <div className="chart-bars">
                        <div className="chart-bar" style={{height: '50%'}}></div>
                        <div className="chart-bar" style={{height: '45%'}}></div>
                        <div className="chart-bar" style={{height: '85%'}}></div>
                        <div className="chart-bar" style={{height: '65%'}}></div>
                        <div className="chart-bar" style={{height: '40%'}}></div>
                      </div>
                    </div>
                  </div>
                  <div className="preview-text">
                    <p>안정적이고 신뢰감 있는 성격으로, 책임감과 인내심이 강합니다. 실용적인 사고방식을 가지고 있어 현실적인 문제 해결에 뛰어납니다.</p>
                    <p>직업적으로는 꾸준함과 성실함이 요구되는 분야에서 좋은 성과를 낼 수 있으며, 특히 재물운이 좋아 자산 관리에 탁월합니다.</p>
                    <p>대인관계에서는 신뢰를 바탕으로 한 깊은 관계를 형성하며, 주변 사람들에게 안정감을 제공합니다. 다만 때로는 너무 현실적인 접근으로 인해 융통성이 부족할 수 있습니다.</p>
                  </div>
                  <div className="preview-fade"></div>
                </div>
                <div className="result-preview-footer">
                  <a href="#saju-form" className="btn-outline">나도 분석받기</a>
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
                <h3>맞춤형 행운 부적은 어떤 효과가 있나요?</h3>
                <p>맞춤형 행운 부적은 개인의 사주 분석을 바탕으로 부족한 기운을 보충하고 과잉된 기운을 조절하는 데 도움을 줍니다. 전통적인 부적의 원리와 현대적인 에너지 이론을 결합하여 설계되며, 운세 개선, 심리적 안정, 목표 달성 등에 도움을 줄 수 있습니다. 부적의 효과는 개인의 신념과 에너지 상태에 따라 다를 수 있습니다.</p>
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