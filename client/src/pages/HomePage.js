import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import TestimonialCard from '../components/TestimonialCard';
import FeatureCard from '../components/FeatureCard';
import { useInView } from 'react-intersection-observer';
import ThemeToggle from '../components/ThemeToggle';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const HomePage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [birthDate, setBirthDate] = useState('');
  const [birthTime, setBirthTime] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  // 시간에 따른 인사말 변경
  const [greeting, setGreeting] = useState('');
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
      setGreeting('좋은 아침이에요');
    } else if (hour >= 12 && hour < 18) {
      setGreeting('좋은 오후에요');
    } else {
      setGreeting('편안한 밤이에요');
    }
  }, []);

  // 스크롤 감지
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 폼 유효성 검사
  useEffect(() => {
    if (birthDate && birthTime) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [birthDate, birthTime]);

  // 섹션별 애니메이션 적용을 위한 InView 설정
  const [featuresRef, featuresInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const [howItWorksRef, howItWorksInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const [testimonialsRef, testimonialsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [pricingRef, pricingInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // 자동 회전하는 캐러셀
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // 행성 애니메이션
  const planetVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        delay: 0.2 
      } 
    }
  };

  // 특징 데이터
  const features = [
    { 
      icon: 'fa-chart-pie', 
      title: '정확한 사주 분석', 
      description: '수천 년의 동양철학을 기반으로 한 정확한 사주팔자 분석 서비스를 제공합니다.' 
    },
    { 
      icon: 'fa-heart', 
      title: '연애운 분석', 
      description: '당신의 연애와 결혼 운세를 분석하여 미래의 인연에 대한 인사이트를 제공합니다.' 
    },
    { 
      icon: 'fa-coins', 
      title: '재물운 분석', 
      description: '부와 재물에 관한 운세를 분석하여 경제적 결정에 도움이 되는 정보를 제공합니다.' 
    },
    { 
      icon: 'fa-briefcase', 
      title: '직업운 분석', 
      description: '당신에게 맞는 직업과 진로 방향에 대한 통찰력을 제공합니다.' 
    }
  ];

  // 작동 방식 데이터
  const howItWorks = [
    { icon: 'fa-calendar-alt', title: '생년월일 입력', description: '정확한 태어난 날짜와 시간을 입력하세요.' },
    { icon: 'fa-calculator', title: '사주 계산', description: '동양 철학의 원리에 따라 사주팔자를 계산합니다.' },
    { icon: 'fa-chart-line', title: '운세 분석', description: '개인 맞춤형 운세와 잠재력을 분석합니다.' },
    { icon: 'fa-file-alt', title: '상세 리포트', description: '생애 전반에 대한 상세 리포트를 받아보세요.' }
  ];

  // 추천사 데이터
  const testimonials = [
    {
      id: 1,
      name: '김지연',
      age: 28,
      image: '/assets/testimonial1.jpg',
      text: '사주포춘의 분석이 정확해서 깜짝 놀랐어요. 특히 제 성격과 적성에 대한 부분이 정말 맞아떨어졌습니다. 진로 결정에 큰 도움이 되었어요!',
      stars: 5
    },
    {
      id: 2,
      name: '박준호',
      age: 34,
      image: '/assets/testimonial2.jpg',
      text: '주변 친구들의 추천으로 알게 되었는데, 정말 후회하지 않아요. 제 약점과 강점을 정확히 짚어주어서 자기 개발에 큰 도움이 되었습니다.',
      stars: 5
    },
    {
      id: 3,
      name: '이미나',
      age: 31,
      image: '/assets/testimonial3.jpg',
      text: '처음엔 반신반의했지만, 받아본 운세 분석이 너무 정확해서 주변에 계속 추천하고 있어요. 특히 연애운 분석이 많은 도움이 되었습니다.',
      stars: 4
    }
  ];

  // 가격 플랜 데이터
  const plans = [
    {
      title: '기본 패키지',
      price: '19,900',
      features: [
        '기본 사주팔자 분석',
        '올해의 운세',
        '적성 분석',
        '텍스트 리포트'
      ],
      recommended: false,
      link: '/products/basic'
    },
    {
      title: '프리미엄 패키지',
      price: '39,900',
      features: [
        '전체 사주팔자 분석',
        '10년 운세 예측',
        '연애/결혼 궁합',
        '직업 적성 분석',
        '음성 해설 제공',
        'PDF 상세 리포트'
      ],
      recommended: true,
      link: '/products/premium'
    },
    {
      title: 'VIP 패키지',
      price: '99,900',
      features: [
        '평생 사주 분석',
        '월별 상세 운세',
        '전문가 1:1 상담 (30분)',
        '맞춤형 개운법 제공',
        '인생 로드맵 설계',
        '프리미엄 PDF 리포트'
      ],
      recommended: false,
      link: '/products/vip'
    }
  ];

  // 파티클 설정
  const particlesOptions = {
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#8e44ad"
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000"
        },
      },
      opacity: {
        value: 0.3,
        random: true,
      },
      size: {
        value: 3,
        random: true,
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#9b59b6",
        opacity: 0.2,
        width: 1
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab"
        },
        onclick: {
          enable: true,
          mode: "push"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 140,
          line_linked: {
            opacity: 1
          }
        },
        push: {
          particles_nb: 4
        }
      }
    },
    retina_detect: true
  };

  return (
    <div className={`home-page ${isScrolled ? 'scrolled' : ''}`}>
      <div className="particles-container">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particlesOptions}
        />
      </div>
      
      <Header isScrolled={isScrolled} />
      
      <main className="home-main">
        {/* 히어로 섹션 - 생년월일 입력 폼과 행성 애니메이션 */}
        <section className="hero-section">
          <div className="cosmos-background">
            <div className="stars"></div>
            <div className="twinkling"></div>
          </div>
          
          <div className="container">
            <div className="hero-grid">
              <motion.div 
                className="hero-content"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.span 
                  className="greeting"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  {greeting}
                </motion.span>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.7 }}
                >
                  당신의 <span className="highlight">운명</span>을<br />
                  <span className="gradient-text">알려드립니다</span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.7 }}
                >
                  사주풀이로 알아보는 나의 잠재력과 미래의 길
                </motion.p>
                <motion.div 
                  className="birth-form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.7 }}
                >
                  <div className="form-group">
                    <label htmlFor="birthDate">생년월일</label>
                    <input 
                      type="date" 
                      id="birthDate" 
                      value={birthDate}
                      onChange={(e) => setBirthDate(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="birthTime">태어난 시간</label>
                    <input 
                      type="time" 
                      id="birthTime" 
                      value={birthTime}
                      onChange={(e) => setBirthTime(e.target.value)}
                      required
                    />
                  </div>
                  <Link 
                    to={isFormValid ? "/analysis" : "#"} 
                    className={`cta-button ${!isFormValid ? 'disabled' : ''}`}
                    onClick={(e) => !isFormValid && e.preventDefault()}
                  >
                    <i className="fas fa-chart-line"></i> 무료 사주 보기
                  </Link>
                </motion.div>
                <motion.div 
                  className="hero-trust"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.7 }}
                >
                  <div className="trust-item">
                    <i className="fas fa-users"></i>
                    <span>30만 명 이상 분석</span>
                  </div>
                  <div className="trust-item">
                    <i className="fas fa-star"></i>
                    <span>평균 4.8점 리뷰</span>
                  </div>
                  <div className="trust-item">
                    <i className="fas fa-shield-alt"></i>
                    <span>개인정보 안전보호</span>
                  </div>
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="hero-visual"
                variants={planetVariants}
                initial="hidden"
                animate="visible"
              >
                <div className="planet-container">
                  <div className="planet planet-main"></div>
                  <div className="planet planet-secondary"></div>
                  <div className="orbit">
                    <div className="moon"></div>
                  </div>
                  <div className="shooting-star"></div>
                  <div className="shooting-star shooting-star-2"></div>
                </div>
              </motion.div>
            </div>
          </div>
          
          <div className="hero-scroll-indicator">
            <div className="scroll-arrow">
              <i className="fas fa-chevron-down"></i>
            </div>
            <span>스크롤하여 더 알아보기</span>
          </div>
        </section>
        
        {/* 신뢰 지표 섹션 */}
        <section className="trust-section">
          <div className="container">
            <div className="trust-indicators">
              <div className="trust-item">
                <div className="trust-icon">
                  <i className="fas fa-calendar-check"></i>
                </div>
                <div className="trust-text">
                  <h3>10년+</h3>
                  <p>서비스 경력</p>
                </div>
              </div>
              <div className="trust-item">
                <div className="trust-icon">
                  <i className="fas fa-users"></i>
                </div>
                <div className="trust-text">
                  <h3>300,000+</h3>
                  <p>사용자 분석</p>
                </div>
              </div>
              <div className="trust-item">
                <div className="trust-icon">
                  <i className="fas fa-star"></i>
                </div>
                <div className="trust-text">
                  <h3>4.8/5</h3>
                  <p>평균 평점</p>
                </div>
              </div>
              <div className="trust-item">
                <div className="trust-icon">
                  <i className="fas fa-globe-asia"></i>
                </div>
                <div className="trust-text">
                  <h3>전통 철학</h3>
                  <p>동양 사주학 기반</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* 특징 섹션 */}
        <section 
          ref={featuresRef} 
          className="features-section"
        >
          <div className="container">
            <motion.div 
              className="section-header"
              initial={{ opacity: 0, y: 30 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7 }}
            >
              <h2>다양한 운세 분석</h2>
              <p>당신의 삶을 더 깊이 이해하기 위한 전문적인 사주 분석</p>
            </motion.div>
            
            <div className="features-grid">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="feature-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.7, delay: index * 0.1 + 0.2 }}
                >
                  <FeatureCard feature={feature} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* 작동 방식 섹션 */}
        <section 
          ref={howItWorksRef}
          className="how-it-works-section"
        >
          <div className="container">
            <motion.div 
              className="section-header"
              initial={{ opacity: 0, y: 30 }}
              animate={howItWorksInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7 }}
            >
              <h2>어떻게 작동하나요?</h2>
              <p>4단계의 간단한 과정으로 당신의 운명을 알아보세요</p>
            </motion.div>
            
            <div className="steps-container">
              {howItWorks.map((step, index) => (
                <motion.div 
                  key={index} 
                  className="step-item"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={howItWorksInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  transition={{ duration: 0.7, delay: index * 0.15 }}
                >
                  <div className="step-number">{index + 1}</div>
                  <div className="step-icon">
                    <i className={`fas ${step.icon}`}></i>
                  </div>
                  <div className="step-content">
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </motion.div>
              ))}
              <div className="steps-connector"></div>
            </div>
          </div>
        </section>
        
        {/* 추천사 섹션 */}
        <section 
          ref={testimonialsRef}
          className="testimonials-section"
        >
          <div className="container">
            <motion.div 
              className="section-header"
              initial={{ opacity: 0, y: 30 }}
              animate={testimonialsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7 }}
            >
              <h2>고객 후기</h2>
              <p>사주포춘을 경험한 고객들의 이야기</p>
            </motion.div>
            
            <div className="testimonials-carousel">
              <AnimatePresence mode="wait">
                <motion.div 
                  className="testimonial-card-container"
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                >
                  <TestimonialCard testimonial={testimonials[currentTestimonial]} />
                </motion.div>
              </AnimatePresence>
              
              <div className="testimonial-dots">
                {testimonials.map((_, index) => (
                  <button 
                    key={index}
                    className={`dot ${index === currentTestimonial ? 'active' : ''}`}
                    onClick={() => setCurrentTestimonial(index)}
                    aria-label={`Testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* 가격 섹션 */}
        <section 
          ref={pricingRef}
          className="pricing-section"
        >
          <div className="container">
            <motion.div 
              className="section-header"
              initial={{ opacity: 0, y: 30 }}
              animate={pricingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7 }}
            >
              <h2>패키지 옵션</h2>
              <p>당신에게 맞는 사주 분석 서비스를 선택하세요</p>
            </motion.div>
            
            <div className="pricing-grid">
              {plans.map((plan, index) => (
                <motion.div 
                  key={index}
                  className={`pricing-card ${plan.recommended ? 'recommended' : ''}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={pricingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                >
                  {plan.recommended && <div className="recommended-badge">인기</div>}
                  <div className="pricing-header">
                    <h3>{plan.title}</h3>
                    <div className="price">
                      <span className="currency">₩</span>
                      <span className="amount">{plan.price}</span>
                    </div>
                  </div>
                  <div className="pricing-features">
                    <ul>
                      {plan.features.map((feature, fidx) => (
                        <li key={fidx}>
                          <i className="fas fa-check"></i> {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pricing-footer">
                    <Link to={plan.link} className={`pricing-button ${plan.recommended ? 'primary' : 'secondary'}`}>
                      선택하기
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* FAQ 섹션 */}
        <section className="faq-section">
          <div className="container">
            <div className="section-header">
              <h2>자주 묻는 질문</h2>
              <p>궁금한 점을 확인해보세요</p>
            </div>
            
            <div className="faq-grid">
              <div className="faq-item">
                <h3>사주 분석은 얼마나 정확한가요?</h3>
                <p>사주 분석은 동양 철학의 오랜 지혜를 기반으로 합니다. 수천 년간 축적된 경험과 지식에 근거하여 개인의 성격, 잠재력, 인생의 흐름을 상당히 정확하게 예측합니다.</p>
              </div>
              <div className="faq-item">
                <h3>정확한 출생 시간이 중요한가요?</h3>
                <p>네, 정확한 사주 분석을 위해서는 출생 시간이 매우 중요합니다. 시간에 따라 사주의 세부 요소가 달라지므로, 가능한 정확한 시간을 입력해주세요.</p>
              </div>
              <div className="faq-item">
                <h3>결제 후 얼마나 빨리 결과를 받을 수 있나요?</h3>
                <p>기본 분석은 결제 직후 즉시 확인 가능합니다. 프리미엄 및 VIP 패키지의 상세 분석은 24시간 이내에 제공됩니다.</p>
              </div>
              <div className="faq-item">
                <h3>환불 정책은 어떻게 되나요?</h3>
                <p>결제 후 7일 이내, 서비스 이용 전이라면 100% 환불이 가능합니다. 서비스 이용 후에는 부분 환불 또는 포인트 적립으로 보상해 드립니다.</p>
              </div>
            </div>
            
            <div className="faq-more">
              <Link to="/faq" className="text-button">
                더 많은 질문 보기 <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </section>
        
        {/* CTA 섹션 */}
        <section className="cta-section">
          <div className="container">
            <motion.div 
              className="cta-content"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2>지금 바로 당신의 운명을 알아보세요</h2>
              <p>첫 기본 분석은 무료로 제공됩니다</p>
              <div className="cta-buttons">
                <Link to="/analysis" className="cta-button primary">
                  <i className="fas fa-chart-line"></i> 무료 사주 보기
                </Link>
                <Link to="/about" className="cta-button secondary">
                  <i className="fas fa-info-circle"></i> 서비스 더 알아보기
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
      
      {/* 쿠키 동의 모달 */}
      <AnimatePresence>
        {showModal && (
          <motion.div 
            className="cookie-modal"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
          >
            <div className="cookie-content">
              <h3>쿠키 사용 안내</h3>
              <p>저희 사이트는 최상의 경험을 제공하기 위해 쿠키를 사용합니다. 계속 사용하시면 쿠키 사용에 동의하는 것으로 간주됩니다.</p>
              <div className="cookie-buttons">
                <button className="cookie-btn accept" onClick={() => setShowModal(false)}>
                  동의합니다
                </button>
                <button className="cookie-btn settings" onClick={() => setShowModal(false)}>
                  설정 변경
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* 테마 토글 버튼 */}
      <div className="theme-toggle-container">
        <ThemeToggle />
      </div>
      
      {/* 플로팅 액션 버튼 */}
      <div className="floating-action-button">
        <button className="fab">
          <i className="fas fa-comment-alt"></i>
        </button>
      </div>
    </div>
  );
};

export default HomePage;