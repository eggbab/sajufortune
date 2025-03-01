import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import TestimonialSlider from '../components/TestimonialSlider';

const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [fadeProducts, setFadeProducts] = useState(false);
  const [showComparison, setShowComparison] = useState(false);

  // 제품 데이터
  const products = [
    {
      id: 1,
      title: '기본 사주 분석',
      price: 19900,
      originalPrice: 29900,
      discount: 33,
      description: '기본적인 사주팔자 분석과 올해의 운세 정보',
      categories: ['basic', 'popular'],
      imageStyle: { backgroundColor: '#8e44ad' },
      rating: 4.7,
      reviews: 128,
      recommended: true,
      features: ['오행 분석', '기본 사주해석', '올해 운세', '적성 분석']
    },
    {
      id: 2,
      title: '프리미엄 사주 분석',
      price: 39900,
      originalPrice: 59900,
      discount: 33,
      description: '더 정확하고 자세한 사주 분석과 10년 운세 예측',
      categories: ['premium', 'popular'],
      imageStyle: { backgroundColor: '#3498db' },
      rating: 4.9,
      reviews: 86,
      recommended: false,
      features: ['오행 상세 분석', '10년 대운 분석', '적성 심층 분석', '궁합 분석']
    },
    {
      id: 3,
      title: 'VIP 사주 분석',
      price: 99900,
      originalPrice: 149900,
      discount: 33,
      description: '가장 상세한 분석과 전문가의 1:1 상담을 포함한 프리미엄 패키지',
      features: [
        '평생 사주 분석',
        '오행 맞춤 개운법',
        '월별 상세 운세',
        '전문가 1:1 상담 (30분)',
        '맞춤형 개운법 제공',
        '인생 로드맵 설계',
        '프리미엄 PDF 리포트',
        '주요 날짜 알림 서비스'
      ],
      categories: ['vip'],
      imageStyle: { backgroundColor: '#e74c3c' },
      rating: 5.0,
      reviews: 42,
      recommended: false
    },
    {
      id: 4,
      title: '커플 궁합 분석',
      price: 29900,
      originalPrice: 39900,
      discount: 25,
      description: '두 사람의 사주를 분석하여 궁합과 관계의 발전 방향을 제시',
      features: [
        '두 사람의 기본 사주 분석',
        '궁합 점수 및 해석',
        '관계 발전 방향',
        '잠재적 갈등 요소',
        '상생과 상극 분석',
        '데이트 추천일'
      ],
      categories: ['couple', 'popular'],
      imageStyle: { backgroundColor: '#f39c12' },
      rating: 4.8,
      reviews: 74,
      recommended: false
    },
    {
      id: 5,
      title: '사업운 분석',
      price: 49900,
      originalPrice: 69900,
      discount: 28,
      description: '사업과 재물운에 특화된 상세 분석과 조언',
      features: [
        '재물운 상세 분석',
        '사업 성공 요소',
        '투자 적기 예측',
        '재물 증식 개운법',
        '사업 파트너 궁합',
        '5년 사업 전망'
      ],
      categories: ['business'],
      imageStyle: { backgroundColor: '#2ecc71' },
      rating: 4.6,
      reviews: 53,
      recommended: false
    },
    {
      id: 6,
      title: '자녀 성장 운세',
      price: 34900,
      originalPrice: 49900,
      discount: 30,
      description: '자녀의 잠재력과 성장 방향을 사주를 통해 분석',
      features: [
        '아이의 타고난 성향',
        '학업 적성 분석',
        '재능 발굴 가이드',
        '부모 자녀 관계 분석',
        '건강 주의사항',
        '성장 가이드라인'
      ],
      categories: ['family'],
      imageStyle: { backgroundColor: '#9b59b6' },
      rating: 4.9,
      reviews: 62,
      recommended: false
    }
  ];
  
  // 카테고리 필터링
  useEffect(() => {
    const filterProducts = () => {
      setFadeProducts(true);
      
      setTimeout(() => {
        if (activeCategory === 'all') {
          setVisibleProducts(products);
        } else {
          setVisibleProducts(
            products.filter(product => product.categories.includes(activeCategory))
          );
        }
        setFadeProducts(false);
      }, 300);
    };
    
    filterProducts();
  }, [activeCategory]);
  
  // 초기 로드 시 전체 제품 표시
  useEffect(() => {
    setVisibleProducts(products);
  }, []);
  
  // 추천사 데이터
  const testimonials = [
    {
      id: 1,
      name: '김지연',
      age: 28,
      avatarStyle: { backgroundColor: '#e74c3c' },
      text: '프리미엄 사주 분석을 통해 저의 진로에 대한 확신을 얻을 수 있었어요. 특히 직업 적성 분석이 정말 도움이 되었습니다.',
      productName: '프리미엄 사주 분석',
      rating: 5
    },
    {
      id: 2,
      name: '박준호',
      age: 34,
      avatarStyle: { backgroundColor: '#3498db' },
      text: 'VIP 사주 분석의 전문가 상담이 정말 인상적이었습니다. 제 사주에 대한 깊은 통찰력을 바탕으로 구체적인 조언을 해주셨어요.',
      productName: 'VIP 사주 분석',
      rating: 5
    },
    {
      id: 3,
      name: '이미나',
      age: 31,
      avatarStyle: { backgroundColor: '#2ecc71' },
      text: '커플 궁합 분석을 통해 남자친구와의 관계를 더 깊이 이해하게 되었어요. 우리의 강점과 주의해야 할 점을 알게 되어 더 건강한 관계를 유지할 수 있게 되었습니다.',
      productName: '커플 궁합 분석',
      rating: 4
    }
  ];
  
  // 자주 묻는 질문 데이터
  const faqs = [
    {
      question: '사주 분석은 얼마나 정확한가요?',
      answer: '사주 분석은 동양철학의 오랜 지혜를 기반으로 하며, 개인의 타고난 기질과 잠재력, 인생의 흐름을 상당히 정확하게 예측합니다. 다만, 모든 미래를 절대적으로 예측하는 것은 아니며, 선택과 노력에 따라 운명은 바뀔 수 있습니다.'
    },
    {
      question: '결제 후 얼마나 빨리 결과를 받을 수 있나요?',
      answer: '기본 및 프리미엄 사주 분석은 결제 후 24시간 이내에 제공됩니다. VIP 패키지의 경우, 전문가 분석이 포함되어 있어 최대 48시간이 소요될 수 있습니다. 자세한 내용은 결제 시 안내됩니다.'
    },
    {
      question: '패키지 간의 주요 차이점은 무엇인가요?',
      answer: '기본 패키지는 간단한 사주 정보와 올해의 운세를 제공합니다. 프리미엄 패키지는 더 상세한 분석과 10년 운세, 다양한 영역별 분석이 포함됩니다. VIP 패키지는 전문가의 1:1 상담과 평생 사주 정보, 맞춤형 개운법 등이 추가됩니다. 패키지 비교표를 통해 더 자세한 차이점을 확인하실 수 있습니다.'
    },
    {
      question: '환불 정책은 어떻게 되나요?',
      answer: '결제 후 7일 이내, 서비스를 이용하기 전이라면 100% 환불이 가능합니다. 서비스 이용 후에는 콘텐츠의 특성상 환불이 제한될 수 있으며, 부분 환불 또는 포인트 적립으로 보상해 드립니다. 자세한 내용은 환불 정책 페이지에서 확인하실 수 있습니다.'
    }
  ];
  
  return (
    <div className="products-page">
      <Header />
      
      <main className="products-main">
        <section className="products-hero">
          <div className="container">
            <motion.div 
              className="hero-content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1>당신을 위한 맞춤형 사주 분석</h1>
              <p>고대 동양철학의 지혜와 현대 과학의 만남, 당신의 운명을 더 깊이 이해하세요</p>
            </motion.div>
          </div>
          <div className="hero-background">
            <div className="hero-overlay"></div>
          </div>
        </section>
        
        <section className="products-list-section">
          <div className="container">
            <div className="section-header">
              <h2>사주포춘 서비스</h2>
              <p>당신에게 맞는 사주 분석 서비스를 선택하세요</p>
            </div>
            
            <div className="category-filter">
              <button 
                className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
                onClick={() => setActiveCategory('all')}
              >
                전체
              </button>
              <button 
                className={`filter-btn ${activeCategory === 'popular' ? 'active' : ''}`}
                onClick={() => setActiveCategory('popular')}
              >
                인기 상품
              </button>
              <button 
                className={`filter-btn ${activeCategory === 'basic' ? 'active' : ''}`}
                onClick={() => setActiveCategory('basic')}
              >
                기본 분석
              </button>
              <button 
                className={`filter-btn ${activeCategory === 'premium' ? 'active' : ''}`}
                onClick={() => setActiveCategory('premium')}
              >
                프리미엄
              </button>
              <button 
                className={`filter-btn ${activeCategory === 'couple' ? 'active' : ''}`}
                onClick={() => setActiveCategory('couple')}
              >
                커플 궁합
              </button>
              <button 
                className={`filter-btn ${activeCategory === 'business' ? 'active' : ''}`}
                onClick={() => setActiveCategory('business')}
              >
                사업/재물
              </button>
            </div>
            
            <div className="products-container">
              <AnimatePresence mode="wait">
                <motion.div 
                  className={`products-grid ${fadeProducts ? 'fade' : ''}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {visibleProducts.map((product) => (
                    <ProductCard 
                      key={product.id}
                      product={product}
                    />
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>
        
        <section className="packages-comparison">
          <div className="container">
            <motion.div 
              className="section-header"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2>패키지 비교</h2>
              <p>각 패키지의 특징을 비교하여 최적의 선택을 하세요</p>
            </motion.div>
            
            <div className="toggle-comparison">
              <button 
                className="toggle-btn"
                onClick={() => setShowComparison(!showComparison)}
              >
                {showComparison ? '비교표 접기' : '패키지 비교표 보기'} 
                <i className={`fas fa-chevron-${showComparison ? 'up' : 'down'}`}></i>
              </button>
            </div>
            
            <AnimatePresence>
              {showComparison && (
                <motion.div 
                  className="comparison-table-container"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="comparison-table">
                    <table>
                      <thead>
                        <tr>
                          <th>기능</th>
                          <th>기본 패키지</th>
                          <th className="highlight">프리미엄 패키지</th>
                          <th>VIP 패키지</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>사주팔자 분석</td>
                          <td>기본</td>
                          <td className="highlight">상세</td>
                          <td>최상세</td>
                        </tr>
                        <tr>
                          <td>운세 예측 기간</td>
                          <td>1년</td>
                          <td className="highlight">10년</td>
                          <td>평생</td>
                        </tr>
                        <tr>
                          <td>영역별 분석</td>
                          <td>기본 4개 영역</td>
                          <td className="highlight">상세 8개 영역</td>
                          <td>최상세 12개 영역</td>
                        </tr>
                        <tr>
                          <td>전문가 상담</td>
                          <td><i className="fas fa-times"></i></td>
                          <td className="highlight"><i className="fas fa-times"></i></td>
                          <td><i className="fas fa-check"></i> (30분)</td>
                        </tr>
                        <tr>
                          <td>오행 맞춤 개운법</td>
                          <td><i className="fas fa-times"></i></td>
                          <td className="highlight">기본</td>
                          <td>맞춤형</td>
                        </tr>
                        <tr>
                          <td>리포트 형식</td>
                          <td>텍스트</td>
                          <td className="highlight">PDF + 음성해설</td>
                          <td>프리미엄 PDF + 음성해설</td>
                        </tr>
                        <tr>
                          <td>업데이트</td>
                          <td>없음</td>
                          <td className="highlight">연 1회</td>
                          <td>연 4회</td>
                        </tr>
                        <tr>
                          <td>주요 날짜 알림</td>
                          <td><i className="fas fa-times"></i></td>
                          <td className="highlight"><i className="fas fa-times"></i></td>
                          <td><i className="fas fa-check"></i></td>
                        </tr>
                        <tr>
                          <td>가격</td>
                          <td>₩19,900</td>
                          <td className="highlight">₩39,900</td>
                          <td>₩99,900</td>
                        </tr>
                        <tr>
                          <td></td>
                          <td>
                            <Link to="/products/basic" className="btn-outline">
                              선택하기
                            </Link>
                          </td>
                          <td className="highlight">
                            <Link to="/products/premium" className="btn-primary">
                              선택하기
                            </Link>
                          </td>
                          <td>
                            <Link to="/products/vip" className="btn-outline">
                              선택하기
                            </Link>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>
        
        <section className="process-section">
          <div className="container">
            <div className="section-header">
              <h2>서비스 이용 과정</h2>
              <p>간단한 4단계로 당신의 사주를 확인하세요</p>
            </div>
            
            <div className="process-steps">
              <div className="step">
                <div className="step-icon">
                  <i className="fas fa-user-plus"></i>
                </div>
                <div className="step-number">1</div>
                <h3>정보 입력</h3>
                <p>생년월일, 태어난 시간 등 기본 정보를 입력합니다.</p>
              </div>
              
              <div className="step-arrow">
                <i className="fas fa-long-arrow-alt-right"></i>
              </div>
              
              <div className="step">
                <div className="step-icon">
                  <i className="fas fa-shopping-cart"></i>
                </div>
                <div className="step-number">2</div>
                <h3>패키지 선택</h3>
                <p>당신에게 맞는 사주 분석 패키지를 선택합니다.</p>
              </div>
              
              <div className="step-arrow">
                <i className="fas fa-long-arrow-alt-right"></i>
              </div>
              
              <div className="step">
                <div className="step-icon">
                  <i className="fas fa-credit-card"></i>
                </div>
                <div className="step-number">3</div>
                <h3>결제 완료</h3>
                <p>안전한 결제 시스템으로 쉽고 빠르게 결제합니다.</p>
              </div>
              
              <div className="step-arrow">
                <i className="fas fa-long-arrow-alt-right"></i>
              </div>
              
              <div className="step">
                <div className="step-icon">
                  <i className="fas fa-file-alt"></i>
                </div>
                <div className="step-number">4</div>
                <h3>결과 확인</h3>
                <p>상세한 사주 분석 결과를 확인하고 인사이트를 얻으세요.</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="testimonials-section">
          <div className="container">
            <div className="section-header">
              <h2>고객 후기</h2>
              <p>사주포춘 서비스를 경험한 고객들의 이야기</p>
            </div>
            
            <TestimonialSlider testimonials={testimonials} />
          </div>
        </section>
        
        <section className="faq-section">
          <div className="container">
            <div className="section-header">
              <h2>자주 묻는 질문</h2>
              <p>궁금한 점을 확인해보세요</p>
            </div>
            
            <div className="faq-container">
              {faqs.map((faq, index) => (
                <motion.div 
                  key={index}
                  className="faq-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3><i className="fas fa-question-circle"></i> {faq.question}</h3>
                  <p>{faq.answer}</p>
                </motion.div>
              ))}
              
              <div className="faq-more-link">
                <Link to="/faq">더 많은 질문과 답변 보기 <i className="fas fa-arrow-right"></i></Link>
              </div>
            </div>
          </div>
        </section>
        
        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2>지금 바로 당신의 운명을 알아보세요</h2>
              <p>사주포춘과 함께하는 인생의 새로운 인사이트</p>
              <Link to="/analysis" className="cta-button">
                <i className="fas fa-chart-line"></i> 무료 사주 분석 시작하기
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductsPage; 