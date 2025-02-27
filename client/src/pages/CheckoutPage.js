import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Checkout.css';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const productId = queryParams.get('product');
  
  const [step, setStep] = useState(1);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [couponCode, setCouponCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');
  
  // 폼 상태
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    birthdate: '',
    birthtime: '',
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
    agreeTerms: false
  });
  
  // 에러 상태
  const [errors, setErrors] = useState({});
  
  // 제품 데이터 (실제 프로젝트에서는 API에서 가져올 것입니다)
  const productsData = [
    {
      id: 1,
      title: '기본 사주 분석',
      price: 19900,
      originalPrice: 29900,
      discount: 33,
      description: '기본적인 사주팔자 분석과 올해의 운세 정보',
      features: [
        '기본 사주팔자 분석',
        '오행 구성 분석',
        '올해의 운세',
        '적성 분석',
        '텍스트 리포트'
      ],
      categories: ['basic', 'popular'],
      image: '/assets/products/basic-saju.jpg',
      rating: 4.7,
      reviews: 128,
      recommended: false
    },
    {
      id: 2,
      title: '프리미엄 사주 분석',
      price: 39900,
      originalPrice: 59900,
      discount: 33,
      description: '더 정확하고 자세한 사주 분석과 10년 운세 예측',
      features: [
        '전체 사주팔자 분석',
        '오행 균형 상세 분석',
        '10년 운세 예측',
        '연애/결혼 궁합',
        '직업 적성 분석',
        '음성 해설 제공',
        'PDF 상세 리포트'
      ],
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
      features: [
        '두 사람의 기본 사주 분석',
        '궁합 점수 및 해석',
        '관계 발전 방향',
        '잠재적 갈등 요소',
        '상생과 상극 분석',
        '데이트 추천일'
      ],
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
  
  // 제품 데이터 로드
  useEffect(() => {
    // 실제 프로젝트에서는 API 호출로 대체
    const loadProduct = async () => {
      setLoading(true);
      
      try {
        if (productId) {
          // ID로 제품 찾기
          const foundProduct = productsData.find(p => p.id === parseInt(productId));
          
          if (foundProduct) {
            setProduct(foundProduct);
          } else {
            // 제품을 찾지 못했을 경우 상품 페이지로 리다이렉트
            navigate('/products');
          }
        } else {
          // 제품 ID가 없을 경우 상품 페이지로 리다이렉트
          navigate('/products');
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
  }, [productId, navigate]);
  
  // 폼 필드 변경 핸들러
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
    
    // 입력 시 해당 필드의 에러 메시지 삭제
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };
  
  // 결제 방법 변경 핸들러
  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };
  
  // 쿠폰 적용 핸들러
  const handleApplyCoupon = () => {
    if (couponCode.trim() === 'WELCOME10') {
      setDiscountApplied(true);
    } else {
      alert('유효하지 않은 쿠폰 코드입니다.');
    }
    setCouponCode('');
  };
  
  // 폼 유효성 검사
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = '이름을 입력해주세요';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = '이메일을 입력해주세요';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = '유효한 이메일 주소를 입력해주세요';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = '전화번호를 입력해주세요';
    } else if (!/^\d{10,11}$/.test(formData.phone.replace(/-/g, ''))) {
      newErrors.phone = '유효한 전화번호를 입력해주세요';
    }
    
    if (!formData.birthdate.trim()) {
      newErrors.birthdate = '생년월일을 입력해주세요';
    }
    
    if (step === 2) {
      if (paymentMethod === 'card') {
        if (!formData.cardNumber.trim()) {
          newErrors.cardNumber = '카드 번호를 입력해주세요';
        } else if (!/^\d{16}$/.test(formData.cardNumber.replace(/\s/g, ''))) {
          newErrors.cardNumber = '유효한 카드 번호를 입력해주세요';
        }
        
        if (!formData.cardName.trim()) {
          newErrors.cardName = '카드 소유자 이름을 입력해주세요';
        }
        
        if (!formData.expiryDate.trim()) {
          newErrors.expiryDate = '유효 기간을 입력해주세요';
        } else if (!/^\d{2}\/\d{2}$/.test(formData.expiryDate)) {
          newErrors.expiryDate = 'MM/YY 형식으로 입력해주세요';
        }
        
        if (!formData.cvv.trim()) {
          newErrors.cvv = 'CVV를 입력해주세요';
        } else if (!/^\d{3,4}$/.test(formData.cvv)) {
          newErrors.cvv = '유효한 CVV를 입력해주세요';
        }
      }
      
      if (!formData.agreeTerms) {
        newErrors.agreeTerms = '약관에 동의해주세요';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // 다음 단계로 이동
  const handleContinue = () => {
    if (validateForm()) {
      if (step === 1) {
        setStep(2);
        window.scrollTo(0, 0);
      } else if (step === 2) {
        // 결제 처리 (실제 프로젝트에서는 결제 API 연동)
        processPayment();
      }
    }
  };
  
  // 이전 단계로 이동
  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
      window.scrollTo(0, 0);
    } else {
      navigate(`/products/${productId}`);
    }
  };
  
  // 결제 처리 (시뮬레이션)
  const processPayment = () => {
    setLoading(true);
    
    // 결제 처리 시뮬레이션 (2초 후 완료)
    setTimeout(() => {
      // 주문 번호 생성
      const randomOrderNumber = 'ORD-' + Date.now().toString().substring(5) + '-' + Math.floor(Math.random() * 1000);
      setOrderNumber(randomOrderNumber);
      setOrderComplete(true);
      setLoading(false);
    }, 2000);
  };
  
  // 할인 후 최종 가격 계산
  const calculateFinalPrice = () => {
    if (!product) return 0;
    
    let price = product.price;
    
    // 추가 쿠폰 할인 적용
    if (discountApplied) {
      price = price * 0.9; // 10% 할인
    }
    
    return price;
  };
  
  if (loading) {
    return (
      <div className="checkout-page">
        <Header />
        <div className="container">
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>처리 중입니다...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  if (orderComplete) {
    return (
      <div className="checkout-page">
        <Header />
        <div className="checkout-container">
          <motion.div 
            className="order-confirmation"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="confirmation-icon">
              <i className="fas fa-check"></i>
            </div>
            <h1 className="confirmation-title">주문이 완료되었습니다!</h1>
            <p className="confirmation-subtitle">
              소중한 주문에 감사드립니다. 사주 분석 결과는 입력하신 이메일로 발송됩니다.
            </p>
            
            <div className="order-details">
              <div className="detail-row">
                <span className="detail-label">주문 번호</span>
                <span className="detail-value">{orderNumber}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">주문 상품</span>
                <span className="detail-value">{product.title}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">결제 금액</span>
                <span className="detail-value">₩{formatPrice(calculateFinalPrice())}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">결제 방법</span>
                <span className="detail-value">
                  {paymentMethod === 'card' ? '신용카드' : 
                   paymentMethod === 'kakaopay' ? '카카오페이' : 
                   paymentMethod === 'naverpay' ? '네이버페이' : '무통장입금'}
                </span>
              </div>
              <div className="detail-row">
                <span className="detail-label">이메일</span>
                <span className="detail-value">{formData.email}</span>
              </div>
            </div>
            
            <div className="customer-actions">
              <Link to="/products" className="btn-action btn-secondary-action">
                다른 상품 둘러보기
              </Link>
              <Link to="/results" className="btn-action btn-primary-action">
                분석 결과 확인하기
              </Link>
            </div>
          </motion.div>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="checkout-page">
      <Header />
      
      <div className="checkout-container">
        <div className="checkout-header">
          <h1>결제하기</h1>
          <p>선택하신 서비스의 결제를 진행합니다</p>
        </div>
        
        <div className="checkout-steps">
          <div className={`step ${step >= 1 ? 'active' : ''} ${step > 1 ? 'completed' : ''}`}>
            <div className="step-icon">
              {step > 1 ? <i className="fas fa-check"></i> : '1'}
            </div>
            <span className="step-label">정보 입력</span>
          </div>
          <div className={`step ${step >= 2 ? 'active' : ''} ${step > 2 ? 'completed' : ''}`}>
            <div className="step-icon">
              {step > 2 ? <i className="fas fa-check"></i> : '2'}
            </div>
            <span className="step-label">결제 정보</span>
          </div>
          <div className={`step ${step >= 3 ? 'active' : ''}`}>
            <div className="step-icon">3</div>
            <span className="step-label">주문 완료</span>
          </div>
        </div>
        
        <div className="checkout-main">
          <div className="checkout-form">
            {step === 1 && (
              <>
                <div className="form-section">
                  <h2 className="section-title">
                    <i className="fas fa-user"></i> 고객 정보
                  </h2>
                  <div className="input-group">
                    <label className="input-label required">이름</label>
                    <input 
                      type="text" 
                      name="fullName" 
                      className={`input-field ${errors.fullName ? 'error' : ''}`}
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="이름을 입력하세요"
                    />
                    {errors.fullName && <div className="error-message">{errors.fullName}</div>}
                  </div>
                  
                  <div className="input-group">
                    <label className="input-label required">이메일</label>
                    <input 
                      type="email" 
                      name="email" 
                      className={`input-field ${errors.email ? 'error' : ''}`}
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="이메일 주소를 입력하세요"
                    />
                    <div className="input-hint">분석 결과와 주문 정보가 이메일로 발송됩니다.</div>
                    {errors.email && <div className="error-message">{errors.email}</div>}
                  </div>
                  
                  <div className="input-group">
                    <label className="input-label required">전화번호</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      className={`input-field ${errors.phone ? 'error' : ''}`}
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="전화번호를 입력하세요 (숫자만)"
                    />
                    {errors.phone && <div className="error-message">{errors.phone}</div>}
                  </div>
                </div>
                
                <div className="form-section">
                  <h2 className="section-title">
                    <i className="fas fa-calendar-alt"></i> 사주 정보
                  </h2>
                  <div className="input-group">
                    <label className="input-label required">생년월일</label>
                    <input 
                      type="date" 
                      name="birthdate" 
                      className={`input-field ${errors.birthdate ? 'error' : ''}`}
                      value={formData.birthdate}
                      onChange={handleInputChange}
                    />
                    {errors.birthdate && <div className="error-message">{errors.birthdate}</div>}
                  </div>
                  
                  <div className="input-group">
                    <label className="input-label">태어난 시간</label>
                    <select 
                      name="birthtime" 
                      className="input-field"
                      value={formData.birthtime}
                      onChange={handleInputChange}
                    >
                      <option value="">시간 모름</option>
                      <option value="23-1">자시 (23:00-01:00)</option>
                      <option value="1-3">축시 (01:00-03:00)</option>
                      <option value="3-5">인시 (03:00-05:00)</option>
                      <option value="5-7">묘시 (05:00-07:00)</option>
                      <option value="7-9">진시 (07:00-09:00)</option>
                      <option value="9-11">사시 (09:00-11:00)</option>
                      <option value="11-13">오시 (11:00-13:00)</option>
                      <option value="13-15">미시 (13:00-15:00)</option>
                      <option value="15-17">신시 (15:00-17:00)</option>
                      <option value="17-19">유시 (17:00-19:00)</option>
                      <option value="19-21">술시 (19:00-21:00)</option>
                      <option value="21-23">해시 (21:00-23:00)</option>
                    </select>
                    <div className="input-hint">시간을 모르는 경우 선택하지 않아도 됩니다.</div>
                  </div>
                </div>
              </>
            )}
            
            {step === 2 && (
              <>
                <div className="form-section">
                  <h2 className="section-title">
                    <i className="fas fa-credit-card"></i> 결제 방법 선택
                  </h2>
                  
                  <div className="payment-methods">
                    <div 
                      className={`payment-method ${paymentMethod === 'card' ? 'active' : ''}`}
                      onClick={() => handlePaymentMethodChange('card')}
                    >
                      <div className="payment-method-icon">
                        <i className="far fa-credit-card"></i>
                      </div>
                      <div className="payment-method-name">신용카드</div>
                      <div className="card-icons">
                        <img src="/assets/cards/visa.png" alt="Visa" className="card-icon" />
                        <img src="/assets/cards/mastercard.png" alt="Mastercard" className="card-icon" />
                      </div>
                    </div>
                    
                    <div 
                      className={`payment-method ${paymentMethod === 'kakaopay' ? 'active' : ''}`}
                      onClick={() => handlePaymentMethodChange('kakaopay')}
                    >
                      <div className="payment-method-icon">
                        <i className="fas fa-comment"></i>
                      </div>
                      <div className="payment-method-name">카카오페이</div>
                    </div>
                    
                    <div 
                      className={`payment-method ${paymentMethod === 'naverpay' ? 'active' : ''}`}
                      onClick={() => handlePaymentMethodChange('naverpay')}
                    >
                      <div className="payment-method-icon">
                        <i className="fas fa-bold"></i>
                      </div>
                      <div className="payment-method-name">네이버페이</div>
                    </div>
                    
                    <div 
                      className={`payment-method ${paymentMethod === 'bank' ? 'active' : ''}`}
                      onClick={() => handlePaymentMethodChange('bank')}
                    >
                      <div className="payment-method-icon">
                        <i className="fas fa-university"></i>
                      </div>
                      <div className="payment-method-name">무통장입금</div>
                    </div>
                  </div>
                  
                  {paymentMethod === 'card' && (
                    <div className="card-details">
                      <div className="input-group">
                        <label className="input-label required">카드 번호</label>
                        <input 
                          type="text" 
                          name="cardNumber" 
                          className={`input-field ${errors.cardNumber ? 'error' : ''}`}
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          placeholder="0000 0000 0000 0000"
                          maxLength="19"
                        />
                        {errors.cardNumber && <div className="error-message">{errors.cardNumber}</div>}
                      </div>
                      
                      <div className="input-group">
                        <label className="input-label required">카드 소유자 이름</label>
                        <input 
                          type="text" 
                          name="cardName" 
                          className={`input-field ${errors.cardName ? 'error' : ''}`}
                          value={formData.cardName}
                          onChange={handleInputChange}
                          placeholder="카드에 표시된 이름"
                        />
                        {errors.cardName && <div className="error-message">{errors.cardName}</div>}
                      </div>
                      
                      <div className="input-row">
                        <div className="input-group">
                          <label className="input-label required">유효 기간</label>
                          <input 
                            type="text" 
                            name="expiryDate" 
                            className={`input-field ${errors.expiryDate ? 'error' : ''}`}
                            value={formData.expiryDate}
                            onChange={handleInputChange}
                            placeholder="MM/YY"
                            maxLength="5"
                          />
                          {errors.expiryDate && <div className="error-message">{errors.expiryDate}</div>}
                        </div>
                        
                        <div className="input-group">
                          <label className="input-label required">CVV</label>
                          <input 
                            type="text" 
                            name="cvv" 
                            className={`input-field ${errors.cvv ? 'error' : ''}`}
                            value={formData.cvv}
                            onChange={handleInputChange}
                            placeholder="CVV"
                            maxLength="4"
                          />
                          {errors.cvv && <div className="error-message">{errors.cvv}</div>}
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {paymentMethod === 'bank' && (
                    <div className="bank-details">
                      <div className="input-hint" style={{ margin: '20px 0', padding: '15px', backgroundColor: 'var(--bg-hover)', borderRadius: '8px' }}>
                        <p><strong>입금 계좌 정보:</strong></p>
                        <p>은행: 신한은행</p>
                        <p>계좌번호: 110-123-456789</p>
                        <p>예금주: (주)사주포춘</p>
                        <p>입금 후 고객센터(02-123-4567)로 연락주시면 빠른 처리가 가능합니다.</p>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="form-section">
                  <h2 className="section-title">
                    <i className="fas fa-shield-alt"></i> 주문 확인
                  </h2>
                  
                  <div className="terms-agreement">
                    <div className="checkbox-group">
                      <input 
                        type="checkbox" 
                        id="agreeTerms" 
                        name="agreeTerms" 
                        className="checkbox-input"
                        checked={formData.agreeTerms}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="agreeTerms" className="checkbox-label">
                        <span className="required">이용약관</span>과 <Link to="/privacy">개인정보 처리방침</Link>에 동의합니다.
                      </label>
                    </div>
                    {errors.agreeTerms && <div className="error-message">{errors.agreeTerms}</div>}
                  </div>
                </div>
              </>
            )}
          </div>
          
          <div className="checkout-summary">
            <div className="summary-section">
              <h2 className="section-title">
                <i className="fas fa-shopping-cart"></i> 주문 요약
              </h2>
              
              {product && (
                <div className="order-summary">
                  <div className="product-summary">
                    <img 
                      src={product.image || '/assets/product-placeholder.jpg'} 
                      alt={product.title}
                      className="product-summary-image"
                    />
                    <div className="product-summary-info">
                      <h3 className="product-summary-title">{product.title}</h3>
                      <div className="product-summary-meta">
                        {product.features && product.features.length > 0 && (
                          <span>{product.features.length}개 항목 분석</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="price-breakdown">
                <div className="price-row">
                  <span className="price-label">상품 금액</span>
                  <span className="price-value">₩{formatPrice(product?.originalPrice || 0)}</span>
                </div>
                
                {product?.discount > 0 && (
                  <div className="price-row">
                    <span className="price-label">할인 ({product.discount}%)</span>
                    <span className="price-value">-₩{formatPrice(product.originalPrice - product.price)}</span>
                  </div>
                )}
                
                {discountApplied && (
                  <div className="price-row">
                    <span className="price-label">쿠폰 할인 (WELCOME10)</span>
                    <span className="price-value">-₩{formatPrice(product.price * 0.1)}</span>
                  </div>
                )}
                
                <div className="total-row">
                  <span className="total-label">최종 결제 금액</span>
                  <span className="total-value">₩{formatPrice(calculateFinalPrice())}</span>
                </div>
              </div>
              
              <div className="coupon-form">
                <input 
                  type="text" 
                  className="coupon-input" 
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  placeholder="쿠폰 코드 입력"
                />
                <button 
                  className="btn-apply"
                  onClick={handleApplyCoupon}
                >
                  적용
                </button>
              </div>
              
              <div className="safe-checkout">
                <i className="fas fa-lock"></i>
                <span className="safe-checkout-text">안전한 결제를 위해 SSL 암호화를 사용합니다</span>
              </div>
            </div>
            
            <div className="buttons-container">
              <button className="btn-back" onClick={handleBack}>
                {step === 1 ? '상품으로 돌아가기' : '이전 단계로'}
              </button>
              <button className="btn-continue" onClick={handleContinue}>
                {step === 1 ? '다음 단계로' : '결제하기'}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CheckoutPage; 