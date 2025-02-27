import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ElementChart from '../components/ElementChart';
import LoadingAnimation from '../components/LoadingAnimation';
import ResultCard from '../components/ResultCard';

const AnalysisPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // 입력 폼 상태
  const [birthDate, setBirthDate] = useState('');
  const [birthTime, setBirthTime] = useState('');
  const [gender, setGender] = useState('');
  const [name, setName] = useState('');
  const [question, setQuestion] = useState('');
  
  // 유효성 검사 및 에러 상태
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  
  // 분석 처리 상태
  const [isLoading, setIsLoading] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [analysisResults, setAnalysisResults] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  
  // URL 파라미터에서 날짜 및 시간 가져오기
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const dateParam = params.get('date');
    const timeParam = params.get('time');
    
    if (dateParam) setBirthDate(dateParam);
    if (timeParam) setBirthTime(timeParam);
  }, [location]);
  
  // 폼 유효성 검사
  useEffect(() => {
    const validateForm = () => {
      const newErrors = {};
      
      if (!birthDate) newErrors.birthDate = '생년월일을 입력해주세요';
      if (!birthTime) newErrors.birthTime = '태어난 시간을 입력해주세요';
      if (!gender) newErrors.gender = '성별을 선택해주세요';
      
      setErrors(newErrors);
      setIsFormValid(Object.keys(newErrors).length === 0);
    };
    
    validateForm();
  }, [birthDate, birthTime, gender]);
  
  // 분석 요청 처리
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!isFormValid) return;
    
    setIsLoading(true);
    
    // 분석 로딩 시뮬레이션 (실제로는 API 요청을 보냄)
    simulateAnalysis();
  };
  
  // 분석 로딩 시뮬레이션
  const simulateAnalysis = () => {
    const loadingSteps = [
      '사주 정보 확인 중...',
      '오행 분석 중...',
      '오행의 조화와 충돌 계산 중...',
      '운세 데이터 생성 중...',
      '최종 분석 완료 중...'
    ];
    
    let step = 0;
    
    const interval = setInterval(() => {
      if (step < loadingSteps.length - 1) {
        setCurrentStep(step + 1);
        step++;
      } else {
        clearInterval(interval);
        
        // 분석 결과 생성 (실제로는 API 응답을 사용)
        const results = generateMockResults();
        setAnalysisResults(results);
        setIsLoading(false);
        setAnalysisComplete(true);
      }
    }, 1500);
  };
  
  // 목업 분석 결과 생성
  const generateMockResults = () => {
    // 여기서는 목업 데이터를 반환합니다.
    // 실제 구현에서는 API에서 받은 데이터를 사용합니다.
    return {
      name: name || '사용자',
      birthDate: birthDate,
      birthTime: birthTime,
      gender: gender === 'male' ? '남성' : '여성',
      question: question,
      elements: {
        wood: Math.floor(Math.random() * 40) + 10,
        fire: Math.floor(Math.random() * 40) + 10,
        earth: Math.floor(Math.random() * 40) + 10,
        metal: Math.floor(Math.random() * 40) + 10,
        water: Math.floor(Math.random() * 40) + 10,
      },
      personalityTraits: [
        '창의적인 사고방식을 가지고 있습니다.',
        '리더십이 강하며 주변 사람들에게 영향을 줍니다.',
        '감정을 잘 조절하며 균형 잡힌 판단을 합니다.',
        '직관이 발달하여 상황을 빠르게 파악합니다.'
      ],
      lifeAreas: {
        love: {
          score: Math.floor(Math.random() * 100),
          description: '당신의 연애운은 올해 상승세에 있습니다. 6월과 9월에 특히 좋은 인연이 찾아올 수 있으니 마음을 열고 기회를 놓치지 마세요.'
        },
        career: {
          score: Math.floor(Math.random() * 100),
          description: '직업적으로는 안정기에 접어들고 있습니다. 현재의 위치에서 더 깊은 전문성을 쌓는 것이 중요한 시기입니다.'
        },
        wealth: {
          score: Math.floor(Math.random() * 100),
          description: '재물운은 조금 주의가 필요합니다. 큰 투자보다는 안정적인 저축을 유지하는 것이 좋습니다.'
        },
        health: {
          score: Math.floor(Math.random() * 100),
          description: '건강 면에서는 스트레스 관리에 신경 쓰세요. 특히 소화기 계통에 약점이 있을 수 있습니다.'
        }
      },
      yearlyForecast: {
        overview: '전체적으로 안정적인 한 해가 될 것입니다. 특히 학습과 자기 개발에 좋은 시기입니다.',
        months: [
          { month: 1, score: Math.floor(Math.random() * 100), description: '새로운 시작에 적합한 달입니다.' },
          { month: 2, score: Math.floor(Math.random() * 100), description: '인간관계에 집중하세요.' },
          { month: 3, score: Math.floor(Math.random() * 100), description: '재정적 기회가 찾아올 수 있습니다.' },
          { month: 4, score: Math.floor(Math.random() * 100), description: '건강 관리에 주의하세요.' },
          { month: 5, score: Math.floor(Math.random() * 100), description: '여행이나 이동에 좋은 시기입니다.' },
          { month: 6, score: Math.floor(Math.random() * 100), description: '가족과의 관계가 중요해집니다.' },
          { month: 7, score: Math.floor(Math.random() * 100), description: '창의적 활동에 좋은 시기입니다.' },
          { month: 8, score: Math.floor(Math.random() * 100), description: '직업적 성취가 있을 수 있습니다.' },
          { month: 9, score: Math.floor(Math.random() * 100), description: '학습과 교육에 좋은 달입니다.' },
          { month: 10, score: Math.floor(Math.random() * 100), description: '협력과 파트너십에 중점을 두세요.' },
          { month: 11, score: Math.floor(Math.random() * 100), description: '내면의 성찰에 적합한 시기입니다.' },
          { month: 12, score: Math.floor(Math.random() * 100), description: '한 해를 정리하고 새로운 계획을 세우세요.' }
        ]
      },
      luckyColors: ['파랑', '초록', '보라'],
      luckyNumbers: [3, 8, 14, 27],
      luckyDirections: ['동쪽', '남쪽'],
      advice: '무리한 계획보다는 현실적인 목표를 세우고 꾸준히 실천하는 것이 중요합니다. 특히 대인관계에서 경청의 자세를 유지하세요.'
    };
  };
  
  // 결과 페이지로 이동
  const goToDetailedResults = () => {
    navigate('/results', { state: { results: analysisResults } });
  };
  
  return (
    <div className="analysis-page">
      <Header />
      
      <main className="analysis-main">
        <AnimatePresence mode="wait">
          {!analysisComplete ? (
            <motion.div 
              key="analysis-form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="analysis-form-section"
            >
              <div className="container">
                <div className="form-container">
                  <motion.div 
                    className="form-header"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    <h1>사주 분석</h1>
                    <p>정확한 정보를 입력하여 당신의 사주를 알아보세요</p>
                  </motion.div>
                  
                  {isLoading ? (
                    <div className="loading-container">
                      <LoadingAnimation />
                      <div className="loading-step">
                        <h3>분석 진행 중...</h3>
                        <p>{['사주 정보 확인 중...', '오행 분석 중...', '오행의 조화와 충돌 계산 중...', '운세 데이터 생성 중...', '최종 분석 완료 중...'][currentStep]}</p>
                        <div className="progress-bar">
                          <div 
                            className="progress-fill"
                            style={{ width: `${(currentStep + 1) * 20}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="saju-form">
                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="birthDate">
                            <i className="fas fa-calendar-alt"></i> 생년월일 *
                          </label>
                          <input
                            type="date"
                            id="birthDate"
                            value={birthDate}
                            onChange={(e) => setBirthDate(e.target.value)}
                            className={errors.birthDate ? 'error' : ''}
                            required
                          />
                          {errors.birthDate && (
                            <span className="error-message">{errors.birthDate}</span>
                          )}
                        </div>
                        
                        <div className="form-group">
                          <label htmlFor="birthTime">
                            <i className="fas fa-clock"></i> 태어난 시간 *
                          </label>
                          <input
                            type="time"
                            id="birthTime"
                            value={birthTime}
                            onChange={(e) => setBirthTime(e.target.value)}
                            className={errors.birthTime ? 'error' : ''}
                            required
                          />
                          {errors.birthTime && (
                            <span className="error-message">{errors.birthTime}</span>
                          )}
                        </div>
                      </div>
                      
                      <div className="form-group">
                        <label>
                          <i className="fas fa-venus-mars"></i> 성별 *
                        </label>
                        <div className="radio-group">
                          <label className={`radio-label ${gender === 'male' ? 'selected' : ''}`}>
                            <input
                              type="radio"
                              name="gender"
                              value="male"
                              checked={gender === 'male'}
                              onChange={() => setGender('male')}
                            />
                            <span className="radio-custom"></span>
                            <span className="radio-text">남성</span>
                          </label>
                          <label className={`radio-label ${gender === 'female' ? 'selected' : ''}`}>
                            <input
                              type="radio"
                              name="gender"
                              value="female"
                              checked={gender === 'female'}
                              onChange={() => setGender('female')}
                            />
                            <span className="radio-custom"></span>
                            <span className="radio-text">여성</span>
                          </label>
                        </div>
                        {errors.gender && (
                          <span className="error-message">{errors.gender}</span>
                        )}
                      </div>
                      
                      <div className="form-group optional">
                        <label htmlFor="name">
                          <i className="fas fa-user"></i> 이름 (선택사항)
                        </label>
                        <input
                          type="text"
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="이름을 입력하세요"
                        />
                      </div>
                      
                      <div className="form-group optional">
                        <label htmlFor="question">
                          <i className="fas fa-question-circle"></i> 궁금한 점 (선택사항)
                        </label>
                        <textarea
                          id="question"
                          value={question}
                          onChange={(e) => setQuestion(e.target.value)}
                          placeholder="특별히 알고 싶은 내용이 있다면 적어주세요"
                          rows="3"
                        ></textarea>
                      </div>
                      
                      <div className="form-group consent">
                        <label className="checkbox-label">
                          <input
                            type="checkbox"
                            required
                          />
                          <span className="checkbox-custom"></span>
                          <span className="checkbox-text">
                            개인정보 수집 및 이용에 동의합니다. 
                            <Link to="/privacy" className="privacy-link">개인정보처리방침</Link>
                          </span>
                        </label>
                      </div>
                      
                      <div className="form-actions">
                        <button 
                          type="submit" 
                          className="btn-submit"
                          disabled={!isFormValid}
                        >
                          <i className="fas fa-chart-pie"></i> 사주 분석하기
                        </button>
                      </div>
                      
                      <div className="form-footer">
                        <p>* 표시된 항목은 필수 입력 사항입니다</p>
                        <p className="form-note">
                          <i className="fas fa-info-circle"></i> 더 정확한 분석을 위해 정확한 시간을 입력해주세요
                        </p>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="analysis-results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="analysis-results-section"
            >
              <div className="container">
                <motion.div 
                  className="results-header"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <h1>사주 분석 결과</h1>
                  <p>
                    {name || '사용자'}님의 사주 분석 결과입니다.
                    <br />
                    생년월일: {new Date(birthDate).toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' })}
                    <br />
                    태어난 시간: {birthTime}
                  </p>
                </motion.div>
                
                <div className="results-content">
                  <motion.div 
                    className="elements-chart-container"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    <h2>오행 분석</h2>
                    <div className="elements-chart">
                      <ElementChart elements={analysisResults.elements} />
                    </div>
                    <div className="elements-explanation">
                      <p>
                        오행은 목(木), 화(火), 토(土), 금(金), 수(水)로 구성되며, 
                        이들의 균형과 조화가 사주에 중요한 영향을 미칩니다.
                      </p>
                      <ul className="elements-list">
                        <li className="wood">
                          <span className="element-name">목(木)</span>: 
                          <span className="element-value">{analysisResults.elements.wood}%</span> - 
                          창의성, 성장, 확장
                        </li>
                        <li className="fire">
                          <span className="element-name">화(火)</span>: 
                          <span className="element-value">{analysisResults.elements.fire}%</span> - 
                          열정, 에너지, 변화
                        </li>
                        <li className="earth">
                          <span className="element-name">토(土)</span>: 
                          <span className="element-value">{analysisResults.elements.earth}%</span> - 
                          안정, 신뢰, 균형
                        </li>
                        <li className="metal">
                          <span className="element-name">금(金)</span>: 
                          <span className="element-value">{analysisResults.elements.metal}%</span> - 
                          결단력, 정확성, 효율
                        </li>
                        <li className="water">
                          <span className="element-name">수(水)</span>: 
                          <span className="element-value">{analysisResults.elements.water}%</span> - 
                          지혜, 소통, 적응력
                        </li>
                      </ul>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="personality-traits"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    <h2>성격 특성</h2>
                    <ul className="traits-list">
                      {analysisResults.personalityTraits.map((trait, index) => (
                        <motion.li 
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 + (index * 0.1), duration: 0.3 }}
                        >
                          <i className="fas fa-check-circle"></i> {trait}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                  
                  <motion.div 
                    className="life-areas"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    <h2>삶의 영역별 분석</h2>
                    <div className="life-area-cards">
                      <ResultCard 
                        title="연애/결혼" 
                        icon="heart" 
                        score={analysisResults.lifeAreas.love.score}
                        description={analysisResults.lifeAreas.love.description}
                        delay={0.6}
                      />
                      <ResultCard 
                        title="직업/경력" 
                        icon="briefcase" 
                        score={analysisResults.lifeAreas.career.score}
                        description={analysisResults.lifeAreas.career.description}
                        delay={0.7}
                      />
                      <ResultCard 
                        title="재물운" 
                        icon="coins" 
                        score={analysisResults.lifeAreas.wealth.score}
                        description={analysisResults.lifeAreas.wealth.description}
                        delay={0.8}
                      />
                      <ResultCard 
                        title="건강" 
                        icon="heartbeat" 
                        score={analysisResults.lifeAreas.health.score}
                        description={analysisResults.lifeAreas.health.description}
                        delay={0.9}
                      />
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="yearly-forecast"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  >
                    <h2>올해의 운세</h2>
                    <div className="forecast-overview">
                      <p>{analysisResults.yearlyForecast.overview}</p>
                    </div>
                    
                    <div className="monthly-forecast-preview">
                      <h3>월별 운세 미리보기</h3>
                      <div className="monthly-chart">
                        {analysisResults.yearlyForecast.months.slice(0, 4).map((month, index) => (
                          <div key={index} className="month-preview">
                            <div className="month-name">{month.month}월</div>
                            <div className="month-bar-container">
                              <div 
                                className="month-bar" 
                                style={{ height: `${month.score}%` }}
                              ></div>
                            </div>
                            <div className="month-score">{month.score}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="lucky-factors"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                  >
                    <h2>행운 요소</h2>
                    <div className="lucky-items">
                      <div className="lucky-item">
                        <h3><i className="fas fa-palette"></i> 행운의 색상</h3>
                        <div className="lucky-colors">
                          {analysisResults.luckyColors.map((color, index) => (
                            <span key={index} className="lucky-color">{color}</span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="lucky-item">
                        <h3><i className="fas fa-sort-numeric-up"></i> 행운의 숫자</h3>
                        <div className="lucky-numbers">
                          {analysisResults.luckyNumbers.map((number, index) => (
                            <span key={index} className="lucky-number">{number}</span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="lucky-item">
                        <h3><i className="fas fa-compass"></i> 행운의 방향</h3>
                        <div className="lucky-directions">
                          {analysisResults.luckyDirections.map((direction, index) => (
                            <span key={index} className="lucky-direction">{direction}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="advice-section"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                  >
                    <h2>조언</h2>
                    <div className="advice-content">
                      <p>{analysisResults.advice}</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="results-actions"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.5 }}
                  >
                    <button 
                      className="detailed-results-btn"
                      onClick={goToDetailedResults}
                    >
                      <i className="fas fa-file-alt"></i> 상세 결과 보기
                    </button>
                    
                    <div className="premium-offer">
                      <h3>더 정확하고 상세한 분석을 원하시나요?</h3>
                      <p>전문가의 분석과 맞춤형 조언을 포함한 프리미엄 서비스를 이용해보세요.</p>
                      <Link to="/products" className="premium-btn">
                        <i className="fas fa-crown"></i> 프리미엄 서비스 보기
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      
      <Footer />
    </div>
  );
};

export default AnalysisPage; 