import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/AboutPage.css';

const AboutPage = () => {
  // 전문가 프로필 데이터
  const experts = [
    {
      id: 1,
      name: '김성현',
      title: '사주 전문가',
      image: '/assets/team/expert1.jpg',
      description: '20년 이상의 사주 연구 경력을 가진 전문가로, 동양철학과 현대심리학을 접목한 분석을 제공합니다. 여러 언론과 방송에 출연하며 사주에 대한 지식을 나누고 있습니다.',
      education: ['홍익대학교 동양철학 박사', '한국전통문화대학교 명리학 연구과정'],
      expertise: ['사주팔자 분석', '궁합', '인생 로드맵']
    },
    {
      id: 2,
      name: '이지원',
      title: '분석 알고리즘 개발자',
      image: '/assets/team/expert2.jpg',
      description: '인공지능과 데이터 분석 전문가로, 전통 사주학을 현대적 알고리즘으로 구현하는 작업을 담당하고 있습니다. 정확하고 객관적인 분석 시스템 개발에 주력하고 있습니다.',
      education: ['서울대학교 컴퓨터공학 석사', 'MIT 인공지능 연수'],
      expertise: ['AI 기반 분석 알고리즘', '데이터 마이닝', '패턴 인식']
    },
    {
      id: 3,
      name: '박태영',
      title: '심리 상담사',
      image: '/assets/team/expert3.jpg',
      description: '심리학 배경을 가진 상담 전문가로, 사주 분석 결과를 바탕으로 실질적인 인생 상담을 제공합니다. 사주와 심리학의 접점을 연구하며 보다 실용적인 조언에 중점을 둡니다.',
      education: ['연세대학교 심리학 석사', '국제공인 심리상담사 자격증'],
      expertise: ['심리 상담', '진로 지도', '인간관계 컨설팅']
    }
  ];
  
  // 회사 연혁 데이터
  const history = [
    {
      year: 2023,
      events: [
        '누적 사용자 100만 명 돌파',
        'VIP 맞춤형 상담 서비스 론칭',
        '모바일 앱 출시'
      ]
    },
    {
      year: 2022,
      events: [
        '사주포춘 법인 설립',
        '인공지능 기반 분석 알고리즘 개발 완료',
        '시리즈 A 투자 유치'
      ]
    },
    {
      year: 2021,
      events: [
        '사주포춘 베타 서비스 시작',
        '전문가 자문단 구성',
        '초기 투자 유치'
      ]
    },
    {
      year: 2020,
      events: [
        '프로젝트 시작',
        '창업팀 구성',
        '사주 분석 알고리즘 연구 시작'
      ]
    }
  ];
  
  return (
    <div className="about-page">
      <Header />
      
      <main>
        <section className="hero-section">
          <div className="container">
            <motion.div 
              className="hero-content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1>사주포춘 소개</h1>
              <p>동양철학의 지혜와 현대 기술의 만남</p>
            </motion.div>
          </div>
          <div className="hero-overlay"></div>
        </section>
        
        <section className="vision-section">
          <div className="container">
            <div className="section-header">
              <h2>우리의 비전</h2>
              <div className="underline"></div>
            </div>
            
            <motion.div 
              className="vision-content"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="vision-image">
                <img src="/assets/about/vision.jpg" alt="사주포춘 비전" />
              </div>
              
              <div className="vision-text">
                <h3>운명을 통찰하는 지혜를 모든 이에게</h3>
                <p>
                  사주포춘은 수천 년 동안 이어져 온 동양철학의 지혜를 현대 기술과 결합하여, 
                  누구나 쉽고 정확하게 자신의 운명을 이해할 수 있도록 돕는 것을 목표로 합니다.
                </p>
                <p>
                  우리는 단순한 점술이 아닌, 과학적 접근과 심리학적 통찰을 바탕으로 
                  개인의 타고난 성향과 잠재력을 분석하고, 더 나은 선택을 할 수 있는 
                  통찰력을 제공합니다.
                </p>
                <div className="vision-stats">
                  <div className="stat-item">
                    <div className="stat-number">100만+</div>
                    <div className="stat-label">누적 사용자</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">96%</div>
                    <div className="stat-label">고객 만족도</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">25명</div>
                    <div className="stat-label">전문가 팀</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        
        <section className="history-section">
          <div className="container">
            <div className="section-header">
              <h2>회사 연혁</h2>
              <div className="underline"></div>
            </div>
            
            <div className="timeline">
              {history.map((item, index) => (
                <motion.div 
                  key={item.year}
                  className="timeline-item"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="timeline-badge">{item.year}</div>
                  <div className="timeline-content">
                    <ul>
                      {item.events.map((event, eventIndex) => (
                        <li key={eventIndex}>{event}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="team-section">
          <div className="container">
            <div className="section-header">
              <h2>전문가 팀</h2>
              <div className="underline"></div>
              <p>사주포춘의 분석과 서비스를 이끄는 전문가들을 소개합니다</p>
            </div>
            
            <div className="experts-grid">
              {experts.map((expert, index) => (
                <motion.div 
                  key={expert.id}
                  className="expert-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <div className="expert-image">
                    <img src={expert.image || '/assets/default-avatar.jpg'} alt={expert.name} />
                  </div>
                  <div className="expert-info">
                    <h3>{expert.name}</h3>
                    <div className="expert-title">{expert.title}</div>
                    <p className="expert-description">{expert.description}</p>
                    
                    <div className="expert-details">
                      <div className="detail-group">
                        <h4>학력</h4>
                        <ul>
                          {expert.education.map((edu, eduIndex) => (
                            <li key={eduIndex}>{edu}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="detail-group">
                        <h4>전문 분야</h4>
                        <ul>
                          {expert.expertise.map((exp, expIndex) => (
                            <li key={expIndex}>{exp}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="values-section">
          <div className="container">
            <div className="section-header">
              <h2>핵심 가치</h2>
              <div className="underline"></div>
            </div>
            
            <div className="values-grid">
              <motion.div 
                className="value-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="value-icon">
                  <i className="fas fa-balance-scale"></i>
                </div>
                <h3>정확성</h3>
                <p>
                  과학적 접근과 체계적인 검증을 통해 
                  최대한 정확한 분석을 제공합니다.
                </p>
              </motion.div>
              
              <motion.div 
                className="value-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="value-icon">
                  <i className="fas fa-lightbulb"></i>
                </div>
                <h3>통찰력</h3>
                <p>
                  단순한 예측이 아닌, 삶의 진정한 
                  의미와 방향을 찾는 통찰력을 제공합니다.
                </p>
              </motion.div>
              
              <motion.div 
                className="value-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="value-icon">
                  <i className="fas fa-lock"></i>
                </div>
                <h3>신뢰성</h3>
                <p>
                  개인정보 보호와 윤리적 분석 원칙을 
                  철저히 준수합니다.
                </p>
              </motion.div>
              
              <motion.div 
                className="value-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="value-icon">
                  <i className="fas fa-heart"></i>
                </div>
                <h3>진정성</h3>
                <p>
                  고객의 진정한 행복과 성장을 위한 
                  진심어린 조언을 제공합니다.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        
        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                지금 당신의 사주를 확인해보세요
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                당신의 타고난 기질과 잠재력, 인생의 방향성을 발견할 수 있습니다
              </motion.p>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <a href="/analysis" className="cta-button">
                  <i className="fas fa-star"></i> 무료 사주 분석 시작하기
                </a>
              </motion.div>
            </div>
          </div>
          <div className="cta-overlay"></div>
        </section>
      </main>
      
      <Footer />
      
      <style jsx>{`
        .about-page {
          background-color: var(--bg-color);
          color: var(--text-color);
        }
        
        .hero-section {
          position: relative;
          height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
          background-image: linear-gradient(135deg, rgba(142, 68, 173, 0.9), rgba(41, 128, 185, 0.85)), linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5));
          background-size: cover;
          background-position: center;
        }
        
        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to right, rgba(142, 68, 173, 0.8), rgba(41, 128, 185, 0.8));
        }
        
        .hero-content {
          position: relative;
          z-index: 1;
        }
        
        .hero-content h1 {
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 15px;
        }
        
        .hero-content p {
          font-size: 1.5rem;
          opacity: 0.9;
        }
        
        .section-header {
          text-align: center;
          margin-bottom: 50px;
        }
        
        .section-header h2 {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--text-color);
          margin-bottom: 15px;
        }
        
        .section-header p {
          font-size: 1.1rem;
          color: var(--text-secondary);
          max-width: 700px;
          margin: 0 auto;
        }
        
        .underline {
          width: 80px;
          height: 4px;
          background: linear-gradient(to right, #8e44ad, #3498db);
          margin: 0 auto;
        }
        
        .vision-section,
        .history-section,
        .team-section,
        .values-section {
          padding: 80px 0;
        }
        
        .vision-content {
          display: flex;
          align-items: center;
          gap: 50px;
          flex-wrap: wrap;
        }
        
        .vision-image {
          flex: 1;
          min-width: 300px;
        }
        
        .vision-image img {
          width: 100%;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }
        
        .vision-text {
          flex: 1;
          min-width: 300px;
        }
        
        .vision-text h3 {
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 20px;
          color: var(--text-color);
        }
        
        .vision-text p {
          font-size: 1.1rem;
          line-height: 1.7;
          color: var(--text-secondary);
          margin-bottom: 20px;
        }
        
        .vision-stats {
          display: flex;
          gap: 30px;
          margin-top: 30px;
        }
        
        .stat-item {
          text-align: center;
        }
        
        .stat-number {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--primary-color);
          margin-bottom: 5px;
        }
        
        .stat-label {
          font-size: 1rem;
          color: var(--text-tertiary);
        }
        
        .timeline {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
        }
        
        .timeline::before {
          content: '';
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 2px;
          background-color: var(--border-color);
          transform: translateX(-50%);
        }
        
        .timeline-item {
          position: relative;
          margin-bottom: 50px;
        }
        
        .timeline-badge {
          position: absolute;
          left: 50%;
          top: 0;
          width: 70px;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: var(--primary-color);
          color: white;
          font-size: 1.3rem;
          font-weight: 700;
          border-radius: 50%;
          transform: translateX(-50%);
          z-index: 1;
        }
        
        .timeline-content {
          width: calc(50% - 50px);
          padding: 25px;
          background-color: var(--card-bg);
          border-radius: 15px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
        }
        
        .timeline-item:nth-child(odd) .timeline-content {
          margin-left: auto;
        }
        
        .timeline-content ul {
          margin: 0;
          padding-left: 20px;
        }
        
        .timeline-content li {
          font-size: 1rem;
          color: var(--text-secondary);
          margin-bottom: 8px;
        }
        
        .experts-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 30px;
        }
        
        .expert-card {
          background-color: var(--card-bg);
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
        }
        
        .expert-image {
          height: 250px;
          overflow: hidden;
        }
        
        .expert-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        
        .expert-card:hover .expert-image img {
          transform: scale(1.05);
        }
        
        .expert-info {
          padding: 25px;
        }
        
        .expert-info h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-color);
          margin-bottom: 5px;
        }
        
        .expert-title {
          font-size: 1rem;
          color: var(--primary-color);
          font-weight: 500;
          margin-bottom: 15px;
        }
        
        .expert-description {
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--text-secondary);
          margin-bottom: 20px;
        }
        
        .expert-details {
          border-top: 1px solid var(--border-color);
          padding-top: 15px;
        }
        
        .detail-group {
          margin-bottom: 15px;
        }
        
        .detail-group h4 {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-color);
          margin-bottom: 8px;
        }
        
        .detail-group ul {
          margin: 0;
          padding-left: 20px;
        }
        
        .detail-group li {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin-bottom: 5px;
        }
        
        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 30px;
        }
        
        .value-card {
          background-color: var(--card-bg);
          border-radius: 15px;
          padding: 30px;
          text-align: center;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
        }
        
        .value-card:hover {
          transform: translateY(-10px);
        }
        
        .value-icon {
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: var(--primary-light);
          color: var(--primary-color);
          font-size: 30px;
          border-radius: 50%;
          margin: 0 auto 20px;
        }
        
        .value-card h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-color);
          margin-bottom: 15px;
        }
        
        .value-card p {
          font-size: 1rem;
          line-height: 1.6;
          color: var(--text-secondary);
        }
        
        .cta-section {
          position: relative;
          padding: 80px 0;
          text-align: center;
          color: white;
          margin-top: 50px;
        }
        
        .cta-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to right, rgba(142, 68, 173, 0.9), rgba(41, 128, 185, 0.9));
          z-index: -1;
        }
        
        .cta-content h2 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 15px;
        }
        
        .cta-content p {
          font-size: 1.2rem;
          opacity: 0.9;
          margin-bottom: 30px;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 15px 35px;
          background-color: white;
          color: var(--primary-color);
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        
        .cta-button:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }
        
        @media (max-width: 992px) {
          .vision-content {
            flex-direction: column;
          }
          
          .timeline::before {
            left: 30px;
          }
          
          .timeline-badge {
            left: 30px;
          }
          
          .timeline-content {
            width: calc(100% - 80px);
            margin-left: 80px !important;
          }
        }
        
        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 2.5rem;
          }
          
          .hero-content p {
            font-size: 1.2rem;
          }
          
          .section-header h2 {
            font-size: 2rem;
          }
          
          .vision-text h3 {
            font-size: 1.5rem;
          }
          
          .vision-stats {
            flex-direction: column;
            gap: 20px;
          }
          
          .cta-content h2 {
            font-size: 2rem;
          }
        }
        
        @media (max-width: 576px) {
          .hero-section {
            height: 300px;
          }
          
          .hero-content h1 {
            font-size: 2rem;
          }
          
          .hero-content p {
            font-size: 1rem;
          }
          
          .vision-section,
          .history-section,
          .team-section,
          .values-section {
            padding: 50px 0;
          }
          
          .section-header h2 {
            font-size: 1.8rem;
          }
          
          .timeline-badge {
            width: 50px;
            height: 50px;
            font-size: 1rem;
          }
          
          .timeline-content {
            padding: 15px;
          }
          
          .cta-button {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};

export default AboutPage; 