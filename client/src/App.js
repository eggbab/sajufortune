import React, { useState, useEffect } from 'react';
import { useHistory, Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import Analysis from './pages/Analysis';
import Result from './pages/Result';
import Detail from './pages/Detail';
import Products from './pages/Products';
import Login from './pages/Login';
import Register from './pages/Register';
import OtherResultView from './pages/OtherResultView';
import RefundPolicy from './pages/RefundPolicy';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';

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
      // 실제 구현에서는 이 부분을 백엔드 API 호출로 대체
      setTimeout(() => {
        const mockData = {
          dominantElement: "화",
          personalityTraits: ["열정적", "창의적", "활동적", "직관적", "낙관적"],
          elementChart: {
            wood: 20,
            fire: 42,
            earth: 15,
            metal: 13,
            water: 10
          },
          pillars: {
            year: "경오",
            month: "정미",
            day: "병인",
            hour: "갑자"
          },
          radarData: [
            { trait: "창의성", value: 85 },
            { trait: "리더십", value: 75 },
            { trait: "감수성", value: 90 },
            { trait: "인내력", value: 65 },
            { trait: "협동성", value: 70 },
            { trait: "결단력", value: 80 }
          ],
          monthlyForecast: [
            { month: "1월", content: "새로운 시작에 적합한 달입니다.", rating: 4 },
            { month: "2월", content: "대인관계에 주의가 필요합니다.", rating: 3 },
            { month: "3월", content: "재물운이 상승하는 시기입니다.", rating: 5 },
            { month: "4월", content: "건강관리에 신경쓰세요.", rating: 4 },
            { month: "5월", content: "중요한 결정을 내리기 좋은 시기입니다.", rating: 3 },
            { month: "6월", content: "여행이나 이동에 좋은 기운이 있습니다.", rating: 4 },
            { month: "7월", content: "집중력이 높아지는 시기입니다.", rating: 5 },
            { month: "8월", content: "가족 관계가 중요해지는 달입니다.", rating: 4 },
            { month: "9월", content: "학습과 성장에 좋은 시기입니다.", rating: 5 },
            { month: "10월", content: "창의적인 활동에 유리합니다.", rating: 4 },
            { month: "11월", content: "차분히 계획을 세우세요.", rating: 3 },
            { month: "12월", content: "한 해를 정리하고 휴식하기 좋은 시기입니다.", rating: 4 }
          ],
          luckyColors: ["파란색", "보라색", "금색"],
          luckyNumbers: [3, 7, 9],
          luckyDirections: ["동쪽", "남쪽"],
          compatibility: {
            best: ["쥐띠", "뱀띠"],
            good: ["원숭이띠", "닭띠"],
            neutral: ["토끼띠", "말띠", "개띠"],
            challenging: ["호랑이띠", "양띠"]
          },
          personality: "열정적이고 활동적인 성격입니다. 창의력이 뛰어나며 새로운 아이디어를 내는 것을 좋아합니다.",
          career: "창의적인 분야나 리더십을 발휘할 수 있는 직업이 적합합니다.",
          relationship: "열정적인 연애 스타일을 가지고 있으며, 파트너에게 헌신적입니다.",
          wealth: "재물운은 양호하나 충동적인 소비에 주의해야 합니다.",
          health: "활동적인 성향으로 건강한 편이나 과로에 주의하세요.",
          yearlyForecast: [
            { year: "2025", content: "새로운 시작과 성장의 해입니다. 특히 3~5월이 중요한 기회의 시기가 될 것입니다.", rating: 8 },
            { year: "2026", content: "안정을 찾고 기반을 다지는 해입니다. 꾸준한 노력이 결실을 맺을 것입니다.", rating: 7 },
            { year: "2027", content: "도약과 확장의 해로, 새로운 도전을 시도하기 좋은 시기입니다.", rating: 9 }
          ]
        };
        
        // 로컬 스토리지에 데이터 저장
        localStorage.setItem('userData', JSON.stringify(formData));
        localStorage.setItem('sajuResult', JSON.stringify(mockData));
        
        // 결과 페이지로 이동
        history.push('/result');
        
        setLoading(false);
      }, 3000); // 로딩 효과를 위한 지연
    } catch (error) {
      console.error('분석 중 오류 발생:', error);
      setError('분석 중 오류가 발생했습니다. 다시 시도해 주세요.');
      setLoading(false);
    }
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    if (sectionId === 'saju-form') {
      setActiveSection('saju-form');
    }
  };

  const handleSampleAnalyzeClick = () => {
    scrollToSection('saju-form');
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/analysis" element={<Analysis />} />
        <Route path="/result" element={<Result />} />
        <Route path="/product/:id" element={<Detail />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/shared/:id" element={<OtherResultView />} />
        <Route path="/refund" element={<RefundPolicy />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App; 