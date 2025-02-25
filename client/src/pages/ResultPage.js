import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaShoppingCart, FaLock, FaInfoCircle, FaChartPie, FaChartLine, FaChartBar, FaCheck } from 'react-icons/fa';
import '../styles/ResultPage.css';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from 'recharts';

function ResultPage() {
  const location = useLocation();
  const history = useHistory();
  const { userData, sajuResult } = location.state || {};
  const [showTalismanInfo, setShowTalismanInfo] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [premium, setPremium] = useState(false);
  const [showPremiumModal, setShowPremiumModal] = useState(false);
  
  useEffect(() => {
    // 결과 데이터가 없으면 홈페이지로 리다이렉트
    if (!userData || !sajuResult) {
      history.replace('/');
    }
    
    // 스크롤을 맨 위로 이동
    window.scrollTo(0, 0);
  }, [userData, sajuResult, history]);
  
  // 결과 데이터가 없으면 로딩 표시
  if (!userData || !sajuResult) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>결과를 불러오는 중...</p>
      </div>
    );
  }
  
  // 오행 데이터 (그래프용)
  const elementData = {
    labels: ['목(木)', '화(火)', '토(土)', '금(金)', '수(水)'],
    values: [25, 40, 15, 10, 10], // 예시 데이터
    colors: ['#00b894', '#e17055', '#fdcb6e', '#b2bec3', '#0984e3']
  };
  
  // 운세 흐름 데이터 (그래프용)
  const fortuneFlowData = {
    labels: ['2023', '2024', '2025', '2026', '2027'],
    values: [65, 80, 75, 90, 85], // 예시 데이터
  };
  
  // 부적 정보 토글
  const toggleTalismanInfo = () => {
    setShowTalismanInfo(!showTalismanInfo);
  };
  
  // 종합 분석 데이터 (레이더 차트용)
  const radarData = [
    {
      subject: '성격',
      A: 85,
      fullMark: 100,
    },
    {
      subject: '직업',
      A: 70,
      fullMark: 100,
    },
    {
      subject: '연애',
      A: 90,
      fullMark: 100,
    },
    {
      subject: '재물',
      A: 65,
      fullMark: 100,
    },
    {
      subject: '건강',
      A: 80,
      fullMark: 100,
    },
  ];

  // 월별 운세 데이터 (바 차트용)
  const monthlyData = sajuResult.monthlyForecast.map(item => ({
    name: item.month,
    운세지수: item.rating * 20, // 5점 만점을 백분율로 변환
  }));

  // 프리미엄 결제 처리
  const handlePremiumPurchase = () => {
    alert('결제 시스템은 아직 구현되지 않았습니다. 실제 서비스에서는 결제 페이지로 이동합니다.');
    setPremium(true);
    setShowPremiumModal(false);
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
  
  return (
    <div className="result-page">
      <Header />
      
      <main>
        <section className="result-hero">
          <div className="container">
            <h1>{userData.name}님의 사주 분석 결과</h1>
            <p className="result-date">분석일: {new Date().toLocaleDateString()}</p>
            <div className="result-summary">
              <div className="summary-item">
                <span className="summary-label">생년월일</span>
                <span className="summary-value">{userData.birthDate}</span>
              </div>
              {userData.birthTime && (
                <div className="summary-item">
                  <span className="summary-label">태어난 시간</span>
                  <span className="summary-value">{userData.birthTime}</span>
                </div>
              )}
              <div className="summary-item">
                <span className="summary-label">성별</span>
                <span className="summary-value">{userData.gender}</span>
              </div>
              <div className="summary-item">
                <span className="summary-label">주요 관심사</span>
                <span className="summary-value">{userData.concern}</span>
              </div>
            </div>
          </div>
        </section>
        
        <section className="result-overview">
          <div className="container">
            <div className="result-card">
              <h2>사주 기본 구성</h2>
              <div className="pillars-container">
                <div className="pillar">
                  <div className="pillar-title">년주(年柱)</div>
                  <div className="pillar-value">{sajuResult.yearPillar}</div>
                </div>
                <div className="pillar">
                  <div className="pillar-title">월주(月柱)</div>
                  <div className="pillar-value">{sajuResult.monthPillar}</div>
                </div>
                <div className="pillar">
                  <div className="pillar-title">일주(日柱)</div>
                  <div className="pillar-value">{sajuResult.dayPillar}</div>
                </div>
                <div className="pillar">
                  <div className="pillar-title">시주(時柱)</div>
                  <div className="pillar-value">{sajuResult.hourPillar || '미상'}</div>
                </div>
              </div>
              
              <div className="dominant-element">
                <h3>주요 오행</h3>
                <div className={`element-badge ${sajuResult.dominantElement === '화' ? 'fire' : 
                                              sajuResult.dominantElement === '수' ? 'water' : 
                                              sajuResult.dominantElement === '목' ? 'wood' : 
                                              sajuResult.dominantElement === '금' ? 'metal' : 
                                              sajuResult.dominantElement === '토' ? 'earth' : ''}`}>
                  {sajuResult.dominantElement}({
                    sajuResult.dominantElement === '화' ? '火' : 
                    sajuResult.dominantElement === '수' ? '水' : 
                    sajuResult.dominantElement === '목' ? '木' : 
                    sajuResult.dominantElement === '금' ? '金' : 
                    sajuResult.dominantElement === '토' ? '土' : ''
                  })
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="element-analysis">
          <div className="container">
            <h2>오행 분석</h2>
            <p className="section-subtitle">당신의 사주에 나타난 오행의 균형과 특성을 분석합니다</p>
            
            <div className="element-chart-container">
              <div className="pie-chart-wrapper">
                <div className="pie-chart">
                  {elementData.values.map((value, index) => (
                    <div 
                      key={index} 
                      className="pie-segment" 
                      style={{
                        backgroundColor: elementData.colors[index],
                        transform: `rotate(${index > 0 ? 
                          elementData.values.slice(0, index).reduce((acc, curr) => acc + curr, 0) * 3.6 : 0}deg)`,
                        clipPath: `polygon(50% 50%, 50% 0%, ${value > 25 ? '100% 0%' : ''}, ${value > 50 ? '100% 100%' : ''}, ${value > 75 ? '0% 100%' : ''}, ${value > 12.5 && value <= 25 ? '100% 100%' : ''}, 50% 50%)`
                      }}
                    ></div>
                  ))}
                  <div className="pie-center">
                    <span>{sajuResult.dominantElement}</span>
                  </div>
                </div>
              </div>
              
              <div className="element-legend">
                {elementData.labels.map((label, index) => (
                  <div key={index} className="legend-item">
                    <div className="legend-color" style={{ backgroundColor: elementData.colors[index] }}></div>
                    <div className="legend-label">{label}</div>
                    <div className="legend-value">{elementData.values[index]}%</div>
                  </div>
                ))}
              </div>
              
              <div className="element-description">
                <p>
                  {userData.name}님의 사주에서는 <strong>{sajuResult.dominantElement}({
                    sajuResult.dominantElement === '화' ? '火' : 
                    sajuResult.dominantElement === '수' ? '水' : 
                    sajuResult.dominantElement === '목' ? '木' : 
                    sajuResult.dominantElement === '금' ? '金' : 
                    sajuResult.dominantElement === '토' ? '土' : ''
                  })</strong> 기운이 가장 강하게 나타납니다. 
                  {sajuResult.dominantElement === '화' && '화(火)는 열정, 창의성, 활동성을 상징하며, 리더십과 표현력이 뛰어난 특성을 보입니다.'}
                  {sajuResult.dominantElement === '수' && '수(水)는 지혜, 통찰력, 적응력을 상징하며, 깊은 사고와 유연한 대처 능력이 뛰어난 특성을 보입니다.'}
                  {sajuResult.dominantElement === '목' && '목(木)은 성장, 창의성, 진취성을 상징하며, 도전 정신과 발전 가능성이 큰 특성을 보입니다.'}
                  {sajuResult.dominantElement === '금' && '금(金)은 결단력, 정확성, 완벽함을 상징하며, 원칙을 중시하고 체계적인 특성을 보입니다.'}
                  {sajuResult.dominantElement === '토' && '토(土)는 안정, 신뢰, 실용성을 상징하며, 책임감과 인내심이 강한 특성을 보입니다.'}
                </p>
                <p>
                  반면, {
                    sajuResult.dominantElement === '화' ? '수(水)' : 
                    sajuResult.dominantElement === '수' ? '토(土)' : 
                    sajuResult.dominantElement === '목' ? '금(金)' : 
                    sajuResult.dominantElement === '금' ? '화(火)' : 
                    sajuResult.dominantElement === '토' ? '목(木)' : ''
                  } 기운이 부족한 편으로, 이를 보완하는 것이 중요합니다. 
                  {sajuResult.dominantElement === '화' && '수(水)의 부족은 감정 조절과 깊은 사고에 어려움을 줄 수 있으므로, 차분함과 인내심을 기르는 것이 도움이 됩니다.'}
                  {sajuResult.dominantElement === '수' && '토(土)의 부족은 안정감과 현실적 판단에 어려움을 줄 수 있으므로, 실용적인 접근과 책임감을 기르는 것이 도움이 됩니다.'}
                  {sajuResult.dominantElement === '목' && '금(金)의 부족은 체계적인 판단과 완벽함에 어려움을 줄 수 있으므로, 원칙과 정확성을 기르는 것이 도움이 됩니다.'}
                  {sajuResult.dominantElement === '금' && '화(火)의 부족은 열정과 창의성에 어려움을 줄 수 있으므로, 표현력과 도전 정신을 기르는 것이 도움이 됩니다.'}
                  {sajuResult.dominantElement === '토' && '목(木)의 부족은 성장과 변화에 어려움을 줄 수 있으므로, 유연성과 창의성을 기르는 것이 도움이 됩니다.'}
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="fortune-flow">
          <div className="container">
            <h2>운세 흐름</h2>
            <p className="section-subtitle">향후 5년간의 운세 흐름을 예측합니다</p>
            
            <div className="flow-chart">
              <div className="line-chart">
                <div className="chart-grid">
                  <div className="grid-line"></div>
                  <div className="grid-line"></div>
                  <div className="grid-line"></div>
                  <div className="grid-line"></div>
                  <div className="grid-line"></div>
                </div>
                
                <div className="chart-line" style={{
                  clipPath: `polygon(
                    0% ${100 - fortuneFlowData.values[0]}%, 
                    25% ${100 - fortuneFlowData.values[1]}%, 
                    50% ${100 - fortuneFlowData.values[2]}%, 
                    75% ${100 - fortuneFlowData.values[3]}%, 
                    100% ${100 - fortuneFlowData.values[4]}%, 
                    100% 100%, 
                    0% 100%
                  )`
                }}></div>
                
                <div className="chart-points">
                  {fortuneFlowData.values.map((value, index) => (
                    <div 
                      key={index} 
                      className="chart-point" 
                      style={{
                        left: `${index * 25}%`,
                        bottom: `${value}%`
                      }}
                    ></div>
                  ))}
                </div>
              </div>
              
              <div className="chart-labels">
                {fortuneFlowData.labels.map((label, index) => (
                  <div key={index} className="chart-label">{label}</div>
                ))}
              </div>
              
              <div className="flow-description">
                <p>
                  {userData.name}님의 운세는 향후 5년간 전반적으로 상승세를 보일 것으로 예측됩니다. 
                  특히 2026년에 가장 좋은 운세가 예상되며, 이 시기에 중요한 결정이나 도전을 시도하는 것이 유리할 수 있습니다.
                </p>
                <p>
                  2024년부터 2025년까지는 약간의 변동이 있을 수 있으나, 전체적으로는 안정적인 흐름을 유지할 것입니다. 
                  이 기간 동안에는 기존의 것을 유지하고 발전시키는 데 집중하는 것이 좋습니다.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="detailed-reading">
          <div className="container">
            <h2>상세 분석</h2>
            <p className="section-subtitle">당신의 사주가 보여주는 다양한 측면을 분석합니다</p>
            
            <div className="reading-tabs">
              <div className="reading-content">
                <div className="result-section personality">
                  <h2>성격 및 기질</h2>
                  <p>{sajuResult.personality}</p>
                  
                  <div className="personality-traits">
                    <div className="trait">열정적</div>
                    <div className="trait">창의적</div>
                    <div className="trait">활동적</div>
                    <div className="trait">리더십</div>
                    <div className="trait">표현력</div>
                    <div className="trait">사교성</div>
                  </div>
                </div>
                
                <div className="result-section career">
                  <h2>적성 및 직업</h2>
                  <p>{sajuResult.career}</p>
                  
                  <h3>적합한 직업군</h3>
                  <div className="career-matches">
                    <div className="career-match">
                      <div className="career-icon">
                        <i className="fa fa-briefcase"></i>
                      </div>
                      <div className="career-name">창의적 분야</div>
                      <div className="career-fit">적합도: 90%</div>
                    </div>
                    <div className="career-match">
                      <div className="career-icon">
                        <i className="fa fa-users"></i>
                      </div>
                      <div className="career-name">리더십 분야</div>
                      <div className="career-fit">적합도: 85%</div>
                    </div>
                    <div className="career-match">
                      <div className="career-icon">
                        <i className="fa fa-comments"></i>
                      </div>
                      <div className="career-name">커뮤니케이션 분야</div>
                      <div className="career-fit">적합도: 80%</div>
                    </div>
                    <div className="career-match">
                      <div className="career-icon">
                        <i className="fa fa-paint-brush"></i>
                      </div>
                      <div className="career-name">예술 분야</div>
                      <div className="career-fit">적합도: 75%</div>
                    </div>
                  </div>
                </div>
                
                <div className="result-section relationship">
                  <h2>대인관계 및 연애</h2>
                  <p>{sajuResult.relationship}</p>
                  
                  <h3>상성이 좋은 오행</h3>
                  <div className="compatibility-items">
                    <div className="compatibility-item">
                      <div className={`compatibility-element wood ${sajuResult.dominantElement === '목' ? 'active' : ''}`}>목(木)</div>
                      <div className="compatibility-description">
                        창의적이고 성장 지향적인 성향을 가진 사람과 좋은 관계를 형성할 수 있습니다.
                      </div>
                    </div>
                    <div className="compatibility-item">
                      <div className={`compatibility-element fire ${sajuResult.dominantElement === '화' ? 'active' : ''}`}>화(火)</div>
                      <div className="compatibility-description">
                        열정적이고 활동적인 성향을 가진 사람과 서로 에너지를 북돋울 수 있습니다.
                      </div>
                    </div>
                    <div className="compatibility-item">
                      <div className={`compatibility-element earth ${sajuResult.dominantElement === '토' ? 'active' : ''}`}>토(土)</div>
                      <div className="compatibility-description">
                        안정적이고 신뢰감 있는 성향을 가진 사람과 균형 잡힌 관계를 형성할 수 있습니다.
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="result-section wealth">
                  <h2>재물운</h2>
                  <p>{sajuResult.wealth}</p>
                  
                  <div className="wealth-tips">
                    <h3>재물 관리 조언</h3>
                    <ul>
                      <li>충동적인 소비를 자제하고 계획적인 지출 습관을 기르세요.</li>
                      <li>장기적인 투자 계획을 세우고 꾸준히 실행하세요.</li>
                      <li>재물을 모으는 것보다 가치 있게 사용하는 방법을 고민하세요.</li>
                      <li>정기적인 저축 습관을 통해 안정적인 자산을 형성하세요.</li>
                    </ul>
                  </div>
                </div>
                
                <div className="result-section health">
                  <h2>건강</h2>
                  <p>{sajuResult.health}</p>
                  
                  <div className="health-focus">
                    <h3>주의해야 할 건강 부위</h3>
                    <div className="body-chart">
                      <div className="body-part heart active">
                        <div className="part-name">심장</div>
                      </div>
                      <div className="body-part blood active">
                        <div className="part-name">혈액순환</div>
                      </div>
                      <div className="body-part head">
                        <div className="part-name">두뇌</div>
                      </div>
                      <div className="body-part stomach">
                        <div className="part-name">소화기</div>
                      </div>
                      <div className="body-part liver">
                        <div className="part-name">간</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="result-section advice">
                  <h2>종합 조언</h2>
                  <p>{sajuResult.advice}</p>
                  
                  <div className="advice-highlights">
                    <div className="advice-highlight">
                      <div className="highlight-icon">
                        <i className="fa fa-balance-scale"></i>
                      </div>
                      <div className="highlight-text">균형 잡힌 생활 습관을 유지하세요.</div>
                    </div>
                    <div className="advice-highlight">
                      <div className="highlight-icon">
                        <i className="fa fa-heart"></i>
                      </div>
                      <div className="highlight-text">감정 조절에 주의를 기울이세요.</div>
                    </div>
                    <div className="advice-highlight">
                      <div className="highlight-icon">
                        <i className="fa fa-users"></i>
                      </div>
                      <div className="highlight-text">신뢰할 수 있는 인간관계를 구축하세요.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="talisman-section">
          <div className="container">
            <h2>맞춤형 행운 부적</h2>
            <p className="section-subtitle">{userData.name}님의 사주에 맞춰 특별히 설계된 행운 부적</p>
            
            <div className="talisman-container">
              <div className="talisman-preview">
                <div className="talisman-image-container">
                  <div className="talisman-image blurred">
                    {/* 이미지 태그 제거 또는 수정 */}
                    {/* <img src={`/images/talismans/${sajuResult.dominantElement.toLowerCase()}_talisman.jpg`} alt="맞춤형 행운 부적" /> */}
                    <div className="talisman-placeholder"></div>
                    <div className="talisman-lock">
                      <FaLock />
                      <p>구매 후 확인 가능</p>
                    </div>
                  </div>
                  <div className="talisman-energy-aura"></div>
                </div>
                
                <div className="talisman-elements">
                  <div className="talisman-element-tag">
                    <span className={`element-icon ${sajuResult.dominantElement === '화' ? 'fire' : 
                                                  sajuResult.dominantElement === '수' ? 'water' : 
                                                  sajuResult.dominantElement === '목' ? 'wood' : 
                                                  sajuResult.dominantElement === '금' ? 'metal' : 
                                                  sajuResult.dominantElement === '토' ? 'earth' : ''}`}>
                      {sajuResult.dominantElement}({
                        sajuResult.dominantElement === '화' ? '火' : 
                        sajuResult.dominantElement === '수' ? '水' : 
                        sajuResult.dominantElement === '목' ? '木' : 
                        sajuResult.dominantElement === '금' ? '金' : 
                        sajuResult.dominantElement === '토' ? '土' : ''
                      })
                    </span>
                    <span className="element-description">주요 오행</span>
                  </div>
                  
                  <div className="talisman-element-tag">
                    <span className={`element-icon ${sajuResult.dominantElement === '화' ? 'water' : 
                                                  sajuResult.dominantElement === '수' ? 'earth' : 
                                                  sajuResult.dominantElement === '목' ? 'metal' : 
                                                  sajuResult.dominantElement === '금' ? 'fire' : 
                                                  sajuResult.dominantElement === '토' ? 'wood' : ''}`}>
                      {sajuResult.dominantElement === '화' ? '수(水)' : 
                      sajuResult.dominantElement === '수' ? '토(土)' : 
                      sajuResult.dominantElement === '목' ? '금(金)' : 
                      sajuResult.dominantElement === '금' ? '화(火)' : 
                      sajuResult.dominantElement === '토' ? '목(木)' : ''}
                    </span>
                    <span className="element-description">보완 오행</span>
                  </div>
                </div>
              </div>
              
              <div className="talisman-details">
                <div className="talisman-info-toggle" onClick={toggleTalismanInfo}>
                  <FaInfoCircle /> 부적에 대한 자세한 정보
                </div>
                
                <div className={`talisman-info ${showTalismanInfo ? 'show' : ''}`}>
                  <h3>맞춤형 행운 부적이란?</h3>
                  <p>
                    맞춤형 행운 부적은 {userData.name}님의 사주 분석을 바탕으로 AI가 설계한 특별한 부적입니다. 
                    전통적인 부적의 원리와 현대적인 에너지 이론을 결합하여 만들어진 이 부적은 
                    {userData.name}님의 부족한 기운을 보충하고 과잉된 기운을 조절하는 데 도움을 줍니다.
                  </p>
                  
                  <h3>이 부적이 도움이 되는 이유</h3>
                  <ul className="talisman-benefits">
                    <li>
                      <FaCheck className="benefit-icon" />
                      <div className="benefit-content">
                        <strong>맞춤형 설계:</strong> {userData.name}님의 사주에 맞춰 특별히 설계되어 개인적인 에너지 균형을 맞춥니다.
                      </div>
                    </li>
                    <li>
                      <FaCheck className="benefit-icon" />
                      <div className="benefit-content">
                        <strong>에너지 조화:</strong> 부족한 {sajuResult.dominantElement === '화' ? '수(水)' : 
                                                  sajuResult.dominantElement === '수' ? '토(土)' : 
                                                  sajuResult.dominantElement === '목' ? '금(金)' : 
                                                  sajuResult.dominantElement === '금' ? '화(火)' : 
                                                  sajuResult.dominantElement === '토' ? '목(木)' : ''} 기운을 보충합니다.
                      </div>
                    </li>
                    <li>
                      <FaCheck className="benefit-icon" />
                      <div className="benefit-content">
                        <strong>운세 개선:</strong> 불리한 운세를 완화하고 유리한 운세를 강화하는 데 도움을 줍니다.
                      </div>
                    </li>
                    <li>
                      <FaCheck className="benefit-icon" />
                      <div className="benefit-content">
                        <strong>심리적 안정:</strong> 부적을 소지함으로써 심리적 안정감과 자신감을 얻을 수 있습니다.
                      </div>
                    </li>
                    <li>
                      <FaCheck className="benefit-icon" />
                      <div className="benefit-content">
                        <strong>목표 달성:</strong> 당신의 목표와 꿈을 이루는 데 필요한 에너지를 지원합니다.
                      </div>
                    </li>
                  </ul>
                  
                  <h3>부적 사용법</h3>
                  <ol className="talisman-usage">
                    <li>부적을 받으면 먼저 자신의 이름을 세 번 부르며 부적과 교감합니다.</li>
                    <li>부적은 지갑, 핸드폰 케이스, 침실 등 자주 접하는 곳에 보관하세요.</li>
                    <li>부적을 물에 닿게 하거나 접거나 훼손하지 않도록 주의하세요.</li>
                    <li>매달 보름날에 햇빛이나 달빛에 30분간 노출시켜 에너지를 재충전하세요.</li>
                  </ol>
                </div>
                
                <div className="talisman-purchase">
                  <div className="price-container">
                    <div className="original-price">50,000원</div>
                    <div className="discount-price">29,000원</div>
                    <div className="discount-tag">42% 할인</div>
                  </div>
                  
                  <button className="purchase-button">
                    <FaShoppingCart /> 맞춤형 부적 구매하기
                  </button>
                  
                  <div className="guarantee">
                    <p>✓ 100% 만족 보장 | ✓ 안전한 결제 | ✓ 빠른 배송</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default ResultPage;