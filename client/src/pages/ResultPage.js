import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { FaShare, FaLock, FaShoppingCart, FaChevronDown, FaChevronUp, FaStar, FaRegStar, FaArrowRight } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ElementChart from '../components/ElementChart';
import '../styles/ResultPage.css';

// 차트 라이브러리 임포트
import { 
  LineChart, Line, BarChart, Bar, PieChart, Pie, 
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, 
  ResponsiveContainer, Cell, RadarChart, Radar, PolarGrid, 
  PolarAngleAxis, PolarRadiusAxis, AreaChart, Area
} from 'recharts';

function ResultPage() {
  const location = useLocation();
  const history = useHistory();
  const [copied, setCopied] = useState(false);
  const [showTalismanPreview, setShowTalismanPreview] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');
  const [talismanImage, setTalismanImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [expandedSections, setExpandedSections] = useState({});
  
  // 섹션 참조 생성
  const overviewRef = useRef(null);
  const personalityRef = useRef(null);
  const careerRef = useRef(null);
  const relationshipRef = useRef(null);
  const wealthRef = useRef(null);
  const healthRef = useRef(null);
  const monthlyRef = useRef(null);
  const luckyRef = useRef(null);
  const adviceRef = useRef(null);
  const talismanRef = useRef(null);
  
  // 사용자 데이터와 사주 결과 가져오기
  const { userData, sajuResult } = location.state || {};
  
  // 결과 페이지에 직접 접근한 경우 홈으로 리다이렉트
  useEffect(() => {
    if (!userData || !sajuResult) {
      history.push('/');
      return;
    }
    
    // 부적 이미지 생성 요청
    const generateTalismanImage = async () => {
      try {
        const response = await fetch('/api/talisman/generate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: userData.name,
            dominantElement: sajuResult.dominantElement,
            birthDate: userData.birthDate
          }),
        });
        
        if (!response.ok) {
          throw new Error('부적 이미지 생성 실패');
        }
        
        const data = await response.json();
        setTalismanImage(data.imageUrl);
      } catch (error) {
        console.error('부적 이미지 생성 오류:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    generateTalismanImage();
    
    // 스크롤 이벤트 리스너 추가
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      const sections = [
        { ref: overviewRef, id: 'overview' },
        { ref: personalityRef, id: 'personality' },
        { ref: careerRef, id: 'career' },
        { ref: relationshipRef, id: 'relationship' },
        { ref: wealthRef, id: 'wealth' },
        { ref: healthRef, id: 'health' },
        { ref: monthlyRef, id: 'monthly' },
        { ref: luckyRef, id: 'lucky' },
        { ref: adviceRef, id: 'advice' },
        { ref: talismanRef, id: 'talisman' }
      ];
      
      for (const section of sections) {
        if (section.ref.current) {
          const { offsetTop, offsetHeight } = section.ref.current;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [userData, sajuResult, history]);
  
  // 결과 공유 기능
  const handleShare = () => {
    const shareText = `${userData.name}님의 사주 해석 결과: ${sajuResult.dominantElement} 기운이 강한 사주입니다. 당신의 사주도 확인해보세요! - 사주포춘`;
    navigator.clipboard.writeText(shareText)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
      })
      .catch(err => {
        console.error('클립보드 복사 실패:', err);
      });
  };
  
  // 부적 미리보기 토글
  const toggleTalismanPreview = () => {
    setShowTalismanPreview(!showTalismanPreview);
  };
  
  // 부적 구매 페이지로 이동
  const handleBuyTalisman = () => {
    history.push('/payment', { 
      userData, 
      sajuResult,
      product: {
        id: 'talisman-001',
        name: '맞춤형 행운 부적',
        price: 39900,
        description: `${userData.name}님을 위한 맞춤형 행운 부적`
      }
    });
  };
  
  // 섹션 확장/축소 토글
  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };
  
  // 특정 섹션으로 스크롤
  const scrollToSection = (sectionId) => {
    const sectionRefs = {
      overview: overviewRef,
      personality: personalityRef,
      career: careerRef,
      relationship: relationshipRef,
      wealth: wealthRef,
      health: healthRef,
      monthly: monthlyRef,
      lucky: luckyRef,
      advice: adviceRef,
      talisman: talismanRef
    };
    
    const ref = sectionRefs[sectionId];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  // 월별 운세 데이터 (예시)
  const monthlyFortune = [
    { month: '1월', fortune: 65, description: '새로운 시작의 달. 계획을 세우고 실행에 옮기기 좋은 시기입니다.' },
    { month: '2월', fortune: 59, description: '인내가 필요한 달. 서두르지 말고 차분히 진행하세요.' },
    { month: '3월', fortune: 80, description: '기회가 찾아오는 달. 주변의 제안에 귀 기울이세요.' },
    { month: '4월', fortune: 81, description: '성장의 달. 새로운 도전을 시작하기 좋은 시기입니다.' },
    { month: '5월', fortune: 56, description: '조정이 필요한 달. 균형을 찾는 데 집중하세요.' },
    { month: '6월', fortune: 55, description: '재충전이 필요한 달. 휴식과 자기 관리에 신경 쓰세요.' },
    { month: '7월', fortune: 40, description: '주의가 필요한 달. 중요한 결정은 신중하게 내리세요.' },
    { month: '8월', fortune: 70, description: '회복의 달. 긍정적인 변화가 시작됩니다.' },
    { month: '9월', fortune: 90, description: '행운의 달. 중요한 일을 진행하기에 최적의 시기입니다.' },
    { month: '10월', fortune: 75, description: '수확의 달. 그동안의 노력이 결실을 맺습니다.' },
    { month: '11월', fortune: 60, description: '정리의 달. 마무리와 반성의 시간을 가지세요.' },
    { month: '12월', fortune: 85, description: '도약의 달. 새로운 기회를 준비하세요.' }
  ];
  
  // 인간관계 데이터 (예시)
  const relationshipData = [
    { subject: '가족', value: 90, fullMark: 100 },
    { subject: '연인', value: 75, fullMark: 100 },
    { subject: '친구', value: 85, fullMark: 100 },
    { subject: '직장동료', value: 65, fullMark: 100 },
    { subject: '상사/선배', value: 60, fullMark: 100 },
    { subject: '부하/후배', value: 80, fullMark: 100 },
  ];
  
  // 행운의 방향 데이터 (예시)
  const luckyDirections = [
    { name: '동', value: 80 },
    { name: '서', value: 45 },
    { name: '남', value: 60 },
    { name: '북', value: 90 },
    { name: '북동', value: 85 },
    { name: '북서', value: 50 },
    { name: '남동', value: 70 },
    { name: '남서', value: 40 }
  ];
  
  // 색상 배열
  const COLORS = ['#6c5ce7', '#00cec9', '#fd79a8', '#0984e3', '#00b894', '#fdcb6e', '#e17055', '#d63031'];
  
  // 행운의 날짜 데이터 (예시)
  const luckyDays = [
    { date: '3일', luck: 80 },
    { date: '8일', luck: 90 },
    { date: '13일', luck: 75 },
    { date: '17일', luck: 85 },
    { date: '23일', luck: 95 },
    { date: '27일', luck: 70 }
  ];
  
  // 직업 적합도 데이터 (예시)
  const careerCompatibility = [
    { name: '예술/창작', score: 85 },
    { name: '경영/관리', score: 65 },
    { name: '기술/공학', score: 70 },
    { name: '교육/연구', score: 90 },
    { name: '의료/복지', score: 75 },
    { name: '금융/회계', score: 60 },
    { name: '영업/마케팅', score: 80 },
    { name: 'IT/개발', score: 85 }
  ];
  
  // 건강 상태 데이터 (예시)
  const healthStatus = [
    { name: '심장', value: 85 },
    { name: '폐', value: 75 },
    { name: '간', value: 65 },
    { name: '신장', value: 80 },
    { name: '위장', value: 70 },
    { name: '근골격', value: 85 },
    { name: '신경계', value: 75 },
    { name: '면역력', value: 80 }
  ];
  
  // 연간 운세 변화 데이터 (예시)
  const yearlyFortune = [
    { year: '2023', fortune: 65 },
    { year: '2024', fortune: 80 },
    { year: '2025', fortune: 90 },
    { year: '2026', fortune: 75 },
    { year: '2027', fortune: 85 },
    { year: '2028', fortune: 70 }
  ];
  
  // 성격 특성 데이터 (예시)
  const personalityTraits = [
    { trait: '창의성', value: 85 },
    { trait: '분석력', value: 75 },
    { trait: '리더십', value: 65 },
    { trait: '사교성', value: 80 },
    { trait: '인내심', value: 90 },
    { trait: '적응력', value: 70 },
    { trait: '결단력', value: 60 },
    { trait: '공감능력', value: 85 }
  ];
  
  if (!userData || !sajuResult) {
    return null; // 데이터가 없으면 렌더링하지 않음
  }
  
  return (
    <div className="result-page-container">
      <Header />
      
      <div className="result-navigation">
        <div className="container">
          <ul className="nav-list">
            <li className={activeSection === 'overview' ? 'active' : ''}>
              <button onClick={() => scrollToSection('overview')}>개요</button>
            </li>
            <li className={activeSection === 'personality' ? 'active' : ''}>
              <button onClick={() => scrollToSection('personality')}>성격</button>
            </li>
            <li className={activeSection === 'career' ? 'active' : ''}>
              <button onClick={() => scrollToSection('career')}>직업</button>
            </li>
            <li className={activeSection === 'relationship' ? 'active' : ''}>
              <button onClick={() => scrollToSection('relationship')}>인간관계</button>
            </li>
            <li className={activeSection === 'wealth' ? 'active' : ''}>
              <button onClick={() => scrollToSection('wealth')}>재물운</button>
            </li>
            <li className={activeSection === 'health' ? 'active' : ''}>
              <button onClick={() => scrollToSection('health')}>건강</button>
            </li>
            <li className={activeSection === 'monthly' ? 'active' : ''}>
              <button onClick={() => scrollToSection('monthly')}>월별운세</button>
            </li>
            <li className={activeSection === 'lucky' ? 'active' : ''}>
              <button onClick={() => scrollToSection('lucky')}>행운</button>
            </li>
            <li className={activeSection === 'advice' ? 'active' : ''}>
              <button onClick={() => scrollToSection('advice')}>조언</button>
            </li>
            <li className={activeSection === 'talisman' ? 'active' : ''}>
              <button onClick={() => scrollToSection('talisman')}>부적</button>
            </li>
          </ul>
        </div>
      </div>
      
      <main className="result-content">
        <section className="result-header">
          <div className="container">
            <h1 className="result-title gradient-text">
              {userData.name}님의 사주 해석 결과
            </h1>
            <p className="result-subtitle">
              {userData.birthDate} {userData.birthTime || '시간 미상'} | {userData.gender} | 관심사: {userData.concern}
            </p>
            <div className="result-actions">
              <button className="share-button" onClick={handleShare}>
                <FaShare /> {copied ? '복사됨!' : '결과 공유하기'}
              </button>
            </div>
          </div>
        </section>
        
        <section className="result-overview" id="overview" ref={overviewRef}>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">사주 개요</h2>
              <div className="oriental-divider"></div>
            </div>
            
            <div className="overview-content glass-card">
              <div className="overview-text">
                <p className="highlight-text">
                  {userData.name}님은 <strong className="element-text">{sajuResult.dominantElement}</strong> 기운이 강한 사주를 가지고 있습니다.
                </p>
                <p>
                  {sajuResult.introduction || `${sajuResult.dominantElement} 기운이 강한 사주는 자연의 ${sajuResult.dominantElement} 특성을 반영합니다. 이는 당신의 성격, 재능, 인간관계, 그리고 운명의 흐름에 큰 영향을 미칩니다.`}
                </p>
                <p>
                  사주팔자는 태어난 년, 월, 일, 시를 각각 하나의 기둥(柱)으로 보고, 각 기둥은 천간(天干)과 지지(地支)라는 두 개의 글자로 이루어져 총 여덟 글자(八字)가 됩니다. 이 여덟 글자는 우주의 기운과 개인의 운명을 연결하는 코드입니다.
                </p>
                <p>
                  당신의 사주는 오행(五行)의 균형과 상호작용을 통해 당신만의 독특한 운명의 지도를 형성합니다. 아래에서 더 자세한 분석 결과를 확인하실 수 있습니다.
                </p>
              </div>
              
              <div className="overview-pillars">
                <div className="pillar">
                  <h3>년주</h3>
                  <div className="pillar-content">{sajuResult.yearPillar || '갑자'}</div>
                  <p className="pillar-meaning">타고난 환경과 부모의 영향</p>
                </div>
                <div className="pillar">
                  <h3>월주</h3>
                  <div className="pillar-content">{sajuResult.monthPillar || '병오'}</div>
                  <p className="pillar-meaning">성장 과정과 형제자매 관계</p>
                </div>
                <div className="pillar">
                  <h3>일주</h3>
                  <div className="pillar-content">{sajuResult.dayPillar || '정미'}</div>
                  <p className="pillar-meaning">자신의 본질과 배우자 관계</p>
                </div>
                <div className="pillar">
                  <h3>시주</h3>
                  <div className="pillar-content">{sajuResult.hourPillar || '무신'}</div>
                  <p className="pillar-meaning">자녀와 노후의 운세</p>
                </div>
              </div>
              
              <div className="element-balance">
                <h3>오행 균형</h3>
                <p>당신의 사주에 나타난 오행(五行)의 균형 상태입니다.</p>
                <div className="element-chart-container">
                  <ElementChart elements={sajuResult.elements || {
                    wood: 25,
                    fire: 15,
                    earth: 30,
                    metal: 20,
                    water: 10
                  }} />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="personality-section" id="personality" ref={personalityRef}>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">성격 특성</h2>
              <div className="oriental-divider"></div>
            </div>
            
            <div className="personality-content glass-card">
              <div className="personality-text">
                <p className="highlight-text">
                  {userData.name}님의 사주는 독특한 성격 특성을 보여줍니다.
                </p>
                <p>
                  {sajuResult.personality || `${sajuResult.dominantElement} 기운이 강한 당신은 창의적이고 직관적인 성향을 가지고 있습니다. 새로운 아이디어를 생각해내는 능력이 뛰어나며, 예술적 감각도 풍부합니다. 다만 때로는 감정의 기복이 있을 수 있으니 안정적인 루틴을 유지하는 것이 도움이 됩니다.`}
                </p>
                <p>
                  당신은 직관적인 판단력과 창의적인 문제 해결 능력을 갖추고 있습니다. 이러한 특성은 예술, 디자인, 마케팅 등의 분야에서 큰 강점으로 작용할 수 있습니다. 또한 공감 능력이 뛰어나 대인관계에서도 좋은 인상을 줍니다.
                </p>
                <p>
                  다만 감정의 기복이 있을 수 있으니, 명상이나 규칙적인 운동을 통해 정서적 안정을 유지하는 것이 중요합니다. 또한 때로는 현실적인 판단보다 이상에 치우칠 수 있으니, 중요한 결정을 내릴 때는 충분한 시간을 두고 신중하게 생각하는 습관을 기르는 것이 좋습니다.
                </p>
              </div>
              
              <div className="personality-traits">
                <h3>주요 성격 특성</h3>
                <div className="traits-chart-container">
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart
                      data={personalityTraits}
                      layout="vertical"
                      margin={{ top: 20, right: 30, left: 70, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" domain={[0, 100]} />
                      <YAxis dataKey="trait" type="category" width={80} />
                      <Tooltip />
                      <Bar dataKey="value" fill="#6c5ce7" radius={[0, 4, 4, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              <div className="personality-strengths-weaknesses">
                <div className="strengths">
                  <h3>강점</h3>
                  <ul>
                    <li>창의적인 사고방식</li>
                    <li>뛰어난 직관력</li>
                    <li>공감 능력</li>
                    <li>적응력</li>
                    <li>열정적인 태도</li>
                  </ul>
                </div>
                <div className="weaknesses">
                  <h3>개선점</h3>
                  <ul>
                    <li>감정 기복 관리</li>
                    <li>현실적 판단력 강화</li>
                    <li>인내심 기르기</li>
                    <li>체계적인 계획 수립</li>
                    <li>스트레스 관리</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="career-section" id="career" ref={careerRef}>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">직업 적합도</h2>
              <div className="oriental-divider"></div>
            </div>
            
            <div className="career-content glass-card">
              <div className="career-text">
                <p className="highlight-text">
                  {userData.name}님의 사주는 특정 직업 분야에서 더 큰 성공을 거둘 수 있는 잠재력을 보여줍니다.
                </p>
                <p>
                  {sajuResult.career || `${sajuResult.dominantElement} 기운이 강한 당신은 창의적인 분야에서 두각을 나타낼 수 있습니다. 예술, 디자인, 마케팅, 교육 등의 분야가 특히 적합합니다. 당신의 직관력과 창의성은 이러한 분야에서 큰 강점으로 작용할 것입니다.`}
                </p>
                <p>
                  당신의 사주는 창의적인 문제 해결 능력과 직관적인 판단력을 보여줍니다. 이러한 특성은 예술, 디자인, 마케팅, 교육, 상담 등의 분야에서 큰 강점으로 작용할 수 있습니다. 특히 다른 사람들과 소통하고 영감을 주는 역할에서 뛰어난 성과를 낼 수 있습니다.
                </p>
                <p>
                  또한 당신은 변화에 적응하는 능력이 뛰어나므로, 빠르게 변화하는 환경에서도 잘 적응할 수 있습니다. 이는 스타트업이나 창의 산업에서 중요한 자질입니다. 다만, 장기적인 계획을 세우고 꾸준히 실행하는 능력을 개발하는 것이 성공의 열쇠가 될 것입니다.
                </p>
              </div>
              
              <div className="career-compatibility">
                <h3>직업 적합도</h3>
                <div className="career-chart-container">
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart
                      data={careerCompatibility}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis domain={[0, 100]} />
                      <Tooltip />
                      <Bar dataKey="score" fill="#00cec9">
                        {careerCompatibility.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              <div className="recommended-careers">
                <h3>추천 직업</h3>
                <div className="career-grid">
                  <div className="career-item">
                    <h4>예술/창작</h4>
                    <ul>
                      <li>디자이너</li>
                      <li>작가</li>
                      <li>음악가</li>
                      <li>영화/미디어 제작자</li>
                    </ul>
                  </div>
                  <div className="career-item">
                    <h4>교육/연구</h4>
                    <ul>
                      <li>교사/교수</li>
                      <li>상담사</li>
                      <li>코치</li>
                      <li>연구원</li>
                    </ul>
                  </div>
                  <div className="career-item">
                    <h4>마케팅/커뮤니케이션</h4>
                    <ul>
                      <li>마케팅 전문가</li>
                      <li>PR 전문가</li>
                      <li>콘텐츠 크리에이터</li>
                      <li>소셜 미디어 매니저</li>
                    </ul>
                  </div>
                  <div className="career-item">
                    <h4>기타 적합 분야</h4>
                    <ul>
                      <li>심리 상담사</li>
                      <li>이벤트 기획자</li>
                      <li>여행 가이드</li>
                      <li>요가/명상 강사</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="career-advice">
                <h3>직업 관련 조언</h3>
                <p>
                당신의 창의성과 직관력을 활용할 수 있는 분야를 선택하되, 체계적인 계획과 실행력을 기를 수 있는 환경을 찾는 것이 중요합니다. 또한 감정적 안정을 유지할 수 있는 직장 문화도 당신의 성공에 큰 영향을 미칠 것입니다.
                </p>
                <p>
                  2024년에는 특히 새로운 기술이나 지식을 습득하는 데 투자하는 것이 좋습니다. 이는 향후 몇 년간 당신의 경력에 큰 도움이 될 것입니다. 또한 네트워킹에 적극적으로 참여하여 인맥을 넓히는 것도 중요합니다.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="relationship-section" id="relationship" ref={relationshipRef}>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">인간관계</h2>
              <div className="oriental-divider"></div>
            </div>
            
            <div className="relationship-content glass-card">
              <div className="relationship-text">
                <p className="highlight-text">
                  {userData.name}님의 대인관계와 연애 운세에 대한 분석입니다.
                </p>
                <p>
                  {sajuResult.relationship || `${sajuResult.dominantElement} 기운이 강한 당신은 따뜻하고 공감 능력이 뛰어나 주변 사람들에게 긍정적인 영향을 줍니다. 연애에서는 감성적이고 낭만적인 면모를 보여주지만, 때로는 감정에 휘둘릴 수 있으니 균형을 유지하는 것이 중요합니다.`}
                </p>
                <p>
                  당신은 타인의 감정을 잘 이해하고 공감하는 능력이 뛰어나 대인관계에서 좋은 인상을 줍니다. 특히 친밀한 관계에서는 따뜻하고 배려심 깊은 모습을 보여주어 주변 사람들에게 편안함을 줍니다. 다만 때로는 타인의 감정에 너무 영향을 받아 자신의 감정을 제대로 관리하지 못할 수 있으니 주의가 필요합니다.
                </p>
                <p>
                  연애 관계에서는 낭만적이고 헌신적인 모습을 보여주지만, 상대방에게 지나치게 의존하거나 이상화하는 경향이 있을 수 있습니다. 건강한 관계를 위해서는 자신의 독립성을 유지하고, 현실적인 기대를 갖는 것이 중요합니다. 또한 감정적인 결정보다는 이성적인 판단을 병행하는 습관을 기르는 것이 도움이 될 것입니다.
                </p>
              </div>
              
              <div className="relationship-compatibility">
                <h3>궁합 분석</h3>
                <div className="compatibility-chart-container">
                  <ResponsiveContainer width="100%" height={300}>
                    <RadarChart outerRadius={90} data={compatibilityData}>
                      <PolarGrid />
                      <PolarAngleAxis dataKey="type" />
                      <PolarRadiusAxis domain={[0, 100]} />
                      <Radar name="궁합도" dataKey="value" stroke="#fd79a8" fill="#fd79a8" fillOpacity={0.6} />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
                <div className="compatibility-legend">
                  <div className="compatibility-item">
                    <span className="compatibility-dot high"></span>
                    <span>높은 궁합 (80-100): 금(金), 토(土) 기운이 강한 사람</span>
                  </div>
                  <div className="compatibility-item">
                    <span className="compatibility-dot medium"></span>
                    <span>중간 궁합 (50-79): 화(火) 기운이 강한 사람</span>
                  </div>
                  <div className="compatibility-item">
                    <span className="compatibility-dot low"></span>
                    <span>낮은 궁합 (0-49): 수(水) 기운이 강한 사람</span>
                  </div>
                </div>
              </div>
              
              <div className="relationship-advice">
                <h3>인간관계 조언</h3>
                <ul>
                  <li>
                    <strong>경계 설정하기:</strong> 타인의 감정에 너무 영향받지 않도록 건강한 경계를 설정하세요.
                  </li>
                  <li>
                    <strong>솔직한 소통:</strong> 감정을 억누르기보다는 적절한 방식으로 표현하는 연습을 하세요.
                  </li>
                  <li>
                    <strong>자기 돌봄:</strong> 타인을 돌보기 전에 자신의 필요를 충족시키는 것이 중요합니다.
                  </li>
                  <li>
                    <strong>현실적 기대:</strong> 관계에서 완벽을 기대하기보다는 현실적인 기대를 갖도록 노력하세요.
                  </li>
                  <li>
                    <strong>균형 찾기:</strong> 관계에 투자하는 만큼 자신의 성장과 독립성도 유지하세요.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        <section className="wealth-section" id="wealth" ref={wealthRef}>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">재물운</h2>
              <div className="oriental-divider"></div>
            </div>
            
            <div className="wealth-content glass-card">
              <div className="wealth-text">
                <p className="highlight-text">
                  {userData.name}님의 재물운과 금전 관리에 대한 분석입니다.
                </p>
                <p>
                  {sajuResult.wealth || `${sajuResult.dominantElement} 기운이 강한 당신은 창의적인 아이디어를 통해 수입을 창출할 수 있는 잠재력이 있습니다. 다만 충동적인 소비 습관에 주의하고, 장기적인 재정 계획을 세우는 것이 중요합니다.`}
                </p>
                <p>
                  당신은 창의적인 아이디어와 직관력을 통해 새로운 수입원을 발견하는 능력이 뛰어납니다. 특히 예술, 디자인, 마케팅 등 창의적인 분야에서 재물을 모을 수 있는 기회가 많을 것입니다. 또한 당신의 사교성과 네트워킹 능력은 좋은 기회를 발견하는 데 도움이 될 것입니다.
                </p>
                <p>
                  다만 감정에 따라 충동적으로 소비하는 경향이 있으니 주의가 필요합니다. 재정 관리에 있어서는 체계적인 계획을 세우고, 정기적으로 저축하는 습관을 기르는 것이 중요합니다. 또한 투자에 있어서도 직관에만 의존하기보다는 충분한 정보를 수집하고 전문가의 조언을 구하는 것이 좋습니다.
                </p>
              </div>
              
              <div className="wealth-forecast">
                <h3>2024년 재물운 예측</h3>
                <div className="wealth-chart-container">
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={wealthForecast} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis domain={[0, 100]} />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="income" stroke="#0984e3" name="수입" strokeWidth={2} />
                      <Line type="monotone" dataKey="investment" stroke="#00b894" name="투자" strokeWidth={2} />
                      <Line type="monotone" dataKey="overall" stroke="#6c5ce7" name="종합 재물운" strokeWidth={3} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              <div className="wealth-advice">
                <h3>재물 관리 조언</h3>
                <div className="advice-grid">
                  <div className="advice-item">
                    <h4>수입 증대 방법</h4>
                    <ul>
                      <li>창의적 부업 시도하기</li>
                      <li>전문 지식 활용하기</li>
                      <li>네트워킹 강화하기</li>
                      <li>새로운 기술 습득하기</li>
                    </ul>
                  </div>
                  <div className="advice-item">
                    <h4>지출 관리 방법</h4>
                    <ul>
                      <li>예산 계획 세우기</li>
                      <li>충동구매 줄이기</li>
                      <li>정기적 지출 검토하기</li>
                      <li>절약 습관 기르기</li>
                    </ul>
                  </div>
                  <div className="advice-item">
                    <h4>투자 전략</h4>
                    <ul>
                      <li>장기적 관점 유지하기</li>
                      <li>분산 투자하기</li>
                      <li>전문가 조언 구하기</li>
                      <li>정기적으로 재평가하기</li>
                    </ul>
                  </div>
                  <div className="advice-item">
                    <h4>행운의 재물 방향</h4>
                    <ul>
                      <li>행운의 방향: 동쪽</li>
                      <li>행운의 색상: 파란색, 보라색</li>
                      <li>행운의 숫자: 3, 7, 9</li>
                      <li>행운의 날짜: 3일, 17일, 27일</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="health-section" id="health" ref={healthRef}>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">건강 분석</h2>
              <div className="oriental-divider"></div>
            </div>
            
            <div className="health-content glass-card">
              <div className="health-text">
                <p className="highlight-text">
                  {userData.name}님의 건강 상태와 관리 방법에 대한 분석입니다.
                </p>
                <p>
                  {sajuResult.health || `${sajuResult.dominantElement} 기운이 강한 당신은 에너지가 넘치지만, 때로는 과도한 스트레스로 인해 소진될 수 있습니다. 정서적 안정을 위한 활동과 규칙적인 생활 습관을 유지하는 것이 중요합니다.`}
                </p>
                <p>
                  당신은 기본적으로 활력이 넘치고 회복력이 좋은 체질입니다. 하지만 감정적인 기복이 심할 때는 신체적으로도 영향을 받을 수 있으니 정서적 안정을 유지하는 것이 건강 관리의 핵심입니다. 특히 스트레스가 쌓이면 소화기 계통과 신경계에 문제가 생길 수 있으니 주의가 필요합니다.
                </p>
                <p>
                  규칙적인 운동과 충분한 수면, 균형 잡힌 식단은 기본적으로 중요합니다. 특히 명상, 요가, 자연 속 산책 등 마음을 안정시키는 활동이 당신의 건강에 큰 도움이 될 것입니다. 또한 창의적인 취미 활동을 통해 스트레스를 해소하는 것도 좋은 방법입니다.
                </p>
              </div>
              
              <div className="health-balance">
                <h3>오행 건강 균형</h3>
                <div className="health-chart-container">
                  <ResponsiveContainer width="100%" height={300}>
                    <RadarChart outerRadius={90} data={healthData}>
                      <PolarGrid />
                      <PolarAngleAxis dataKey="name" />
                      <PolarRadiusAxis domain={[0, 100]} />
                      <Radar name="현재 상태" dataKey="value" stroke="#00cec9" fill="#00cec9" fillOpacity={0.6} />
                      <Radar name="이상적 상태" dataKey="ideal" stroke="#6c5ce7" fill="#6c5ce7" fillOpacity={0.3} />
                      <Legend />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              <div className="health-focus-areas">
                <h3>주의해야 할 건강 부위</h3>
                <div className="body-map-container">
                  <div className="body-map">
                    <div className="body-part head" data-risk="medium">
                      <span className="part-name">머리</span>
                      <span className="risk-level">중간</span>
                    </div>
                    <div className="body-part chest" data-risk="low">
                      <span className="part-name">가슴</span>
                      <span className="risk-level">낮음</span>
                    </div>
                    <div className="body-part stomach" data-risk="high">
                      <span className="part-name">소화기</span>
                      <span className="risk-level">높음</span>
                    </div>
                    <div className="body-part back" data-risk="medium">
                      <span className="part-name">등/허리</span>
                      <span className="risk-level">중간</span>
                    </div>
                    <div className="body-part joints" data-risk="low">
                      <span className="part-name">관절</span>
                      <span className="risk-level">낮음</span>
                    </div>
                  </div>
                  <div className="body-map-legend">
                    <div className="risk-item high">
                      <span className="risk-dot"></span>
                      <span>높은 주의 필요</span>
                    </div>
                    <div className="risk-item medium">
                      <span className="risk-dot"></span>
                      <span>중간 주의 필요</span>
                    </div>
                    <div className="risk-item low">
                      <span className="risk-dot"></span>
                      <span>낮은 주의 필요</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="health-recommendations">
                <h3>건강 관리 추천</h3>
                <div className="recommendations-grid">
                  <div className="recommendation-item">
                    <h4>추천 운동</h4>
                    <ul>
                      <li>요가 (정서 안정에 도움)</li>
                      <li>수영 (전신 균형 발달)</li>
                      <li>가벼운 조깅 (심폐 기능 강화)</li>
                      <li>태극권 (에너지 균형)</li>
                    </ul>
                  </div>
                  <div className="recommendation-item">
                    <h4>식이 조언</h4>
                    <ul>
                      <li>항산화 식품 섭취 (베리류, 녹차)</li>
                      <li>소화를 돕는 음식 (생강, 마늘)</li>
                      <li>오메가-3 지방산 (생선, 견과류)</li>
                      <li>수분 충분히 섭취하기</li>
                    </ul>
                  </div>
                  <div className="recommendation-item">
                    <h4>정서 관리</h4>
                    <ul>
                      <li>명상 (하루 10-15분)</li>
                      <li>심호흡 연습</li>
                      <li>자연 속에서 시간 보내기</li>
                      <li>창의적 취미 활동</li>
                    </ul>
                  </div>
                  <div className="recommendation-item">
                    <h4>생활 습관</h4>
                    <ul>
                      <li>규칙적인 수면 패턴 유지</li>
                      <li>디지털 기기 사용 제한</li>
                      <li>정기적인 건강 검진</li>
                      <li>적절한 휴식과 회복 시간 확보</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="monthly-section" id="monthly" ref={monthlyRef}>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">월별 운세</h2>
              <div className="oriental-divider"></div>
            </div>
            
            <div className="monthly-content glass-card">
              <div className="monthly-overview">
                <p className="highlight-text">
                  {userData.name}님의 2024년 월별 운세 흐름입니다.
                </p>
                <p>
                  각 월별로 전반적인 운세와 중점적으로 관리해야 할 부분을 확인하세요. 특히 행운이 강한 달과 주의가 필요한 달을 파악하여 계획을 세우는 데 참고하시기 바랍니다.
                </p>
              </div>
              
              <div className="monthly-chart">
                <h3>2024년 월별 운세 그래프</h3>
                <div className="monthly-chart-container">
                  <ResponsiveContainer width="100%" height={400}>
                    <AreaChart data={monthlyForecast} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis domain={[0, 100]} />
                      <Tooltip />
                      <Legend />
                      <Area type="monotone" dataKey="overall" name="종합운" stroke="#6c5ce7" fill="#6c5ce7" fillOpacity={0.8} />
                      <Area type="monotone" dataKey="love" name="애정운" stroke="#fd79a8" fill="#fd79a8" fillOpacity={0.6} />
                      <Area type="monotone" dataKey="career" name="직업운" stroke="#0984e3" fill="#0984e3" fillOpacity={0.6} />
                      <Area type="monotone" dataKey="wealth" name="재물운" stroke="#00b894" fill="#00b894" fillOpacity={0.6} />
                      <Area type="monotone" dataKey="health" name="건강운" stroke="#00cec9" fill="#00cec9" fillOpacity={0.6} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              <div className="monthly-details">
                <h3>주요 월별 운세 해석</h3>
                <div className="monthly-accordion">
                  {monthlyDetails.map((month, index) => (
                    <div 
                      key={index} 
                      className={`monthly-item ${expandedSections[`month-${index}`] ? 'expanded' : ''}`}
                    >
                      <div 
                        className="monthly-header"
                        onClick={() => toggleSection(`month-${index}`)}
                      >
                        <h4>{month.month}</h4>
                        <div className="monthly-rating">
                          {[...Array(5)].map((_, i) => (
                            i < month.rating ? 
                              <FaStar key={i} className="star filled" /> : 
                              <FaRegStar key={i} className="star" />
                          ))}
                        </div>
                        {expandedSections[`month-${index}`] ? 
                          <FaChevronUp className="toggle-icon" /> : 
                          <FaChevronDown className="toggle-icon" />
                        }
                      </div>
                      <div className="monthly-content">
                        <p>{month.description}</p>
                        <div className="monthly-focus">
                          <div className="focus-item">
                            <h5>중점 관리 사항</h5>
                            <ul>
                              {month.focus.map((item, i) => (
                                <li key={i}>{item}</li>
                              ))}
                            </ul>
                          </div>
                          <div className="focus-item">
                            <h5>행운의 날</h5>
                            <p>{month.luckyDays.join(', ')}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="lucky-section" id="lucky" ref={luckyRef}>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">행운의 요소</h2>
              <div className="oriental-divider"></div>
            </div>
            
            <div className="lucky-content glass-card">
              <div className="lucky-text">
                <p className="highlight-text">
                  {userData.name}님의 행운을 높여줄 요소들입니다.
                </p>
                <p>
                  동양 철학에 따르면, 특정 방향, 색상, 숫자 등이 개인의 기운과 조화를 이루어 행운을 가져올 수 있습니다. 아래 정보를 참고하여 일상생활에 적용해 보세요.
                </p>
              </div>
              
              <div className="lucky-elements">
                <div className="lucky-element-item">
                  <h3>행운의 방향</h3>
                  <div className="direction-chart-container">
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={directionData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={80}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {directionData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="direction-info">
                    <p><strong>최고의 방향:</strong> 동쪽 (학업, 지식 증진)</p>
                    <p><strong>좋은 방향:</strong> 남동쪽 (재물운), 북동쪽 (인간관계)</p>
                    <p><strong>피해야 할 방향:</strong> 서쪽 (건강 악화 가능성)</p>
                  </div>
                </div>
                
                <div className="lucky-element-item">
                  <h3>행운의 색상</h3>
                  <div className="color-palette">
                    <div className="color-item" style={{ backgroundColor: '#6c5ce7' }}>
                      <span className="color-name">보라색</span>
                      <span className="color-meaning">창의성, 영감</span>
                    </div>
                    <div className="color-item" style={{ backgroundColor: '#0984e3' }}>
                      <span className="color-name">파란색</span>
                      <span className="color-meaning">지혜, 안정</span>
                    </div>
                    <div className="color-item" style={{ backgroundColor: '#00b894' }}>
                      <span className="color-name">청록색</span>
                      <span className="color-meaning">성장, 균형</span>
                    </div>
                    <div className="color-item" style={{ backgroundColor: '#fdcb6e' }}>
                      <span className="color-name">노란색</span>
                      <span className="color-meaning">풍요, 활력</span>
                    </div>
                  </div>
                  <p className="color-advice">
                    옷, 액세서리, 인테리어 등에 이러한 색상을 활용하면 행운의 기운을 높일 수 있습니다.
                  </p>
                </div>
                
                <div className="lucky-element-item">
                  <h3>행운의 날짜</h3>
                  <div className="lucky-days-chart">
                    <ResponsiveContainer width="100%" height={200}>
                      <BarChart data={luckyDays} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis domain={[0, 100]} />
                        <Tooltip />
                        <Bar dataKey="luck" fill="#fd79a8" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  <p className="lucky-days-info">
                    매월 3일, 8일, 13일, 17일, 23일, 27일은 특별히 행운이 강한 날입니다. 중요한 일이나 새로운 시작은 이 날짜에 맞추는 것이 좋습니다.
                  </p>
                </div>
                
                <div className="lucky-element-item">
                  <h3>행운의 숫자</h3>
                  <div className="lucky-numbers">
                    <div className="number-item">3</div>
                    <div className="number-item">7</div>
                    <div className="number-item">9</div>
                    <div className="number-item">13</div>
                    <div className="number-item">27</div>
                  </div>
                  <p className="lucky-numbers-info">
                    이 숫자들을 전화번호, 비밀번호, 중요한 선택 등에 활용하면 행운을 높일 수 있습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="advice-section" id="advice" ref={adviceRef}>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">종합 조언</h2>
              <div className="oriental-divider"></div>
            </div>
            
            <div className="advice-content glass-card">
              <div className="advice-text">
                <p className="highlight-text">
                  {userData.name}님을 위한 종합적인 조언과 지혜입니다.
                </p>
                <p>
                  {sajuResult.advice || `${sajuResult.dominantElement} 기운이 강한 당신에게 가장 중요한 것은 감정과 이성의 균형을 유지하는 것입니다. 창의성과 직관력은 당신의 큰 강점이지만, 현실적인 계획과 체계적인 실행이 뒷받침되어야 합니다.`}
                </p>
                <p>
                  당신의 사주를 종합적으로 분석한 결과, 창의성과 직관력이 뛰어난 반면 때로는 감정에 휘둘리거나 현실적인 판단이 부족할 수 있습니다. 이러한 특성을 이해하고 균형을 맞추는 것이 성공적인 삶을 위한 핵심입니다.
                </p>
                <p>
                  특히 2024년은 당신에게 새로운 시작과 성장의 기회가 많은 해입니다. 이 기회를 최대한 활용하기 위해서는 다음의 조언을 참고하세요.
                </p>
              </div>
              
              <div className="key-advice">
                <h3>핵심 조언</h3>
                <div className="advice-cards">
                  <div className="advice-card">
                    <h4>감정 관리</h4>
                    <p>감정에 휘둘리지 않도록 명상이나 마음챙김 연습을 통해 감정적 안정을 유지하세요.</p>
                  </div>
                  <div className="advice-card">
                    <h4>체계적 계획</h4>
                    <p>창의적인 아이디어를 실현하기 위해 구체적이고 체계적인 계획을 세우고 꾸준히 실행하세요.</p>
                  </div>
                  <div className="advice-card">
                    <h4>균형 잡힌 관계</h4>
                    <p>관계에 너무 의존하거나 희생하지 말고, 건강한 경계를 설정하여 균형 잡힌 관계를 유지하세요.</p>
                  </div>
                  <div className="advice-card">
                    <h4>자기 돌봄</h4>
                    <p>신체적, 정신적 건강을 위해 규칙적인 운동, 충분한 휴식, 건강한 식습관을 유지하세요.</p>
                  </div>
                </div>
              </div>
              
              <div className="wisdom-quotes">
                <h3>당신을 위한 동양의 지혜</h3>
                <div className="quote-container">
                  <blockquote>
                    "물이 너무 맑으면 물고기가 살지 않고, 사람이 너무 까다로우면 친구가 없다."
                    <cite>- 중국 속담</cite>
                  </blockquote>
                  <p className="quote-explanation">
                    완벽을 추구하기보다는 적절한 타협과 수용의 자세가 인간관계와 삶의 만족도를 높입니다.
                  </p>
                </div>
                <div className="quote-container">
                  <blockquote>
                    "천 리 길도 한 걸음부터."
                    <cite>- 노자</cite>
                  </blockquote>
                  <p className="quote-explanation">
                    큰 목표도 작은 실천의 누적으로 이루어집니다. 꾸준한 노력과 인내가 중요합니다.
                  </p>
                </div>
              </div>
              
              <div className="personal-mantra">
                <h3>당신을 위한 개인 만트라</h3>
                <div className="mantra-box">
                  "나는 창의성과 현실성의 균형을 이루며, 매일 한 걸음씩 성장합니다."
                </div>
                <p className="mantra-instruction">
                  매일 아침 이 만트라를 세 번 반복하며 하루를 시작하면 긍정적인 에너지와 집중력을 높일 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="talisman-section" id="talisman" ref={talismanRef}>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">맞춤형 행운 부적</h2>
              <div className="oriental-divider"></div>
            </div>
            
            <div className="talisman-content glass-card">
              <div className="talisman-text">
                <p className="highlight-text">
                  {userData.name}님만을 위한 특별한 행운 부적
                </p>
                <p>
                  수천 년 동안 동양에서는 부적이 행운을 가져오고 나쁜 기운을 막아준다고 믿어왔습니다. 
                  저희는 최신 AI 기술과 전통 부적 제작 원리를 결합하여 당신만을 위한 맞춤형 부적을 제작했습니다.
                </p>
                <p>
                  이 부적은 당신의 사주와 기운에 맞게 특별히 설계되었으며, 당신의 이름이 부적 문양에 포함되어 있습니다. 
                  부적을 소지하거나 중요한 공간에 배치하면 행운을 높이고 부정적인 에너지를 차단하는 데 도움이 됩니다.
                </p>
              </div>
              
              <div className="talisman-preview">
                <h3>맞춤형 부적 미리보기</h3>
                <div className="talisman-image-container">
                  {isLoading ? (
                    <div className="talisman-loading">
                      <p>부적 생성 중...</p>
                    </div>
                  ) : (
                    <>
                      <div className={`talisman-image ${showTalismanPreview ? '' : 'blurred'}`}>
                        {talismanImage && <img src={talismanImage} alt="맞춤형 부적" />}
                        {!showTalismanPreview && (
                          <div className="talisman-lock">
                            <FaLock />
                            <p>구매 후 확인 가능</p>
                          </div>
                        )}
                      </div>
                      {!showTalismanPreview && (
                        <button 
                          className="preview-button"
                          onClick={toggleTalismanPreview}
                        >
                          미리보기
                        </button>
                      )}
                    </>
                  )}
                </div>
              </div>
              
              <div className="talisman-benefits">
                <h3>부적의 효과</h3>
                <div className="benefits-grid">
                  <div className="benefit-item">
                    <h4>행운 증진</h4>
                    <p>당신의 사주에 맞는 기운을 강화하여 전반적인 행운을 높여줍니다.</p>
                  </div>
                  <div className="benefit-item">
                    <h4>보호 효과</h4>
                    <p>부정적인 에너지와 방해 요소로부터 당신을 보호합니다.</p>
                  </div>
                  <div className="benefit-item">
                    <h4>목표 달성</h4>
                    <p>당신의 목표와 의도에 집중할 수 있도록 도와줍니다.</p>
                  </div>
                  <div className="benefit-item">
                    <h4>에너지 균형</h4>
                    <p>오행의 균형을 맞추어 전체적인 조화를 이루도록 돕습니다.</p>
                  </div>
                </div>
              </div>
              
              <div className="talisman-testimonials">
                <h3>구매자 후기</h3>
                <div className="testimonial-slider">
                  <div className="testimonial-item">
                    <div className="testimonial-rating">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                    <p className="testimonial-text">
                      "부적을 구매한 후 정말 놀라운 변화가 있었어요. 면접에 합격하고 오랫동안 기다려온 승진도 이루어졌습니다!"
                    </p>
                    <p className="testimonial-author">- 김지현, 32세</p>
                  </div>
                  <div className="testimonial-item">
                    <div className="testimonial-rating">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                    <p className="testimonial-text">
                      "처음에는 반신반의했지만, 부적을 소지한 후 정말 긍정적인 변화를 경험했습니다. 특히 인간관계가 크게 개선되었어요."
                    </p>
                    <p className="testimonial-author">- 이승우, 28세</p>
                  </div>
                  <div className="testimonial-item">
                    <div className="testimonial-rating">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaRegStar />
                    </div>
                    <p className="testimonial-text">
                      "맞춤형 부적을 책상에 두고 있는데, 집중력이 향상되고 업무 효율이 높아진 것 같아요. 정말 만족합니다."
                    </p>
                    <p className="testimonial-author">- 박소연, 35세</p>
                  </div>
                </div>
              </div>
              
              <div className="talisman-purchase">
                <div className="purchase-info">
                  <div className="price-info">
                    <h3>맞춤형 행운 부적</h3>
                    <p className="price">39,900원</p>
                    <p className="price-include">
                      (배송비 포함, 고급 보관함 증정)
                    </p>
                  </div>
                  <ul className="purchase-benefits">
                    <li>100% 맞춤 제작</li>
                    <li>고품질 재료 사용</li>
                    <li>전문가 감수</li>
                    <li>3-5일 내 배송</li>
                    <li>30일 만족 보장</li>
                  </ul>
                </div>
                <button 
                  className="buy-button"
                  onClick={handleBuyTalisman}
                >
                  <FaShoppingCart /> 지금 구매하기
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <div className="result-navigation">
        <div className="container">
          <ul className="nav-list">
            <li className={activeSection === 'overview' ? 'active' : ''}>
              <button onClick={() => scrollToSection('overview')}>개요</button>
            </li>
            <li className={activeSection === 'personality' ? 'active' : ''}>
              <button onClick={() => scrollToSection('personality')}>성격</button>
            </li>
            <li className={activeSection === 'career' ? 'active' : ''}>
              <button onClick={() => scrollToSection('career')}>직업</button>
            </li>
            <li className={activeSection === 'relationship' ? 'active' : ''}>
              <button onClick={() => scrollToSection('relationship')}>인간관계</button>
            </li>
            <li className={activeSection === 'wealth' ? 'active' : ''}>
              <button onClick={() => scrollToSection('wealth')}>재물운</button>
            </li>
            <li className={activeSection === 'health' ? 'active' : ''}>
              <button onClick={() => scrollToSection('health')}>건강</button>
            </li>
            <li className={activeSection === 'monthly' ? 'active' : ''}>
              <button onClick={() => scrollToSection('monthly')}>월별운세</button>
            </li>
            <li className={activeSection === 'lucky' ? 'active' : ''}>
              <button onClick={() => scrollToSection('lucky')}>행운요소</button>
            </li>
            <li className={activeSection === 'advice' ? 'active' : ''}>
              <button onClick={() => scrollToSection('advice')}>조언</button>
            </li>
            <li className={activeSection === 'talisman' ? 'active' : ''}>
              <button onClick={() => scrollToSection('talisman')}>부적</button>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="share-button" onClick={handleShare}>
        <FaShare />
        <span className="share-tooltip">{copied ? '복사됨!' : '결과 공유'}</span>
      </div>
      
      <Footer />
    </div>
  );
}

// 차트 색상
const COLORS = ['#6c5ce7', '#00cec9', '#0984e3', '#00b894', '#fdcb6e', '#e84393', '#d63031', '#e17055'];

// 성격 특성 데이터
const personalityData = [
  { name: '창의성', value: 85 },
  { name: '직관력', value: 90 },
  { name: '감성', value: 80 },
  { name: '적응력', value: 75 },
  { name: '사교성', value: 70 },
  { name: '분석력', value: 60 },
  { name: '실행력', value: 55 },
  { name: '인내심', value: 50 }
];

// 직업 적합도 데이터
const careerCompatibility = [
  { name: '예술/창작', score: 90 },
  { name: '교육/상담', score: 85 },
  { name: '마케팅/PR', score: 80 },
  { name: '디자인', score: 75 },
  { name: '연구/개발', score: 60 },
  { name: '영업/서비스', score: 55 },
  { name: '행정/사무', score: 45 },
  { name: '금융/회계', score: 40 }
];

// 궁합 데이터
const compatibilityData = [
  { type: '금(金)', value: 90 },
  { type: '목(木)', value: 60 },
  { type: '수(水)', value: 40 },
  { type: '화(火)', value: 70 },
  { type: '토(土)', value: 85 }
];

// 재물운 예측 데이터
const wealthForecast = [
  { month: '1월', income: 65, investment: 50, overall: 60 },
  { month: '2월', income: 70, investment: 55, overall: 65 },
  { month: '3월', income: 75, investment: 60, overall: 70 },
  { month: '4월', income: 80, investment: 70, overall: 75 },
  { month: '5월', income: 85, investment: 75, overall: 80 },
  { month: '6월', income: 80, investment: 70, overall: 75 },
  { month: '7월', income: 75, investment: 65, overall: 70 },
  { month: '8월', income: 85, investment: 80, overall: 85 },
  { month: '9월', income: 90, investment: 85, overall: 90 },
  { month: '10월', income: 85, investment: 80, overall: 85 },
  { month: '11월', income: 80, investment: 75, overall: 80 },
  { month: '12월', income: 85, investment: 80, overall: 85 }
];

// 건강 상태 데이터
const healthData = [
  { name: '전반적 건강', value: 75 },
  { name: '정신 건강', value: 65 },
  { name: '면역력', value: 70 },
  { name: '에너지 수준', value: 80 },
  { name: '수면 품질', value: 60 }
];

// 월별 운세 데이터
const monthlyForecast = [
  { month: '1월', overall: 65, love: 70, career: 60, wealth: 65, health: 70 },
  { month: '2월', overall: 70, love: 75, career: 65, wealth: 70, health: 65 },
  { month: '3월', overall: 75, love: 80, career: 70, wealth: 75, health: 70 },
  { month: '4월', overall: 80, love: 85, career: 75, wealth: 80, health: 75 },
  { month: '5월', overall: 85, love: 90, career: 80, wealth: 85, health: 80 },
  { month: '6월', overall: 80, love: 85, career: 75, wealth: 80, health: 75 },
  { month: '7월', overall: 75, love: 80, career: 70, wealth: 75, health: 70 },
  { month: '8월', overall: 85, love: 90, career: 80, wealth: 85, health: 80 },
  { month: '9월', overall: 90, love: 95, career: 85, wealth: 90, health: 85 },
  { month: '10월', overall: 85, love: 90, career: 80, wealth: 85, health: 80 },
  { month: '11월', overall: 80, love: 85, career: 75, wealth: 80, health: 75 },
  { month: '12월', overall: 85, love: 90, career: 80, wealth: 85, health: 80 }
];

// 월별 상세 운세 데이터
const monthlyDetails = [
  {
    month: '1월',
    rating: 3,
    description: '새로운 시작의 달입니다. 계획을 세우고 목표를 설정하기에 좋은 시기입니다. 다만 너무 많은 것을 한꺼번에 시작하려 하지 마세요.',
    focus: ['장기 계획 수립', '건강 관리 루틴 시작', '인간관계 재정립'],
    luckyDays: ['3일', '17일', '27일']
  },
  {
    month: '2월',
    rating: 4,
    description: '인간관계에 집중하기 좋은 달입니다. 새로운 인연을 만나거나 기존 관계를 강화할 수 있는 기회가 많을 것입니다.',
    focus: ['네트워킹', '소통 능력 향상', '관계 회복'],
    luckyDays: ['8일', '13일', '23일']
  },
  {
    month: '3월',
    rating: 4,
    description: '창의력이 높아지는 시기입니다. 새로운 아이디어나 프로젝트를 시작하기에 좋은 달입니다. 직관을 믿고 행동하세요.',
    focus: ['창의적 프로젝트', '자기 표현', '새로운 취미 시작'],
    luckyDays: ['3일', '13일', '27일']
  },
  {
    month: '4월',
    rating: 5,
    description: '경력과 재정에 좋은 기회가 오는 달입니다. 승진이나 수입 증가의 가능성이 높습니다. 적극적으로 기회를 잡으세요.',
    focus: ['경력 개발', '재정 계획', '투자 검토'],
    luckyDays: ['7일', '17일', '23일']
  }
];

// 방향 데이터
const directionData = [
  { name: '동쪽', value: 35 },
  { name: '남동쪽', value: 25 },
  { name: '남쪽', value: 15 },
  { name: '남서쪽', value: 10 },
  { name: '서쪽', value: 5 },
  { name: '북서쪽', value: 10 },
  { name: '북쪽', value: 15 },
  { name: '북동쪽', value: 25 }
];

// 행운의 날 데이터
const luckyDays = [
  { date: '3일', luck: 90 },
  { date: '8일', luck: 80 },
  { date: '13일', luck: 85 },
  { date: '17일', luck: 85 },
  { date: '23일', luck: 95 },
  { date: '27일', luck: 70 }
];

export default ResultPage;