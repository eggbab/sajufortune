import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import '../styles/ProductDetail.css';
import { FaStar, FaRegStar, FaStarHalfAlt, FaShoppingCart, FaCheck } from 'react-icons/fa';

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('features');
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [activeFaq, setActiveFaq] = useState(null);
  const [inWishlist, setInWishlist] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
  
  // 제품 데이터 모음 (실제 프로젝트에서는 API에서 가져올 것입니다)
  const productsData = [
    {
      id: 1,
      title: '기본 사주 분석',
      price: 19900,
      originalPrice: 29900,
      discount: 33,
      description: '기본적인 사주팔자 분석과 올해의 운세 정보',
      detailedDescription: `
        기본 사주 분석 패키지는 사주팔자의 기본 구성 요소를 분석하여 당신의 타고난 기질과 올해의 운세를 알려드립니다.
        
        동양 철학에 기반한 수천 년의 지혜와 현대적 해석이 결합된 이 분석은 자신의 장단점을 이해하고 
        더 나은 선택을 할 수 있는 기초적인 통찰력을 제공합니다.
        
        이 패키지에는 당신의 오행 구성 분석, 올해의 운세, 기본 적성 분석이 포함되어 있으며, 
        텍스트 형태의 상세 리포트로 받아보실 수 있습니다.
      `,
      features: [
        {
          title: '기본 사주팔자 분석',
          description: '당신의 사주에 나타난 기본적인 기질과 성향을 분석합니다.',
          icon: 'fa-chart-pie'
        },
        {
          title: '오행 구성 분석',
          description: '당신의 사주에 나타난 오행(금,수,목,화,토)의 구성과 균형을 분석합니다.',
          icon: 'fa-balance-scale'
        },
        {
          title: '올해의 운세',
          description: '올해의 전반적인 운세와 주요 시기별 변화를 예측합니다.',
          icon: 'fa-calendar-alt'
        },
        {
          title: '적성 분석',
          description: '당신에게 적합한 직업 분야와 재능을 분석합니다.',
          icon: 'fa-user-graduate'
        },
        {
          title: '텍스트 리포트',
          description: '모든 분석 결과를 텍스트 형태의 리포트로 제공받을 수 있습니다.',
          icon: 'fa-file-alt'
        }
      ],
      categories: ['basic', 'popular'],
      image: '/assets/products/basic-saju.jpg',
      gallery: [
        '/assets/products/basic-saju-detail1.jpg',
        '/assets/products/basic-saju-detail2.jpg',
        '/assets/products/basic-saju-detail3.jpg'
      ],
      rating: 4.7,
      reviews: 128,
      recommended: false,
      faqs: [
        {
          question: '사주 분석 결과는 얼마나 정확한가요?',
          answer: '사주 분석은 동양철학의 오랜 지혜를 기반으로 하며, 개인의 타고난 기질과 잠재력, 인생의 흐름을 예측합니다. 그러나 모든 미래를 절대적으로 예측하는 것은 아니며, 약 70-80%의 정확도를 보인다고 할 수 있습니다. 결과는 참고사항으로 활용하시는 것이 좋습니다.'
        },
        {
          question: '결제 후 결과를 받아보는 데 얼마나 걸리나요?',
          answer: '기본 사주 분석 패키지는 자동화된 시스템을 통해 분석되어 결제 완료 후 약 10분 이내에 결과를 받아보실 수 있습니다. 이메일로 결과가 발송되며, 마이페이지에서도 확인 가능합니다.'
        },
        {
          question: '기본 패키지와 프리미엄 패키지의 차이점은 무엇인가요?',
          answer: '기본 패키지는 사주의 핵심 요소 분석과 올해의 운세만을 제공하며, 프리미엄 패키지는 더 상세한 분석과 10년 운세, 직업 및 연애/결혼 궁합, 음성 해설 등의 추가 서비스를 포함합니다. 더 깊이 있는 분석을 원하시면 프리미엄 패키지를 추천드립니다.'
        }
      ],
      reviewData: [
        {
          id: 1,
          author: '김지현',
          avatar: '/assets/avatars/reviewer1.jpg',
          date: '2023-08-15',
          rating: 5,
          content: '정말 놀랍게도 제 성격과 적성을 정확하게 짚어주었어요. 특히 올해의 운세 부분이 실제로 일어난 일들과 많이 일치해서 신기했습니다. 가격 대비 만족스러운 서비스였습니다.',
          likes: 24,
          images: []
        },
        {
          id: 2,
          author: '이준호',
          avatar: '/assets/avatars/reviewer2.jpg',
          date: '2023-07-22',
          rating: 4,
          content: '기본 패키지지만 충분히 많은 정보를 얻을 수 있었습니다. 제 성격과 맞는 부분이 많았고, 직업 적성 부분도 현재 제가 일하고 있는 분야와 일치해서 신뢰가 갔습니다. 별 5개 중 4개 드립니다.',
          likes: 15,
          images: ['/assets/reviews/review-image1.jpg']
        }
      ]
    },
    {
      id: 2,
      title: '프리미엄 사주 분석',
      price: 39900,
      originalPrice: 59900,
      discount: 33,
      description: '더 정확하고 자세한 사주 분석과 10년 운세 예측',
      categories: ['premium', 'popular'],
      image: '/assets/products/premium-saju.jpg',
      rating: 4.9,
      reviews: 86,
      recommended: true
    },
    {
      id: 3,
      title: 'VIP 사주 분석',
      price: 99900,
      originalPrice: 149900,
      discount: 33,
      description: '가장 상세한 분석과 전문가의 1:1 상담을 포함한 프리미엄 패키지',
      categories: ['vip'],
      image: '/assets/products/vip-saju.jpg',
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
      categories: ['couple', 'popular'],
      image: '/assets/products/couple-compatibility.jpg',
      rating: 4.8,
      reviews: 74,
      recommended: false
    }
  ];
  
  // 가격을 천 단위로 구분하여 형식화
  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };
  
  // 별점 렌더링
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    // 꽉 찬 별
    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`full-${i}`} className="fas fa-star"></i>);
    }
    
    // 반 별
    if (hasHalfStar) {
      stars.push(<i key="half" className="fas fa-star-half-alt"></i>);
    }
    
    // 빈 별
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`empty-${i}`} className="far fa-star"></i>);
    }
    
    return stars;
  };
  
  // 제품 데이터 및 관련 제품 로드
  useEffect(() => {
    // 실제 프로젝트에서는 API 호출로 대체
    const loadProduct = async () => {
      setLoading(true);
      
      try {
        // ID로 제품 찾기
        const productData = productsData.find(p => p.id === parseInt(id));
        
        if (productData) {
          setProduct(productData);
          
          // 관련 제품 찾기 (같은 카테고리의 다른 제품들)
          const related = productsData
            .filter(p => p.id !== parseInt(id) && p.categories.some(cat => productData.categories.includes(cat)))
            .slice(0, 3);
          
          setRelatedProducts(related);
        } else {
          // 제품을 찾지 못했을 경우 404 페이지로 리다이렉트
          navigate('/not-found');
        }
      } catch (error) {
        console.error('제품 로딩 오류:', error);
      } finally {
        setLoading(false);
      }
    };
    
    loadProduct();
    
    // 스크롤을 페이지 상단으로 이동
    window.scrollTo(0, 0);
  }, [id, navigate]);
  
  // FAQ 토글
  const toggleFaq = (index) => {
    if (activeFaq === index) {
      setActiveFaq(null);
    } else {
      setActiveFaq(index);
    }
  };
  
  // 위시리스트 토글
  const toggleWishlist = () => {
    setInWishlist(!inWishlist);
    // 실제 구현에서는 서버에 위시리스트 상태를 저장
  };
  
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  
  const handlePackageSelect = (pkg) => {
    setSelectedPackage(pkg);
  };
  
  const handleAddToCart = () => {
    // 실제로는 장바구니에 추가하는 로직
    // 지금은 바로 체크아웃 페이지로 이동
    navigate('/checkout', { 
      state: { 
        product: product,
        selectedPackage: selectedPackage 
      } 
    });
  };
  
  if (loading) {
    return (
      <div className="product-detail-page">
        <Header />
        <main className="product-detail-main">
          <div className="container">
            <div className="loading-container">
              <div className="loading-spinner"></div>
              <p>제품 정보를 불러오는 중입니다...</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="product-detail-page">
      <Header />
      
      <main className="product-detail-main">
        {product && (
          <>
            <section className="product-hero">
              <div className="product-hero-bg"></div>
              <div className="container">
                <div className="product-intro">
                  <motion.div 
                    className="product-image-container"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <img 
                      src={product.image || '/assets/product-placeholder.jpg'} 
                      alt={product.title} 
                      className="product-main-image"
                    />
                  </motion.div>
                  
                  <motion.div 
                    className="product-info"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <span className="product-category">{product.categories[0] === 'basic' ? '기본 패키지' : 
                      product.categories[0] === 'premium' ? '프리미엄 패키지' : 
                      product.categories[0] === 'vip' ? 'VIP 패키지' : 
                      product.categories[0] === 'couple' ? '커플 패키지' : 
                      product.categories[0] === 'business' ? '사업 패키지' : '사주 분석'}</span>
                    
                    <h1 className="product-title">{product.title}</h1>
                    
                    <div className="product-rating-container">
                      <div className="product-stars">
                        {renderStars(product.rating)}
                      </div>
                      <span className="product-rating-text">
                        {product.rating} 
                        <span className="product-rating-count">({product.reviews}개 리뷰)</span>
                      </span>
                    </div>
                    
                    <p className="product-description">{product.description}</p>
                    
                    <div className="product-badges">
                      <div className="product-badge">
                        <i className="fas fa-clock"></i> 10분 내 결과 확인
                      </div>
                      <div className="product-badge">
                        <i className="fas fa-sync-alt"></i> 30일 내 재분석 무료
                      </div>
                      <div className="product-badge">
                        <i className="fas fa-lock"></i> 100% 안전한 개인정보 보호
                      </div>
                    </div>
                    
                    <div className="product-price-container">
                      {product.discount > 0 && (
                        <span className="product-original-price">₩{formatPrice(product.originalPrice)}</span>
                      )}
                      <span className="product-current-price">₩{formatPrice(product.price)}</span>
                      {product.discount > 0 && (
                        <span className="product-discount">{product.discount}% 할인</span>
                      )}
                    </div>
                    
                    <div className="product-actions">
                      <Link to={`/checkout?product=${product.id}`} className="btn-buy-now">
                        <i className="fas fa-shopping-cart"></i> 지금 구매하기
                      </Link>
                      <button 
                        className={`btn-wishlist ${inWishlist ? 'active' : ''}`}
                        onClick={toggleWishlist}
                        aria-label={inWishlist ? '위시리스트에서 제거' : '위시리스트에 추가'}
                      >
                        <i className={inWishlist ? 'fas fa-heart' : 'far fa-heart'}></i>
                      </button>
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>
            
            <section className="product-content-section">
              <div className="container">
                <div className="content-tabs">
                  <div 
                    className={`content-tab ${activeTab === 'features' ? 'active' : ''}`}
                    onClick={() => handleTabChange('features')}
                  >
                    특징 및 장점
                  </div>
                  <div 
                    className={`content-tab ${activeTab === 'description' ? 'active' : ''}`}
                    onClick={() => handleTabChange('description')}
                  >
                    상세 설명
                  </div>
                  <div 
                    className={`content-tab ${activeTab === 'reviews' ? 'active' : ''}`}
                    onClick={() => handleTabChange('reviews')}
                  >
                    리뷰 ({product.reviews})
                  </div>
                  <div 
                    className={`content-tab ${activeTab === 'faq' ? 'active' : ''}`}
                    onClick={() => handleTabChange('faq')}
                  >
                    자주 묻는 질문
                  </div>
                </div>
                
                <div className={`tab-content ${activeTab === 'features' ? 'active' : ''}`}>
                  <div className="features-container">
                    {product.features && product.features.map((feature, index) => (
                      <motion.div 
                        key={index}
                        className="feature-item"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="feature-icon">
                          <i className={`fas ${feature.icon}`}></i>
                        </div>
                        <h3 className="feature-title">{feature.title}</h3>
                        <p className="feature-text">{feature.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                <div className={`tab-content ${activeTab === 'description' ? 'active' : ''}`}>
                  <div className="description-content">
                    {product.detailedDescription ? (
                      <p>{product.detailedDescription}</p>
                    ) : (
                      <>
                        <p>
                          {product.title}은(는) 동양의 전통적인 사주팔자 분석 방법을 기반으로 
                          당신의 타고난 성격, 재능, 적성, 그리고 인생의 흐름을 분석해드리는 서비스입니다.
                        </p>
                        
                        <h3>사주 분석이란?</h3>
                        <p>
                          사주 분석은 태어난 연, 월, 일, 시를 기준으로 형성된 에너지의 구성과 흐름을 
                          분석하여 개인의 타고난 기질과 잠재력, 인생의 방향성을 읽어내는 동양철학의 
                          지혜입니다. 수천 년간 이어져 온 이 방법은 현대에도 많은 사람들에게 인생의 
                          중요한 결정과 방향성을 제시하는 도구로 활용되고 있습니다.
                        </p>
                        
                        <img 
                          src="/assets/products/saju-detail-sample.jpg" 
                          alt="사주 분석 예시" 
                          className="description-image"
                        />
                        
                        <h3>이런 분들께 추천합니다</h3>
                        <ul>
                          <li>자신의 타고난 기질과 성향을 객관적으로 파악하고 싶은 분</li>
                          <li>진로와 직업에 대한 고민이 있는 분</li>
                          <li>인생의 중요한 결정을 앞두고 있는 분</li>
                          <li>자신의 장단점을 파악하여 더 나은 선택을 하고 싶은 분</li>
                          <li>올해의 운세와 주의해야 할 시기를 알고 싶은 분</li>
                        </ul>
                        
                        <div className="description-note">
                          <p>
                            <strong>참고:</strong> 사주 분석 결과는 절대적인 예언이 아닌 참고 자료로 
                            활용하시는 것이 좋습니다. 최종적인 결정과 선택은 항상 본인의 의지와 
                            판단에 따라 이루어져야 합니다.
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                </div>
                
                <div className={`tab-content ${activeTab === 'reviews' ? 'active' : ''}`}>
                  <div className="reviews-summary">
                    <div className="reviews-average">
                      <div className="average-rating">{product.rating}</div>
                      <div className="average-stars">
                        {renderStars(product.rating)}
                      </div>
                      <div className="reviews-count-text">총 {product.reviews}개 리뷰</div>
                    </div>
                    
                    <div className="reviews-breakdown">
                      <div className="breakdown-item">
                        <div className="breakdown-star">5점</div>
                        <div className="breakdown-progress">
                          <div className="breakdown-bar" style={{ width: '70%' }}></div>
                        </div>
                        <div className="breakdown-count">89</div>
                      </div>
                      <div className="breakdown-item">
                        <div className="breakdown-star">4점</div>
                        <div className="breakdown-progress">
                          <div className="breakdown-bar" style={{ width: '20%' }}></div>
                        </div>
                        <div className="breakdown-count">25</div>
                      </div>
                      <div className="breakdown-item">
                        <div className="breakdown-star">3점</div>
                        <div className="breakdown-progress">
                          <div className="breakdown-bar" style={{ width: '8%' }}></div>
                        </div>
                        <div className="breakdown-count">10</div>
                      </div>
                      <div className="breakdown-item">
                        <div className="breakdown-star">2점</div>
                        <div className="breakdown-progress">
                          <div className="breakdown-bar" style={{ width: '2%' }}></div>
                        </div>
                        <div className="breakdown-count">3</div>
                      </div>
                      <div className="breakdown-item">
                        <div className="breakdown-star">1점</div>
                        <div className="breakdown-progress">
                          <div className="breakdown-bar" style={{ width: '1%' }}></div>
                        </div>
                        <div className="breakdown-count">1</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="reviews-list">
                    {product.reviewData ? (
                      product.reviewData.map(review => (
                        <div key={review.id} className="review-item">
                          <div className="review-header">
                            <div className="review-avatar">
                              <img src={review.avatar || '/assets/default-avatar.jpg'} alt={review.author} />
                            </div>
                            <div className="review-info">
                              <div className="review-author">{review.author}</div>
                              <div className="review-date">{review.date}</div>
                            </div>
                          </div>
                          <div className="review-stars">
                            {renderStars(review.rating)}
                          </div>
                          <div className="review-content">
                            {review.content}
                          </div>
                          {review.images.length > 0 && (
                            <div className="review-images">
                              {review.images.map((image, idx) => (
                                <img 
                                  key={idx} 
                                  src={image} 
                                  alt={`리뷰 이미지 ${idx + 1}`} 
                                  className="review-image"
                                />
                              ))}
                            </div>
                          )}
                          <div className="review-likes">
                            <button className="review-like-btn">
                              <i className="far fa-thumbs-up"></i> 도움됨 ({review.likes})
                            </button>
                            <button className="review-like-btn">
                              <i className="far fa-comment"></i> 댓글
                            </button>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="no-reviews">
                        <p>아직 리뷰가 없습니다. 첫 번째 리뷰를 작성해보세요!</p>
                      </div>
                    )}
                  </div>
                  
                  <button className="write-review-btn">
                    <i className="fas fa-pen"></i> 리뷰 작성하기
                  </button>
                </div>
                
                <div className={`tab-content ${activeTab === 'faq' ? 'active' : ''}`}>
                  <div className="faq-accordion">
                    {product.faqs ? (
                      product.faqs.map((faq, index) => (
                        <div 
                          key={index} 
                          className={`faq-item ${activeFaq === index ? 'active' : ''}`}
                        >
                          <div 
                            className="faq-question" 
                            onClick={() => toggleFaq(index)}
                          >
                            <h3>{faq.question}</h3>
                            <div className="faq-toggle">
                              <i className="fas fa-chevron-down"></i>
                            </div>
                          </div>
                          <div className="faq-answer">
                            <p>{faq.answer}</p>
                          </div>
                        </div>
                      ))
                    ) : (
                      <>
                        <div 
                          className={`faq-item ${activeFaq === 0 ? 'active' : ''}`}
                        >
                          <div 
                            className="faq-question" 
                            onClick={() => toggleFaq(0)}
                          >
                            <h3>사주 분석 결과는 얼마나 정확한가요?</h3>
                            <div className="faq-toggle">
                              <i className="fas fa-chevron-down"></i>
                            </div>
                          </div>
                          <div className="faq-answer">
                            <p>사주 분석은 동양철학의 오랜 지혜를 기반으로 하며, 개인의 타고난 기질과 잠재력, 인생의 흐름을 예측합니다. 그러나 모든 미래를 절대적으로 예측하는 것은 아니며, 약 70-80%의 정확도를 보인다고 할 수 있습니다. 결과는 참고사항으로 활용하시는 것이 좋습니다.</p>
                          </div>
                        </div>
                        
                        <div 
                          className={`faq-item ${activeFaq === 1 ? 'active' : ''}`}
                        >
                          <div 
                            className="faq-question" 
                            onClick={() => toggleFaq(1)}
                          >
                            <h3>결제 후 결과를 받아보는 데 얼마나 걸리나요?</h3>
                            <div className="faq-toggle">
                              <i className="fas fa-chevron-down"></i>
                            </div>
                          </div>
                          <div className="faq-answer">
                            <p>결제 완료 후 기본 분석은 약 10분 이내, 프리미엄 분석은 약 30분 이내에 결과가 생성됩니다. VIP 패키지의 경우 전문가의 추가 분석이 포함되어 있어 최대 48시간이 소요될 수 있습니다. 모든 결과는 이메일로 발송되며, 마이페이지에서도 언제든지 확인하실 수 있습니다.</p>
                          </div>
                        </div>
                        
                        <div 
                          className={`faq-item ${activeFaq === 2 ? 'active' : ''}`}
                        >
                          <div 
                            className="faq-question" 
                            onClick={() => toggleFaq(2)}
                          >
                            <h3>태어난 시간을 정확히 모르는 경우에도 분석이 가능한가요?</h3>
                            <div className="faq-toggle">
                              <i className="fas fa-chevron-down"></i>
                            </div>
                          </div>
                          <div className="faq-answer">
                            <p>네, 가능합니다. 태어난 시간을 모르는 경우 '시간 미상'으로 선택하시면 시간을 제외한 연월일 데이터만으로 분석을 진행합니다. 다만, 시간을 알 수 없는 경우 일부 세부적인 분석(사주의 시주 분석 등)이 제한될 수 있으며, 약 90%의 정보를 제공받으실 수 있습니다.</p>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </section>
            
            {relatedProducts.length > 0 && (
              <section className="related-products-section">
                <div className="container">
                  <div className="related-products-header">
                    <h2>함께 보면 좋은 서비스</h2>
                    <p>이 상품을 본 고객들이 함께 구매한 서비스입니다</p>
                  </div>
                  
                  <div className="related-products-grid">
                    {relatedProducts.map((relatedProduct) => (
                      <ProductCard 
                        key={relatedProduct.id}
                        product={relatedProduct}
                      />
                    ))}
                  </div>
                </div>
              </section>
            )}
          </>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetailPage; 