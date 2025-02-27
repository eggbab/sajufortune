import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CompatibilityPage = () => {
  const [formData, setFormData] = useState({
    person1: {
      name: '',
      gender: 'male',
      birthYear: '',
      birthMonth: '',
      birthDay: '',
      birthHour: '',
      birthMinute: '',
    },
    person2: {
      name: '',
      gender: 'female',
      birthYear: '',
      birthMonth: '',
      birthDay: '',
      birthHour: '',
      birthMinute: '',
    },
  });
  
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);
  
  // 폼 입력 처리
  const handleChange = (person, field, value) => {
    setFormData({
      ...formData,
      [person]: {
        ...formData[person],
        [field]: value,
      },
    });
  };
  
  // 다음 단계로 이동
  const handleNextStep = () => {
    if (step === 1) {
      // 첫 번째 사람 정보가 유효한지 확인
      if (validatePerson('person1')) {
        setStep(2);
      }
    } else if (step === 2) {
      // 두 번째 사람 정보가 유효한지 확인
      if (validatePerson('person2')) {
        submitForm();
      }
    }
  };
  
  // 이전 단계로 이동
  const handlePrevStep = () => {
    if (step === 2) {
      setStep(1);
    }
  };
  
  // 사람 정보 유효성 검사
  const validatePerson = (person) => {
    const data = formData[person];
    
    if (!data.name) {
      alert('이름을 입력해 주세요.');
      return false;
    }
    
    if (!data.birthYear || !data.birthMonth || !data.birthDay) {
      alert('생년월일을 모두 입력해 주세요.');
      return false;
    }
    
    if (isNaN(data.birthYear) || isNaN(data.birthMonth) || isNaN(data.birthDay)) {
      alert('생년월일은 숫자로 입력해 주세요.');
      return false;
    }
    
    const year = parseInt(data.birthYear);
    const month = parseInt(data.birthMonth);
    const day = parseInt(data.birthDay);
    
    if (year < 1900 || year > new Date().getFullYear()) {
      alert('올바른 연도를 입력해 주세요.');
      return false;
    }
    
    if (month < 1 || month > 12) {
      alert('월은 1~12 사이의 숫자로 입력해 주세요.');
      return false;
    }
    
    const daysInMonth = new Date(year, month, 0).getDate();
    if (day < 1 || day > daysInMonth) {
      alert(`${month}월에는 ${daysInMonth}일까지만 있습니다.`);
      return false;
    }
    
    return true;
  };
  
  // 폼 제출 및 결과 가져오기
  const submitForm = () => {
    setLoading(true);
    
    // 여기에서 API 호출을 통해 결과를 가져올 수 있습니다.
    // 현재는 예시 데이터를 사용합니다.
    setTimeout(() => {
      const mockResults = generateMockResults();
      setResults(mockResults);
      setStep(3);
      setLoading(false);
    }, 2000);
  };
  
  // 예시 데이터 생성 (실제 구현에서는 API 응답 사용)
  const generateMockResults = () => {
    const overallScore = Math.floor(Math.random() * 41) + 60; // 60-100 사이의 점수
    
    return {
      overallScore,
      categories: [
        {
          name: '정서적 궁합',
          score: Math.floor(Math.random() * 101),
          description: '정서적 유대감과 감정적 교류의 조화를 나타냅니다.'
        },
        {
          name: '커뮤니케이션',
          score: Math.floor(Math.random() * 101),
          description: '의사소통 방식의 일치도와 이해도를 보여줍니다.'
        },
        {
          name: '가치관 일치',
          score: Math.floor(Math.random() * 101),
          description: '인생관, 가치관의 공통점과 조화를 평가합니다.'
        },
        {
          name: '일상생활 조화',
          score: Math.floor(Math.random() * 101),
          description: '생활 습관과 일상에서의 호환성을 나타냅니다.'
        },
        {
          name: '장기적 성장',
          score: Math.floor(Math.random() * 101),
          description: '함께 성장하고 발전할 수 있는 잠재력을 보여줍니다.'
        }
      ],
      compatibility: overallScore >= 90 ? '최상의 궁합' : 
                    overallScore >= 80 ? '아주 좋은 궁합' : 
                    overallScore >= 70 ? '좋은 궁합' : 
                    overallScore >= 60 ? '괜찮은 궁합' : '보통의 궁합',
      analysis: `${formData.person1.name}님과 ${formData.person2.name}님은 ${
        overallScore >= 90 ? '서로를 완벽하게 보완하는 최상의 궁합입니다. 서로의 장점을 극대화하고 단점을 보완하는 관계로, 함께하는 시간이 길어질수록 더욱 깊은 유대감을 형성할 수 있습니다.' : 
        overallScore >= 80 ? '서로에게 매우 긍정적인 영향을 주는 아주 좋은 궁합입니다. 서로를 이해하고 존중하는 마음이 깊으며, 함께 성장할 수 있는 잠재력이 큽니다.' : 
        overallScore >= 70 ? '서로에게 좋은 파트너가 될 수 있는 좋은 궁합입니다. 약간의 차이점이 있지만, 이를 이해하고 존중한다면 더욱 깊은 관계로 발전할 수 있습니다.' : 
        overallScore >= 60 ? '서로 조화를 이룰 수 있는 괜찮은 궁합입니다. 서로의 차이점을 인정하고 존중하는 노력이 필요하며, 이를 통해 더 나은 관계로 발전할 수 있습니다.' : 
        '기본적인 궁합은 있으나, 서로의 차이점을 이해하고 존중하는 노력이 필요합니다. 서로의 특성을 인정하고 배려한다면 관계가 개선될 수 있습니다.'
      }`,
      advice: `${
        overallScore >= 90 ? '이미 매우 좋은 궁합을 가지고 계시지만, 서로에 대한 감사함을 표현하고 지속적인 대화를 통해 관계를 더욱 깊게 발전시켜 보세요.' : 
        overallScore >= 80 ? '서로의 의견을 경청하고, 작은 갈등이 생겼을 때 열린 마음으로 대화하세요. 서로의 성장을 응원하고 지지하는 것이 중요합니다.' : 
        overallScore >= 70 ? '서로의 차이점을 인정하고, 이해하려는 노력이 필요합니다. 정기적인 대화 시간을 가지고, 서로의 감정과 생각을 솔직하게 나누어 보세요.' : 
        overallScore >= 60 ? '서로의 기대와 요구사항을 명확히 소통하세요. 갈등이 생겼을 때 감정적으로 대응하기보다 문제 해결에 집중하는 것이 도움이 됩니다.' : 
        '서로의 차이점을 이해하고 존중하는 데 집중하세요. 비판보다는 이해와 공감을 우선시하고, 함께 성장할 수 있는 방법을 모색해 보세요.'
      }`
    };
  };
  
  // 결과 재분석
  const handleReanalyze = () => {
    setResults(null);
    setStep(1);
  };
  
  return (
    <div className="compatibility-page">
      <Header />
      
      <main>
        <section className="compatibility-hero">
          <div className="container">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              궁합 분석
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              두 사람의 사주를 분석하여 다양한 측면의 궁합을 확인해 보세요
            </motion.p>
          </div>
          <div className="hero-bg-overlay"></div>
        </section>
        
        <section className="compatibility-content">
          <div className="container">
            {step === 1 && (
              <motion.div 
                className="form-container"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="step-indicator">
                  <div className="step active">1</div>
                  <div className="step-line"></div>
                  <div className="step">2</div>
                </div>
                
                <h2>첫 번째 사람 정보 입력</h2>
                <div className="form-group">
                  <label>이름</label>
                  <input 
                    type="text" 
                    value={formData.person1.name}
                    onChange={(e) => handleChange('person1', 'name', e.target.value)}
                    placeholder="이름을 입력하세요"
                  />
                </div>
                
                <div className="form-group">
                  <label>성별</label>
                  <div className="radio-group">
                    <label className="radio-label">
                      <input 
                        type="radio" 
                        checked={formData.person1.gender === 'male'}
                        onChange={() => handleChange('person1', 'gender', 'male')}
                      />
                      <span>남성</span>
                    </label>
                    <label className="radio-label">
                      <input 
                        type="radio" 
                        checked={formData.person1.gender === 'female'}
                        onChange={() => handleChange('person1', 'gender', 'female')}
                      />
                      <span>여성</span>
                    </label>
                  </div>
                </div>
                
                <div className="form-group">
                  <label>생년월일</label>
                  <div className="date-inputs">
                    <input 
                      type="number" 
                      value={formData.person1.birthYear}
                      onChange={(e) => handleChange('person1', 'birthYear', e.target.value)}
                      placeholder="년(4자리)"
                      maxLength="4"
                    />
                    <input 
                      type="number" 
                      value={formData.person1.birthMonth}
                      onChange={(e) => handleChange('person1', 'birthMonth', e.target.value)}
                      placeholder="월"
                      maxLength="2"
                    />
                    <input 
                      type="number" 
                      value={formData.person1.birthDay}
                      onChange={(e) => handleChange('person1', 'birthDay', e.target.value)}
                      placeholder="일"
                      maxLength="2"
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label>태어난 시간 (선택사항)</label>
                  <div className="time-inputs">
                    <input 
                      type="number" 
                      value={formData.person1.birthHour}
                      onChange={(e) => handleChange('person1', 'birthHour', e.target.value)}
                      placeholder="시"
                      maxLength="2"
                    />
                    <input 
                      type="number" 
                      value={formData.person1.birthMinute}
                      onChange={(e) => handleChange('person1', 'birthMinute', e.target.value)}
                      placeholder="분"
                      maxLength="2"
                    />
                  </div>
                  <small>정확한 시간을 모르는 경우 비워두셔도 됩니다.</small>
                </div>
                
                <div className="form-actions">
                  <button className="btn-next" onClick={handleNextStep}>
                    다음 단계 <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
              </motion.div>
            )}
            
            {step === 2 && (
              <motion.div 
                className="form-container"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="step-indicator">
                  <div className="step completed">1</div>
                  <div className="step-line completed"></div>
                  <div className="step active">2</div>
                </div>
                
                <h2>두 번째 사람 정보 입력</h2>
                <div className="form-group">
                  <label>이름</label>
                  <input 
                    type="text" 
                    value={formData.person2.name}
                    onChange={(e) => handleChange('person2', 'name', e.target.value)}
                    placeholder="이름을 입력하세요"
                  />
                </div>
                
                <div className="form-group">
                  <label>성별</label>
                  <div className="radio-group">
                    <label className="radio-label">
                      <input 
                        type="radio" 
                        checked={formData.person2.gender === 'male'}
                        onChange={() => handleChange('person2', 'gender', 'male')}
                      />
                      <span>남성</span>
                    </label>
                    <label className="radio-label">
                      <input 
                        type="radio" 
                        checked={formData.person2.gender === 'female'}
                        onChange={() => handleChange('person2', 'gender', 'female')}
                      />
                      <span>여성</span>
                    </label>
                  </div>
                </div>
                
                <div className="form-group">
                  <label>생년월일</label>
                  <div className="date-inputs">
                    <input 
                      type="number" 
                      value={formData.person2.birthYear}
                      onChange={(e) => handleChange('person2', 'birthYear', e.target.value)}
                      placeholder="년(4자리)"
                      maxLength="4"
                    />
                    <input 
                      type="number" 
                      value={formData.person2.birthMonth}
                      onChange={(e) => handleChange('person2', 'birthMonth', e.target.value)}
                      placeholder="월"
                      maxLength="2"
                    />
                    <input 
                      type="number" 
                      value={formData.person2.birthDay}
                      onChange={(e) => handleChange('person2', 'birthDay', e.target.value)}
                      placeholder="일"
                      maxLength="2"
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label>태어난 시간 (선택사항)</label>
                  <div className="time-inputs">
                    <input 
                      type="number" 
                      value={formData.person2.birthHour}
                      onChange={(e) => handleChange('person2', 'birthHour', e.target.value)}
                      placeholder="시"
                      maxLength="2"
                    />
                    <input 
                      type="number" 
                      value={formData.person2.birthMinute}
                      onChange={(e) => handleChange('person2', 'birthMinute', e.target.value)}
                      placeholder="분"
                      maxLength="2"
                    />
                  </div>
                  <small>정확한 시간을 모르는 경우 비워두셔도 됩니다.</small>
                </div>
                
                <div className="form-actions">
                  <button className="btn-prev" onClick={handlePrevStep}>
                    <i className="fas fa-arrow-left"></i> 이전 단계
                  </button>
                  <button className="btn-submit" onClick={handleNextStep}>
                    분석하기
                  </button>
                </div>
              </motion.div>
            )}
            
            {step === 3 && results && (
              <motion.div 
                className="results-container"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="results-header">
                  <h2>
                    {formData.person1.name} & {formData.person2.name}의 궁합 분석 결과
                  </h2>
                  <div className="overall-score">
                    <div className="score-circle">
                      <div className="score-value">{results.overallScore}</div>
                      <div className="score-label">종합 점수</div>
                    </div>
                    <div className="compatibility-grade">{results.compatibility}</div>
                  </div>
                </div>
                
                <div className="category-scores">
                  {results.categories.map((category, index) => (
                    <div key={index} className="category-item">
                      <div className="category-header">
                        <h3>{category.name}</h3>
                        <div className="category-score">{category.score}점</div>
                      </div>
                      <div className="score-bar-container">
                        <motion.div 
                          className="score-bar"
                          initial={{ width: 0 }}
                          animate={{ width: `${category.score}%` }}
                          transition={{ duration: 1, delay: 0.2 + (index * 0.1) }}
                        ></motion.div>
                      </div>
                      <p className="category-description">{category.description}</p>
                    </div>
                  ))}
                </div>
                
                <div className="analysis-section">
                  <h3>상세 분석</h3>
                  <p>{results.analysis}</p>
                </div>
                
                <div className="advice-section">
                  <h3>조언</h3>
                  <p>{results.advice}</p>
                </div>
                
                <div className="results-actions">
                  <button className="btn-reanalyze" onClick={handleReanalyze}>
                    <i className="fas fa-redo"></i> 다시 분석하기
                  </button>
                  <button className="btn-premium">
                    <i className="fas fa-star"></i> 프리미엄 상세 분석 받기
                  </button>
                </div>
              </motion.div>
            )}
            
            {loading && (
              <div className="loading-container">
                <div className="loader"></div>
                <p>궁합을 분석 중입니다...</p>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
      
      <style jsx>{`
        .compatibility-page {
          min-height: 100vh;
          background-color: var(--bg-color);
          color: var(--text-color);
        }
        
        .compatibility-hero {
          position: relative;
          padding: 80px 0;
          text-align: center;
          background-color: var(--primary-color);
          color: white;
          margin-bottom: 60px;
          overflow: hidden;
        }
        
        .compatibility-hero h1 {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 20px;
          position: relative;
          z-index: 1;
        }
        
        .compatibility-hero p {
          font-size: 1.2rem;
          max-width: 600px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        
        .hero-bg-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(142, 68, 173, 0.8), rgba(41, 128, 185, 0.8));
          z-index: 0;
          background-image: url('/images/stars-bg.jpg');
          background-size: cover;
          background-position: center;
          background-blend-mode: overlay;
        }
        
        .compatibility-content {
          padding: 0 0 80px;
        }
        
        .form-container,
        .results-container {
          max-width: 800px;
          margin: 0 auto;
          background-color: var(--card-bg);
          border-radius: 15px;
          padding: 40px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
        }
        
        .step-indicator {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 30px;
        }
        
        .step {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: var(--bg-hover);
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          position: relative;
        }
        
        .step.active {
          background-color: var(--primary-color);
          color: white;
        }
        
        .step.completed {
          background-color: var(--success-color);
          color: white;
        }
        
        .step-line {
          flex: 1;
          height: 2px;
          background-color: var(--bg-hover);
          margin: 0 10px;
        }
        
        .step-line.completed {
          background-color: var(--success-color);
        }
        
        h2 {
          font-size: 1.8rem;
          font-weight: 600;
          margin-bottom: 30px;
          text-align: center;
          color: var(--text-color);
        }
        
        .form-group {
          margin-bottom: 25px;
        }
        
        label {
          display: block;
          font-size: 1rem;
          font-weight: 500;
          margin-bottom: 8px;
          color: var(--text-color);
        }
        
        input[type="text"],
        input[type="number"] {
          width: 100%;
          padding: 12px 15px;
          border-radius: 8px;
          border: 1px solid var(--border-color);
          background-color: var(--input-bg);
          color: var(--text-color);
          font-size: 1rem;
          transition: all 0.3s ease;
        }
        
        input[type="text"]:focus,
        input[type="number"]:focus {
          outline: none;
          border-color: var(--primary-color);
          box-shadow: 0 0 0 2px var(--primary-light);
        }
        
        .radio-group {
          display: flex;
          gap: 20px;
        }
        
        .radio-label {
          display: flex;
          align-items: center;
          cursor: pointer;
        }
        
        .radio-label input {
          margin-right: 8px;
        }
        
        .date-inputs,
        .time-inputs {
          display: flex;
          gap: 10px;
        }
        
        .date-inputs input,
        .time-inputs input {
          flex: 1;
        }
        
        small {
          display: block;
          font-size: 0.85rem;
          color: var(--text-tertiary);
          margin-top: 5px;
        }
        
        .form-actions {
          display: flex;
          justify-content: space-between;
          margin-top: 40px;
        }
        
        .btn-next,
        .btn-prev,
        .btn-submit,
        .btn-reanalyze,
        .btn-premium {
          padding: 12px 25px;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .btn-next,
        .btn-submit,
        .btn-premium {
          background-color: var(--primary-color);
          color: white;
          border: none;
        }
        
        .btn-prev,
        .btn-reanalyze {
          background-color: transparent;
          color: var(--primary-color);
          border: 1px solid var(--primary-color);
        }
        
        .btn-next:hover,
        .btn-submit:hover,
        .btn-premium:hover {
          background-color: #7d3c98;
          transform: translateY(-3px);
        }
        
        .btn-prev:hover,
        .btn-reanalyze:hover {
          background-color: var(--primary-light);
          transform: translateY(-3px);
        }
        
        .loading-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 60px 0;
        }
        
        .loader {
          width: 50px;
          height: 50px;
          border: 5px solid var(--bg-hover);
          border-top: 5px solid var(--primary-color);
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-bottom: 20px;
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .loading-container p {
          font-size: 1.1rem;
          color: var(--text-secondary);
        }
        
        .results-header {
          text-align: center;
          margin-bottom: 40px;
        }
        
        .overall-score {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 30px;
        }
        
        .score-circle {
          width: 140px;
          height: 140px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--primary-color), #3498db);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: white;
          margin-bottom: 15px;
        }
        
        .score-value {
          font-size: 3rem;
          font-weight: 700;
          line-height: 1;
        }
        
        .score-label {
          font-size: 0.9rem;
          margin-top: 5px;
        }
        
        .compatibility-grade {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--primary-color);
        }
        
        .category-scores {
          margin-bottom: 40px;
        }
        
        .category-item {
          margin-bottom: 25px;
        }
        
        .category-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }
        
        .category-header h3 {
          font-size: 1.1rem;
          font-weight: 600;
          margin: 0;
          color: var(--text-color);
        }
        
        .category-score {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--primary-color);
        }
        
        .score-bar-container {
          width: 100%;
          height: 10px;
          background-color: var(--bg-hover);
          border-radius: 5px;
          overflow: hidden;
          margin-bottom: 10px;
        }
        
        .score-bar {
          height: 100%;
          background: linear-gradient(to right, var(--primary-color), #3498db);
          border-radius: 5px;
        }
        
        .category-description {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin: 5px 0 0;
        }
        
        .analysis-section,
        .advice-section {
          margin-bottom: 30px;
        }
        
        .analysis-section h3,
        .advice-section h3 {
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 15px;
          color: var(--text-color);
        }
        
        .analysis-section p,
        .advice-section p {
          font-size: 1rem;
          line-height: 1.6;
          color: var(--text-secondary);
        }
        
        .results-actions {
          display: flex;
          gap: 20px;
          margin-top: 40px;
          justify-content: center;
        }
        
        @media (max-width: 768px) {
          .compatibility-hero {
            padding: 60px 0;
          }
          
          .compatibility-hero h1 {
            font-size: 2.5rem;
          }
          
          .form-container,
          .results-container {
            padding: 30px;
          }
          
          h2 {
            font-size: 1.5rem;
          }
          
          .form-actions {
            flex-direction: column;
            gap: 15px;
          }
          
          .btn-next,
          .btn-prev,
          .btn-submit,
          .btn-reanalyze,
          .btn-premium {
            width: 100%;
            justify-content: center;
          }
          
          .results-actions {
            flex-direction: column;
          }
        }
        
        @media (max-width: 576px) {
          .compatibility-hero h1 {
            font-size: 2rem;
          }
          
          .compatibility-hero p {
            font-size: 1rem;
          }
          
          .date-inputs,
          .time-inputs {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

export default CompatibilityPage; 