import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/HomePage.css';
import { FaCalendarAlt, FaClock, FaUserAlt, FaQuestionCircle, FaChevronDown } from 'react-icons/fa';

function HomePage() {
  const history = useHistory();
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    birthDate: '',
    birthTime: '',
    gender: '남성',
    concern: '연애/결혼'
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [activeSection, setActiveSection] = useState('');

  // 스크롤 이벤트 리스너 추가
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const scrollY = window.scrollY;
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(section.getAttribute('id'));
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const toggleForm = () => {
    setShowForm(!showForm);
    if (!showForm) {
      setTimeout(() => {
        const formElement = document.getElementById('saju-form');
        if (formElement) {
          formElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // 폼 유효성 검사
    if (!formData.name) {
      setError('이름을 입력해주세요.');
      return;
    }
    
    if (!formData.birthDate) {
      setError('생년월일을 입력해주세요.');
      return;
    }
    
    setError('');
    setLoading(true);
    
    try {
      const response = await fetch('/api/saju/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        throw new Error('서버 오류가 발생했습니다.');
      }
      
      const data = await response.json();
      
      // 결과 페이지로 이동
      history.push('/result', { 
        userData: formData,
        sajuResult: data
      });
      
    } catch (err) {
      setError('사주 분석 중 오류가 발생했습니다. 다시 시도해주세요.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="homepage-container">
      <Header />
      
      <main className="main-content">
        <section className="hero-section">
          <div className="hero-background"></div>
          <div className="container">
            <div className="hero-content">
              <div className="oriental-symbol">卜</div>
              <h1 className="hero-title">운명의 비밀을 밝혀드립니다</h1>
              <p className="hero-subtitle">
                한국 전통 사주팔자(四柱八字)의 지혜와 현대 AI 기술을 결합하여 
                당신의 타고난 기질과 미래의 운세를 분석해 드립니다.
              </p>
              <button className="cta-button" onClick={toggleForm}>
                무료 사주 분석 시작하기
              </button>
              <div className="scroll-indicator" onClick={() => scrollToSection('about')}>
                <span>더 알아보기</span>
                <FaChevronDown />
              </div>
            </div>
          </div>
        </section>
        
        <section className="about-section" id="about">
          <div className="container">
            <div className="section-header">
              <div className="oriental-symbol">命</div>
              <h2 className="section-title">사주팔자란?</h2>
              <div className="oriental-divider"></div>
            </div>
            
            <div className="about-content">
              <div className="about-image">
                <div className="image-wrapper">
                  <div className="oriental-frame"></div>
                </div>
              </div>
              
              <div className="about-text">
                <p className="highlight-text">
                  사주팔자(四柱八字)는 동양 철학에서 가장 오래되고 정교한 운명 해석 체계입니다.
                </p>
                <p>
                  태어난 년, 월, 일, 시를 각각 하나의 기둥(柱)으로 보고, 
                  각 기둥은 천간(天干)과 지지(地支)라는 두 개의 글자로 이루어져 
                  총 여덟 글자(八字)가 됩니다.
                </p>
                <p>
                  이 여덟 글자는 우주의 기운과 개인의 운명을 연결하는 코드로, 
                  당신의 타고난 성격, 재능, 인간관계, 그리고 미래의 운세를 담고 있습니다.
                </p>
                <p>
                  수천 년간 동양의 현인들이 연구하고 발전시켜온 이 지혜를 
                  현대 AI 기술로 더욱 정확하고 깊이 있게 해석해 드립니다.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="features-section" id="features">
          <div className="container">
            <div className="section-header">
              <div className="oriental-symbol">智</div>
              <h2 className="section-title">AI 사주 분석의 특별함</h2>
              <div className="oriental-divider"></div>
            </div>
            
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">🔮</div>
                <h3 className="feature-title">정확한 사주 분석</h3>
                <p className="feature-description">
                  생년월일과 태어난 시간을 바탕으로 정확한 사주팔자를 분석합니다. 
                  전통 사주학의 원리를 충실히 반영하여 신뢰도 높은 결과를 제공합니다.
                </p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">🤖</div>
                <h3 className="feature-title">AI 기술의 혁신</h3>
                <p className="feature-description">
                  최첨단 인공지능이 수천 년의 사주학 지식을 학습하여 
                  개인화된 분석 결과를 제공합니다. 기존 사주 해석의 한계를 뛰어넘습니다.
                </p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">📊</div>
                <h3 className="feature-title">다양한 시각화</h3>
                <p className="feature-description">
                  오행 균형, 월별 운세, 인간관계 등 다양한 측면을 
                  직관적인 그래프와 차트로 시각화하여 쉽게 이해할 수 있습니다.
                </p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">🔍</div>
                <h3 className="feature-title">심층 분석</h3>
                <p className="feature-description">
                  성격, 재능, 직업 적합도, 건강, 재물운, 연애운 등 
                  삶의 다양한 측면에 대한 심층적인 분석을 제공합니다.
                </p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">📱</div>
                <h3 className="feature-title">언제 어디서나</h3>
                <p className="feature-description">
                  PC, 태블릿, 모바일 등 모든 기기에서 편리하게 
                  사주 분석 결과를 확인하고 저장할 수 있습니다.
                </p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">🔒</div>
                <h3 className="feature-title">개인정보 보호</h3>
                <p className="feature-description">
                  고객의 개인정보는 철저히 암호화되어 보호됩니다. 
                  안심하고 서비스를 이용하실 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="ai-section" id="ai">
          <div className="container">
            <div className="section-header">
              <div className="oriental-symbol">科</div>
              <h2 className="section-title">AI와 전통의 만남</h2>
              <div className="oriental-divider"></div>
            </div>
            
            <div className="ai-content">
              <div className="ai-text">
                <h3>왜 AI 사주 분석인가?</h3>
                <p>
                  전통적인 사주 해석은 사주 전문가의 경험과 직관에 크게 의존합니다. 
                  이로 인해 같은 사주도 보는 사람에 따라 다른 해석이 나올 수 있었습니다.
                </p>
                <p>
                  <strong>사주포춘의 AI는 다릅니다.</strong> 수천 권의 사주 관련 서적과 
                  수만 건의 실제 사례를 학습하여 객관적이고 일관된 해석을 제공합니다.
                </p>
                <p>
                  또한 현대 심리학과 통계학을 접목하여 단순한 운세를 넘어, 
                  당신의 잠재력을 최대한 발휘할 수 있는 실질적인 조언을 드립니다.
                </p>
                <p>
                  AI의 정확성과 전통 사주학의 깊이를 결합한 
                  사주포춘만의 특별한 경험을 만나보세요.
                </p>
              </div>
              
              <div className="ai-image">
                <div className="image-wrapper">
                  <div className="oriental-frame"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="testimonials-section" id="testimonials">
          <div className="container">
            <div className="section-header">
              <div className="oriental-symbol">評</div>
              <h2 className="section-title">고객 후기</h2>
              <div className="oriental-divider"></div>
            </div>
            
            <div className="testimonials-grid">
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <p className="testimonial-text">
                    "처음에는 반신반의했지만, 제 성격과 적성을 정확히 짚어내서 놀랐어요. 
                    특히 직업 추천이 현재 제가 고민하던 진로와 일치해서 확신을 갖게 되었습니다. 
                    인생의 중요한 결정에 큰 도움이 되었어요."
                  </p>
                  <div className="testimonial-author">
                    <p className="author-name">이준호, 28세</p>
                    <p className="author-job">대학원생</p>
                  </div>
                </div>
              </div>
              
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <p className="testimonial-text">
                    "맞춤형 부적을 구매한 후 정말 놀라운 변화가 있었어요. 
                    특히 건강 문제가 개선되고 인간관계도 더 원만해졌습니다. 
                    과학적으로 설명할 수는 없지만 확실히 효과가 있어요!"
                  </p>
                  <div className="testimonial-author">
                    <p className="author-name">최동훈, 39세</p>
                    <p className="author-job">회사원</p>
                  </div>
                </div>
              </div>
              
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <p className="testimonial-text">
                    "아이의 성격과 재능을 더 잘 이해하고 싶어서 사주를 봤어요. 
                    분석 결과를 보고 아이의 특성에 맞게 교육 방향을 조정했더니 
                    아이가 훨씬 더 행복해하고 자신감도 생겼어요."
                  </p>
                  <div className="testimonial-author">
                    <p className="author-name">정미영, 41세</p>
                    <p className="author-job">주부</p>
                  </div>
                </div>
              </div>
              
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <p className="testimonial-text">
                    "친구 추천으로 사용해봤는데, 정말 놀랍도록 정확했어요. 
                    특히 월별 운세 그래프가 실제 제 삶의 흐름과 일치해서 
                    앞으로의 계획을 세울 때 많은 도움이 되고 있습니다."
                  </p>
                  <div className="testimonial-author">
                    <p className="author-name">박서연, 35세</p>
                    <p className="author-job">프리랜서 디자이너</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="faq-section" id="faq">
          <div className="container">
            <div className="section-header">
              <div className="oriental-symbol">解</div>
              <h2 className="section-title">자주 묻는 질문</h2>
              <div className="oriental-divider"></div>
            </div>
            
            <div className="faq-list">
              <div className="faq-item">
                <h3 className="faq-question">사주 분석을 위해 정확한 출생 시간이 필요한가요?</h3>
                <p className="faq-answer">
                  정확한 출생 시간을 알고 계시면 더 정확한 분석이 가능합니다. 
                  하지만 출생 시간을 모르시는 경우에도 생년월일만으로 기본적인 사주 분석이 가능합니다. 
                  다만, 시간을 모르면 '시주'가 빠지기 때문에 일부 상세 정보는 제한될 수 있습니다.
                </p>
              </div>
              
              <div className="faq-item">
                <h3 className="faq-question">AI 사주 분석은 얼마나 정확한가요?</h3>
                <p className="faq-answer">
                  저희 AI는 수천 년간 축적된 사주학 지식과 현대 심리학을 결합하여 학습되었습니다. 
                  많은 고객들이 90% 이상의 정확도를 경험했다고 평가하고 있습니다. 
                  다만, 사주는 참고용 정보로 활용하시는 것이 좋습니다.
                </p>
              </div>
              
              <div className="faq-item">
                <h3 className="faq-question">맞춤형 부적은 어떻게 만들어지나요?</h3>
                <p className="faq-answer">
                  맞춤형 부적은 고객님의 사주 분석 결과를 바탕으로 부족한 기운을 보완하고 
                  강한 기운을 더욱 발전시킬 수 있는 특별한 문양과 글자로 구성됩니다. 
                  AI가 설계한 디자인을 전통 방식으로 제작하여 보내드립니다.
                </p>
              </div>
              
              <div className="faq-item">
                <h3 className="faq-question">사주 분석 결과는 얼마나 자세한가요?</h3>
                <p className="faq-answer">
                  기본 분석 결과는 성격, 재능, 대인관계, 건강, 재물운, 직업 적합도, 연애운 등 
                  다양한 측면을 포함합니다. 또한 월별, 연도별 운세 변화와 행운의 방향, 
                  색상 등 실생활에 활용할 수 있는 정보도 제공합니다.
                </p>
              </div>
              
              <div className="faq-item">
                <h3 className="faq-question">개인정보는 안전하게 보호되나요?</h3>
                <p className="faq-answer">
                  네, 고객님의 개인정보는 철저히 보호됩니다. 
                  사주 분석에 필요한 정보만 수집하며, 분석 후에는 암호화하여 안전하게 보관합니다. 
                  자세한 내용은 개인정보처리방침을 참고해주세요.
                </p>
              </div>
              
              <div className="faq-item">
                <h3 className="faq-question">결제 후 환불이 가능한가요?</h3>
                <p className="faq-answer">
                  부적 제작이 시작되기 전까지는 100% 환불이 가능합니다. 
                  제작이 시작된 후에는 환불이 제한될 수 있으니 구매 전 신중하게 결정해주세요. 
                  자세한 환불 정책은 이용약관을 참고해주세요.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="form-section" id="saju-form">
          <div className="container">
            <div className={`form-container glass-card ${showForm ? 'show' : ''}`}>
              <h2 className="form-title">무료 사주 분석</h2>
              <p className="form-subtitle">정확한 분석을 위해 아래 정보를 입력해주세요.</p>
              
              {error && <div className="error-message">{error}</div>}
              
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">
                    <FaUserAlt /> 이름
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="이름을 입력하세요"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="birthDate">
                    <FaCalendarAlt /> 생년월일
                  </label>
                  <input
                    type="date"
                    id="birthDate"
                    name="birthDate"
                    value={formData.birthDate}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="birthTime">
                    <FaClock /> 태어난 시간 (선택사항)
                  </label>
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
                  <label htmlFor="concern">
                    <FaQuestionCircle /> 가장 알고 싶은 것
                  </label>
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
                  className="submit-button"
                  disabled={loading}
                >
                  {loading ? '분석 중...' : '무료 사주 분석 받기'}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default HomePage;