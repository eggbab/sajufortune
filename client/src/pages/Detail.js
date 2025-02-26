import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styles/Detail.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ElementCircle from '../components/ElementCircle';
import RecommendedItems from '../components/RecommendedItems';

const Detail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  
  useEffect(() => {
    // 데이터 로딩 시뮬레이션
    setTimeout(() => {
      // 실제 구현에서는 API에서 상품 정보를 가져옵니다
      const sampleProduct = {
        id: id,
        name: "정통 사주 풀이 프리미엄 서비스",
        price: 39900,
        discountPrice: 29900,
        discount: 25,
        rating: 4.8,
        reviewCount: 235,
        description: "전문 역술인이 직접 분석하는 프리미엄 사주 풀이 서비스입니다. 기본적인 AI 분석보다 더 깊고 정확한 사주 해석을 받아보세요. 개인의 운세와 성격, 적성, 인간관계, 미래 전망 등 상세한 분석을 제공합니다.",
        benefits: [
          "전문 사주 분석가의 직접 분석",
          "심층 운세 및 성격 분석",
          "진로 및 직업 적성 분석",
          "대인관계와 궁합 분석",
          "향후 10년 대운 분석",
          "특별 운세 피크 기간 분석"
        ],
        details: "서비스 신청 후 48시간 이내에 전문가의 분석 결과를 받아보실 수 있습니다. 분석 결과는 앱 내 마이페이지에서 확인 가능하며, PDF로 다운로드하여 보관할 수 있습니다. 추가 질문이나 상담은 1회에 한하여 무료로 제공됩니다.",
        images: [
          "/images/services/premium-service1.jpg",
          "/images/services/premium-service2.jpg",
          "/images/services/premium-service3.jpg"
        ],
        elementAnalysis: {
          wood: 30,
          fire: 25,
          earth: 15,
          metal: 20,
          water: 10
        }
      };
      
      setProduct(sampleProduct);
      setLoading(false);
    }, 1000);
  }, [id]);
  
  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };
  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };
  
  const addToCart = () => {
    alert(`장바구니에 ${quantity}개 추가되었습니다.`);
  };
  
  const buyNow = () => {
    alert('구매 페이지로 이동합니다.');
  };
  
  if (loading) {
    return (
      <div className="detail-page">
        <Header />
        <div className="loading-container">
          <div className="spinner"></div>
          <p>상품 정보를 불러오는 중...</p>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="detail-page">
      <Header />
      
      <div className="detail-container">
        <div className="detail-header">
          <div className="breadcrumbs">
            <Link to="/">홈</Link> <span>&gt;</span> 
            <Link to="/services">서비스</Link> <span>&gt;</span> 
            <span className="current">{product.name}</span>
          </div>
        </div>
        
        <div className="product-overview">
          <div className="product-gallery">
            <div className="main-image">
              <img src={product.images[0]} alt={product.name} />
            </div>
            <div className="thumbnail-container">
              {product.images.map((img, index) => (
                <div className="thumbnail" key={index}>
                  <img src={img} alt={`썸네일 ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
          
          <div className="product-info">
            <div className="product-title-section">
              <h1 className="product-title">{product.name}</h1>
              <div className="product-rating">
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className={`fas fa-star ${i < Math.floor(product.rating) ? 'filled' : i < product.rating ? 'half-filled' : ''}`}></i>
                  ))}
                </div>
                <span className="rating-number">{product.rating}</span>
                <span className="review-count">({product.reviewCount} 리뷰)</span>
              </div>
            </div>
            
            <div className="product-price">
              {product.discountPrice ? (
                <>
                  <div className="price-row">
                    <span className="original-price">{product.price.toLocaleString()}원</span>
                    <span className="discount-badge">{product.discount}% 할인</span>
                  </div>
                  <div className="discount-price">{product.discountPrice.toLocaleString()}원</div>
                </>
              ) : (
                <div className="discount-price">{product.price.toLocaleString()}원</div>
              )}
            </div>
            
            <div className="element-analysis-section">
              <h3>오행 분석 결과</h3>
              <div className="element-analysis-content">
                <ElementCircle elementData={product.elementAnalysis} />
                <div className="element-description">
                  <p>
                    <strong>오행 에너지 비율:</strong><br />
                    나무(木): {product.elementAnalysis.wood}%<br />
                    불(火): {product.elementAnalysis.fire}%<br />
                    흙(土): {product.elementAnalysis.earth}%<br />
                    쇠(金): {product.elementAnalysis.metal}%<br />
                    물(水): {product.elementAnalysis.water}%
                  </p>
                  <p>이 오행 구성은 <strong>창의적이고 리더십</strong>이 있는 성향을 나타냅니다.</p>
                </div>
              </div>
            </div>
            
            <div className="product-benefits">
              <h3>서비스 혜택</h3>
              <ul>
                {product.benefits.map((benefit, index) => (
                  <li key={index}><i className="fas fa-check-circle"></i> {benefit}</li>
                ))}
              </ul>
            </div>
            
            <div className="quantity-selector">
              <span className="label">수량</span>
              <div className="quantity-controls">
                <button className="quantity-btn" onClick={decreaseQuantity} disabled={quantity <= 1}>
                  <i className="fas fa-minus"></i>
                </button>
                <input type="text" value={quantity} readOnly />
                <button className="quantity-btn" onClick={increaseQuantity}>
                  <i className="fas fa-plus"></i>
                </button>
              </div>
            </div>
            
            <div className="total-price">
              <span className="label">총 상품 금액</span>
              <span className="price">{(product.discountPrice || product.price) * quantity}원</span>
            </div>
            
            <div className="product-actions">
              <button className="cart-btn" onClick={addToCart}>
                <i className="fas fa-shopping-cart"></i> 장바구니 담기
              </button>
              <button className="buy-btn" onClick={buyNow}>
                <i className="fas fa-bolt"></i> 바로 구매하기
              </button>
            </div>
          </div>
        </div>
        
        <div className="product-details">
          <div className="product-tabs">
            <div className="tab-buttons">
              <button 
                className={`tab-button ${activeTab === 'description' ? 'active' : ''}`}
                onClick={() => setActiveTab('description')}
              >
                상세 설명
              </button>
              <button 
                className={`tab-button ${activeTab === 'reviews' ? 'active' : ''}`}
                onClick={() => setActiveTab('reviews')}
              >
                리뷰 ({product.reviewCount})
              </button>
              <button 
                className={`tab-button ${activeTab === 'service' ? 'active' : ''}`}
                onClick={() => setActiveTab('service')}
              >
                서비스 안내 및 환불
              </button>
            </div>
            
            <div className="tab-content">
              {activeTab === 'description' && (
                <div className="description-tab">
                  <div className="product-description">
                    <h2>상품 상세 설명</h2>
                    <p>{product.description}</p>
                    <div className="description-details">
                      <h3>서비스 제공 방식</h3>
                      <p>{product.details}</p>
                    </div>
                    
                    <div className="feature-highlights">
                      <div className="feature">
                        <div className="feature-icon">
                          <i className="fas fa-user-tie"></i>
                        </div>
                        <h4>전문가 직접 분석</h4>
                        <p>10년 이상 경력의 사주명리학 전문가가 직접 분석합니다.</p>
                      </div>
                      <div className="feature">
                        <div className="feature-icon">
                          <i className="fas fa-file-alt"></i>
                        </div>
                        <h4>상세 분석 보고서</h4>
                        <p>10페이지 이상의 상세한 PDF 보고서를 제공합니다.</p>
                      </div>
                      <div className="feature">
                        <div className="feature-icon">
                          <i className="fas fa-comments"></i>
                        </div>
                        <h4>1:1 질의응답</h4>
                        <p>분석 결과에 대한 추가 질문을 1회 제공합니다.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'reviews' && (
                <div className="reviews-tab">
                  <div className="reviews-header">
                    <h2>고객 리뷰</h2>
                    <div className="reviews-summary">
                      <div className="average-rating">
                        <div className="rating-number">{product.rating}</div>
                        <div className="stars">
                          {[...Array(5)].map((_, i) => (
                            <i key={i} className={`fas fa-star ${i < Math.floor(product.rating) ? 'filled' : i < product.rating ? 'half-filled' : ''}`}></i>
                          ))}
                        </div>
                        <div className="total-reviews">{product.reviewCount} 리뷰</div>
                      </div>
                      <button className="write-review-btn">리뷰 작성하기</button>
                    </div>
                  </div>
                  
                  <div className="reviews-list">
                    {/* 리뷰 샘플 */}
                    <div className="review-item">
                      <div className="review-header">
                        <div className="reviewer-info">
                          <div className="reviewer-avatar">
                            <i className="fas fa-user-circle"></i>
                          </div>
                          <div className="reviewer-details">
                            <div className="reviewer-name">김** 님</div>
                            <div className="review-date">2023.04.15</div>
                          </div>
                        </div>
                        <div className="review-rating">
                          {[...Array(5)].map((_, i) => (
                            <i key={i} className={`fas fa-star ${i < 5 ? 'filled' : ''}`}></i>
                          ))}
                        </div>
                      </div>
                      <div className="review-content">
                        <p>정말 놀랄만큼 정확했습니다. 제 성격과 직업 적성에 대한 분석이 너무 잘 맞아서 감탄했습니다. 특히 인간관계에 대한 조언이 큰 도움이 되었어요. 전문가의 친절한 추가 설명도 좋았습니다. 가격 대비 정말 만족스러운 서비스였습니다!</p>
                      </div>
                    </div>
                    
                    <div className="review-item">
                      <div className="review-header">
                        <div className="reviewer-info">
                          <div className="reviewer-avatar">
                            <i className="fas fa-user-circle"></i>
                          </div>
                          <div className="reviewer-details">
                            <div className="reviewer-name">박** 님</div>
                            <div className="review-date">2023.03.22</div>
                          </div>
                        </div>
                        <div className="review-rating">
                          {[...Array(5)].map((_, i) => (
                            <i key={i} className={`fas fa-star ${i < 4 ? 'filled' : ''}`}></i>
                          ))}
                        </div>
                      </div>
                      <div className="review-content">
                        <p>내용이 꽤 자세하고 이해하기 쉽게 설명되어 있어서 좋았습니다. 진로 고민이 있었는데 새로운 시각으로 볼 수 있게 되었어요. 다만 질문에 대한 답변이 조금 늦게 와서 4점 드립니다.</p>
                      </div>
                    </div>
                    
                    <div className="review-item">
                      <div className="review-header">
                        <div className="reviewer-info">
                          <div className="reviewer-avatar">
                            <i className="fas fa-user-circle"></i>
                          </div>
                          <div className="reviewer-details">
                            <div className="reviewer-name">이** 님</div>
                            <div className="review-date">2023.02.08</div>
                          </div>
                        </div>
                        <div className="review-rating">
                          {[...Array(5)].map((_, i) => (
                            <i key={i} className={`fas fa-star ${i < 5 ? 'filled' : ''}`}></i>
                          ))}
                        </div>
                      </div>
                      <div className="review-content">
                        <p>AI 분석보다 훨씬 더 깊이 있고 인간적인 분석이 좋았습니다. 특히 앞으로의 대운 분석이 구체적이어서 계획을 세우는 데 많은 도움이 되었어요. 추가 질문에도 친절하게 답변해주셔서 감사합니다. 주변에도 추천하고 싶은 서비스입니다!</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pagination">
                    <button className="page-btn active">1</button>
                    <button className="page-btn">2</button>
                    <button className="page-btn">3</button>
                    <button className="page-btn">4</button>
                    <button className="page-btn">5</button>
                    <button className="page-btn next"><i className="fas fa-chevron-right"></i></button>
                  </div>
                </div>
              )}
              
              {activeTab === 'service' && (
                <div className="service-tab">
                  <div className="service-info">
                    <h2>서비스 제공 및 환불 안내</h2>
                    
                    <div className="info-section">
                      <h3>서비스 제공 방식</h3>
                      <p>본 서비스는 디지털 콘텐츠로 제공됩니다. 결제 완료 후 48시간 이내에 사주풀이 전문가의 분석 결과가 앱 내 마이페이지에서 확인 가능합니다.</p>
                    </div>
                    
                    <div className="info-section highlight-section">
                      <h3>진행 과정</h3>
                      <ol>
                        <li>결제 완료 후 사용자 정보(생년월일시)를 확인합니다.</li>
                        <li>전문 분석가가 개인 맞춤형 사주 분석을 진행합니다.</li>
                        <li>결과 보고서가 마이페이지에 업로드되면 알림을 보내드립니다.</li>
                        <li>결과 확인 후 추가 질문이 있으실 경우, 1회 무료 질의응답을 제공합니다.</li>
                      </ol>
                    </div>
                    
                    <div className="info-section highlight-section">
                      <h3>환불 정책</h3>
                      <ul>
                        <li>결제 후 24시간 이내, 서비스가 제공되기 전: <strong>100% 환불</strong></li>
                        <li>서비스 결과 제공 전 취소: <strong>결제 금액의 80% 환불</strong></li>
                        <li>서비스 결과 확인 후: <strong>환불 불가</strong></li>
                        <li>서비스 오류 또는 부실한 콘텐츠 제공의 경우: <strong>검토 후 전액 환불 가능</strong></li>
                      </ul>
                    </div>
                    
                    <div className="info-section">
                      <h3>유의사항</h3>
                      <ul>
                        <li>정확한 생년월일시 정보를 입력해주셔야 올바른 분석이 가능합니다.</li>
                        <li>제공되는 분석은 참고용으로만 활용하시기 바랍니다.</li>
                        <li>중요한 결정은 반드시 전문가와의 상담 및 본인의 판단에 따라 이루어져야 합니다.</li>
                        <li>분석 결과는 PDF 형태로 다운로드 가능하며, 개인 소장용으로만 사용 가능합니다.</li>
                        <li>분석 결과의 무단 배포 및 상업적 이용은 금지됩니다.</li>
                      </ul>
                    </div>
                    
                    <div className="contact-support">
                      <h3>도움이 필요하신가요?</h3>
                      <p>추가 문의사항이 있으시면 <a href="mailto:vmeandbeme@gmail.com">vmeandbeme@gmail.com</a>으로 연락해주세요.</p>
                      <button className="support-button">
                        <i className="fas fa-headset"></i> 1:1 문의하기
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        
        <div className="related-products">
          <h2>함께 구매하면 좋은 서비스</h2>
          <RecommendedItems />
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Detail; 