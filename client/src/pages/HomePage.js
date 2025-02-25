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
      
    } catch (error) {
      console.error('사주 분석 오류:', error);
      setError('사주 분석 중 오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
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
                  <div className="result-fade"></div>
                </div>
                <div className="result-footer">
                  <a href="#saju-form" className="btn-outline">나도 분석받기</a>
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
                  <div className="result-fade"></div>
                </div>
                <div className="result-footer">
                  <a href="#saju-form" className="btn-outline">나도 분석받기</a>
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
                  <div className="result-fade"></div>
                </div>
                <div className="result-footer">
                  <a href="#saju-form" className="btn-outline">나도 분석받기</a>
                </div>
              </div>
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
                <p>최신 인공지능 기술로 정확한 사주 분석을 제공합니다.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon personalized-icon"></div>
                <h3>맞춤형 분석</h3>
                <p>개인의 생년월일과 시간을 바탕으로 맞춤형 운세를 알려드립니다.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon secure-icon"></div>
                <h3>안전한 정보 관리</h3>
                <p>개인정보는 철저히 보호되며 분석 후 안전하게 처리됩니다.</p>
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
                  {loading ? '분석 중...' : '무료 사주 분석 받기'}
                </button>
              </form>
            </div>
          </div>
        </section>
        
        <section className="testimonials">
          <div className="container">
            <h2>사용자 후기</h2>
            <div className="testimonials-grid">
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <p>"정확한 분석에 놀랐습니다. 제 성격과 진로에 대한 조언이 매우 도움이 되었어요."</p>
                </div>
                <div className="testimonial-author">
                  <p><strong>김OO</strong> | 30대</p>
                </div>
              </div>
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <p>"무료로 이렇게 상세한 분석을 받을 수 있어서 좋았습니다. 특히 건강 관련 조언이 유용했어요."</p>
                </div>
                <div className="testimonial-author">
                  <p><strong>이OO</strong> | 40대</p>
                </div>
              </div>
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <p>"연애운에 대한 분석이 정확해서 깜짝 놀랐어요. 앞으로의 방향을 잡는데 큰 도움이 되었습니다."</p>
                </div>
                <div className="testimonial-author">
                  <p><strong>박OO</strong> | 20대</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="faq">
          <div className="container">
            <h2>자주 묻는 질문</h2>
            <div className="faq-list">
              <div className="faq-item">
                <h3>사주 분석은 어떻게 이루어지나요?</h3>
                <p>사주팔자(四柱八字)는 태어난 년, 월, 일, 시를 기준으로 분석합니다. 각 요소가 나타내는 오행(木, 火, 土, 金, 水)의 조합을 통해 개인의 성격, 적성, 운명의 흐름을 파악합니다.</p>
              </div>
              <div className="faq-item">
                <h3>정확한 분석을 위해 필요한 정보는 무엇인가요?</h3>
                <p>정확한 생년월일과 태어난 시간이 가장 중요합니다. 시간을 모르시는 경우에도 기본적인 분석은 가능하지만, 더 정확한 결과를 위해서는 태어난 시간까지 입력해주시는 것이 좋습니다.</p>
              </div>
              <div className="faq-item">
                <h3>개인정보는 안전하게 보호되나요?</h3>
                <p>네, 입력하신 모든 개인정보는 분석 목적으로만 사용되며, 분석 후에는 안전하게 처리됩니다. 저희는 개인정보보호법을 준수하며 고객님의 정보 보호를 최우선으로 생각합니다.</p>
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
    </div>
  );
}

export default HomePage;