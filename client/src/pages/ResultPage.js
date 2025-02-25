import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaShoppingCart, FaLock, FaInfoCircle, FaChartPie, FaChartLine, FaChartBar, FaCheck, FaStar, FaArrowRight, FaRegCreditCard } from 'react-icons/fa';
import '../styles/ResultPage.css';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, LineChart, Line } from 'recharts';

function ResultPage() {
  const location = useLocation();
  const history = useHistory();
  const { userData, sajuResult } = location.state || {};
  const [showTalismanInfo, setShowTalismanInfo] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [premium, setPremium] = useState(false);
  const [showPremiumModal, setShowPremiumModal] = useState(false);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // 전달된 state 확인
    if (location.state && location.state.userData && location.state.sajuResult) {
      setUserData(location.state.userData);
      setSajuResult(location.state.sajuResult);
      setLoading(false);
    } else {
      // state가 없으면 홈으로 리다이렉트
      history.replace('/');
    }
  }, [location, history]);
  
  // 로딩 애니메이션 표시 - 요구사항 8 반영
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);
  
  // 결과 데이터가 없으면 로딩 표시
  if (!userData || !sajuResult) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>결과를 불러오는 중...</p>
      </div>
    );
  }
  
  // 로딩 중이면 로딩 화면 표시
  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <h2>사주 분석 중...</h2>
        <p className="loading-text">당신의 운명을 분석하고 있습니다.</p>
        <div className="loading-progress">
          <div className="progress-bar"></div>
        </div>
        <p className="loading-detail">생년월일과 시간을 바탕으로 사주팔자를 계산하고<br />당신의 운세를 심층 분석하고 있습니다.</p>
      </div>
    );
  }
  
  // 오행 데이터 (파이 차트용)
  const elementData = [
    { name: '목(木)', value: sajuResult.elementChart.wood, color: '#00b894' },
    { name: '화(火)', value: sajuResult.elementChart.fire, color: '#e17055' },
    { name: '토(土)', value: sajuResult.elementChart.earth, color: '#fdcb6e' },
    { name: '금(金)', value: sajuResult.elementChart.metal, color: '#b2bec3' },
    { name: '수(水)', value: sajuResult.elementChart.water, color: '#0984e3' }
  ];
  
  // 행운 흐름 데이터 (라인 차트용)
  const fortuneData = [
    { year: '2023', 운세지수: 65 },
    { year: '2024', 운세지수: 80 },
    { year: '2025', 운세지수: 75 },
    { year: '2026', 운세지수: 90 },
    { year: '2027', 운세지수: 85 }
  ];
  
  // 성격 특성 데이터 (레이더 차트용)
  const personalityData = [
    { subject: '활동성', A: 70, fullMark: 100 },
    { subject: '사교성', A: 85, fullMark: 100 },
    { subject: '논리력', A: 60, fullMark: 100 },
    { subject: '창의성', A: 90, fullMark: 100 },
    { subject: '안정성', A: 75, fullMark: 100 },
    { subject: '리더십', A: 80, fullMark: 100 },
  ];
  
  // 월별 운세 데이터 (바 차트용)
  const monthlyData = sajuResult.monthlyForecast.map(item => ({
    name: item.month,
    운세지수: item.rating * 20, // 5점 만점을 백분율로 변환
  }));
  
  // 부적 정보 토글
  const toggleTalismanInfo = () => {
    setShowTalismanInfo(!showTalismanInfo);
  };
  
  // 프리미엄 결제 처리
  const handlePremiumPurchase = () => {
    setLoading(true);
    
    setTimeout(() => {
      setLoading(false);
      setPremium(true);
      setShowPremiumModal(false);
      window.scrollTo(0, 0);
    }, 2000);
  };
  
  // 프리미엄 모달 토글
  const togglePremiumModal = () => {
    setShowPremiumModal(!showPremiumModal);
  };
  
  // 결과 공유 처리
  const handleShareResult = () => {
    if (navigator.share) {
      navigator.share({
        title: '내 사주 분석 결과 - 사주포춘',
        text: `${userData.name}님의 사주 분석 결과입니다. 주요 특성: ${sajuResult.personality.substring(0, 50)}...`,
        url: window.location.href,
      });
    } else {
      alert('공유 기능은 해당 브라우저에서 지원하지 않습니다.');
    }
  };
  
  const goHome = () => {
    history.push('/');
  };
  
  return (
    <div className="result-page">
      <Header />
      
      <main className="result-main">
        <section className="result-hero">
          <div className="container">
            <h1>{userData.name}님의 사주 분석 결과</h1>
            <p className="result-date">분석일: {new Date().toLocaleDateString()}</p>
            
            {/* 기본/프리미엄 상태 표시 */}
            <div className="result-type">
              {premium ? (
                <span className="premium-badge">프리미엄 분석</span>
              ) : (
                <span className="basic-badge">기본 분석</span>
              )}
            </div>
            
            {/* 사주 정보 요약 */}
            <div className="saju-summary">
              <div className="pillar-container">
                <div className="pillar">
                  <span className="pillar-label">년주(年柱)</span>
                  <span className="pillar-value">{sajuResult.yearPillar}</span>
                </div>
                <div className="pillar">
                  <span className="pillar-label">월주(月柱)</span>
                  <span className="pillar-value">{sajuResult.monthPillar}</span>
                </div>
                <div className="pillar">
                  <span className="pillar-label">일주(日柱)</span>
                  <span className="pillar-value">{sajuResult.dayPillar}</span>
                </div>
                <div className="pillar">
                  <span className="pillar-label">시주(時柱)</span>
                  <span className="pillar-value">{sajuResult.hourPillar}</span>
                </div>
              </div>
            </div>
            
            {/* 결과 액션 버튼 */}
            <div className="result-actions">
              <button className="action-btn" onClick={handleShareResult}>
                <i className="fas fa-share-alt"></i> 결과 공유하기
              </button>
              {!premium && (
                <button className="action-btn premium" onClick={togglePremiumModal}>
                  <i className="fas fa-crown"></i> 프리미엄 분석 받기
                </button>
              )}
            </div>
          </div>
        </section>
        
        {/* 종합 분석 섹션 */}
        <section className="analysis-section">
          <div className="container">
            <div className="section-header">
              <h2>종합 분석</h2>
              <p>당신의 사주팔자를 바탕으로 한 종합적인 분석 결과입니다.</p>
            </div>
            
            <div className="overview-content">
              <div className="overview-text">
                <h3>당신의 주요 특성</h3>
                <p className="personality-description">
                  {sajuResult.personality}
                </p>
                
                <div className="element-tags">
                  <div className="element-tag">
                    <span className={`tag-icon ${sajuResult.dominantElement === '화' ? 'fire' : 
                                            sajuResult.dominantElement === '수' ? 'water' : 
                                            sajuResult.dominantElement === '목' ? 'wood' : 
                                            sajuResult.dominantElement === '금' ? 'metal' : 
                                            sajuResult.dominantElement === '토' ? 'earth' : ''}`}>
                      {sajuResult.dominantElement}
                    </span>
                    <span className="tag-label">주요 오행</span>
                  </div>
                </div>
                
                <div className="advice-box">
                  <h4>조언</h4>
                  <p>{sajuResult.advice}</p>
                </div>
              </div>
              
              <div className="overview-charts">
                <div className="chart-container">
                  <h4>오행 분석</h4>
                  <ResponsiveContainer width="100%" height={250}>
                    <PieChart>
                      <Pie
                        data={elementData}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {elementData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="chart-container">
                  <h4>성격 특성</h4>
                  <ResponsiveContainer width="100%" height={250}>
                    <RadarChart outerRadius={90} data={personalityData}>
                      <PolarGrid />
                      <PolarAngleAxis dataKey="subject" />
                      <PolarRadiusAxis domain={[0, 100]} />
                      <Radar name="능력치" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                      <Legend />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
            
            {/* 탭 네비게이션 */}
            <div className="result-tabs">
              <button 
                className={`tab-btn ${activeTab === 'personality' ? 'active' : ''}`}
                onClick={() => setActiveTab('personality')}
              >
                성격 및 기질
              </button>
              <button 
                className={`tab-btn ${activeTab === 'career' ? 'active' : ''}`}
                onClick={() => setActiveTab('career')}
              >
                직업 적성
              </button>
              <button 
                className={`tab-btn ${activeTab === 'relationship' ? 'active' : ''}`}
                onClick={() => setActiveTab('relationship')}
              >
                대인관계
              </button>
              <button 
                className={`tab-btn ${activeTab === 'wealth' ? 'active' : ''}`}
                onClick={() => setActiveTab('wealth')}
              >
                재물운
              </button>
              <button 
                className={`tab-btn ${activeTab === 'health' ? 'active' : ''}`}
                onClick={() => setActiveTab('health')}
              >
                건강
              </button>
              <button 
                className={`tab-btn ${activeTab === 'monthly' ? 'active' : ''}`}
                onClick={() => setActiveTab('monthly')}
              >
                월별 운세
              </button>
            </div>
            
            {/* 탭 컨텐츠 */}
            <div className="tab-content">
              {/* 성격 탭 */}
              {activeTab === 'personality' && (
                <div className="personality-content">
                  <div className="content-grid">
                    <div className="grid-item">
                      <h3>성격 특성</h3>
                      <div className="characteristics">
                        <p>{sajuResult.personality}</p>
                        <p>당신은 창의적이고 활동적인 성향을 가지고 있으며, 새로운 도전을 좋아합니다. 다양한 분야에 관심을 가지고 있어 여러 방면에서 재능을 발휘할 수 있습니다.</p>
                        <p>또한 직관력이 뛰어나 문제 해결 능력이 우수하며, 자신의 의견을 명확하게 표현할 수 있습니다.</p>
                      </div>
                      
                      <div className="advice-box">
                        <h4>자기계발 조언</h4>
                        <p>때로는 너무 많은 것을 동시에 시도하려는 경향이 있으니, 우선순위를 정하고 집중하는 연습이 필요합니다. 또한 감정적 균형을 유지하기 위한 명상이나 휴식을 통해 더 나은 결정을 내릴 수 있습니다.</p>
                      </div>
                    </div>
                    
                    <div className="grid-item">
                      <h3>성격 분석 차트</h3>
                      <ResponsiveContainer width="100%" height={300}>
                        <RadarChart outerRadius={90} data={personalityData}>
                          <PolarGrid />
                          <PolarAngleAxis dataKey="subject" />
                          <PolarRadiusAxis domain={[0, 100]} />
                          <Radar name="능력치" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                          <Legend />
                          <Tooltip />
                        </RadarChart>
                      </ResponsiveContainer>
                      
                      <div className="chart-description">
                        <p>위 차트는 여섯 가지 주요 성격 특성에 대한 분석을 보여줍니다. 특히 창의성과 사교성이 높은 편으로, 예술적인 활동이나 다양한 사람들과의 교류를 통해 에너지를 얻을 수 있습니다.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* 직업 적성 탭 */}
              {activeTab === 'career' && (
                <div className="career-content">
                  <div className="content-grid">
                    <div className="grid-item">
                      <h3>직업 적성 분석</h3>
                      <div className="characteristics">
                        <p>{sajuResult.career}</p>
                        <p>당신은 리더십과 창의성이 결합된 역할이 적합합니다. 기획, 디자인, 마케팅, 교육 분야에서 두각을 나타낼 수 있으며, 자신의 아이디어를 실현시키는 일에 큰 만족감을 느낍니다.</p>
                      </div>
                      
                      <h3>추천 직업군</h3>
                      <div className="career-recommendations">
                        <div className="career-group">
                          <h4>창의적 분야</h4>
                          <ul>
                            <li>디자이너 (그래픽, UI/UX, 제품)</li>
                            <li>작가/콘텐츠 크리에이터</li>
                            <li>마케팅 기획자</li>
                            <li>예술 감독</li>
                          </ul>
                        </div>
                        
                        <div className="career-group">
                          <h4>리더십 분야</h4>
                          <ul>
                            <li>프로젝트 매니저</li>
                            <li>교육자/트레이너</li>
                            <li>창업가</li>
                            <li>비영리 단체 리더</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid-item">
                      <h3>직업 적성 차트</h3>
                      <div className="career-chart">
                        <ResponsiveContainer width="100%" height={300}>
                          <BarChart data={[
                            {category: '창의성', value: 85},
                            {category: '리더십', value: 80},
                            {category: '분석력', value: 70},
                            {category: '소통능력', value: 75},
                            {category: '실행력', value: 65}
                          ]}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="category" />
                            <YAxis domain={[0, 100]} />
                            <Tooltip />
                            <Bar dataKey="value" fill="#8884d8" />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                      
                      <div className="advice-box">
                        <h4>경력 개발 조언</h4>
                        <p>당신의 창의력과 리더십을 활용할 수 있는 프로젝트 중심의 업무 환경을 찾는 것이 좋습니다. 실행력을 더 키우기 위해 구체적인 목표 설정과 시간 관리 기술을 향상시키는 것이 도움이 될 것입니다.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* 대인관계 탭 */}
              {activeTab === 'relationship' && (
                <div className="relationship-content">
                  <div className="content-grid">
                    <div className="grid-item">
                      <h3>대인관계 특성</h3>
                      <div className="characteristics">
                        <p>{sajuResult.relationship}</p>
                        <p>대화를 통해 깊은 유대감을 형성하는 능력이 있으며, 타인의 감정을 잘 이해하고 공감하는 능력이 뛰어납니다. 다만 때로는 너무 많은 사람들의 요구에 맞추려다 자신의 에너지를 소진할 수 있으니 주의가 필요합니다.</p>
                      </div>
                      
                      <h3>상성이 좋은 유형</h3>
                      <div className="compatibility">
                        <p>안정적이고 신뢰할 수 있는 성격의 사람들과 좋은 관계를 형성할 수 있습니다. 특히 {sajuResult.dominantElement === '화' ? '금(金)' : 
                        sajuResult.dominantElement === '수' ? '토(土)' : 
                        sajuResult.dominantElement === '목' ? '수(水)' : 
                        sajuResult.dominantElement === '금' ? '토(土)' : 
                        sajuResult.dominantElement === '토' ? '금(金)' : ''} 기운이 강한 사람과 균형 잡힌 관계를 형성할 수 있습니다.</p>
                      </div>
                    </div>
                    
                    <div className="grid-item">
                      <h3>인간관계 스타일</h3>
                      <div className="relationship-chart">
                        <ResponsiveContainer width="100%" height={300}>
                          <RadarChart outerRadius={90} data={[
                            {subject: '친밀도', A: 85, fullMark: 100},
                            {subject: '신뢰성', A: 80, fullMark: 100},
                            {subject: '의사소통', A: 75, fullMark: 100},
                            {subject: '갈등해결', A: 65, fullMark: 100},
                            {subject: '경계설정', A: 60, fullMark: 100}
                          ]}>
                            <PolarGrid />
                            <PolarAngleAxis dataKey="subject" />
                            <PolarRadiusAxis domain={[0, 100]} />
                            <Radar name="능력" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                            <Legend />
                            <Tooltip />
                          </RadarChart>
                        </ResponsiveContainer>
                      </div>
                      
                      <div className="advice-box">
                        <h4>인간관계 조언</h4>
                        <p>당신은 친밀한 관계를 맺는 데 능숙하지만, 때로는 자신의 경계를 명확히 설정하는 것이 필요합니다. "아니오"라고 말하는 연습을 통해 자신의 에너지를 보존하고, 갈등 상황에서 감정을 조절하는 기술을 향상시키면 더욱 건강한 관계를 형성할 수 있습니다.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* 재물운 탭 */}
              {activeTab === 'wealth' && (
                <div className="wealth-content">
                  <div className="content-grid">
                    <div className="grid-item">
                      <h3>재물운 분석</h3>
                      <div className="characteristics">
                        <p>{sajuResult.wealth}</p>
                        <p>창의적인 아이디어를 통해 수입을 창출할 수 있는 능력이 있으며, 다양한 분야에서 기회를 포착하는 안목이 있습니다. 다만 즉흥적인 소비 패턴을 조절하는 것이 재정적 안정에 중요합니다.</p>
                      </div>
                      
                      <h3>재물 관리 팁</h3>
                      <ul className="wealth-tips">
                        <li>월별 예산 계획을 세우고 지출 추적 앱을 활용하세요.</li>
                        <li>충동구매를 줄이기 위해 "24시간 규칙"을 적용해보세요.</li>
                        <li>다양한 분야에 소액으로 투자하는 포트폴리오 전략이 효과적입니다.</li>
                        <li>창의적 재능을 부수입원으로 활용하는 방법을 고려해보세요.</li>
                      </ul>
                    </div>
                    
                    <div className="grid-item">
                      <h3>5년 재물운 흐름</h3>
                      <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={fortuneData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="year" />
                          <YAxis domain={[0, 100]} />
                          <Tooltip />
                          <Legend />
                          <Line type="monotone" dataKey="운세지수" stroke="#8884d8" activeDot={{ r: 8 }} />
                        </LineChart>
                      </ResponsiveContainer>
                      
                      <div className="wealth-forecast">
                        <h4>연도별 재물운 전망</h4>
                        <div className="year-forecast">
                          <span className="year">2023:</span>
                          <p>기반을 다지는 시기로, 안정적인 수입원을 확보하는 데 집중하세요.</p>
                        </div>
                        <div className="year-forecast">
                          <span className="year">2024:</span>
                          <p>투자와 성장의 기회가 있는 해입니다. 새로운 분야에 도전해보세요.</p>
                        </div>
                        <div className="year-forecast">
                          <span className="year">2025:</span>
                          <p>안정적인 성장세를 유지하되, 지출 관리에 주의하세요.</p>
                        </div>
                        <div className="year-forecast">
                          <span className="year">2026:</span>
                          <p>재물운이 크게 상승하는 해로, 대규모 프로젝트나 투자에 유리합니다.</p>
                        </div>
                        <div className="year-forecast">
                          <span className="year">2027:</span>
                          <p>안정적인 수익 구조가 형성되며, 자산 관리에 집중할 때입니다.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* 건강 탭 */}
              {activeTab === 'health' && (
                <div className="health-content">
                  <div className="content-grid">
                    <div className="grid-item">
                      <h3>건강 특성</h3>
                      <div className="characteristics">
                        <p>{sajuResult.health}</p>
                        <p>전반적인 체력은 양호하지만, 스트레스에 민감하게 반응하는 편입니다. 규칙적인 운동과 충분한 휴식이 건강 유지에 필수적입니다.</p>
                      </div>
                      
                      <h3>건강 관리 팁</h3>
                      <ul className="health-tips">
                        <li>스트레스 관리를 위한 명상이나 요가를 실천하세요.</li>
                        <li>규칙적인 심장 강화 운동을 일주일에 3-4회 실시하세요.</li>
                        <li>충분한 수분 섭취와 균형 잡힌 식단을 유지하세요.</li>
                        <li>6-8시간의 충분한 수면 시간을 확보하세요.</li>
                        <li>정기적인 건강 검진을 통해 예방 관리하세요.</li>
                      </ul>
                    </div>
                    
                    <div className="grid-item">
                      <h3>신체 에너지 밸런스</h3>
                      <div className="energy-balance">
                        <ResponsiveContainer width="100%" height={300}>
                          <BarChart layout="vertical" data={[
                            {system: '심장/혈관', level: 70},
                            {system: '소화기관', level: 85},
                            {system: '호흡기', level: 75},
                            {system: '근골격계', level: 80},
                            {system: '면역체계', level: 65}
                          ]}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis type="number" domain={[0, 100]} />
                            <YAxis dataKey="system" type="category" />
                            <Tooltip />
                            <Bar dataKey="level" fill="#8884d8" />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                      
                      <div className="advice-box">
                        <h4>특별 관리 부위</h4>
                        <p>심장과 면역 체계에 더 많은 관심이 필요합니다. 심장 건강을 위해 오메가-3가 풍부한 음식을 섭취하고, 면역력 강화를 위해 충분한 비타민 C와 D를 섭취하세요. 또한 과도한 카페인과 자극적인 음식을 줄이는 것이 좋습니다.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* 월별 운세 탭 */}
              {activeTab === 'monthly' && (
                <div className="monthly-content">
                  <h3>2023년 월별 운세</h3>
                  <div className="monthly-chart">
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={monthlyData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis domain={[0, 100]} />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="운세지수" fill="#8884d8" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  
                  <div className="monthly-details">
                    {sajuResult.monthlyForecast.map((item, index) => (
                      <div key={index} className="month-item">
                        <div className="month-header">
                          <span className="month-name">{item.month}</span>
                          <span className="month-rating">
                            {Array(item.rating).fill().map((_, i) => (
                              <FaStar key={i} className="star-icon" />
                            ))}
                          </span>
                        </div>
                        <p className="month-content">{item.content}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* 프리미엄 업그레이드 배너 */}
          {!premium && (
            <div className="premium-banner">
              <div className="container">
                <div className="premium-banner-content">
                  <div className="premium-text">
                    <h3>더 자세한 분석이 필요하신가요?</h3>
                    <p>프리미엄 분석을 통해 더 심층적인 사주 해석과 맞춤형 디지털 부적을 받아보세요.</p>
                  </div>
                  <button className="premium-btn" onClick={togglePremiumModal}>
                    프리미엄 분석 받기 <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>
          )}
        </section>
        
        {/* 맞춤형 디지털 부적 섹션 - UI 개선 */}
        <section className="talisman-section">
          <div className="container">
            <div className="section-header">
              <h2>맞춤형 디지털 부적</h2>
              <p>AI가 당신의 사주에 맞게 특별히 설계한 디지털 부적</p>
            </div>
            
            <div className="talisman-content">
              <div className="talisman-info">
                <div className="talisman-description">
                  <p>
                    맞춤형 디지털 부적은 {userData.name}님의 사주 기반으로 <strong>AI가 특별히 디자인</strong>한 
                    개인화된 행운의 상징입니다. 전통적인 부적의 원리와 현대적인 에너지 이론을 결합하여 
                    당신에게 부족한 기운을 보충하고 과잉된 기운을 조절합니다.
                  </p>
                  
                  <ul className="talisman-benefits">
                    <li>
                      <div className="benefit-icon"><FaCheck /></div>
                      <div className="benefit-text">
                        <strong>개인 맞춤 디자인:</strong> 당신의 사주팔자에 맞춤 설계
                      </div>
                    </li>
                    <li>
                      <div className="benefit-icon"><FaCheck /></div>
                      <div className="benefit-text">
                        <strong>에너지 균형:</strong> 부족한 기운 보충, 과잉 기운 조절
                      </div>
                    </li>
                    <li>
                      <div className="benefit-icon"><FaCheck /></div>
                      <div className="benefit-text">
                        <strong>행운 증진:</strong> 개인의 행운과 기회를 향상
                      </div>
                    </li>
                    <li>
                      <div className="benefit-icon"><FaCheck /></div>
                      <div className="benefit-text">
                        <strong>부정적 에너지 차단:</strong> 불운과 부정적 에너지로부터 보호
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="talisman-visual">
                  <div className="talisman-preview blurred">
                    <div className="talisman-placeholder">
                      <div className="talisman-gradient"></div>
                      <div className="talisman-symbols"></div>
                    </div>
                    <div className="talisman-lock">
                      <FaLock />
                      <p>프리미엄 분석 결제 후 확인 가능</p>
                    </div>
                  </div>
                  
                  <div className="talisman-caption">
                    <p>
                      <strong>{userData.name}님을 위한 맞춤형 디지털 부적</strong><br />
                      <span className="dominant-element">주요 기운: {sajuResult.dominantElement}(火)</span>
                    </p>
                    <button className="info-button" onClick={toggleTalismanInfo}>
                      <FaInfoCircle /> 부적에 대해 더 알아보기
                    </button>
                  </div>
                </div>
              </div>
              
              {showTalismanInfo && (
                <div className="talisman-details">
                  <h3>맞춤형 디지털 부적이란?</h3>
                  <p>
                    맞춤형 디지털 부적은 수천 년 동안 전해져 온 동양의 부적 제작 원리와 현대 에너지 이론을 
                    AI 기술로 결합한 혁신적인 디지털 아티팩트입니다. 각 부적은 개인의 사주팔자를 면밀히 분석하여 
                    그 사람에게 가장 필요한 기운과 보호를 제공하도록 특별히 설계됩니다.
                  </p>
                  
                  <h4>디지털 부적 사용법</h4>
                  <ol className="usage-steps">
                    <li>스마트폰 배경화면이나 컴퓨터 바탕화면으로 설정하여 매일 에너지를 받으세요.</li>
                    <li>중요한 결정을 내리기 전에 부적을 잠시 응시하며 명상하세요.</li>
                    <li>출력하여 지갑이나 중요 서류 보관함에 보관할 수 있습니다.</li>
                    <li>매달 보름날 부적 이미지를 열어보며 재충전하세요.</li>
                  </ol>
                  
                  <div className="scientific-note">
                    <h4>과학적 근거</h4>
                    <p>
                      디지털 부적의 효과는 심리학적 앵커링(anchoring)과 자기암시(self-suggestion) 효과에 기반합니다. 
                      부적을 통한 시각적 상기와 긍정적 의도 설정은 무의식적 행동 패턴과 의사결정에 
                      긍정적 영향을 미칠 수 있습니다.
                    </p>
                  </div>
                </div>
              )}
              
              {!premium && (
                <div className="talisman-cta">
                  <div className="price-container">
                    <div className="original-price">50,000원</div>
                    <div className="discount-price">29,000원</div>
                    <div className="discount-tag">42% 할인</div>
                  </div>
                  
                  <button className="purchase-button" onClick={togglePremiumModal}>
                    <FaShoppingCart /> 프리미엄 분석 & 맞춤형 부적 받기
                  </button>
                  
                  <div className="guarantee">
                    <p>✓ 맞춤형 디지털 부적 포함 | ✓ 안전한 결제 | ✓ 즉시 이용 가능</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      
      {/* 프리미엄 결제 모달 */}
      {showPremiumModal && (
        <div className="modal-overlay">
          <div className="premium-modal">
            <button className="close-modal" onClick={togglePremiumModal}>×</button>
            
            <div className="modal-header">
              <h2>프리미엄 사주 분석</h2>
              <p>더 자세한 분석과 맞춤형 디지털 부적을 받아보세요</p>
            </div>
            
            <div className="premium-features">
              <div className="feature-item">
                <div className="feature-icon"><FaChartPie /></div>
                <div className="feature-text">
                  <h4>심층 사주 분석</h4>
                  <p>10가지 추가 분석 영역과 상세한 해석</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon"><FaChartLine /></div>
                <div className="feature-text">
                  <h4>10년 운세 예측</h4>
                  <p>장기적인 운세 흐름과 중요 시기 분석</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon"><FaChartBar /></div>
                <div className="feature-text">
                  <h4>상세 성격 분석</h4>
                  <p>세부적인 성격 특성과 잠재력 분석</p>
                </div>
              </div>
              
              <div className="feature-item highlight">
                <div className="feature-icon special"><FaShoppingCart /></div>
                <div className="feature-text">
                  <h4>맞춤형 디지털 부적</h4>
                  <p>당신의 사주에 맞게 AI가 특별 설계한 디지털 부적</p>
                </div>
              </div>
            </div>
            
            <div className="price-section">
              <div className="price-comparison">
                <div className="original">
                  <span className="label">정상가</span>
                  <span className="price">50,000원</span>
                </div>
                <div className="discount">
                  <span className="label">할인가</span>
                  <span className="price">29,000원</span>
                  <span className="discount-rate">42% 할인</span>
                </div>
              </div>
              
              <button className="purchase-btn" onClick={handlePremiumPurchase}>
                <FaRegCreditCard /> 결제하고 프리미엄 분석 받기
              </button>
              
              <p className="payment-security">
                <small>✓ 안전한 결제 | ✓ 즉시 이용 가능</small>
              </p>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
}

export default ResultPage;